import { model } from '@/lib/gemini';
import { getUserContext, formatSystemPrompt } from '@/lib/userContext';
import { getFallbackResponse } from '@/lib/fallbackData';

export const runtime = 'nodejs'; // Use nodejs for Gemini client compatibility if needed

export async function POST(req) {
    let lastMessage = "";
    try {
        const { messages } = await req.json();

        // 1. Get User Context
        const userContext = getUserContext();

        // 2. Prepare System Prompt
        const systemInstruction = formatSystemPrompt(userContext);

        // 3. Format History for Gemini
        // Gemini expects: { role: 'user' | 'model', parts: [{ text: '...' }] }
        // The frontend sends: { role: 'user' | 'assistant', content: '...' }

        const history = messages.slice(0, -1).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        lastMessage = messages[messages.length - 1].content;

        // 4. Start Chat
        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: systemInstruction }] // Inject system prompt as first user message or use systemInstruction if model supports it (Gemini 1.5 Flash does via API but JS SDK might use systemInstruction arg)
                },
                {
                    role: 'model',
                    parts: [{ text: "Understood. I have reviewed the financial profile and am ready to assist effectively as FinWell AI." }]
                },
                ...history
            ]
        });

        // 5. Send Message
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        let text = response.text();

        // Safety: Check if the text itself describes an error (Soft Fail)
        if (text.toLowerCase().includes("quota exceeded") || text.toLowerCase().includes("rate limit")) {
            console.warn("Soft rate limit detected in response text. Switching to fallback.");
            const fallback = getFallbackResponse(lastMessage);
            return Response.json(fallback);
        }

        // 6. Attempt to parse as JSON for Rich UI
        let cleanText = text.trim();

        // Strategy 1: strict code block extraction
        const codeBlockMatch = cleanText.match(/```json\s*([\s\S]*?)\s*```/);
        if (codeBlockMatch) {
            cleanText = codeBlockMatch[1];
        } else {
            // Strategy 2: generic code block
            const genericMatch = cleanText.match(/```\s*([\s\S]*?)\s*```/);
            if (genericMatch) {
                cleanText = genericMatch[1];
            }
        }

        // Strategy 3: Regex match all JSON blocks
        const jsonBlockRegex = /\{[\s\S]*?\}(?=\s*$|\s*\{)/g;
        // Note: Simple regex for balanced braces is hard, but since Gemini usually outputs 
        // clean objects like { ... }, we can try to find them.

        // Better approach: Count braces to find blocks
        const extractJsonBlocks = (str) => {
            const blocks = [];
            let braceCount = 0;
            let startIndex = -1;

            for (let i = 0; i < str.length; i++) {
                if (str[i] === '{') {
                    if (braceCount === 0) startIndex = i;
                    braceCount++;
                } else if (str[i] === '}') {
                    braceCount--;
                    if (braceCount === 0 && startIndex !== -1) {
                        blocks.push(str.substring(startIndex, i + 1));
                        startIndex = -1;
                    }
                }
            }
            return blocks;
        };

        const potentialBlocks = extractJsonBlocks(cleanText);

        if (potentialBlocks.length > 0) {
            // Find the most "feature-rich" block or merge them
            try {
                // If multiple blocks, the user probably sent "Text" block then "Card" block.
                // We want to combine them: content from all, data from the one that has it.
                let merged = { role: 'assistant', type: 'text', content: '', data: null };

                for (const block of potentialBlocks) {
                    try {
                        const parsed = JSON.parse(block);
                        // Append content
                        if (parsed.content) {
                            merged.content = merged.content ? merged.content + "\n\n" + parsed.content : parsed.content;
                        }
                        // Overwrite type/data if this block has a card
                        if (parsed.type && parsed.type !== 'text') {
                            merged.type = parsed.type;
                            merged.data = parsed.data;
                            if (parsed.explanation) merged.explanation = parsed.explanation;
                        }
                    } catch (e) {
                        // Ignore invalid blocks
                    }
                }

                if (merged.content || merged.data) {
                    return Response.json(merged);
                }

            } catch (e) {
                console.log("Merge logic failed", e);
            }
        }

        // If all parsing fails, return as plain text
        return Response.json({
            role: 'assistant',
            type: 'text',
            content: text.replace(/```json/g, "").replace(/```/g, ""), // Minimal cleanup
        });

    } catch (error) {
        console.error("Gemini API Error:", error);

        // CHECK FOR RATE LIMITS (429 or Quota Exceeded)
        const errorMessage = error.message?.toLowerCase() || "";
        if (errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("too many requests")) {
            console.warn("Rate limit hit. Using fallback data.");
            const fallback = getFallbackResponse(lastMessage);
            return Response.json(fallback);
        }

        return Response.json({
            role: 'assistant',
            content: "I'm currently unable to connect to my financial brain. Please try again in a moment. (Error: " + error.message + ")"
        }, { status: 500 });
    }
}

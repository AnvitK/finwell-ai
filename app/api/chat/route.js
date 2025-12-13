import { NextResponse } from 'next/server';
import { chatWithAI } from '@/lib/llmService';

export async function POST(request) {
    try {
        const body = await request.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Invalid message format' },
                { status: 400 }
            );
        }

        const responseMsg = await chatWithAI(messages);
        return NextResponse.json(responseMsg);
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

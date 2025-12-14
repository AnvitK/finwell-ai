const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env.local');
let apiKey = "";

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/GEMINI_API_KEY=(.*)/);
    if (match && match[1]) {
        apiKey = match[1].trim();
    }
} catch (e) {
    console.log("Could not read .env.local", e);
}

if (!apiKey) {
    console.error("API Key not found!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function testModels() {
    // Including the user's requested model and the latest experimental ones
    const modelsToTest = ["gemini-2.0-flash-exp", "gemini-1.5-flash-8b", "gemini-1.5-flash", "gemini-2.5-flash"];

    for (const modelName of modelsToTest) {
        console.log(`Testing ${modelName}...`);
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            await model.generateContent("Hello");
            console.log(`SUCCESS: ${modelName} is available.`);
            return; // Found one!
        } catch (e) {
            console.log(`FAILED: ${modelName} - ${e.message.split('[')[0]}`); // Short error
        }
    }
}

testModels();

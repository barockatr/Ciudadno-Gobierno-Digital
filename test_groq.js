import Groq from "groq-sdk";
// dotenv removed 
// Since we are in an ES module project (type: module in package.json), we can use top-level await or .then

// Hardcode key for the test to avoid dotenv complexity if dependencies are missing, 
// using the one found in .env.
const apiKey = process.env.VITE_GROQ_API_KEY || "INSERT_KEY_HERE";

const groq = new Groq({ apiKey });

async function main() {
    try {
        console.log("Testing Groq API connection...");
        const completion = await groq.chat.completions.create({
            messages: [{ role: "user", content: "Hello" }],
            model: "llama-3.3-70b-versatile",
        });
        console.log("Success! Response:", completion.choices[0]?.message?.content);
    } catch (error) {
        console.error("Error:", error.message);
        if (error.error) console.error("Details:", error.error);
    }
}

main();

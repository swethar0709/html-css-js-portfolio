require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const openai = require("openai"); // Import the openai module
const cors = require('cors'); // Import CORS

const app = express();
app.use(cors());
const port = 3000;




// WARNING: Storing API keys directly in your code is a security risk. This is for illustrative purposes only.
const OPENAI_API_KEY = "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";

// Initialize the openai instance with your API key
const openaiInstance = new openai({ apiKey: OPENAI_API_KEY });

app.use(bodyParser.json());

app.post("/api/chatbot", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await openaiInstance.complete({
            prompt: userMessage,
            max_tokens: 50
        });

        const botMessage = response.choices[0].text;
        res.json({ message: botMessage });
    } catch (error) {
        console.error("Error generating chatbot response:", error);
        res.status(500).json({ error: "An error occurred while generating the chatbot response." });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

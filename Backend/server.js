const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const adminRoutes = require("./routes/adminRoutes");
const homeRoutes = require("./routes/homeRoutes");
const path = require("path");

// --- PUTHUSA ADD PANNUNA IMPORTS ---
const fs = require('fs');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

console.log("🔥 THIS IS THE CORRECT SERVER.JS");

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/admin/home", homeRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/admin/test", (req, res) => {
    res.send("Admin Route Working");
});

app.get('/', (req, res) => {
    res.send("Backend server is running Successfully");
});

// --- CHATBOT CODE START ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Hardcoded response for 'college name' as requested for now
    if (userMessage && userMessage.toLowerCase().trim() === 'college name') {
      return res.json({ reply: 'The name of our institution is Nadar Saraswathi College of Engineering and Technology. How else can I assist you today?' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Inga thaan unga text file-a AI padikkuthu
    const nscetCollegeData = fs.readFileSync('./nscet_data.txt', 'utf-8');

    // AI-KKAANA STRICT RULES
    const prompt = `You are the official AI Assistant for Nadar Saraswathi College of Engineering and Technology (NSCET). 

    Here is the exact information about the college:
    ${nscetCollegeData}

    STRICT RULES:
    1. Answer the user's question ONLY using the college information provided above.
    2. If the user asks something that is NOT in the above information, politely say: "Sorry, I don't have that information right now. Please contact the college administration."
    3. If the user asks about outside topics (movies, coding, general knowledge), say: "I am the NSCET AI Assistant. I can only answer questions related to our college."
    4. Keep answers short and friendly.
    
    User's question: ${userMessage}`;

    const result = await model.generateContent(prompt);
    res.json({ reply: result.response.text() });
    
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ reply: "Sorry, check if nscet_data.txt file exists or server error!" });
  }
});
// --- CHATBOT CODE END ---

app.listen(5000,() => {
    console.log("Backend running on http://localhost:5000");
})
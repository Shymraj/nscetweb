const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const adminRoutes = require("./routes/adminRoutes");
const homeRoutes = require("./routes/homeRoutes");
const path = require("path");
const fs = require('fs');
require('dotenv').config();

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
const intentLastIndices = {};

function getDynamicVariation(intentKey, variationsArray) {
  if (!variationsArray || variationsArray.length === 0) return "";
  if (variationsArray.length === 1) return variationsArray[0];

  let lastIdx = intentLastIndices[intentKey];
  if (lastIdx === undefined) {
    lastIdx = -1;
  }

  let nextIdx = Math.floor(Math.random() * variationsArray.length);
  if (nextIdx === lastIdx) {
    nextIdx = (lastIdx + 1) % variationsArray.length;
  }

  intentLastIndices[intentKey] = nextIdx;
  return variationsArray[nextIdx];
}

function getLocalAnswer(userMessage) {
  if (!userMessage) return null;
  const msg = userMessage.toLowerCase().trim();

  // 1. Principal Specific Queries
  if (
    msg.includes('principal') ||
    msg.includes('pricipal') ||
    msg.includes('principal name') ||
    msg.includes('who is the principal') ||
    msg.includes('principal details')
  ) {
    const variations = [
      "🎓 Principal Details:\nDr. C. Mathalai Sundaram is the Principal of Nadar Saraswathi College of Engineering and Technology (NSCET). To read the Principal's message, please visit www.nscet.org!",
      "🏛️ NSCET Administration:\nOur Principal is Dr. C. Mathalai Sundaram. You can view complete administrative profiles on our official website at www.nscet.org!"
    ];
    return {
      reply: getDynamicVariation('principal', variations),
      suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Contact Details"]
    };
  }

  // 2. Faculty Count / Staff Strength Queries
  if (
    msg.includes('faculty count') ||
    msg.includes('how many faculty') ||
    msg.includes('how many faculties') ||
    msg.includes('staff count') ||
    msg.includes('number of teachers') ||
    msg.includes('faculty strength')
  ) {
    const variations = [
      "📊 Faculty Strength:\nNSCET has over 100+ highly qualified professors across all engineering & science departments. Explore complete staff profiles at www.nscet.org!",
      "👨‍🏫 Teaching Staff Count:\nOur campus features 100+ dedicated faculty members supporting all UG & PG programs. View detailed staff credentials at www.nscet.org!"
    ];
    return {
      reply: getDynamicVariation('faculty_count', variations),
      suggestions: ["Departments", "UG Courses", "Admission Details", "Contact Details"]
    };
  }

  // 3. General Faculty / Staff Queries
  if (
    msg.includes('faculty') ||
    msg.includes('faculties') ||
    msg.includes('professor') ||
    msg.includes('professors') ||
    msg.includes('teacher') ||
    msg.includes('teachers') ||
    msg.includes('staff') ||
    msg.includes('hod') ||
    msg.includes('staff details')
  ) {
    const variations = [
      "👨‍🏫 Faculty Info:\nNSCET takes pride in having highly qualified and experienced faculty across all departments. Please visit www.nscet.org under Academics for full staff profiles!",
      "🎓 Teaching Staff:\nOur college features dedicated professors and staff in every department. View complete department staff lists at www.nscet.org under Academics!"
    ];
    return {
      reply: getDynamicVariation('faculty_gen', variations),
      suggestions: ["Departments", "UG Courses", "Admission Details", "Contact Details"]
    };
  }

  // 4. Greetings (hi, gud mrg, hello, etc.)
  if (
    /^(good\s*morning|gud\s*mrg|gug\s*mrg|gud\s*mrng|gm|morning)$/i.test(msg) ||
    msg.includes('good morning') ||
    msg.includes('gud mrg') ||
    msg.includes('gug mrg')
  ) {
    const variations = [
      "Good morning! ☀️ Welcome to NSCET. I am NSCET AI, your dedicated smart campus assistant. How can I help you today with college information, courses, or admissions?",
      "Good morning! ☀️ Welcome to Nadar Saraswathi College of Engineering and Technology. I am here to help you with courses, admissions, fees, and campus facilities!"
    ];
    return {
      reply: getDynamicVariation('gm', variations),
      suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Fee Structure"]
    };
  }

  if (
    /^(hi|hii|hiii|hlo|hello|helo|hey|heyy|yo|welcome|vanakkam|namaste)$/i.test(msg) ||
    msg === 'hi' || msg === 'hii' || msg === 'hlo' || msg === 'hello' || msg === 'hey'
  ) {
    const variations = [
      "Hello! 👋 Welcome to Nadar Saraswathi College of Engineering and Technology (NSCET). I am NSCET AI, your smart campus assistant. How can I help you today?",
      "Welcome to NSCET! 🎓 I am NSCET AI, here to assist you with information regarding our courses, admissions, fees, hostel, or campus facilities!"
    ];
    return {
      reply: getDynamicVariation('greetings', variations),
      suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Fee Structure"]
    };
  }

  // 5. Fee Structure / College Fees / Department Specific Fees
  const isFeeQuery = (
    /\b(fee|fees|cost|tuition|payment|charge|charges|kattanam)\b/i.test(msg) ||
    msg.includes('fee structure') ||
    msg.includes('fees structure') ||
    msg.includes('fees details') ||
    msg.includes('fee details') ||
    msg.includes('fees evlo') ||
    msg.includes('fees enna') ||
    msg.includes('fees pathi')
  ) && !msg.includes('feedback') && !msg.includes('coffee');

  if (isFeeQuery) {
    return {
      reply: "For the latest fee structure and payment details, please contact the NSCET Admission Office. Our admission team will be happy to provide the most accurate and up-to-date information.",
      suggestions: ["Admission Details", "UG Courses", "College Location", "Campus Facilities"]
    };
  }

  // 6. College Quality / Reputation / Best or Worst Queries
  const isCollegeQualityQuery = (
    msg.includes('worst') ||
    msg.includes('waste') ||
    msg.includes('best or worst') ||
    msg.includes('worst or best') ||
    msg.includes('good or bad') ||
    msg.includes('good or not') ||
    msg.includes('is it good') ||
    msg.includes('is this college good') ||
    msg.includes('is nscet good') ||
    msg.includes('how is this college') ||
    msg.includes('how is the college') ||
    msg.includes('how is nscet') ||
    msg.includes('worth') ||
    msg.includes('review') ||
    msg.includes('rating') ||
    msg.includes('feedback') ||
    msg.includes('nalla college') ||
    msg.includes('nallarkuma') ||
    msg.includes('nalla iruka') ||
    (
      (msg.includes('best') || msg.includes('good')) &&
      (msg.includes('college') || msg.includes('clg') || msg.includes('nscet') || msg.includes('campus') || msg.includes('this') || msg.includes('it')) &&
      !msg.includes('course') && !msg.includes('dept')
    )
  );

  if (isCollegeQualityQuery) {
    return {
      reply: "NSCET is committed to providing quality education, technical learning, career opportunities, and a supportive campus environment. Instead of labeling it as ‘best’ or ‘worst,’ I can help you explore our courses, placements, facilities, and campus opportunities so you can make an informed choice.",
      suggestions: ["UG Courses", "Placements", "Campus Facilities", "Admission Details"]
    };
  }

  // 6. Off-Topic & Casual Chit-Chat Guard
  const offTopicKeywords = [
    'saptaya', 'sapttya', 'sapttiya', 'saapta', 'saapttiya', 'saaptaya', 'saaptiya', 'sappittiya', 'sappad',
    'eat', 'eating', 'lunch', 'dinner', 'breakfast', 'food',
    'how are you', 'how r u', 'how r you', 'whats up', "what's up", 'sup',
    'who are you', 'who r u', 'un name', 'un per', 'your name',
    'weather', 'joke', 'jokes', 'sing', 'song', 'love', 'marry', 'friend',
    'photosynthesis', 'fibonacci', 'gravity', 'python code', 'java code',
    'recipe', 'solar system', 'prime minister', 'president', 'capital of',
    'what is mean by', 'who is the king', 'movie', 'actor', 'actress'
  ];

  if (offTopicKeywords.some(k => msg.includes(k))) {
    return {
      reply: "Sorry, I am programmed to assist only with NSCET college information. Please ask a valid question about our courses, admissions, fees, or campus facilities!",
      suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Fee Structure"]
    };
  }

  // 6. College Name
  if (
    msg === 'college name' ||
    msg.includes('college name') ||
    msg.includes('name of the college') ||
    msg.includes('institution name')
  ) {
    const variations = [
      "Nadar Saraswathi College of Engineering and Technology (NSCET), Theni.",
      "Nadar Saraswathi College of Engineering and Technology (NSCET), Vadapudupatti, Theni."
    ];
    return {
      reply: getDynamicVariation('collegename', variations),
      suggestions: ["About NSCET", "TNEA Counselling Code", "College Location", "UG Courses"]
    };
  }

  // 7. TNEA Code
  if (
    msg.includes('tnea code') ||
    msg.includes('counselling code') ||
    msg.includes('college code') ||
    msg === 'tnea'
  ) {
    const variations = [
      "TNEA Counselling Code: 5865.",
      "The official TNEA Code for NSCET counselling is 5865."
    ];
    return {
      reply: getDynamicVariation('tnea', variations),
      suggestions: ["UG Courses", "PG Courses", "Admission Details", "Contact Details"]
    };
  }

  // 8. Location
  if (
    msg.includes('location') ||
    msg.includes('address') ||
    msg.includes('where is') ||
    msg.includes('where located')
  ) {
    const variations = [
      "📍 NSCET is located at Vadapudupatti, Annanji (PO), Theni - 625531, Tamil Nadu.",
      "📍 Campus Location: Nadar Saraswathi College of Engineering & Technology, Vadapudupatti, Theni - 625531."
    ];
    return {
      reply: getDynamicVariation('location', variations),
      suggestions: ["College Name", "TNEA Counselling Code", "Transport Facilities", "Hostel Facilities"]
    };
  }

  // 9. UG Courses
  if (
    msg.includes('ug course') ||
    msg.includes('undergraduate') ||
    msg === 'ug' ||
    msg === 'ug courses'
  ) {
    const variations = [
      "📚 UG Courses (B.E. / B.Tech):\n• B.E. Civil, CSE, EEE, ECE, Mechanical\n• B.Tech AI & DS, IT",
      "🎓 B.E. / B.Tech Programs:\n• Civil, Computer Science (CSE), EEE, ECE, Mechanical\n• AI & Data Science (AI & DS), Information Technology (IT)"
    ];
    return {
      reply: getDynamicVariation('ug', variations),
      suggestions: ["PG Courses", "Departments", "Admission Details", "Hostel Facilities"]
    };
  }

  // 10. PG Courses
  if (
    msg.includes('pg course') ||
    msg.includes('postgraduate') ||
    msg === 'pg' ||
    msg === 'pg courses'
  ) {
    const variations = [
      "🎓 PG Courses (M.E.):\n• M.E. Structural Engg, CSE, VLSI Design, Manufacturing Engg",
      "📚 M.E. Postgraduate Programs:\n• Structural Engg (Civil), CSE, VLSI Design (ECE), Manufacturing (Mechanical)"
    ];
    return {
      reply: getDynamicVariation('pg', variations),
      suggestions: ["UG Courses", "Departments", "Admission Details", "Placements"]
    };
  }

  // 11. Departments
  if (
    msg.includes('department') ||
    msg.includes('departments') ||
    msg.includes('dept')
  ) {
    const variations = [
      "🏢 Departments at NSCET:\n1. Civil  2. CSE  3. EEE  4. ECE  5. Mechanical  6. AI & DS  7. IT  8. Science & Humanities",
      "🏢 NSCET Academic Departments:\nCivil, CSE, EEE, ECE, Mechanical, AI & Data Science, Information Technology, and Science & Humanities."
    ];
    return {
      reply: getDynamicVariation('departments', variations),
      suggestions: ["UG Courses", "PG Courses", "Campus Facilities", "Placements"]
    };
  }

  // 12. Hostel
  if (
    msg.includes('hostel') ||
    msg.includes('stay') ||
    msg.includes('accommodation')
  ) {
    if (msg.includes('wifi') || msg.includes('wi-fi') || msg.includes('internet')) {
      return {
        reply: "Hostels do not have Wi-Fi facility. However, internet and computer access are available in the college digital library and department labs.",
        suggestions: ["Hostel Facilities", "Campus Facilities", "Central Library", "Contact Details"]
      };
    }

    const variations = [
      "🏡 Hostel Facilities:\nSeparate secure hostels for Boys & Girls on campus featuring 24/7 security, study halls, and hygienic dining.",
      "🛏️ Campus Hostel:\nSafe, separate accommodation for boys & girls with 24/7 supervision, study areas, and South Indian dining."
    ];
    return {
      reply: getDynamicVariation('hostel', variations),
      suggestions: ["Transport Facilities", "Campus Facilities", "Admission Details", "Contact Details"]
    };
  }

  // 13. Transport
  if (
    msg.includes('transport') ||
    msg.includes('bus') ||
    msg.includes('buses')
  ) {
    const variations = [
      "🚌 Transport Facilities:\nNSCET operates buses connecting Theni town, Bodi, Cumbum, Periyakulam, and Usilampatti.",
      "🚌 Bus Services:\nCollege buses serve Theni and surrounding areas for safe student commuting."
    ];
    return {
      reply: getDynamicVariation('transport', variations),
      suggestions: ["College Location", "Hostel Facilities", "Admission Details", "Contact Details"]
    };
  }

  // 14. Campus Facilities / College Infrastructure / What College Provides
  const isCampusFacilitiesQuery = (
    msg.includes('campus facility') ||
    msg.includes('campus facilities') ||
    msg.includes('college facility') ||
    msg.includes('college facilities') ||
    msg.includes('facilities') ||
    msg.includes('facility') ||
    msg.includes('amenity') ||
    msg.includes('amenities') ||
    msg.includes('infrastructure') ||
    msg.includes('campus') ||
    msg.includes('provide') ||
    msg.includes('provides') ||
    msg.includes('providing') ||
    msg.includes('offer') ||
    msg.includes('offers') ||
    msg.includes('college la enna') ||
    msg.includes('campus la enna') ||
    msg.includes('enna provide') ||
    msg.includes('features') ||
    msg.includes('feature') ||
    msg.includes('atmosphere') ||
    msg.includes('environment') ||
    msg.includes('entire college') ||
    msg.includes('what college has') ||
    msg.includes('what all')
  ) && !msg.includes('hostel') && !msg.includes('transport') && !msg.includes('bus') && !msg.includes('fee') && !msg.includes('wifi') && !msg.includes('wi-fi') && !msg.includes('internet');

  if (isCampusFacilitiesQuery) {
    return {
      reply: "NSCET has a modern and well-equipped campus with smart classrooms, advanced laboratories, digital library, sports and fitness facilities, hygienic cafeteria, and separate hostels for boys and girls. The campus also provides high-speed internet, 24/7 security, and college bus transportation.",
      suggestions: ["UG Courses", "Hostel Facilities", "Transport Facilities", "Admission Details"]
    };
  }

  // 15. Wi-Fi / Internet / Connectivity Queries
  if (
    msg.includes('wifi') ||
    msg.includes('wi-fi') ||
    msg.includes('internet') ||
    msg.includes('broadband') ||
    msg.includes('net speed') ||
    msg.includes('connectivity')
  ) {
    if (msg.includes('hostel') || msg.includes('stay') || msg.includes('room')) {
      return {
        reply: "Hostels do not have Wi-Fi facility. However, high-speed internet and computer access are available in key campus facilities, department computer labs, and the digital library.",
        suggestions: ["Campus Facilities", "Hostel Facilities", "UG Courses", "Contact Details"]
      };
    }

    return {
      reply: "NSCET provides high-speed internet connectivity across key campus facilities, supporting smooth access to online learning, digital resources, and academic activities.",
      suggestions: ["Campus Facilities", "UG Courses", "Hostel Facilities", "Admission Details"]
    };
  }

  // 16. Events, Programs, Culturals & Celebrations
  const isEventsOrCulturalsQuery = (
    msg.includes('event') ||
    msg.includes('events') ||
    msg.includes('cultural') ||
    msg.includes('culturals') ||
    msg.includes('culture') ||
    msg.includes('program') ||
    msg.includes('programs') ||
    msg.includes('programme') ||
    msg.includes('programmes') ||
    msg.includes('progrem') ||
    msg.includes('progremm') ||
    msg.includes('celebration') ||
    msg.includes('celebrations') ||
    msg.includes('fest') ||
    msg.includes('festival') ||
    msg.includes('festivals') ||
    msg.includes('annual day') ||
    msg.includes('symposium') ||
    msg.includes('hackathon') ||
    msg.includes('competition') ||
    msg.includes('competitions') ||
    msg.includes('function') ||
    msg.includes('functions') ||
    msg.includes('extra curricular') ||
    msg.includes('extracurricular') ||
    msg.includes('activities') ||
    msg.includes('activity')
  ) && !msg.includes('ug') && !msg.includes('pg') && !msg.includes('degree');

  if (isEventsOrCulturalsQuery) {
    return {
      reply: "NSCET regularly conducts a variety of academic, technical, cultural, and sports events throughout the year. These include workshops, seminars, hackathons, project exhibitions, cultural programs, competitions, and annual celebrations, providing students with opportunities to learn, collaborate, and showcase their talents.",
      suggestions: ["Campus Facilities", "UG Courses", "Placements", "Contact Details"]
    };
  }

  // 17. Admissions & Application & Enquiries (including Tanglish keywords like epdi/ebdi/podrtahu)
  if (
    msg.includes('admission') ||
    msg.includes('admissions') ||
    msg.includes('apply') ||
    msg.includes('application') ||
    msg.includes('enquiry') ||
    msg.includes('enquiries') ||
    msg.includes('form') ||
    msg.includes('join') ||
    msg.includes('register') ||
    msg.includes('ebdi') ||
    msg.includes('epdi') ||
    msg.includes('podrtahu') ||
    msg.includes('poduradhu')
  ) {
    const variations = [
      "📝 Application & Enquiries:\nYou can fill out the Admission Enquiry Form available on our website Home page for quick callback & guidance!\n• TNEA Code: 5865\n• UG: B.E. / B.Tech | PG: M.E.",
      "🎓 How to Apply:\nTo submit an application or enquiry, please fill out the Enquiry Form on our website Home page! Admissions are open via TNEA Code 5865 & Management Quota."
    ];
    return {
      reply: getDynamicVariation('admissions', variations),
      suggestions: ["TNEA Counselling Code", "UG Courses", "Hostel Facilities", "Contact Details"]
    };
  }

  // 18. Contact & Guidance
  if (
    msg.includes('contact') ||
    msg.includes('phone') ||
    msg.includes('email') ||
    msg.includes('mobile') ||
    msg.includes('reach') ||
    msg.includes('call') ||
    msg.includes('office') ||
    msg.includes('timing') ||
    msg.includes('timings')
  ) {
    const variations = [
      "🏛️ College Office & Guidance:\nFor admissions, course guidance, timing details, or office queries, please visit the college office directly or explore www.nscet.org. You can also submit the Enquiry Form on our website Home page!",
      "📝 Contact & Enquiries:\nPlease contact the college office directly or visit our official website at www.nscet.org. You can also fill out the Admission Enquiry Form on our Home page for instant callback & guidance!"
    ];
    return {
      reply: getDynamicVariation('contact', variations),
      suggestions: ["College Location", "Admission Details", "TNEA Counselling Code", "UG Courses"]
    };
  }

  return null;
}

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Check local answer first for common NSCET questions
    const localAnswer = getLocalAnswer(userMessage);
    if (localAnswer) {
      return res.json({ 
        reply: localAnswer.reply,
        suggestions: localAnswer.suggestions 
      });
    }

    // Read local knowledge text file for AI prompt context
    let nscetCollegeData = '';
    try {
      nscetCollegeData = fs.readFileSync(path.join(__dirname, 'nscet_data.txt'), 'utf-8');
    } catch (e) {
      console.warn("Could not read nscet_data.txt:", e.message);
    }

    const systemPrompt = `You are the official chatbot of Nadar Saraswathi College of Engineering and Technology (NSCET), Theni.
Your primary purpose is to answer questions related strictly to verified college information.

Official verified college information:
${nscetCollegeData}

STRICT MANDATORY RULES:
1. FIELD & KEYWORD SPECIFICITY: ONLY answer when the user's question explicitly mentions or asks about a specific college topic (such as admissions, application form, TNEA code, courses, fees, hostel, transport, departments, location, principal, or contact).
2. DO NOT GUESS OR ASSUME UNKNOWN QUESTIONS: If the user's question is unclear, vague, or the answer is NOT present in the verified college information above, DO NOT guess, DO NOT invent follow-up questions, and DO NOT ask "Did you mean...?". Respond EXACTLY with:
"Sorry, I couldn't find that information. Please contact the college office."
3. UNRELATED & CASUAL CHIT-CHAT (e.g. "saptaya", "how are you", "who are you", jokes, food, weather, general science, math): Respond EXACTLY with:
"Sorry, I am programmed to assist only with NSCET college information. Please ask a valid question about our courses, admissions, fees, or campus facilities!"
4. APPLICATION & ADMISSIONS: If the question contains admission or application keywords ("admission", "apply", "application", "enquiry", "form"), state directly: "Please fill out the Admission Enquiry Form available on our website Home page for instant callback & guidance!"
5. NO PHONE NUMBERS OR EMAIL ADDRESSES (STRICT): NEVER provide, mention, or output any telephone numbers, mobile numbers, or email addresses (even if explicitly asked). Do NOT provide personal contact details. If contact, timing, or assistance is needed, advise them ONLY to: "Please contact the college office directly or visit www.nscet.org." Official college website www.nscet.org is allowed, but strictly NO phone numbers or emails.
6. Keep all valid answers short, direct, professional, and concise (max 2-3 lines). Never introduce yourself in mid-conversation.
7. TANGLISH & TAMIL SUPPORT: Understand Tanglish and simple Tamil queries (e.g. "application ebdi pandrtahu", "course enna iruku") and reply directly in clear, concise English.
8. SUGGESTIONS: At the end of valid responses, include 3 to 4 relevant follow-up questions under "💡 Suggested Questions:".
9. HOSTEL FACILITIES: Hostels do NOT provide Wi-Fi. Never claim that hostels have Wi-Fi or free internet. Mention 24/7 security, study areas, and hygienic dining.
10. COLLEGE REPUTATION / BEST OR WORST / QUALITY: If user asks whether NSCET is "best or worst", "good or bad", "worth it", or asks for reviews, respond with: "NSCET is committed to providing quality education, technical learning, career opportunities, and a supportive campus environment. Instead of labeling it as ‘best’ or ‘worst,’ I can help you explore our courses, placements, facilities, and campus opportunities so you can make an informed choice."
11. CAMPUS & FACILITIES / WHAT COLLEGE PROVIDES: If user asks about campus, college facilities, infrastructure, amenities, or what the entire college provides, respond with: "NSCET has a modern and well-equipped campus with smart classrooms, advanced laboratories, digital library, sports and fitness facilities, hygienic cafeteria, and separate hostels for boys and girls. The campus also provides high-speed internet, 24/7 security, and college bus transportation."
12. WI-FI & INTERNET SPEED: If user asks about Wi-Fi, internet, or internet speed, respond with: "NSCET provides high-speed internet connectivity across key campus facilities, supporting smooth access to online learning, digital resources, and academic activities."
13. EVENTS & CULTURALS / COLLEGE PROGRAMS: If user asks about college events, programs, culturals, functions, celebrations, symposiums, hackathons, or workshops, respond with: "NSCET regularly conducts a variety of academic, technical, cultural, and sports events throughout the year. These include workshops, seminars, hackathons, project exhibitions, cultural programs, competitions, and annual celebrations, providing students with opportunities to learn, collaborate, and showcase their talents."
14. FEE STRUCTURE & DEPARTMENT FEES: If user asks about college fees, fee structure, payment details, or fees for any specific department (such as CSE fees, Mech fees, IT fees, AI fees, EEE fees, etc.), respond with: "For the latest fee structure and payment details, please contact the NSCET Admission Office. Our admission team will be happy to provide the most accurate and up-to-date information."`;

    const modelName = process.env.OPENROUTER_MODEL || 'openrouter/free';

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5000',
        'X-Title': 'NSCET AI Assistant'
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter API Error:", data);
      return res.json({ 
        reply: "I am unable to process complex AI queries via OpenRouter right now.",
        suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Contact Details"]
      });
    }

    let reply = data.choices && data.choices[0] && data.choices[0].message 
      ? data.choices[0].message.content 
      : "Sorry, I couldn't retrieve an answer right now.";

    let suggestions = ["College Name", "TNEA Counselling Code", "UG Courses", "Contact Details"];

    // Robust regex parsing to extract suggestions & strip any Suggested Questions block from reply text
    const sugMatch = reply.match(/(?:💡\s*)?(?:\*\*)?(?:###\s*)?Suggested Questions:?(?:\*\*)?[\s\S]*/i);
    if (sugMatch) {
      const fullSugBlock = sugMatch[0];
      const sugIdx = sugMatch.index;

      const lines = fullSugBlock
        .replace(/(?:💡\s*)?(?:\*\*)?(?:###\s*)?Suggested Questions:?(?:\*\*)?/i, '')
        .split('\n')
        .map(l => l.replace(/^[•\-\*\d\.]+\s*/, '').trim())
        .filter(Boolean);

      if (lines.length > 0) suggestions = lines;
      reply = reply.substring(0, sugIdx).trim();
    }

    // Strict privacy & contact sanitizer: Strip any telephone/mobile numbers or email IDs
    reply = reply.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '');
    reply = reply.replace(/(?:\+?91[\-\s]?)?(?:0\d{2,4}[\-\s]?)?\b\d{6,10}\b(?:\s*[\/\-]\s*\d{3,10})*/g, '');
    reply = reply.replace(/\b(?:at\s+|call\s+|phone:\s*|tel:\s*|email:\s*)+(?:[,.\s]*)/gi, 'please contact the college office or visit www.nscet.org. ');
    reply = reply.replace(/\s{2,}/g, ' ').trim();

    res.json({ reply, suggestions });
    
  } catch (error) {
    console.error("AI Error:", error);
    res.json({ 
      reply: "I encountered a network issue, but I am ready to answer any questions about NSCET!",
      suggestions: ["College Name", "TNEA Counselling Code", "UG Courses", "Contact Details"]
    });
  }
});
// --- CHATBOT CODE END ---

app.listen(5000,() => {
    console.log("Backend running on http://localhost:5000");
})
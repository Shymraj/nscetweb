/**
 * knowledgeService.js
 * 
 * Provides website- and database-aware retrieval for the NSCET AI Assistant.
 * Queries MySQL tables (staff, events, etc.) and searches structured NSCET website
 * data (courses, placements, recruiters, facilities, intercom & contact details)
 * based on the user's query.
 */

// Helper to wrap MySQL queries in a Promise
function queryAsync(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

// Department name aliases mapping user input variations to database department names
const DEPARTMENT_ALIASES = [
  {
    dbName: "Computer Science and Engineering",
    keywords: [/\bcse\b/i, /\bcomputer\s*science\b/i, /\bcomputing\b/i, /\bcs\s*dept\b/i]
  },
  {
    dbName: "Artificial Intelligence & Data Science",
    keywords: [/\baids\b/i, /\bai\s*&\s*ds\b/i, /\bai\s+and\s+ds\b/i, /\bai\b/i, /\bdata\s*science\b/i, /\bartificial\s*intelligence\b/i]
  },
  {
    dbName: "Information Technology",
    keywords: [/\bit\b/i, /\binformation\s*technology\b/i, /\bit\s*dept\b/i]
  },
  {
    dbName: "Civil Engineering",
    keywords: [/\bcivil\b/i, /\bcivil\s*engineering\b/i, /\bsom\s*lab\b/i, /\bstructural\b/i]
  },
  {
    dbName: "Mechanical Engineering",
    keywords: [/\bmech\b/i, /\bmechanical\b/i, /\bmechanical\s*engineering\b/i, /\bmanufacturing\b/i]
  },
  {
    dbName: "Electrical and Electronics Engineering",
    keywords: [/\beee\b/i, /\belectrical\b/i, /\belectrical\s*&\s*electronics\b/i]
  },
  {
    dbName: "Electronics and Communication Engineering",
    keywords: [/\bece\b/i, /\belectronics\b/i, /\belectronics\s*&\s*communication\b/i, /\bvlsi\b/i]
  },
  {
    dbName: "Science and Humanities",
    keywords: [/\bs&h\b/i, /\bscience\s*and\s*humanities\b/i, /\bmaths\b/i, /\bphysics\b/i, /\bchemistry\b/i, /\benglish\b/i, /\bfirst\s*year\b/i]
  }
];

// Verified Structured NSCET Website Knowledge Base
const WEBSITE_KNOWLEDGE = {
  ugCourses: [
    { name: "B.Tech Artificial Intelligence and Data Science (AI & DS)", duration: "4 Years", dept: "AI & DS" },
    { name: "B.E. Computer Science and Engineering (CSE)", duration: "4 Years", dept: "CSE" },
    { name: "B.Tech Information Technology (IT)", duration: "4 Years", dept: "IT" },
    { name: "B.E. Civil Engineering", duration: "4 Years", dept: "Civil Engineering" },
    { name: "B.E. Mechanical Engineering", duration: "4 Years", dept: "Mechanical Engineering" },
    { name: "B.E. Electrical and Electronics Engineering (EEE)", duration: "4 Years", dept: "EEE" },
    { name: "B.E. Electronics and Communication Engineering (ECE)", duration: "4 Years", dept: "ECE" }
  ],
  pgCourses: [
    { name: "M.E. Computer Science and Engineering", duration: "2 Years", dept: "CSE" },
    { name: "M.E. Embedded Systems and Technology", duration: "2 Years", dept: "ECE / EEE" },
    { name: "M.E. Manufacturing Engineering", duration: "2 Years", dept: "Mechanical" },
    { name: "M.E. Structural Engineering", duration: "2 Years", dept: "Civil" }
  ],
  placements: {
    officer: {
      name: "Mrs. C. Geetha",
      role: "Training and Placement Officer",
      specialization: "Corporate Relations, Career Guidance"
    },
    coordinators: [
      { name: "Mr. K. Ramkumar", role: "Training and Placement Coordinator", qualification: "B.E., MBA" },
      { name: "Megha S", role: "Training and Placement Coordinator", qualification: "B.Sc", email: "meghaagri1507@gmail.com" },
      { name: "Mrs. T. Subathamani", role: "Training and Placement Coordinator", qualification: "M.A., B.Ed., M.Phil" }
    ],
    departmentCoordinators: [
      { dept: "IT", name: "Mrs. B. Sai Suganya" },
      { dept: "AI & DS", name: "Mr. S. Kodeeswaran" },
      { dept: "CIVIL", name: "Mrs. S. Gayathri" },
      { dept: "CSE", name: "Mrs. M. Venkata Lakshmi" },
      { dept: "ECE", name: "Mrs. P. Gowthami" },
      { dept: "EEE", name: "Mrs. A. Nishetha Jeflin Nixon" },
      { dept: "MECH", name: "Dr. A. Vennimalairajan" }
    ],
    recruiters: [
      "Infosys", "Zoho", "TCS (Tata Consultancy Services)", "Tesla Electric", 
      "HCL", "Wipro", "Webberax", "Rainbow Enterprises", "ATX", "Dvilite", 
      "NaRDil", "Chennai Radha Engineering Works", "Promon", "M&S Software", "WGTech"
    ],
    facilities: [
      "State-of-the-art air-conditioned auditorium (300+ seating capacity)",
      "Multimedia-equipped Interaction Hall (60 students capacity) for seminars & workshops",
      "Air-conditioned computer labs for online placement tests",
      "Multimedia conference hall for Group Discussions",
      "Well-furnished interview cabins for HR and technical interviews",
      "Comprehensive training in verbal, soft skills, aptitude, and company-specific preparation"
    ]
  },
  campusFacilities: [
    "Smart Classrooms with interactive digital aids and multimedia projectors",
    "Central Digital Library with thousands of books, journals, IEEE e-resources, and study zones",
    "High-speed internet in computer labs, server room, and digital library",
    "Separate Hostels for Boys and Girls on campus with 24/7 security and hygienic dining",
    "Extensive fleet of college buses connecting Theni, Periyakulam, Bodi, Cumbum, Chinnamanur, and surrounding regions",
    "Modern Sports Complex, athletic track, gymnasium, and indoor gaming facilities",
    "Hygienic cafeteria and spacious auditorium for major college events"
  ],
  dressCode: {
    rule: "Yes. NSCET has a prescribed uniform, and students are expected to follow the college dress code.",
    details: "Students are required to wear the prescribed uniform and maintain neat grooming as per college regulations."
  },
  contactsAndIntercom: {
    headquarters: "Postbox No: 60, Annanji (P.O), Vadapudupatti, Theni - 625531, Tamil Nadu, India.",
    generalPhones: ["04546 - 263900", "04546 - 263901", "04546 - 263902"],
    admissionsMobile: ["+91 90951 00235", "+91 90951 00278"],
    admissionsEmail: "admissions@nscet.org",
    officialWebsite: "www.nscet.org",
    tneaCode: "5865",
    intercomDirectory: [
      { location: "Reception 1", phone: "263900", intercom: "900", dept: "Administration" },
      { location: "Reception 2", phone: "263901", intercom: "901", dept: "Administration" },
      { location: "Principal Office", intercom: "930", dept: "Administration" },
      { location: "College Office", intercom: "929, 931", dept: "Administration" },
      { location: "AI & DS / IT Department", intercom: "923", dept: "Academic Departments" },
      { location: "Civil SOM Lab", intercom: "924", dept: "Academic Departments" },
      { location: "Mechanical Workshop", intercom: "925", dept: "Academic Departments" },
      { location: "Auditorium", intercom: "919", dept: "Facilities" },
      { location: "Boys Hostel", intercom: "920", dept: "Hostel" },
      { location: "Boys Hostel Security", intercom: "921", dept: "Security" },
      { location: "Security Main Gate", intercom: "922", dept: "Security" },
      { location: "Canteen", intercom: "926", dept: "Facilities" },
      { location: "Server Room", intercom: "946", dept: "Administration" }
    ]
  },
  principal: {
    name: "Dr. C. Mathalai Sundaram",
    designation: "Professor & Principal",
    qualifications: "M.E., M.B.A., Ph.D., MISTE",
    email: "principal@nscet.org",
    specialization: "Composite Tool Materials, Manufacturing Engineering",
    experience: "Professor & Principal of NSCET since June 2017 (former Vice Principal, Assistant/Associate Professor with over 17+ years of academic and administrative experience).",
    publications: "Over 32 research publications in reputed international journals and conferences.",
    patents: [
      "Automation in Portable Oil Seal Assembly Machine (2017)",
      "Flower Garland Making Machine (2022)",
      "Movable Staircase and Lifting Setup in Vehicle (2023)"
    ],
    message: "As a 21st century organization, NSCET desires to set an approach to learning that incorporates inquiry, research, analytical thinking and an ethical approach that becomes a lifetime habit. Education is a collaborative effort involving professional administrators, committed teachers, and motivated students."
  },
  management: {
    trustName: "Theni Melapettai Hindu Nadargal Uravinmurai (TMHNU)",
    collegeSecretary: {
      name: "Er. A.S.S.S. Soma Sundaram, B.E.",
      role: "Secretary, NSCET"
    },
    collegeJointSecretary: {
      name: "Mr. T. Subramani, B.C.A., M.B.A.",
      role: "Joint Secretary, NSCET"
    },
    trustLeaders: [
      { name: "Mr. A.S.G. Dharmarajan", role: "President / Chairman" },
      { name: "Mr. A.S. Jeevagan", role: "Vice President" },
      { name: "Mr. M.M. Anandhavel, M.B.A", role: "General Secretary (TMHNU Trust)" },
      { name: "Mr. B. Ramachandran, M.B.A", role: "Treasurer" }
    ]
  },
  ispin: {
    title: "ISPIN - The Core Production Hub // NSCET",
    subtitle: "Premier Technical Engineering Wing powered by CSE, IT, and AI-DS streams",
    definition: "ISPIN is a technical initiative jointly operated by the CSE, IT, and AI&DS departments at NSCET, focusing on collaborative technology and innovation.",
    founded: "2021",
    deployments: "6+ Production Deployments (100% Live Production)",
    description: "ISPIN functions as a production-grade technology forge within NSCET where student engineers own infrastructure end-to-end. The hub operates on agile sprint architecture, daily scrum validations, automated CI/CD workflows, and ships staging releases directly to functional production clusters.",
    pillars: [
      "Modular Clean Code Infrastructure",
      "High Availability Production Scaling",
      "Agile Sprint Architecture & Automated CI/CD Workflows",
      "Cross-functional Engineering across CSE, IT, and AI-DS"
    ]
  },
  workingHours: {
    collegeTimings: "8:45 AM to 4:45 PM (Monday to Saturday)",
    officeHours: "8:30 AM to 5:30 PM",
    libraryHours: "8:30 AM to 6:00 PM on working days"
  },
  accreditations: {
    approval: "Approved by AICTE, New Delhi",
    affiliation: "Affiliated to Anna University, Chennai",
    trust: "Managed by Theni Melapettai Hindu Nadargal Uravinmurai (TMHNU)"
  },
  clubsAndCells: [
    "National Service Scheme (NSS)",
    "Youth Red Cross (YRC)",
    "Red Ribbon Club (RRC)",
    "Rotaract Club",
    "Entrepreneurship Development Cell (EDC)",
    "Internal Complaints Committee (ICC / POSHE)",
    "Anti-Ragging Committee & Squad",
    "Student Grievance Redressal Committee",
    "Equal Opportunity Cell (EOC)",
    "Socio-Economically Disadvantaged Groups (SEDG) Cell",
    "Alumni Association",
    "Fine Arts & Cultural Club"
  ]
};

/**
 * Compiles pre-loaded, prepared official NSCET website knowledge for the AI.
 * Ensures the AI has complete clarity and ready knowledge of the official website
 * before processing any query.
 */
function getPreparedWebsiteKnowledge() {
  const k = WEBSITE_KNOWLEDGE;
  return `=== OFFICIAL NSCET WEBSITE KNOWLEDGE (PRE-LOADED & VERIFIED) ===
College Identity: Nadar Saraswathi College of Engineering and Technology (NSCET)
Approval & Affiliation: ${k.accreditations.approval}, ${k.accreditations.affiliation}
Managing Trust: ${k.management.trustName}
Location: ${k.contactsAndIntercom.headquarters}
TNEA Counselling Code: ${k.contactsAndIntercom.tneaCode}
Website: ${k.contactsAndIntercom.officialWebsite}
Admissions Mobile: ${k.contactsAndIntercom.admissionsMobile.join(', ')} | Email: ${k.contactsAndIntercom.admissionsEmail}
General Phone: ${k.contactsAndIntercom.generalPhones.join(', ')}

Undergraduate Programs (7 Courses - B.E. / B.Tech - 4 Years):
${k.ugCourses.map(c => `- ${c.name}`).join('\n')}

Postgraduate Programs (4 Courses - M.E. - 2 Years):
${k.pgCourses.map(c => `- ${c.name}`).join('\n')}

Principal:
- Name: ${k.principal.name}, ${k.principal.qualifications}
- Designation: ${k.principal.designation}
- Email: ${k.principal.email}

Management:
- Secretary: ${k.management.collegeSecretary.name} (${k.management.collegeSecretary.role})
- Joint Secretary: ${k.management.collegeJointSecretary.name} (${k.management.collegeJointSecretary.role})

Training and Placement Cell:
- Placement Officer: ${k.placements.officer.name} (${k.placements.officer.role})
- Top Recruiting Companies: ${k.placements.recruiters.join(', ')}

Campus Facilities:
${k.campusFacilities.map(f => `- ${f}`).join('\n')}

Working Hours & Timings:
- College: ${k.workingHours.collegeTimings}
- Office: ${k.workingHours.officeHours}
- Library: ${k.workingHours.libraryHours}

Clubs & Committees:
${k.clubsAndCells.map(c => `- ${c}`).join('\n')}

ISPIN Technical Wing:
${k.ispin.definition}

Dress Code:
${k.dressCode.rule}`;
}

/**
 * Main retrieval function.
 * Matches user query against MySQL (staff, events) and website knowledge.
 * Returns formatted context, direct summary, and suggestions.
 */
async function retrieveContext(userMessage, db) {
  if (!userMessage) {
    return { hasData: false, context: "", directSummary: "", suggestions: [] };
  }

  const queryLower = userMessage.toLowerCase();
  const contextParts = [];
  const summaryParts = [];
  let suggestions = [];
  let foundSomething = false;

  // --- 1. STAFF / FACULTY / HOD / PROFESSOR RETRIEVAL (FROM MYSQL) ---
  const isFacultyQuery = /\b(faculty|faculties|staff|professor|professors|teacher|teachers|hod|hods|sir|madam|lecturer|lecturers|dr\b|mathalai|velkumar|geerthiga|archana|anusuya|abirami)\b/i.test(queryLower);

  // Check if specific department is mentioned
  let matchedDeptName = null;
  for (const dept of DEPARTMENT_ALIASES) {
    if (dept.keywords.some(k => k.test(queryLower))) {
      matchedDeptName = dept.dbName;
      break;
    }
  }

  if (db && (isFacultyQuery || matchedDeptName)) {
    try {
      let staffRows = [];

      if (matchedDeptName && isFacultyQuery) {
        // Targeted query by department
        const sql = `
          SELECT name, designation, department, qualifications, email, research, is_hod, spec 
          FROM staff 
          WHERE department = ? 
          ORDER BY is_hod DESC, 
            CASE WHEN designation LIKE '%Head%' OR designation LIKE '%HOD%' THEN 1 ELSE 2 END,
            name ASC
        `;
        staffRows = await queryAsync(db, sql, [matchedDeptName]);
      } else if (matchedDeptName && !isFacultyQuery) {
        // If only department is mentioned without faculty keyword, retrieve HOD and key staff info as department context
        const sql = `
          SELECT name, designation, department, qualifications, email, research, is_hod 
          FROM staff 
          WHERE department = ? AND (is_hod = 1 OR designation LIKE '%Head%' OR designation LIKE '%HOD%')
          LIMIT 2
        `;
        const hodRows = await queryAsync(db, sql, [matchedDeptName]);
        if (hodRows.length > 0) {
          staffRows = hodRows;
        }
      } else if (isFacultyQuery) {
        // Check for specific staff name search in query (e.g. "Velkumar", "Mathalai", "Geerthiga", etc.)
        const cleanedWords = queryLower.replace(/[^a-z0-9\s]/gi, ' ').split(/\s+/).filter(w => w.length >= 4);
        let nameMatches = [];

        if (cleanedWords.length > 0) {
          // Construct targeted LIKE query for any matching name fragment
          const conditions = cleanedWords.map(() => `name LIKE ?`).join(' OR ');
          const params = cleanedWords.map(w => `%${w}%`);
          const sql = `SELECT name, designation, department, qualifications, email, research, is_hod, spec FROM staff WHERE ${conditions}`;
          nameMatches = await queryAsync(db, sql, params);
        }

        if (nameMatches.length > 0) {
          staffRows = nameMatches;
        } else if (queryLower.includes('hod') || queryLower.includes('head')) {
          // If asking for HODs generally
          const sql = `SELECT name, designation, department, qualifications, email, is_hod FROM staff WHERE is_hod = 1 OR designation LIKE '%Head%' ORDER BY department ASC`;
          staffRows = await queryAsync(db, sql);
        } else if (queryLower.includes('faculty count') || queryLower.includes('how many')) {
          const sql = `SELECT department, COUNT(*) as count FROM staff GROUP BY department ORDER BY department ASC`;
          const counts = await queryAsync(db, sql);
          if (counts.length > 0) {
            const total = counts.reduce((sum, r) => sum + r.count, 0);
            const countDetails = counts.map(r => `• ${r.department}: ${r.count} faculty members`).join('\n');
            contextParts.push(`Staff Strength by Department (Total ${total} Verified Faculty in Database):\n${countDetails}`);
            summaryParts.push(`NSCET has over ${total} verified faculty members across departments:\n${countDetails}`);
            foundSomething = true;
          }
        }
      }

      if (staffRows.length > 0) {
        foundSomething = true;
        const formattedStaff = staffRows.map((s) => {
          let str = `• ${s.name} - ${s.designation} (${s.department})`;
          if (s.qualifications) str += ` | Qual: ${s.qualifications}`;
          if (s.is_hod || /head|hod/i.test(s.designation)) str += ` [Department Head / HOD]`;
          if (s.research) str += ` | Research: ${s.research}`;
          if (s.spec) str += ` | Spec: ${s.spec}`;
          return str;
        }).join('\n');

        const header = matchedDeptName 
          ? `Verified Faculty for Department of ${matchedDeptName} (from MySQL Database):`
          : `Verified Faculty Records (from MySQL Database):`;

        contextParts.push(`${header}\n${formattedStaff}`);

        // Query-aware summary for direct response/fallback
        const isWhoQuery = /\b(who is|who's|name of|hod of|head of)\b/i.test(queryLower);
        if (isWhoQuery && staffRows.length >= 1) {
          const s = staffRows[0];
          let brief = `${s.name} is the ${s.designation} in the Department of ${s.department}`;
          if (s.qualifications) brief += ` (${s.qualifications})`;
          if (s.email) brief += `. Email: ${s.email}`;
          summaryParts.push(brief);
        } else {
          summaryParts.push(`${header}\n${formattedStaff}`);
        }
        suggestions = ["UG Courses", "Admission Enquiry", "Campus Facilities", "Contact Details"];
      }
    } catch (err) {
      console.error("Database query error in knowledgeService (staff):", err.message);
    }
  }

  // --- 2. EVENTS RETRIEVAL (FROM MYSQL) ---
  const isEventQuery = /\b(event|events|culturals|cultural|celebration|celebrations|annual day|hackathon|symposium|fest|fresher|signout|waves|diwali|onam|pongal|independence day)\b/i.test(queryLower);
  if (db && isEventQuery) {
    try {
      const sql = `SELECT title, date, department, description FROM events ORDER BY id DESC LIMIT 10`;
      const eventRows = await queryAsync(db, sql);
      if (eventRows.length > 0) {
        foundSomething = true;
        const formattedEvents = eventRows.map(e => `• ${e.title} (${e.date || 'Campus Event'}) - Department/Category: ${e.department || 'College'}`).join('\n');
        contextParts.push(`Verified College Events (from MySQL Database):\n${formattedEvents}`);

        // Check if specific event name is searched
        const matchingEvent = eventRows.find(e => queryLower.includes(e.title.toLowerCase()));
        if (matchingEvent) {
          summaryParts.push(`${matchingEvent.title} (${matchingEvent.date || 'Campus Event'}) is conducted by ${matchingEvent.department || 'the college'}. ${matchingEvent.description || ''}`.trim());
        } else {
          summaryParts.push(`Key events and celebrations conducted at NSCET include:\n${formattedEvents}`);
        }
        suggestions = ["Placement Details", "UG Courses", "Campus Facilities", "Contact Details"];
      }
    } catch (err) {
      console.error("Database query error in knowledgeService (events):", err.message);
    }
  }

  // --- 3. ACADEMIC PROGRAMS & COURSES RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isCourseQuery = /\b(course|courses|program|programs|degree|degrees|ug|pg|b\.e|b\.tech|m\.e|undergraduate|postgraduate|curriculum|branch|branches)\b/i.test(queryLower);
  if (isCourseQuery || matchedDeptName) {
    let ugList = WEBSITE_KNOWLEDGE.ugCourses;
    let pgList = WEBSITE_KNOWLEDGE.pgCourses;

    if (matchedDeptName) {
      ugList = ugList.filter(c => c.dept.toLowerCase().includes(matchedDeptName.toLowerCase()) || matchedDeptName.toLowerCase().includes(c.dept.toLowerCase()));
      pgList = pgList.filter(c => c.dept.toLowerCase().includes(matchedDeptName.toLowerCase()) || matchedDeptName.toLowerCase().includes(c.dept.toLowerCase()));
    }

    if (ugList.length > 0 || pgList.length > 0) {
      foundSomething = true;
      let text = "Academic Programs Offered at NSCET (from Website Data):\n";
      if (ugList.length > 0) {
        text += "Undergraduate Programs (UG - 4 Years):\n" + ugList.map(c => `• ${c.name}`).join('\n') + "\n";
      }
      if (pgList.length > 0) {
        text += "Postgraduate Programs (PG - 2 Years):\n" + pgList.map(c => `• ${c.name}`).join('\n');
      }
      contextParts.push(text);

      if (isCourseQuery) {
        // Query-aware concise summaries
        if (/\b(pg|postgraduate|m\.e)\b/i.test(queryLower)) {
          summaryParts.push("Postgraduate Programs (M.E. - 2 Years) at NSCET:\n" + pgList.map(c => `• ${c.name}`).join('\n'));
        } else if (/\b(ug|undergraduate|b\.e|b\.tech)\b/i.test(queryLower)) {
          summaryParts.push("Undergraduate Programs (B.E. / B.Tech - 4 Years) at NSCET:\n" + ugList.map(c => `• ${c.name}`).join('\n'));
        } else if (matchedDeptName) {
          const deptCourses = [...ugList, ...pgList].map(c => `• ${c.name}`).join('\n');
          summaryParts.push(`Programs offered for ${matchedDeptName}:\n${deptCourses}`);
        } else {
          summaryParts.push(text);
        }
        suggestions = ["TNEA Counselling Code", "Admission Details", "Hostel Facilities", "Fee Details"];
      }
    }
  }

  // --- 4. PLACEMENTS & RECRUITERS RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isPlacementQuery = /\b(placement|placements|recruit|recruiter|recruiters|company|companies|job|jobs|package|salary|internship|tpo|geetha|ramkumar|hire|hiring)\b/i.test(queryLower);
  if (isPlacementQuery) {
    foundSomething = true;
    const pl = WEBSITE_KNOWLEDGE.placements;
    let fullText = `Training & Placement Cell Information (from Website Data):\n`;
    fullText += `• Placement Officer: ${pl.officer.name} (${pl.officer.role}) - ${pl.officer.specialization}\n`;
    fullText += `• Placement Coordinators: ${pl.coordinators.map(c => `${c.name} (${c.role})`).join(', ')}\n`;
    fullText += `• Top Recruiting Companies: ${pl.recruiters.join(', ')}\n`;
    fullText += `• Placement Facilities:\n${pl.facilities.map(f => `  - ${f}`).join('\n')}`;

    // Select relevant slice for both AI context and direct summary
    if (/\b(who is.*(placement officer|tpo)|officer|tpo|geetha|cell|coordinators?)\b/i.test(queryLower)) {
      const oText = `NSCET has an active Training and Placement Cell headed by ${pl.officer.name} (${pl.officer.role}) along with faculty coordinators. The cell facilitates industry interactions, student guidance, and campus recruitment drives.`;
      contextParts.push(oText);
      summaryParts.push(oText);
      suggestions = ["Top Recruiters", "Placement Training", "Placement Process", "Contact Details"];
    } else if (/\b(training|activities|aptitude|soft skills|preparation)\b/i.test(queryLower)) {
      const tText = `The Training and Placement Cell provides comprehensive student training in aptitude, quantitative skills, verbal ability, and soft skills, along with company-specific technical interview preparation and mock placement tests.`;
      contextParts.push(tText);
      summaryParts.push(tText);
      suggestions = ["Top Recruiters", "Placement Cell", "Placement Process", "UG Courses"];
    } else if (/\b(company|companies|recruiter|recruiters|who recruits|who hires)\b/i.test(queryLower)) {
      const cText = `Reputed recruiting companies visiting NSCET include: ${pl.recruiters.join(', ')}.`;
      contextParts.push(cText);
      summaryParts.push(cText);
      suggestions = ["Placement Training", "Placement Cell", "Placement Process", "UG Courses"];
    } else if (/\b(package|salary|lpa|statistics|percentage|record|records)\b/i.test(queryLower)) {
      const sText = `NSCET maintains an active placement track record through regular campus recruitment drives across engineering disciplines. For verified batch statistics, salary details, and recruitment reports, please contact the Training and Placement Cell or visit www.nscet.org.`;
      contextParts.push(sText);
      summaryParts.push(sText);
      suggestions = ["Top Recruiters", "Placement Training", "Placement Cell", "Contact Details"];
    } else if (/\b(process|how is placement|rounds|selection)\b/i.test(queryLower)) {
      const pText = `The campus placement process at NSCET consists of pre-placement presentations, online or written aptitude tests, group discussions in multimedia halls, and technical and personal interviews in dedicated cabins.`;
      contextParts.push(pText);
      summaryParts.push(pText);
      suggestions = ["Top Recruiters", "Placement Training", "Placement Cell", "UG Courses"];
    } else if (/\b(detail|details|full|more|all)\b/i.test(queryLower)) {
      const dText = `NSCET features an active Training and Placement Cell led by ${pl.officer.name} along with departmental coordinators. The college offers systematic training in verbal ability, aptitude, and technical skills, supported by air-conditioned computer labs and seminar halls. Leading recruiters include ${pl.recruiters.slice(0, 6).join(', ')}. For more details, visit www.nscet.org.`;
      contextParts.push(dText);
      summaryParts.push(dText);
      suggestions = ["Top Recruiters", "Placement Training", "Placement Process", "Contact Details"];
    } else {
      const bText = `NSCET has a dedicated Training and Placement Cell that supports student training and campus recruitment opportunities. The cell conducts aptitude, soft skills, and technical training to prepare students for corporate roles. Reputed recruiting companies visiting the campus include Infosys, Zoho, TCS, HCL, Wipro, and other leading firms.`;
      contextParts.push(bText);
      summaryParts.push(bText);
      suggestions = ["Top Recruiters", "Placement Training", "Placement Cell", "Placement Process"];
    }
  }

  // --- 5. CAMPUS FACILITIES & HOSTEL RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isFacilityQuery = /\b(facility|facilities|campus|infrastructure|hostel|hostels|boys hostel|girls hostel|wifi|wi-fi|internet|bus|transport|library|sports|gym|canteen|cafeteria|lab|labs)\b/i.test(queryLower);
  if (isFacilityQuery) {
    foundSomething = true;
    let fullText = "Campus & Hostel Facilities (from Website Data):\n" + WEBSITE_KNOWLEDGE.campusFacilities.map(f => `• ${f}`).join('\n');

    // Select relevant slice for both AI context and direct summary
    if (/\b(hostel|hostels|room|boarding)\b/i.test(queryLower)) {
      const hText = "NSCET provides separate hostels for boys and girls on campus with 24/7 security and nutritious food.";
      contextParts.push(hText);
      summaryParts.push(hText);
      suggestions = ["Bus Transport", "Central Library", "UG Courses", "Contact Details"];
    } else if (/\b(wifi|wi-fi|internet)\b/i.test(queryLower)) {
      const wText = "High-speed internet and Wi-Fi facilities are available in computer labs, the server room, and the digital library at NSCET.";
      contextParts.push(wText);
      summaryParts.push(wText);
      suggestions = ["Hostel Facilities", "Computer Labs", "Central Library", "Contact Details"];
    } else if (/\b(bus|transport|buses|route|routes)\b/i.test(queryLower)) {
      const bText = "NSCET operates an extensive fleet of college buses connecting Theni, Periyakulam, Bodi, Cumbum, Chinnamanur, and surrounding regions.";
      contextParts.push(bText);
      summaryParts.push(bText);
      suggestions = ["Hostel Facilities", "Campus Location", "Admission Enquiry", "Contact Details"];
    } else if (/\b(library|books|journal|journals|ieee)\b/i.test(queryLower)) {
      const lText = "NSCET features a Central Digital Library equipped with thousands of books, journals, IEEE e-resources, and quiet study zones.";
      contextParts.push(lText);
      summaryParts.push(lText);
      suggestions = ["Campus Facilities", "Computer Labs", "UG Courses", "Contact Details"];
    } else if (/\b(sports|gym|gymnasium|games)\b/i.test(queryLower)) {
      const sText = "NSCET has a modern Sports Complex, athletic track, gymnasium, and indoor gaming facilities for students.";
      contextParts.push(sText);
      summaryParts.push(sText);
      suggestions = ["Campus Facilities", "Hostel Facilities", "UG Courses", "Contact Details"];
    } else if (/\b(canteen|cafeteria|food|mess)\b/i.test(queryLower)) {
      const cText = "NSCET provides a hygienic cafeteria and dining facilities offering nutritious meals and snacks for students and staff.";
      contextParts.push(cText);
      summaryParts.push(cText);
      suggestions = ["Hostel Facilities", "Campus Facilities", "UG Courses", "Contact Details"];
    } else if (/\b(lab|labs|laboratory|laboratories)\b/i.test(queryLower)) {
      const lbText = "NSCET features smart classrooms and state-of-the-art modern departmental laboratories with high-speed internet connectivity.";
      contextParts.push(lbText);
      summaryParts.push(lbText);
      suggestions = ["UG Courses", "Central Library", "Campus Facilities", "Contact Details"];
    } else if (/\b(detail|details|all|list)\b/i.test(queryLower)) {
      contextParts.push(fullText);
      summaryParts.push(fullText);
      suggestions = ["Hostel Facilities", "Bus Transport", "UG Courses", "Contact Details"];
    } else {
      const genText = "NSCET provides smart classrooms, central digital library, departmental labs, sports complex, cafeteria, bus fleet, and separate boys & girls hostels.";
      contextParts.push(genText);
      summaryParts.push(genText);
      suggestions = ["Hostel Facilities", "Bus Transport", "Central Library", "Contact Details"];
    }
  }

  // --- 6. DRESS CODE & UNIFORM RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isDressCodeQuery = /\b(uniform|dress|dress\s*code|colour\s*dress|color\s*dress|attire|grooming)\b/i.test(queryLower);
  if (isDressCodeQuery) {
    foundSomething = true;
    let dText = "Yes. NSCET has a prescribed uniform, and students are expected to follow the college dress code.";
    if (/\b(colour\s*dress|color\s*dress)\b/i.test(queryLower) && !/\buniform\b/i.test(queryLower)) {
      dText = "No. NSCET has a prescribed uniform, and students are expected to follow the college dress code on campus.";
    }
    contextParts.push(dText);
    summaryParts.push(dText);
    suggestions = ["ID Card", "Campus Rules", "College Office", "Contact Details"];
  }

  // --- 7. CONTACT & INTERCOM DIRECTORY RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isContactQuery = /\b(contact|phone|telephone|mobile|intercom|extension|address|location|email|reach|call|office|reception|admin office|where is)\b/i.test(queryLower);
  if (isContactQuery) {
    foundSomething = true;
    const c = WEBSITE_KNOWLEDGE.contactsAndIntercom;
    let fullText = `Official NSCET Contact & Intercom Directory (from Website Data):\n`;
    fullText += `• Campus Address: ${c.headquarters}\n`;
    fullText += `• General Office Landline: ${c.generalPhones.join(' / ')}\n`;
    fullText += `• Admission Cell Numbers: ${c.admissionsMobile.join(' / ')}\n`;
    fullText += `• Admission Email: ${c.admissionsEmail}\n`;
    fullText += `• Official Website: ${c.officialWebsite} | TNEA Code: ${c.tneaCode}\n`;

    let relevantIntercoms = c.intercomDirectory;
    if (queryLower.includes('reception')) relevantIntercoms = relevantIntercoms.filter(i => i.location.toLowerCase().includes('reception'));
    else if (queryLower.includes('principal')) relevantIntercoms = relevantIntercoms.filter(i => i.location.toLowerCase().includes('principal'));
    else if (queryLower.includes('hostel')) relevantIntercoms = relevantIntercoms.filter(i => i.location.toLowerCase().includes('hostel'));
    else if (queryLower.includes('security')) relevantIntercoms = relevantIntercoms.filter(i => i.location.toLowerCase().includes('security'));

    fullText += `• Intercom Extensions:\n${relevantIntercoms.slice(0, 8).map(i => `  - ${i.location}: Intercom ${i.intercom}`).join('\n')}`;

    // Select relevant slice for both AI context and direct summary
    if (/\b(where is|location|address)\b/i.test(queryLower)) {
      const locText = `NSCET is located at ${c.headquarters}`;
      contextParts.push(locText);
      summaryParts.push(locText);
      suggestions = ["Contact Phone Numbers", "Bus Transport", "UG Courses", "Admission Enquiry"];
    } else if (/\b(phone|call|mobile|number|landline)\b/i.test(queryLower)) {
      const phText = `NSCET Contact Numbers:\n• General Office: ${c.generalPhones.join(', ')}\n• Admission Cell: ${c.admissionsMobile.join(', ')}`;
      contextParts.push(phText);
      summaryParts.push(phText);
      suggestions = ["Admission Email", "Campus Address", "UG Courses", "TNEA Counselling Code"];
    } else if (/\b(email|mail)\b/i.test(queryLower)) {
      const emText = `Official Admission Email: ${c.admissionsEmail}`;
      contextParts.push(emText);
      summaryParts.push(emText);
      suggestions = ["Admission Phone Numbers", "Campus Address", "UG Courses", "TNEA Counselling Code"];
    } else if (/\b(intercom|extension)\b/i.test(queryLower)) {
      const intText = `Key Intercom Extensions:\n${relevantIntercoms.slice(0, 6).map(i => `• ${i.location}: Intercom ${i.intercom}`).join('\n')}`;
      contextParts.push(intText);
      summaryParts.push(intText);
      suggestions = ["General Phone", "Principal Office Intercom", "Reception Intercom", "Contact Details"];
    } else if (/\b(detail|details|all)\b/i.test(queryLower)) {
      contextParts.push(fullText);
      summaryParts.push(fullText);
      suggestions = ["Admission Details", "UG Courses", "TNEA Counselling Code", "College Location"];
    } else {
      const ctText = `NSCET Contact Info:\n• Address: ${c.headquarters}\n• Phone: ${c.generalPhones[0]} | Admissions: ${c.admissionsMobile[0]}\n• Email: ${c.admissionsEmail}\n• Website: ${c.officialWebsite}`;
      contextParts.push(ctText);
      summaryParts.push(ctText);
      suggestions = ["Admission Details", "UG Courses", "TNEA Counselling Code", "College Location"];
    }
  }

  // --- 7. PRINCIPAL PROFILE & DETAILS RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isPrincipalQuery = /\b(principal|pricipal|head of college|mathalai\s*sundaram)\b/i.test(queryLower);
  if (isPrincipalQuery) {
    foundSomething = true;
    const p = WEBSITE_KNOWLEDGE.principal;
    let fullText = `Official Principal Details & Profile (from Website Data):\n`;
    fullText += `• Name: ${p.name}\n`;
    fullText += `• Designation: ${p.designation}\n`;
    fullText += `• Qualifications: ${p.qualifications}\n`;
    fullText += `• Email: ${p.email}\n`;
    fullText += `• Specialization: ${p.specialization}\n`;
    fullText += `• Experience: ${p.experience}\n`;
    fullText += `• Publications: ${p.publications}\n`;
    fullText += `• Patents Registered:\n${p.patents.map(pat => `  - ${pat}`).join('\n')}\n`;
    fullText += `• Principal's Message: "${p.message}"`;

    // Query-aware direct identity or specific attribute
    if (/\b(email|mail)\b/i.test(queryLower)) {
      const emText = `The email address of Principal ${p.name} is ${p.email}.`;
      contextParts.push(emText);
      summaryParts.push(emText);
      suggestions = ["Principal Qualifications", "Principal Office Intercom", "UG Courses", "Contact Details"];
    } else if (/\b(patent|patents)\b/i.test(queryLower)) {
      const patText = `Patents registered by Principal ${p.name}:\n${p.patents.map(pat => `• ${pat}`).join('\n')}`;
      contextParts.push(patText);
      summaryParts.push(patText);
      suggestions = ["Principal Profile", "College Secretary", "UG Courses", "Contact Details"];
    } else if (/\b(qualification|qualifications|degree|degrees|spec|specialization)\b/i.test(queryLower)) {
      const qText = `Principal ${p.name} holds ${p.qualifications} and specializes in ${p.specialization}.`;
      contextParts.push(qText);
      summaryParts.push(qText);
      suggestions = ["Principal Experience", "College Secretary", "UG Courses", "Contact Details"];
    } else if (/\b(detail|details|profile|more|everything|cv|bio|biography|message)\b/i.test(queryLower)) {
      contextParts.push(fullText);
      summaryParts.push(fullText);
      suggestions = ["College Secretary", "ISPIN Hub", "UG Courses", "Contact Details"];
    } else {
      // Direct identity answer for "Who is the principal?"
      const idText = `${p.name} is the ${p.designation} of NSCET. For more details, please visit our website at www.nscet.org.`;
      contextParts.push(idText);
      summaryParts.push(idText);
      suggestions = ["Principal Qualifications", "College Secretary", "UG Courses", "Contact Details"];
    }
  }

  // --- 8. SECRETARY & TRUST MANAGEMENT RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isSecretaryOrManagementQuery = /\b(secretary|secretery|joint\s*secretary|general\s*secretary|somasundaram|soma\s*sundaram|subramani|anandhavel|dharmarajan|jeevagan|ramachandran|trust|tmhnu|management|office\s*bearer|office\s*bearers|governing)\b/i.test(queryLower);
  if (isSecretaryOrManagementQuery) {
    foundSomething = true;
    const m = WEBSITE_KNOWLEDGE.management;
    let fullText = `Official Administration & Management Details (from Website Data):\n`;
    fullText += `• Trust: ${m.trustName}\n`;
    fullText += `• College Secretary: ${m.collegeSecretary.name} (${m.collegeSecretary.role})\n`;
    fullText += `• College Joint Secretary: ${m.collegeJointSecretary.name} (${m.collegeJointSecretary.role})\n`;
    fullText += `• Management & Trust Office Bearers:\n${m.trustLeaders.map(l => `  - ${l.name}: ${l.role}`).join('\n')}`;

    // Query-aware response
    if (/\b(joint\s*secretary|subramani)\b/i.test(queryLower)) {
      const jsText = `${m.collegeJointSecretary.name} is the ${m.collegeJointSecretary.role} of NSCET. For more details, please visit our website at www.nscet.org.`;
      contextParts.push(jsText);
      summaryParts.push(jsText);
      suggestions = ["College Secretary", "Principal Details", "UG Courses", "Contact Details"];
    } else if (/\b(trust|tmhnu|office\s*bearer|office\s*bearers|governing|committee|leaders)\b/i.test(queryLower)) {
      const trText = `NSCET is managed by ${m.trustName}.\nOffice Bearers:\n${m.trustLeaders.map(l => `• ${l.name} - ${l.role}`).join('\n')}\nFor more details, please visit our website at www.nscet.org.`;
      contextParts.push(trText);
      summaryParts.push(trText);
      suggestions = ["College Secretary", "Principal Details", "UG Courses", "Contact Details"];
    } else if (/\b(detail|details|all|more|everything)\b/i.test(queryLower)) {
      contextParts.push(fullText);
      summaryParts.push(fullText);
      suggestions = ["Principal Details", "ISPIN Hub", "UG Courses", "Contact Details"];
    } else {
      // Direct "Who is the secretary?"
      const secText = `${m.collegeSecretary.name} is the ${m.collegeSecretary.role}. For more details, please visit our website at www.nscet.org.`;
      contextParts.push(secText);
      summaryParts.push(secText);
      suggestions = ["Joint Secretary", "Principal Details", "UG Courses", "Contact Details"];
    }
  }

  // --- 9. ISPIN PRODUCTION HUB & TECHNICAL WING RETRIEVAL (WEBSITE KNOWLEDGE) ---
  const isIspinQuery = /\b(ispin|i-spin|production\s*hub|technical\s*wing|engineering\s*wing|technology\s*forge)\b/i.test(queryLower);
  if (isIspinQuery) {
    foundSomething = true;
    const isp = WEBSITE_KNOWLEDGE.ispin;
    let fullText = `ISPIN Technical Engineering Wing Details (from Website Data):\n`;
    fullText += `• Definition: ${isp.definition}\n`;
    fullText += `• Title: ${isp.title}\n`;
    fullText += `• Subtitle: ${isp.subtitle}\n`;
    fullText += `• Founded: ${isp.founded} | Deployments: ${isp.deployments}\n`;
    fullText += `• Overview: ${isp.description}\n`;
    fullText += `• Core Engineering Pillars:\n${isp.pillars.map(pil => `  - ${pil}`).join('\n')}`;

    // Select ONLY relevant information for AI context & direct summary
    if (/\b(pillar|pillars)\b/i.test(queryLower)) {
      const pilText = `Core Engineering Pillars of ISPIN:\n${isp.pillars.map(pil => `• ${pil}`).join('\n')}`;
      contextParts.push(pilText);
      summaryParts.push(pilText);
      suggestions = ["What is ISPIN?", "ISPIN Deployments", "UG Courses", "Contact Details"];
    } else if (/\b(deployment|deployments|project|projects|releases)\b/i.test(queryLower)) {
      const depText = `ISPIN has ${isp.deployments} built end-to-end by student engineers across CSE, IT, and AI&DS at NSCET.`;
      contextParts.push(depText);
      summaryParts.push(depText);
      suggestions = ["What is ISPIN?", "ISPIN Pillars", "UG Courses", "Contact Details"];
    } else if (/\b(detail|details|full|more|everything|architecture)\b/i.test(queryLower)) {
      contextParts.push(fullText);
      summaryParts.push(fullText);
      suggestions = ["CSE Department", "IT Department", "AI & DS Department", "Placements"];
    } else {
      // Direct definition (e.g. "What is ISPIN?", "ispin", "about ispin")
      const defText = `ISPIN Definition: ${isp.definition}`;
      contextParts.push(defText);
      summaryParts.push(isp.definition);
      suggestions = ["What are the pillars of ISPIN?", "ISPIN Deployments", "UG Courses", "Contact Details"];
    }
  }
  // --- 10. CLUBS & COMMITTEES (WEBSITE KNOWLEDGE) ---
  const isClubQuery = /\b(club|clubs|nss|yrc|rrc|rotaract|edc|poshe|icc|anti\s*ragging|grievance|equal\s*opportunity|sedg|fine\s*arts)\b/i.test(queryLower);
  if (isClubQuery) {
    foundSomething = true;
    const clText = "Active Student Clubs and Committees at NSCET:\n" + WEBSITE_KNOWLEDGE.clubsAndCells.map(c => `• ${c}`).join('\n');
    contextParts.push(clText);
    summaryParts.push(clText);
    suggestions = ["Campus Facilities", "Sports Activities", "UG Courses", "Contact Details"];
  }

  // --- 11. TIMINGS & WORKING HOURS (WEBSITE KNOWLEDGE) ---
  const isTimingQuery = /\b(timing|timings|working\s*hours|college\s*hours|office\s*hours|library\s*hours|working\s*time)\b/i.test(queryLower);
  if (isTimingQuery) {
    foundSomething = true;
    const wh = WEBSITE_KNOWLEDGE.workingHours;
    const tText = `NSCET Working Timings:\n• College Timings: ${wh.collegeTimings}\n• Office Hours: ${wh.officeHours}\n• Library Hours: ${wh.libraryHours}`;
    contextParts.push(tText);
    summaryParts.push(tText);
    suggestions = ["Contact Details", "Bus Transport", "Campus Location", "UG Courses"];
  }

  // --- 12. ACCREDITATION & APPROVAL (WEBSITE KNOWLEDGE) ---
  const isAccreditationQuery = /\b(affiliation|affiliated|approval|approved|aicte|anna\s*university)\b/i.test(queryLower);
  if (isAccreditationQuery && !contextParts.some(c => c.includes('Anna University'))) {
    foundSomething = true;
    const ac = WEBSITE_KNOWLEDGE.accreditations;
    const aText = `NSCET Accreditation & Affiliation:\n• ${ac.approval}\n• ${ac.affiliation}\n• ${ac.trust}`;
    contextParts.push(aText);
    summaryParts.push(aText);
    suggestions = ["TNEA Counselling Code", "UG Courses", "College Location", "Contact Details"];
  }

  // --- 13. ADMISSIONS & ENQUIRY (WEBSITE KNOWLEDGE) ---
  const isAdmissionQuery = /\b(admission|admissions|admission\s*enquiry|admission\s*inquiry|how\s*to\s*apply|how\s*to\s*join|how\s*to\s*enroll|admission\s*process)\b/i.test(queryLower);
  if (isAdmissionQuery && !contextParts.some(c => c.includes('government counselling'))) {
    foundSomething = true;
    const admText = "NSCET offers admission through government counselling and management quota. Students can check the admission details and complete the enquiry/application process through the college website. For more details, please visit our website at www.nscet.org.";
    contextParts.push(admText);
    summaryParts.push(admText);
    suggestions = ["TNEA Counselling Code", "UG Courses", "Fee Details", "Contact Details"];
  }

  return {
    hasData: foundSomething,
    context: contextParts.join('\n\n'),
    directSummary: summaryParts.join('\n\n'),
    suggestions: suggestions.length > 0 ? suggestions : ["College Name", "TNEA Counselling Code", "UG Courses", "Contact Details"]
  };
}

module.exports = {
  retrieveContext,
  getPreparedWebsiteKnowledge,
  WEBSITE_KNOWLEDGE,
  DEPARTMENT_ALIASES
};

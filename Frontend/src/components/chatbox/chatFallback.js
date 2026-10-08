// Client-Side Offline / Server-Down Knowledge Base for NSCET ChatBot
// Ensures the chatbot NEVER outputs "Server error" even if OpenRouter API fails, 
// backend sleeps, or internet network drops.

export function getClientFallbackAnswer(userMessage) {
  if (!userMessage) return null;
  const msg = userMessage.toLowerCase().trim();

  // 1. Greetings
  if (
    /^(good\s*morning|gud\s*mrg|gm|morning)/i.test(msg)
  ) {
    return {
      reply: "Good morning! Welcome to Nadar Saraswathi College of Engineering and Technology (NSCET). How can I assist you with admissions, courses, or campus details?",
      suggestions: ["Admission Process", "UG Courses", "TNEA Counselling Code", "Contact Details"]
    };
  }

  if (
    /^(hi+|hlo+|hello+|hey+|vanakkam|namaste)/i.test(msg) ||
    /^(who\s*(are\s*you|r\s*u)|what\s*is\s*your\s*name)/i.test(msg) ||
    msg === 'hi' || msg === 'hello' || msg === 'hey'
  ) {
    return {
      reply: "Hello! I am NSCET AI Assistant. How can I help you today with college details, admissions, or departments?",
      suggestions: ["Admission Enquiry", "UG Courses", "College Location", "TNEA Counselling Code"]
    };
  }

  // 2. Admissions & Admission Enquiry
  if (
    /\b(admission|admissions|admission\s*enquiry|admission\s*process|how\s*to\s*apply|how\s*to\s*join|application|join|seat)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET offers admission through Tamil Nadu Engineering Admissions (TNEA Counselling Code: 5865) and Management Quota. You can fill out the Admission Enquiry form directly on our website or visit the campus admission office.\n\nWebsite: www.nscet.org\nContact: 04546 - 263900, 263901",
      suggestions: ["TNEA Counselling Code", "UG Courses", "PG Courses", "Contact Details"]
    };
  }

  // 3. TNEA Counselling Code
  if (
    /\b(counselling\s*code|tnea\s*code|tnea\s*counselling\s*code|college\s*code)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET TNEA Counselling Code is 5865.",
      suggestions: ["UG Courses", "Admission Enquiry", "College Location", "Contact Details"]
    };
  }

  // 4. College Name & Location
  if (
    /\b(college\s*name|name\s*of\s*(the\s*)?college)\b/i.test(msg)
  ) {
    return {
      reply: "Nadar Saraswathi College of Engineering and Technology (NSCET), Theni.",
      suggestions: ["College Location", "TNEA Counselling Code", "UG Courses", "Contact Details"]
    };
  }

  if (
    /\b(where\s*is\s*(the\s*)?college|location|address|place)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET is located at Vadapudupatti, Annanji (P.O), Theni - 625531, Tamil Nadu, India. Convenient college bus facilities are available covering Theni and nearby regions.",
      suggestions: ["Bus Facility", "Campus Facilities", "TNEA Counselling Code", "Contact Details"]
    };
  }

  // 5. UG Courses
  if (
    /\b(ug\s*course|ug\s*courses|undergraduate|be|btech|b\.tech|b\.e|courses\s*offered)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET offers 7 Under Graduate (B.E. / B.Tech - 4 Years) programs:\n• B.E. Computer Science and Engineering (CSE)\n• B.Tech Information Technology (IT)\n• B.Tech Artificial Intelligence and Data Science (AI & DS)\n• B.E. Electronics and Communication Engineering (ECE)\n• B.E. Electrical and Electronics Engineering (EEE)\n• B.E. Mechanical Engineering\n• B.E. Civil Engineering\n\nAll courses are approved by AICTE, New Delhi and affiliated to Anna University, Chennai.",
      suggestions: ["PG Courses", "Admission Process", "TNEA Counselling Code", "Placements"]
    };
  }

  // 6. PG Courses
  if (
    /\b(pg\s*course|pg\s*courses|postgraduate|m\.e|me\s*course)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET offers 4 Post Graduate (M.E. - 2 Years) programs:\n• M.E. Computer Science and Engineering (CSE)\n• M.E. Embedded Systems and Technologies\n• M.E. Manufacturing Engineering\n• M.E. Structural Engineering",
      suggestions: ["UG Courses", "Admission Enquiry", "Contact Details"]
    };
  }

  // 7. Placements & Recruiters
  if (
    /\b(placement|placements|job|recruit|recruiter|companies|salary|package)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET has a dedicated Training and Placement Cell headed by Mrs. C. Geetha. Leading recruiters include Infosys, Zoho, TCS, HCL, Wipro, Webberax, NaRDil, and Chennai Radha Engineering Works. Comprehensive aptitude, coding, and soft skills training are provided from first year onwards.",
      suggestions: ["Top Recruiters", "Placement Training", "UG Courses", "Contact Details"]
    };
  }

  // 8. Hostel & Amenities
  if (
    /\b(hostel|hostels|boarding|stay)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET provides separate, secure hostels for boys and girls inside the green campus with 24/7 security, hygienic nutritious dining, and recreational halls.",
      suggestions: ["Bus Facility", "Campus Facilities", "College Location", "Contact Details"]
    };
  }

  // 9. Transport / Bus
  if (
    /\b(bus|transport|transportation|vehicle)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET operates an extensive fleet of college buses connecting Theni, Periyakulam, Bodi, Cumbum, Chinnamanur, Andipatti, and adjoining regions.",
      suggestions: ["College Location", "Hostel Facilities", "Admission Process", "Contact Details"]
    };
  }

  // 10. Contact Details
  if (
    /\b(contact|phone|number|mobile|email|office|call)\b/i.test(msg)
  ) {
    return {
      reply: "NSCET Contact Details:\n• Address: Vadapudupatti, Annanji (PO), Theni - 625531, Tamil Nadu\n• Phone: 04546 - 263900, 263901, 263902\n• Email: principal@nscet.org\n• Website: www.nscet.org",
      suggestions: ["Admission Process", "UG Courses", "TNEA Counselling Code", "College Location"]
    };
  }

  // 11. Principal
  if (
    /\b(principal|head\s*of\s*(the\s*)?institution)\b/i.test(msg)
  ) {
    return {
      reply: "The Principal of Nadar Saraswathi College of Engineering and Technology (NSCET) is Dr. C. Mathalai Raj, M.E., Ph.D.",
      suggestions: ["UG Courses", "College Location", "Contact Details", "Admission Process"]
    };
  }

  // 12. Department HODs
  if (/\b(hod|head of (the )?department|department head|dept head)\b/i.test(msg)) {
    if (/\b(cse|computer\s*science)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Computer Science and Engineering (CSE) is Dr. J. Mathalai Raj, M.E., Ph.D.",
        suggestions: ["CSE Faculty List", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(aids|ai\s*&\s*ds|ai\s*and\s*ds|artificial\s*intelligence|data\s*science)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Artificial Intelligence and Data Science (AI & DS) is Mr. L. S. Vignesh, M.E., (Ph.D).",
        suggestions: ["AI & DS Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(it|information\s*technology)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Information Technology (IT) is Dr. C. Prathap, M.Tech.",
        suggestions: ["IT Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(ece|electronics|electronics\s*&\s*communication)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Electronics and Communication Engineering (ECE) is Dr. T. Venishkumar, M.E., Ph.D.",
        suggestions: ["ECE Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(mech|mechanical|mechanical\s*engineering)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Mechanical Engineering is Dr. B. Radha krishnan, M.E., Ph.D.",
        suggestions: ["Mechanical Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(civil|civil\s*engineering)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Civil Engineering is Mr. N. Nagarathinam, M.E., (Ph.D).",
        suggestions: ["Civil Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(s&h|science\s*and\s*humanities|first\s*year)\b/i.test(msg)) {
      return {
        reply: "The Head of the Department (HOD) for Science and Humanities is Dr. Vembathurajesh, M.Sc., Ph.D.",
        suggestions: ["S&H Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    if (/\b(eee|electrical|electrical\s*&\s*electronics)\b/i.test(msg)) {
      return {
        reply: "Currently, no Head of Department is assigned for Electrical and Electronics Engineering (EEE).",
        suggestions: ["EEE Faculty", "UG Courses", "Admission Enquiry", "Contact Details"]
      };
    }
    return {
      reply: "Heads of Departments (HODs) at NSCET:\n• CSE: Dr. J. Mathalai Raj\n• AI & DS: Mr. L. S. Vignesh\n• IT: Dr. C. Prathap\n• ECE: Dr. T. Venishkumar\n• Mechanical: Dr. B. Radha krishnan\n• Civil: Mr. N. Nagarathinam\n• Science & Humanities: Dr. Vembathurajesh",
      suggestions: ["UG Courses", "Principal Details", "Admission Enquiry", "Contact Details"]
    };
  }

  // 13. ISPIN
  if (
    /\b(ispin|i-spin)\b/i.test(msg)
  ) {
    return {
      reply: "ISPIN is an advanced technical innovation and product incubator jointly driven by the CSE, IT, and AI&DS departments at NSCET, empowering students to build real-world software and hardware products.",
      suggestions: ["UG Courses", "College Events", "Contact Details"]
    };
  }

  // Default fallback for any other question
  return {
    reply: "Welcome to Nadar Saraswathi College of Engineering & Technology (NSCET), Theni (TNEA Code: 5865). We offer premier B.E./B.Tech & M.E. programs, state-of-the-art labs, top placements, hostel, and transport facilities. For detailed enquiries, please contact the college office at 04546-263900 or visit www.nscet.org.",
    suggestions: ["Admission Enquiry", "UG Courses", "TNEA Counselling Code", "Contact Details"]
  };
}

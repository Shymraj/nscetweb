import React, { useState, useEffect, useRef } from 'react';
import './TeachingFaculty.css';

const TeachingFaculty = () => {
  const programs = ['B.E. Programs','B.Tech Programs', 'M.E. Programs', 'Science & Humanities'];
  
  const programDepartments = {
    'B.E. Programs': ['B.E. - Computer Science Engineering', 'B.E. - Civil Engineering', 'B.E. - Mechanical Engineering', 'B.E. - Electronics and Communication Engineering', 'B.E. - Electrical and Electronics Engineering'],
    'B.Tech Programs': ['B.Tech - Information Technology', 'B.Tech - Artificial Intelligence & Data Science'],
    'M.E. Programs': ['M.E. - Computer Science Engineering', 'M.E. - Structural Engineering', 'M.E. - Manufacturing Engineering', 'M.E. - Embedded Systems and Technology'],
    'Science & Humanities': ['Science & Humanities']
  };

  const [activeProgram, setActiveProgram] = useState('B.E. Programs');
  const [activeDept, setActiveDept] = useState('B.E. - Computer Science Engineering');
  const [clickedCardId, setClickedCardId] = useState(null);
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null); 
  const scrollTimeout = useRef(null);

  useEffect(() => {
    setActiveDept(programDepartments[activeProgram][0]);
  }, [activeProgram]);

  // ============================================================================
  // DIRECT FACULTY DATA
  // All departments filled. Existing structures strictly untouched.
  const facultyData = [
    // --- B.Tech - Information Technology (Total: 8) ---
    { id: 1, name: "Mr. C. Prathap", qualifications: ["M.Tech.", "Ph.D"], department: "B.Tech - Information Technology", position: "  Professor", email: " prathapc@nscet.org", photo: "/IT/prathap c.jpg", isHOD: true },
    { id: 2, name: "Mr. R. Udhaya Kumar", qualifications: [" M.E , MBA, (Ph.D)"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: " udhayakumar@nscet.org", photo: "/IT/udhayakumar.jpg", isHOD: false },
    { id: 3, name: "Mr. N. Kesavamoorthy", qualifications: [" M.E"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "kesavamoorthy@nscet.org", photo: "/IT/kesavamoorthy.jpg", isHOD: false },
    { id: 4, name: "Mrs.Sai suganya", qualifications: ["M.TECH"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "saisuganya@nscet.org", photo: "/IT/sai suganya.jpg", isHOD: false },
    { id: 5, name: "Mrs. M Bhavani", qualifications: ["B.Tech"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "gmbhavani1990@gmail.com", photo: "/IT/Bhavani.jpg", isHOD: false },
    { id: 6, name: "Mrs. P. Jasmine Jose", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "jasminejose@nscet.org", photo: "/IT/jasminejose.png", isHOD: false },
    { id: 7, name: "Mrs. Arul Jothi .S", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "aruljothi@nscet.org", photo: "/IT/aruljothi.jpg", isHOD: false },
    { id: 8, name: "Mrs. Maahalakshmi . S", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "mahalakshmi@nscet.org", photo: "/IT/Mahalakshmi.jpg", isHOD: false },

    // --- B.Tech - Artificial Intelligence & Data Science (Total: 8) ---
    { id: 9, name: "Vignesh L S", qualifications: ["Ph.D", "M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: " Professor", email: "vigneshls@nscet.org", photo: "/AIDS/vignesh.jpg", isHOD: true },
    { id: 10, name: "Mr. J. Vinoth Kumar", qualifications: ["M.E., (Ph.D)"], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "vinothkumar@nscet.org", photo: "/AIDS/vinothkumar.jpg", isHOD: false },
    { id: 11, name: "Mrs. G. Geerthiga", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "geerthiga@nscet.org", photo: "/AIDS/Geerthiga.jpg", isHOD: false },
    { id: 12, name: "Mrs. M. Pavithra", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: " pavithra@nscet.org", photo: "/AIDS/Pavithra.jpg", isHOD: false },
    { id: 13, name: "Mrs.Sunitha S", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "sunitha.sagee@gmail.com", photo: "/AIDS/sunitha.jpg", isHOD: false },
    { id: 14, name: "Mr.Kodeeswaran S", qualifications: ["M.TECH "], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "mail2kodees@gmail.com", photo: "/AIDS/Kodeeswaran.jpeg", isHOD: false },
    { id: 15, name: "Mrs. Kanimoli J", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "kanimoli@nscet.org", photo: "/AIDS/kanimoli.jpg", isHOD: false },
    { id: 95, name: "Ms Nagajothi P", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "nagajothi@nscet.org", photo: "/AIDS/Nagajothi.jpg", isHOD: false },

    // --- B.E. - Computer Science Engineering (Total: 9) ---
    { id: 16, name: "Dr. J. Mathalai Raj", qualifications: ["M.E , Ph.D"], department: "B.E. - Computer Science Engineering", position: " Professer", email: "hodcse@nscet.org", photo: "/CSE/mathalairaj.jpg", isHOD: true },
    { id: 17, name: "Dr. K. Velkumar", qualifications: ["M.E,Ph.D"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "velkumar@nscet.org", photo: "/CSE/velkumar.jpg", isHOD: false },
    { id: 18, name: "Mrs. R. Archana", qualifications: ["M.E., (Ph.D)"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "archana@nscet.org", photo: "/CSE/archana.jpeg", isHOD: false },
    { id: 19, name: "Mrs. S. Abirami Kayathiri", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "abiramikayathiri@nscet.org", photo: "/CSE/abirami.jpeg", isHOD: false },
    { id: 20, name: "Mrs. M. Venkata Lakshmi", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "venkatalakshmi@nscet.org", photo: "/CSE/venkatalakshmi.JPG", isHOD: false },
    { id: 21, name: "Mrs. Anusuya V", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "anusuya@nscet.org", photo: "/CSE/ANUSUYA VAIRAMUTHU.jpg", isHOD: false },
    { id: 22, name: "Mrs. Vinothini V", qualifications: ["M.E"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "vinoramesh2703@gmail.com", photo: "/CSE/Vinothini.jpeg", isHOD: false },
    { id: 23, name: "Mrs. Snega Priyanka J S", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "snegapriyanka20@gmail.com", photo: "/CSE/Snega Priyanka.png", isHOD: false },
    { id: 84, name: "Mrs. Deepiga .K", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "deepiga@nscet.org", photo: "/CSE/deepika.jpg", isHOD: false },

    // --- B.E. - Civil Engineering (Total: 9) ---
    { id: 24, name: "Mr. N. Nagarathinam", qualifications: ["M. E., M. I. S. T. E., (Ph. D)"], department: "B.E. - Civil Engineering", position: " Professor ", email: "nagarathinam@nscet.org", photo: "/CIVIL/nagarathinam.jpg", isHOD: true },
    { id: 25, name: "Mrs. S. Gayathri", qualifications: ["M. E., M. I. S. T. E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "gayathri@nscet.org", photo: "/CIVIL/gayathri.jpg", isHOD: false },
    { id: 26, name: "Mr. R. Shanmugapriyan", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "shanmugapriyan@nscet.org", photo: "/CIVIL/shanmugapriyan.jpg", isHOD: false },
    { id: 28, name: "Mrs. M. Kanimozhi", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "kanimozhi@nscet.org", photo: "/CIVIL/kanimozhi.jpg", isHOD: false },
    { id: 29, name: "Mr. P. Arul Jebaraj", qualifications: ["M Tech"], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "aruljebaraj@nscet.org", photo: "/CIVIL/aruljebaraj.jpg", isHOD: false },
    { id: 30, name: "Mrs. R. Nathirun Sabinash", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "nathirunsabinash@nscet.org", photo: "/CIVIL/Nathira.jpg", isHOD: false },
    { id: 74, name: "Mr. T. Hariprasath", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "hariprasath@nscet.org", photo: "/CIVIL/hariprasath.jpg", isHOD: false },
    { id: 75, name: "Mrs. Sowmiya B", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "sowmiya@nscet.org", photo: "/CIVIL/sowmiya.jpg", isHOD: false },
    { id: 90, name: "Mr. Manojprabakar R", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "manojprabakar@nscet.org", photo: "/CIVIL/manojprabakar.jpg", isHOD: false },
  
    // --- B.E. - Mechanical Engineering (Total: 8) ---
    { id: 31, name: "Dr. B. Radha Krishnan", qualifications: ["M.E., Ph.D., MISTE., MIE."], department: "B.E. - Mechanical Engineering", position: "Professor ", email: "hodmech@nscet.org", photo: "/MECH/radhakrishnan.jpg", isHOD: true },
    { id: 32, name: "Mr. R. Nagaraja", qualifications: ["M.E., MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "nagaraja@nscet.org", photo: "/MECH/nagaraja.jpg", isHOD: false },
    { id: 33, name: "Mr. J. Chakaravarthy Samy Durai", qualifications: ["M.E., MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "chakravarthysamydurai@nscet.org", photo: "/MECH/chakravarthysamydurai.jpg", isHOD: false },
    { id: 34, name: "Mr. S. Harikishore", qualifications: ["M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "harikishore@nscet.org", photo: "/MECH/harikishore.jpg", isHOD: false },
    { id: 35, name: "Mr. V. Sivaganesan", qualifications: [" M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "sivaganesan@nscet.org", photo: "/MECH/sivaganesan.jpg", isHOD: false },
    { id: 36, name: "Dr. B. Nagarajan", qualifications: ["M.E., Ph.D,MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "nagarajan@nscet.org", photo: "/MECH/nagarajan.jpg", isHOD: false },
    { id: 37, name: "Mr. P. Surulimani", qualifications: [" M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "surulimanip@gmail.com", photo: "/MECH/Surulimani.jpg", isHOD: false },
    { id: 85, name: "Mr. R .Santhaseelan", qualifications: ["ME"], department: "M.E. - Mechanical Engineering", position: "Assistant Professor", email: "santhaseelan@nscet.org", photo: "/MECH/santhaseelan.jpg", isHOD: false },

    // --- B.E. - Electronics and Communication Engineering (Total: 9) ---
    { id: 41, name: "Dr. T. Venishkumar", qualifications: ["M.E., Ph.D"], department: "B.E. - Electronics and Communication Engineering", position: "Professor ", email: "venishkumar@nscet.org", photo: "/ECE/venishkumar.jpg", isHOD: true },
    { id: 42, name: "Dr. N. Mathavan", qualifications: ["B.Tech., ME., Ph.D"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/ECE/Mathavan.jpg", isHOD: false },
    { id: 43, name: "Mr. M. Idhayachandran", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/ECE/idhayachandran.jpg", isHOD: false },
    { id: 44, name: "Mr. S. Prathap", qualifications: ["M.E (PhD)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "prathaps@nscet.org", photo: "/ECE/prathap.jpg", isHOD: false },
    { id: 45, name: "Mr. R. Pradeep Kumar", qualifications: ["M.E (PhD)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "pradeepkumar@nscet.org", photo: "/ECE/pradeepkumar.jpg", isHOD: false },
    { id: 46, name: "Mrs. T. Tamil Selvi", qualifications: [" M.Tech., (Ph.D.)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "tamilselvi@nscet.org ", photo: "/ECE/tamilselvi.jpg", isHOD: false },
    { id: 47, name: "Mrs. P. Shantha Devi", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "shanthadevi@nscet.org", photo: "/ECE/shanthadevi.jpg", isHOD: false },
    { id: 48, name: "Mrs. P. Gowthami", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "gowthami@nscet.org", photo: "/ECE/gowthami.jpg", isHOD: false },
    { id: 91, name: "Mr. K. Bharathi Kannan", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "bharathikannan@nscet.org", photo: "/ECE/bharathikannan.jpg", isHOD: false },

    // --- B.E. - Electrical and Electronics Engineering (Total: 9) ---
    { id: 75, name: "Dr. R. Athilingam", qualifications: ["M.E","Ph.D"], department: "B.E. - Electrical and Electronics Engineering", position: "Professor ", email: "athilingam@nscet.org", photo: "/EEE/athilingam.jpg", isHOD: true },
    { id: 76, name: "Mr. R. Raja Karthick", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "rajakarthick@nscet.org", photo: "/EEE/raja_karthick.jpg", isHOD: false },
    { id: 77, name: "Mrs. A. Nishetha Jeflin Nixon", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: " nishethajeflinnixon@nscet.org", photo: "/EEE/Nishetha_jeflin_nixon.jpg", isHOD: false },
    { id: 78, name: "Mrs. M. Vijayalakshmi", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: " vijayalakshmi@nscet.org", photo: "/EEE/Vijayalakshmi.jpg", isHOD: false },
    { id: 79, name: "Mr. C. Shiva", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "shiva@nscet.org", photo: "/EEE/shiva.jpg", isHOD: false },
    { id: 80, name: "Mrs. N. Abirami", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "abiramin@nscet.org", photo: "/EEE/Abirami.jpg", isHOD: false },
    { id: 81, name: "Mrs. R. Chitra", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "chitrar@nscet.org", photo: "/EEE/chitra.jpg", isHOD: false },
    { id: 92, name: "Mrs. H. Juriya Banu", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "juriyabanu@nscet.org", photo: "/EEE/juriyabanu.jpg", isHOD: false },
    { id: 93, name: "Dr. N. Pandi Selvi", qualifications: [" M.E., Ph.D"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "pandiselvi@nscet.org", photo: "/EEE/pandiselvi.jpeg", isHOD: false },

    // --- M.E. - Computer Science Engineering (Total: 2) ---
    { id: 49, name: "Dr. M. Sathya", qualifications: ["Ph.D", "M.E."], department: "M.E. - Computer Science Engineering", position: "Vice Principal & Professor ", email: "msathya15@gmail.com", photo: "/ME CSE/sathya.jpeg", isHOD: false },
    { id: 50, name: "Mr. G. R. Naveenkarthick", qualifications: ["M.E."], department: "M.E. - Computer Science Engineering", position: "Assistant Professor", email: "grnaveenkarthick@gmail.com", photo: "/IT/karthick.jpeg", isHOD: false },

    // --- M.E. - Structural Engineering (Total: 2) 
    { id: 52, name: "Mrs. M. Sindhu", qualifications: ["M.E."], department: "M.E. - Structural Engineering", position: "Assistant Professor", email: "sindhu@nscet.org", photo: "/ME STRUCTURAL/sindhu.jpg", isHOD: false },
    { id: 94, name: "Mrs. K. Benita Merlin Isabella", qualifications: ["M.E."], department: "M.E. - Structural Engineering", position: "Assistant Professor", email: "benitamerlin22@gmail.com", photo: "/ME STRUCTURAL/Benita.jpg", isHOD: false },

    // --- M.E. - Manufacturing Engineering (Total: 2) ---
    { id: 53, name: " Dr. C. Mathalai Sundaram", qualifications: ["M. E.", "M. B. A.", "Ph.D", "  MISTE"], department: "M.E. - Manufacturing Engineering", position: "Principal & Professor", email: "principal@nscet.org", photo: "/ME MANUFACTURING/principle.png", isHOD: false },
    { id: 54, name: "Dr. A. Vennimalai Rajan", qualifications: ["M.E., Ph.D,MISTE."], department: "M.E. - Manufacturing Engineering", position: "Assistant Professor", email: "anandan@nscet.org", photo: "/MECH/Vennimalairajan.jpg", isHOD: false },

    // --- M.E. - Embedded Systems and Technology (Total: 2) ---
    { id: 55, name: "Dr. R. Athilingam", qualifications: ["Ph.D", "M.E."], department: "M.E. - Embedded Systems and Technology", position: " Asosiate Professor ", email: "athilingam@nscet.org", photo: "/EEE/athilingam.jpg", isHOD: false },
    { id: 56, name: "Mrs. S. Kalaivani", qualifications: ["M.E."], department: "M.E. - Embedded Systems and Technology", position: "Assistant Professor", email: "kalaivani@nscet.org", photo: "/ME EMBODDED SYSTEMS/kalaivani.jpg", isHOD: false },

    // --- Science & Humanities (Total: 31 Unique) ---
    { id: 59, name: "Dr. A. Vembathurajesh", qualifications: ["M.E.", "Ph.D", "MISTE"], department: "Science & Humanities", position: "Assistant Professor ", email: "vembathurajesh@nscet.org", photo: "/S&H/vembathurajesh.png", isHOD: true },
    { id: 60, name: "Dr. C. Chithra", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Professor & Co-Ordinator", email: "chithra.c@nscet.org", photo: "/S&H/CHITHRA.jpg", isHOD: false },
    { id: 61, name: "Dr. N. David Mathan", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Professor", email: "davidmathan@nscet.org", photo: "/S&H/davidmathan.jpg", isHOD: false },
    { id: 62, name: "Mr. R.C. Richard Britto", qualifications: ["M.A.", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "richardbritto@nscet.org", photo: "/S&H/richard britto.jpg", isHOD: false },
    { id: 63, name: "Mrs. T. Subathamani", qualifications: ["M.A.", "M.Phil", "B.Ed"], department: "Science & Humanities", position: "Assistant Professor", email: "subathamani@nscet.org", photo: "/S&H/Subathamani.png", isHOD: false },
    { id: 64, name: "Mrs. Arulvizhi", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "arulvizhimaths@gmail.com", photo: "/S&H/arulvizhi.jpg", isHOD: false },
    { id: 65, name: "Mr. R. Dhandayuthapani", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "rdpani2000@gmail.com", photo: "/S&H/dhandayuthapani.jpg", isHOD: false },
    { id: 66, name: "Mr. K. Rajaguru", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "rajaguru@nscet.org", photo: "/S&H/rajaguru.jpg", isHOD: false },
    { id: 67, name: "Dr. Devimeenakshi S", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "devimeenakshi84@gmail.com", photo: "/S&H/DEVI MEENAKSHI.jpg", isHOD: false },
    { id: 68, name: "Dr. Sumathra M", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "sumathravms@gmail.com", photo: "/S&H/Sumathra.jpeg", isHOD: false },
    { id: 69, name: "Mrs.Sangeetha V", qualifications: ["M.A."], department: "Science & Humanities", position: "Assistant Professor", email: "vijayansangeetha281985@gmail.com", photo: "/S&H/Sangeetha.jpeg", isHOD: false },
    { id: 70, name: "Mr.Arunkumar G", qualifications: ["M.E"], department: "Science & Humanities", position: "Assistant Professor", email: "arunkumarg@nscet.org", photo: "/S&H/arunkumar.jpg", isHOD: false },
    { id: 70, name: "Murugan M", qualifications: ["M.Sc"], department: "Science & Humanities", position: "Assistant Professor", email: "muruganmaths92@gmail.com", photo: "/S&H/Murugan.jpeg", isHOD: false },
    { id: 71, name: "Dr. Diana P", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "13diana83@gmail.com", photo: "/S&H/diana.jpg", isHOD: false },
    { id: 72, name: "Dr. Easwari M", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "easwariphy@gmail.com", photo: "/S&H/Easwari.jpeg", isHOD: false },
    { id: 73, name: "Ms. A. Iniya", qualifications: ["B.E.", "M.E."], department: "Science & Humanities", position: "Assistant Professor", email: "staff@nscet.org", photo: "/S&H/Iniya.jpeg", isHOD: false },
    { id: 74, name: "Dr. Srinithi S", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "staff@nscet.org", photo: "/S&H/Srinithi.jpeg", isHOD: false },
    { id: 76, name: "Mrs. N. Thisha", qualifications: ["B.A.", "M.A.", "NET"], department: "Science & Humanities", position: "Assistant Professor", email: "thisha@nscet.org", photo: "/S&H/thisha.jpeg", isHOD: false },
    { id: 77, name: "Mr. Ram Kumar K", qualifications: ["B.E.", "M.B.A."], department: "Science & Humanities", position: "Assistant Professor", email: "ramkumar@nscet.org", photo: "/S&H/ramkumar.jpeg", isHOD: false },
    { id: 78, name: "Mr. B. Mallaiyasamy", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Associate Professor", email: "mallaiyasamy@nscet.org", photo: "/S&H/mailysamy.jpg", isHOD: false },
    { id: 79, name: "Mrs. R. Karunyah", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "karunyah@nscet.org", photo: "/S&H/karunyah.jpg", isHOD: false },
    { id: 80, name: "Dr. Premkumar S.", qualifications: ["M.E., Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "vignesan@nscet.org", photo: "/S&H/Premkumar.jpg", isHOD: false },
    { id: 81, name: "Ms. Nandhini M.", qualifications: ["ME"], department: "Science & Humanities", position: "Assistant Professor", email: "benandhu10@gmail.com", photo: "/S&H/Nandini.jpeg", isHOD: false },
    { id: 82, name: "Dr. R. Saravanakumar", qualifications: ["M.SC.Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "saravanakumar@nscet.org", photo: "/S&H/Saravanakumar.png", isHOD: false },
    { id: 83, name: "Dr. S. Selvapriya", qualifications: ["M.A., M.Phil., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "selvapriyashailesh@gamil.com", photo: "/S&H/Selvapriya.jpg", isHOD: false },
    { id: 84, name: "Mrs. S. Reka", qualifications: ["M.A., M.Phil."], department: "Science & Humanities", position: "Professor", email: "subhalakshmireka@gamil.com", photo: "/S&H/Reka.jpg", isHOD: false },
    { id: 86, name: "Dr. P. Buvaneshwari", qualifications: ["B.Sc., M.Sc., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "buvaneshjeyam5@gmail.com", photo: "/S&H/Buvaneswarih.jpg", isHOD: false },
    { id: 87, name: "Dr. P. Malarvizhi", qualifications: ["M.A., M.Phil., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: " malarvizhi@nscet.org", photo: "/S&H/malarvizhi.jpg", isHOD: false },
    { id: 88, name: "Dr. R. Valarmathi", qualifications: [ "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "valarmathi@nscet.org", photo: "/S&H/Valar Mathi.jpg", isHOD: false },
    { id: 90, name: "Dr. S.R. Krishnamoorthi", qualifications: [" M.Sc., M.Phil., Ph.D., MISTE"], department: "Science & Humanities", position: "Assistant Professor", email: "krishnamoorthi@nscet.org", photo: "/S&H/krishnamoorthy.jpg", isHOD: false },
    { id: 89, name: "Ms .S.Rajeshshree", qualifications: ["M.E"], department: "Science & Humanities", position: "Assistant Professor", email: "rajeshshree@nscet.org", photo: "/ECE/Rajeshshree.jpeg", isHOD: false }
  ];

  const [facultiesState, setFacultiesState] = useState(facultyData);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/staff")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const apiStaff = data.data;
          let updatedData = [...facultyData];

          apiStaff.forEach(staff => {
            let mappedDept = staff.department;
            
            if (staff.department) {
              const deptLower = staff.department.toLowerCase();
              if (deptLower.includes('computer science') && deptLower.includes('m.e')) mappedDept = 'M.E. - Computer Science Engineering';
              else if (deptLower.includes('computer science') || deptLower.includes('cse')) mappedDept = 'B.E. - Computer Science Engineering';
              else if (deptLower.includes('information tech')) mappedDept = 'B.Tech - Information Technology';
              else if (deptLower.includes('artificial intelligence') || deptLower.includes('ai & ds')) mappedDept = 'B.Tech - Artificial Intelligence & Data Science';
              else if (deptLower.includes('civil') && deptLower.includes('structural')) mappedDept = 'M.E. - Structural Engineering';
              else if (deptLower.includes('civil')) mappedDept = 'B.E. - Civil Engineering';
              else if (deptLower.includes('mechanical') && deptLower.includes('manufacturing')) mappedDept = 'M.E. - Manufacturing Engineering';
              else if (deptLower.includes('mechanical')) mappedDept = 'B.E. - Mechanical Engineering';
              else if (deptLower.includes('electronics and communication')) mappedDept = 'B.E. - Electronics and Communication Engineering';
              else if (deptLower.includes('electrical') && deptLower.includes('embedded')) mappedDept = 'M.E. - Embedded Systems and Technology';
              else if (deptLower.includes('electrical')) mappedDept = 'B.E. - Electrical and Electronics Engineering';
              else if (deptLower.includes('science') && deptLower.includes('humanities')) mappedDept = 'Science & Humanities';
            }

            const normalizeName = (name) => name.replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
            const staffNorm = normalizeName(staff.name);
            
            const existingIndex = updatedData.findIndex(localStaff => {
              const localNorm = normalizeName(localStaff.name);
              return localNorm.includes(staffNorm) || staffNorm.includes(localNorm);
            });

            const newStaffEntry = {
              id: existingIndex !== -1 ? updatedData[existingIndex].id : staff.id.toString() + 'api',
              name: staff.name,
              qualifications: staff.qualifications ? staff.qualifications.split(',') : (existingIndex !== -1 ? updatedData[existingIndex].qualifications : []),
              department: mappedDept,
              position: staff.designation || (existingIndex !== -1 ? updatedData[existingIndex].position : "Assistant Professor"),
              email: staff.email || (existingIndex !== -1 ? updatedData[existingIndex].email : ""),
              photo: (existingIndex !== -1 && updatedData[existingIndex].photo) ? updatedData[existingIndex].photo : (staff.photo_url ? `http://localhost:5000${staff.photo_url}` : "https://via.placeholder.com/150"),
              isHOD: staff.is_hod === 1 || staff.is_hod === true || staff.is_hod === '1' || staff.is_hod === 'true'
            };

            if (existingIndex !== -1) {
              updatedData[existingIndex] = newStaffEntry;
            } else {
              updatedData.push(newStaffEntry);
            }
          });

          setFacultiesState(updatedData);
        }
      })
      .catch(err => console.error("Error fetching staff:", err));
  }, []);

  // Filtering data for the selected department
  const currentFaculty = facultiesState.filter(staff => staff.department === activeDept);
  const hod = currentFaculty.find(staff => staff.isHOD);
  const regularStaffs = currentFaculty.filter(staff => !staff.isHOD);

  // Requirement 3: 4 cards-kku mela iruntha mattum auto-move (marquee) aaganum
  const shouldAnimate = regularStaffs.length > 4;

  // JS Auto-Scroll Logic - ithu shouldAnimate-kku keela thaan irukkanum
  useEffect(() => {
    const track = scrollRef.current;
    if (!track || !shouldAnimate) return;

    const startScroll = () => {
      clearInterval(scrollInterval.current); // Double speed aagama thadukka
      scrollInterval.current = setInterval(() => {
        if (track) {
          track.scrollLeft += 1;
          if (track.scrollLeft >= track.scrollWidth / 2) {
            track.scrollLeft = 0;
          }
        }
      }, 35);
    };

    startScroll();

    const pauseScroll = () => {
      clearInterval(scrollInterval.current);
      clearTimeout(scrollTimeout.current); // Touch timeout-aiyum stop panrom
    };

    // Finger-a edutha udane start aagama, 1.5 seconds wait panni start aagum
    const resumeScrollDelay = () => {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        startScroll();
      }, 1500); 
    };

    // Mouse ulla vecha (Desktop) OR touch panna (Mobile) pause aaganum
    track.addEventListener('mouseenter', pauseScroll);
    track.addEventListener('mouseleave', startScroll);
    track.addEventListener('touchstart', pauseScroll, { passive: true });
    track.addEventListener('touchend', resumeScrollDelay, { passive: true }); // <-- Delay function inga varum

    return () => {
      clearInterval(scrollInterval.current);
      clearTimeout(scrollTimeout.current);
      track.removeEventListener('mouseenter', pauseScroll);
      track.removeEventListener('mouseleave', startScroll);
      track.removeEventListener('touchstart', pauseScroll);
      track.removeEventListener('touchend', resumeScrollDelay);
    };
  }, [shouldAnimate, activeDept]);
  
  const handleCardClick = (id) => {
    setClickedCardId(id);
    setTimeout(() => {
      setClickedCardId(null);
    }, 400); 
  };

  const slideCards = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 290; 
      
      // Button click pannum pothu palaya actions-a strict-a cancel panrom (speed koodama irukka)
      if (shouldAnimate) {
        clearInterval(scrollInterval.current);
        clearTimeout(scrollTimeout.current);
      }

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });

      // Scroll mudinjathum auto-scroll thirumba start aaganum
      if (shouldAnimate) {
        scrollTimeout.current = setTimeout(() => {
          scrollInterval.current = setInterval(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft += 1;
              if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                scrollRef.current.scrollLeft = 0;
              }
            }
          }, 30); // <-- Inga ungalukku thevayana speed number-a vechikonga (e.g., 25 or 30)
        }, 600);
      }
    }
  };

  const renderScrollCards = () => {
    if (regularStaffs.length === 0) return null;

    // Requirement 3: Duplicate loopStaffs only if more than 4 cards exist
    const loopStaffs = shouldAnimate ? [...regularStaffs, ...regularStaffs] : regularStaffs;

    return loopStaffs.map((staff, index) => (
      <div 
        key={`scroll-${staff.id}-${index}`} 
        className={`tf-staff-card ${clickedCardId === staff.id ? 'card-zoom-animation' : ''}`}
        onClick={() => handleCardClick(staff.id)}
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <img 
          src={staff.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=1e3a8a&color=fff&size=150`} 
          alt={staff.name} 
          className="tf-staff-img" 
          onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=1e3a8a&color=fff&size=150`; }} 
        />
        
        {/* Added standard flex wrapper with fixed min-heights so items stay perfectly aligned inline */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', alignItems: 'center' }}>
          <h4 className="tf-staff-name" style={{ minHeight: '48px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '10px 0 5px' }}>
            {staff.name}
          </h4>
          <p className="tf-staff-pos" style={{ minHeight: '24px', textAlign: 'center', margin: '0 0 10px' }}>
            {staff.position}
          </p>
          
          <div className="tf-qual-badges tf-center-badges" style={{ minHeight: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'flex-start', width: '100%' }}>
            <span className="tf-badge-outline" style={{ margin: '2px' }}>{staff.qualifications.join(', ')}</span>
          </div>
        </div>

        {/* Email ID strict straight bottom alignment (marginTop: auto pushes it to bottom edge) */}
        <div className="tf-contact-item-small" style={{ marginTop: '10px', justifyContent: 'center', width: '100%', paddingBottom: '10px' }}>
          <span className="tf-icon">✉️</span> 
          <a href={`mailto:${staff.email.trim()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {staff.email}
          </a>
        </div>
      </div>
    )); 
  };

  return (
    <div className="tf-page-wrapper">
      <div className="tf-container">
        
        <div className="tf-nav-section">
          <h1 className="tf-main-title">Faculty Directory</h1>
          
          <div className="tf-pill-nav-container">
            <div 
              className="tf-pill-active-bg" 
              style={{ transform: `translateX(${programs.indexOf(activeProgram) * 100}%)` }}
            ></div>
            
            {programs.map((prog, index) => (
              <button
                key={index}
                className={`tf-pill-btn ${activeProgram === prog ? 'active' : ''}`}
                onClick={() => setActiveProgram(prog)}
              >
                {prog}
              </button>
            ))}
          </div>
        </div>

        <div className="tf-sub-nav-container" key={activeProgram}>
          {programDepartments[activeProgram].map((dept, index) => (
            <button 
              key={dept} 
              className={`tf-sub-nav-btn animated-list-item ${activeDept === dept ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveDept(dept)}
            >
              {dept.includes('-') ? dept.split('-')[1].trim() : dept}
            </button>
          ))}
        </div>

        {/* Combined Layout: HOD on left, scrolling slider on right */}
        {(hod || regularStaffs.length > 0) && (
          <div className="tf-faculty-layout-wrapper">
            
            {hod && (
              <div className="tf-hod-fixed-wrapper fade-in" style={{ alignSelf: 'flex-end', marginBottom: '30px', marginTop: '16px' }}>
                <div className="tf-staff-card tf-hod-special-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <img 
                    src={hod.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(hod.name)}&background=1e3a8a&color=fff&size=150`} 
                    alt={hod.name} 
                    className="tf-staff-img tf-hod-img-small" 
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://ui-avatars.com/api/?name=${encodeURIComponent(hod.name)}&background=1e3a8a&color=fff&size=150`; }} 
                  />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                    <h4 className="tf-staff-name" style={{ minHeight: '48px', display: 'flex', alignItems: 'center', textAlign: 'center', margin: '10px 0 5px' }}>
                      {hod.name}
                    </h4>
                    <div className="tf-hod-badge">HEAD OF DEPARTMENT</div>
                    <p className="tf-staff-pos tf-hod-pos" style={{ minHeight: '24px', textAlign: 'center', margin: '0 0 10px' }}>
                      {hod.position}
                    </p>
                    
                    <div className="tf-qual-badges tf-center-badges" style={{ minHeight: '60px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'flex-start', width: '100%' }}>
                      <span className="tf-badge-outline tf-hod-badge-outline" style={{ margin: '2px' }}>{hod.qualifications.join(', ')}</span>
                    </div>
                  </div>

                  <div className="tf-contact-item-small" style={{ marginTop: '10px', justifyContent: 'center', width: '100%', paddingBottom: '10px' }}>
                    <span className="tf-icon tf-hod-icon">✉️</span> 
                    <a href={`mailto:${hod.email.trim()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {hod.email}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {regularStaffs.length > 0 && (
              <div className="tf-slider-wrapper">
                <div className="tf-staff-section-header">
                  <h3 className="tf-section-title">Faculty Members</h3> 
                </div>

                {/* Requirement 2: Static Outer Container */}
                <div className="tf-slider-container">
                  <button className="tf-slider-btn left" onClick={() => slideCards('left')}>&#10094;</button>
                  
                  <div 
                    className="tf-scroll-track" 
                    ref={scrollRef}
                    style={{ overflowX: 'auto' }} 
                  >
                    {renderScrollCards()}
                  </div>
                  
                  <button className="tf-slider-btn right" onClick={() => slideCards('right')}>&#10095;</button>
                </div>
              </div>
            )}
            
          </div>
        )}

      </div>
    </div>
  );
};

export default TeachingFaculty;
import React, { useState, useEffect, useRef } from 'react';
import './TeachingFaculty.css';

const TeachingFaculty = () => {
  const programs = ['B.E. Programs','B.Tech Programs', 'M.E. Programs', 'Ph.D Programs', 'Science & Humanities'];
  
  const programDepartments = {
    'B.E. Programs': ['B.E. - Computer Science Engineering', 'B.E. - Civil Engineering', 'B.E. - Mechanical Engineering', 'B.E. - Electronics and Communication Engineering', 'B.E. - Electrical and Electronics Engineering'],
    'B.Tech Programs': ['B.Tech - Information Technology', 'B.Tech - Artificial Intelligence & Data Science'],
    'M.E. Programs': ['M.E. - Computer Science Engineering', 'M.E. - Structural Engineering', 'M.E. - Manufacturing Engineering', 'M.E. - Embedded Systems and Technology'],
    'Ph.D Programs': ['Ph.D Mechanical Engineering'],
    'Science & Humanities': ['Science & Humanities']
  };

  const [activeProgram, setActiveProgram] = useState('B.E. Programs');
  const [activeDept, setActiveDept] = useState('B.E. - Computer Science Engineering');
  const [clickedCardId, setClickedCardId] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    setActiveDept(programDepartments[activeProgram][0]);
  }, [activeProgram]);

  // ============================================================================
  // DIRECT FACULTY DATA
  // All departments filled. Existing structures strictly untouched.
  // Science & Humanities strictly adjusted to 34 UNIQUE cards.
  // ============================================================================
  const facultyData = [
    // --- B.Tech - Information Technology (Total: 8) ---
    { id: 1, name: "Mr. C. Prathap", qualifications: ["M.Tech.", "Ph.D"], department: "B.Tech - Information Technology", position: " Assistant Professor & Head [I/C]", email: " prathapc@nscet.org", photo: "/Prathap C.jpg", isHOD: true },
    { id: 2, name: "Mr. R. Udhaya Kumar", qualifications: [" M.E (CSE), MBA (ITM), (Ph.D)"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: " udhayakumar@nscet.org", photo: "/udhayakumar.jpg", isHOD: false },
    { id: 3, name: "Mr. N. Kesavamoorthy", qualifications: [" M.E (CSE)"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "kesavamoorthy@nscet.org", photo: "/kesavamoorthy.jpg", isHOD: false },
    { id: 4, name: "B. SAI SUGANYA", qualifications: ["M.TECH"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "saisuganya@nscet.org", photo: "/sai suganya.jpg", isHOD: false },
    { id: 5, name: "Mrs. M Bhavani", qualifications: ["B.Tech"], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "gmbhavani1990@gmail.com", photo: "/bhavani.jpg", isHOD: false },
    { id: 6, name: "Mrs. P. Jasmine Jose", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "jasminejose@nscet.org", photo: "/jasminejose.jpg", isHOD: false },
    { id: 7, name: "Staff 6", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "staff6@nscet.org", photo: "/faculty/default.jpg", isHOD: false },
    { id: 8, name: "Staff 7", qualifications: ["M.E."], department: "B.Tech - Information Technology", position: "Assistant Professor", email: "staff7@nscet.org", photo: "/faculty/default.jpg", isHOD: false },

    // --- B.Tech - Artificial Intelligence & Data Science (Total: 7) ---
    { id: 9, name: "Mr. L.S. Vignesh", qualifications: ["Ph.D", "M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor & Head [I/C]", email: " hodai_ds@nscet.org", photo: "/vignesh.jpg", isHOD: true },
    { id: 10, name: "Mr. J. Vinoth Kumar", qualifications: ["M.E., (Ph.D)"], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "vinothkumar@nscet.org", photo: "/vinothkumar.jpg", isHOD: false },
    { id: 11, name: " Mrs. G. Geerthiga", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "geerthiga@nscet.org", photo: "/Geerthiga.jpg", isHOD: false },
    { id: 12, name: ": Mrs. M. Pavithra", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: " pavithra@nscet.org", photo: "/Pavithra.jpg", isHOD: false },
    { id: 13, name: "Sunitha S", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "sunitha.sagee@gmail.com", photo: "/Sunitha.jpeg", isHOD: false },
    { id: 14, name: "Kodeeswaran S", qualifications: ["M.TECH "], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "mail2kodees@gmail.com", photo: "/Kodeeswaran.jpeg", isHOD: false },
    { id: 15, name: "Staff 6", qualifications: ["M.E."], department: "B.Tech - Artificial Intelligence & Data Science", position: "Assistant Professor", email: "staff@nscet.org", photo: "/faculty/default.jpg", isHOD: false },

    // --- B.E. - Computer Science Engineering (Total: 8) ---
    { id: 16, name: "Dr. J. Mathalai Raj", qualifications: ["M.E (CSE), Ph.D"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor & Head [I/C]", email: "hodcse@nscet.org", photo: "/mathalairaj.jpg", isHOD: true },
    { id: 17, name: "Mr. K. Velkumar", qualifications: ["M.E,(Ph.D)"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "velkumar@nscet.org", photo: "/Velkumar.JPG", isHOD: false },
    { id: 18, name: "Mrs. R. Archana", qualifications: ["M.E., (Ph.D)"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "archana@nscet.org", photo: "/archana.jpg", isHOD: false },
    { id: 19, name: "Ms. S. Abirami Kayathiri", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "abiramikayathiri@nscet.org", photo: "/abirami.jpeg", isHOD: false },
    { id: 20, name: "Mrs. M. Venkata Lakshmi", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "venkatalakshmi@nscet.org", photo: "/venkatalakshmi.JPG", isHOD: false },
    { id: 21, name: " Anusuya V", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "anusuya@nscet.org", photo: "/anusuya.jpeg", isHOD: false },
    { id: 22, name: " Vinothini V", qualifications: ["M.E - Software"], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "vinoramesh2703@gmail.com", photo: "/Vinothini.jpeg", isHOD: false },
    { id: 23, name: "Snega Priyanka J S", qualifications: ["M.E."], department: "B.E. - Computer Science Engineering", position: "Assistant Professor", email: "snegapriyanka20@gmail.com", photo: "/Snega Priyanka.png", isHOD: false },

    // --- B.E. - Civil Engineering (Total: 9) ---
    { id: 24, name: "Mr. N. Nagarathinam", qualifications: ["M. E., M. I. S. T. E., (Ph. D)"], department: "B.E. - Civil Engineering", position: "Assistant Professor & Head [I/C]", email: "nagarathinam@nscet.org", photo: "/nagarathinam.jpg", isHOD: true },
    { id: 25, name: "Mrs. S. Gayathri", qualifications: ["M. E., M. I. S. T. E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "gayathri@nscet.org", photo: "/gayathri.jpg", isHOD: false },
    { id: 26, name: "Mr. R. Shanmugapriyan", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "shanmugapriyan@nscet.org", photo: "/shanmugapriyan.jpg", isHOD: false },
    { id: 27, name: "Mrs. B. Sowmiya", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "sowmiya@nscet.org",  photo: "/sowmiya.jpg", isHOD: false },
    { id: 28, name: " Mrs. M. Kanimozhi", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "kanimozhi@nscet.org", photo: "/kanimozhi.jpg", isHOD: false },
    { id: 29, name: "Mr. P. Arul Jebaraj", qualifications: ["M Tech"], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "aruljebaraj@nscet.org", photo: "/aruljebaraj.jpg", isHOD: false },
    { id: 30, name: "Mrs. R. Nathirun Sabinash", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "nathirunsabinash@nscet.org", photo: "/nathirunsabinash.jpg", isHOD: false },
    { id: 74, name: "Mr. T. Hariprasath", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "hariprasath@nscet.org", photo: "/hariprasath.jpg", isHOD: false },
    { id: 90, name: "Mr. R. Manoj Prabakar", qualifications: ["M.E."], department: "B.E. - Civil Engineering", position: "Assistant Professor", email: "manojprabakar@nscet.org", photo: "/vinothkumar.jpg", isHOD: false },
  
    // --- B.E. - Mechanical Engineering (Total: 11) ---
    { id: 31, name: "Dr. B. Radha Krishnan", qualifications: ["M.E., Ph.D., MISTE., MIE."], department: "B.E. - Mechanical Engineering", position: "Professor & Head [I/C]", email: "hodmech@nscet.org", photo: "/radhakrishnan.jpg", isHOD: true },
    { id: 32, name: "Mr. R. Nagaraja", qualifications: ["M.E., MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "nagaraja@nscet.org", photo: "/nagaraja.jpg", isHOD: false },
    { id: 33, name: "Mr. J. Chakaravarthy Samy Durai", qualifications: ["M.E., MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "chakravarthysamydurai@nscet.org", photo: "/chakravarthysamydurai.jpg", isHOD: false },
    { id: 34, name: "Mr. S. Harikishore", qualifications: ["M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "harikishore@nscet.org", photo: "/harikishore.jpg", isHOD: false },
    { id: 35, name: "Mr. V. Sivaganesan", qualifications: [" M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "sivaganesan@nscet.org", photo: "/sivaganesan.jpg", isHOD: false },
    { id: 36, name: "Dr. B. Nagarajan", qualifications: ["M.E., Ph.D,MISTE."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "nagarajan@nscet.org", photo: "/nagarajan.jpg", isHOD: false },
    { id: 37, name: "Mr. P. Surulimani", qualifications: [" M.E., MISTE"], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "surulimanip@gmail.com", photo: "/Surulimani.jpg", isHOD: false },
    { id: 38, name: "Staff 7", qualifications: ["M.E."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/faculty/default.jpg", isHOD: false },
    { id: 39, name: "Staff 8", qualifications: ["M.E."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/faculty/default.jpg", isHOD: false },
    { id: 40, name: "Staff 9", qualifications: ["M.E."], department: "B.E. - Mechanical Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/faculty/default.jpg", isHOD: false },

    // --- B.E. - Electronics and Communication Engineering (Total: 9) ---
    { id: 41, name: "Dr. T. Venishkumar", qualifications: ["M.E., Ph.D"], department: "B.E. - Electronics and Communication Engineering", position: "Associate Professor & Head [I/C]", email: "venishkumar@nscet.org", photo: "/venishkumar.jpg", isHOD: true },
    { id: 42, name: " Dr. N. Mathavan", qualifications: ["B.Tech., ME., Ph.D"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/Mathavan.jpg", isHOD: false },
    { id: 43, name: "Mr. M. Idhayachandran", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "staff@nscet.org", photo: "/idhayachandran.jpg", isHOD: false },
    { id: 44, name: "Mr. S. Prathap", qualifications: ["M.E (PhD)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "prathaps@nscet.org", photo: "/prathap.jpg", isHOD: false },
    { id: 45, name: "Mr. R. Pradeep Kumar", qualifications: ["M.E (PhD)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "pradeepkumar@nscet.org", photo: "/pradeepkumar.jpg", isHOD: false },
    { id: 46, name: "Mrs. T. Tamil Selvi", qualifications: [" M.Tech., (Ph.D.)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "tamilselvi@nscet.org ", photo: "/tamilselvi.jpg", isHOD: false },
    { id: 47, name: "Mrs. P. Shantha Devi", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "shanthadevi@nscet.org", photo: "/shanthadevi.jpg", isHOD: false },
    { id: 48, name: "Mrs. P. Gowthami", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "gowthami@nscet.org", photo: "/gowthami.jpg", isHOD: false },
    { id: 91, name: " Mr. K. Bharathi Kannan", qualifications: ["M.E."], department: "B.E. - Electronics and Communication Engineering", position: "Assistant Professor", email: "bharathikannan@nscet.org", photo: "/bharathikannan.jpg", isHOD: false },

    // --- B.E. - Electrical and Electronics Engineering (Total: 9) ---
    { id: 75, name: "Mr. K. Ganesh", qualifications: ["M.E., (Ph.D.)"], department: "B.E. - Electrical and Electronics Engineering", position: "Professor & Head", email: "ganesh@nscet.org", photo: "/ganesh.jpg", isHOD: true },
    { id: 76, name: " Mr. R. Raja Karthick", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "rajakarthick@nscet.org", photo: "/raja_karthick.jpg", isHOD: false },
    { id: 77, name: "Mrs. A. Nishetha Jeflin Nixon", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: " nishethajeflinnixon@nscet.org", photo: "/Nishetha_jeflin_nixon.jpg", isHOD: false },
    { id: 78, name: " Mrs. M. Vijayalakshmi", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: " vijayalakshmi@nscet.org", photo: "/Vijayalakshmi.jpg", isHOD: false },
    { id: 79, name: "Mr. C. Shiva", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "shiva@nscet.org", photo: "/shiva.jpg", isHOD: false },
    { id: 80, name: "Mrs. N. Abirami", qualifications: [" M.E., (Ph.D.)"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "abiramin@nscet.org", photo: "/Abirami.jpg", isHOD: false },
    { id: 81, name: "Mrs. R. Chitra", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "chitrar@nscet.org", photo: "/chitra.jpg", isHOD: false },
    { id: 92, name: " Mrs. H. Juriya Banu", qualifications: ["M.E."], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "juriyabanu@nscet.org", photo: "/juriyabanu.jpg", isHOD: false },
    { id: 93, name: " Dr. N. Pandi Selvi", qualifications: ["B.E., M.E., Ph.D"], department: "B.E. - Electrical and Electronics Engineering", position: "Assistant Professor", email: "pandiselvi@nscet.org", photo: "/pandiselvi.jpeg", isHOD: false },

    // --- M.E. - Computer Science Engineering (Total: 2) ---
    { id: 49, name: "Dr. M. Sathya", qualifications: ["Ph.D", "M.E."], department: "M.E. - Computer Science Engineering", position: "Professor & Head", email: "hodit@nscet.org", photo: "/sathya.jpeg", isHOD: true },
    { id: 50, name: "Mr. G. R. Naveenkarthick", qualifications: ["M.E."], department: "M.E. - Computer Science Engineering", position: "Assistant Professor", email: "grnaveenkarthick@gmail.com", photo: "/naveenkarthick.jpeg", isHOD: false },

    // --- M.E. - Structural Engineering (Total: 2) ---
    { id: 51, name: "Dr. E. Anantha Krishnan", qualifications: ["M. E.", "Ph. D."], department: "M.E. - Structural Engineering", position: "Professor & Head", email: "ananthakrishnan@nscet.org", photo: "/ananthakrishnan.jpg", isHOD: true },
    { id: 52, name: "Mrs. M. Sindhu", qualifications: ["M.E."], department: "M.E. - Structural Engineering", position: "Assistant Professor", email: "sindhu@nscet.org", photo: "/sindhu.jpg", isHOD: false },
    { id: 94, name: "Mrs. K. Benita Merlin Isabella", qualifications: ["M.E."], department: "M.E. - Structural Engineering", position: "Assistant Professor", email: "benitamerlin22@gmail.com", photo: "/Benita.jpg", isHOD: false },

    // --- M.E. - Manufacturing Engineering (Total: 2) ---
    { id: 53, name: " Dr. C. Mathalai Sundaram", qualifications: ["M. E.", "M. B. A.", "Ph. D.", "  MISTE"], department: "M.E. - Manufacturing Engineering", position: "Principal & Professor", email: "principal@nscet.org", photo: "/principle.png", isHOD: true },
    { id: 54, name: "Dr. A. Vennimalai Rajan", qualifications: ["M.E., Ph.D,MISTE."], department: "M.E. - Manufacturing Engineering", position: "Assistant Professor", email: "anandan@nscet.org", photo: "/Vennimalairajan.jpg", isHOD: false },

    // --- M.E. - Embedded Systems and Technology (Total: 2) ---
    { id: 55, name: "Dr. R. Athilingam", qualifications: ["Ph.D", "M.E."], department: "M.E. - Embedded Systems and Technology", position: " Associate Professor & Head [I/C]", email: "athilingam@nscet.org", photo: "/athilingam.jpg", isHOD: true },
    { id: 56, name: "Mrs. S. Kalaivani", qualifications: ["M.E."], department: "M.E. - Embedded Systems and Technology", position: "Assistant Professor", email: "kalaivani@nscet.org", photo: "/kalaivani.jpg", isHOD: false },

    // --- Ph.D Mechanical Engineering (Total: 2) ---
    { id: 57, name: "Dr. P. Rajendran", qualifications: ["Ph.D", "M.E."], department: "Ph.D Mechanical Engineering", position: "Professor & Head", email: "hod.phdmech@nscet.org", photo: "/faculty/default.jpeg", isHOD: true },
    { id: 58, name: "Dr. M. Selvam", qualifications: ["Ph.D", "M.E."], department: "Ph.D Mechanical Engineering", position: "Professor", email: "selvam@nscet.org", photo: "/faculty/default.jpeg", isHOD: false },

    // --- Science & Humanities (Total: 34 Unique) ---
    { id: 59, name: "Dr. A. Vembathurajesh", qualifications: ["M.E.", "Ph.D", "MISTE"], department: "Science & Humanities", position: "Assistant Professor & Head [I/C]", email: "vembathurajesh@nscet.org", photo: "/vembathurajesh.png", isHOD: true },
    { id: 60, name: "Dr. C. Chithra", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Professor & Co-Ordinator", email: "chithra.c@nscet.org", photo: "/drchitra.jpg", isHOD: false },
    { id: 61, name: "Dr. N. David Mathan", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Professor", email: "davidmathan@nscet.org", photo: "/davidmathan.jpg", isHOD: false },
    { id: 62, name: "Mr. R.C. Richard Britto", qualifications: ["M.A.", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "richardbritto@nscet.org", photo: "/richard britto.jpg", isHOD: false },
    { id: 63, name: "Mrs. T. Subathamani", qualifications: ["M.A.", "M.Phil", "B.Ed"], department: "Science & Humanities", position: "Assistant Professor", email: "subathamani@nscet.org", photo: "/Subathamani.png", isHOD: false },
    { id: 64, name: "Mrs. Arulvizhi", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "arulvizhimaths@gmail.com", photo: "/arulvizhi.jpg", isHOD: false },
    { id: 65, name: "Mr. R. Dhandayuthapani", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "rdpani2000@gmail.com", photo: "/dhandayuthapani.jpg", isHOD: false },
    { id: 66, name: "Mr. K. Rajaguru", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "staff@nscet.org", photo: "/rajaguru.jpg", isHOD: false },
    { id: 67, name: "Dr. Devimeenakshi S", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "devimeenakshi84@gmail.com", photo: "/DEVI MEENAKSHI.jpg", isHOD: false },
    { id: 68, name: "Dr. Sumathra M", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "sumathravms@gmail.com", photo: "/Sumathra.jpeg", isHOD: false },
    { id: 69, name: "Sangeetha V", qualifications: ["M.A.", "English"], department: "Science & Humanities", position: "Assistant Professor", email: "vijayansangeetha281985@gmail.com", photo: "/Sangeetha.jpeg", isHOD: false },
    { id: 70, name: "Murugan M", qualifications: ["M.Sc"], department: "Science & Humanities", position: "Assistant Professor", email: "muruganmaths92@gmail.com", photo: "/Murugan.jpeg", isHOD: false },
    { id: 71, name: "Dr. Diana P", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "13diana83@gmail.com", photo: "/Diana.jpg", isHOD: false },
    { id: 72, name: "Dr. Easwari M", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "easwariphy@gmail.com", photo: "/Easwari.jpeg", isHOD: false },
    { id: 73, name: "Ms. A. Iniya", qualifications: ["B.E.", "M.E."], department: "Science & Humanities", position: "Assistant Professor", email: "staff@nscet.org", photo: "/Iniya.jpeg", isHOD: false },
    { id: 74, name: "Dr. Srinithi S", qualifications: ["M.Sc", "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "staff@nscet.org", photo: "/srinithi.jpeg", isHOD: false },
    { id: 75, name: "Mrs. S. Rajeshshree", qualifications: ["B.E.", "M.E."], department: "Science & Humanities", position: "Assistant Professor", email: "rajeshshree@nscet.org", photo: "/Rajeshshree.jpeg", isHOD: false },
    { id: 76, name: "Mrs. N. Thisha", qualifications: ["B.A.", "M.A.", "NET"], department: "Science & Humanities", position: "Assistant Professor", email: "thisha@nscet.org", photo: "/thisha.jpeg", isHOD: false },
    { id: 77, name: "Mr. Ram Kumar K", qualifications: ["B.E.", "M.B.A."], department: "Science & Humanities", position: "Assistant Professor", email: "ramkumar@nscet.org", photo: "/ramkumar.jpeg", isHOD: false },
    { id: 78, name: "Mr. B. Mallaiyasamy", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Associate Professor", email: "mallaiyasamy@nscet.org", photo: "/mailysamy.jpg", isHOD: false },
    { id: 79, name: "Mrs. R. Karunyah", qualifications: ["M.Sc", "M.Phil"], department: "Science & Humanities", position: "Assistant Professor", email: "karunyah@nscet.org", photo: "/karunyah.jpg", isHOD: false },
    { id: 80, name: "Dr. Premkumar S.", qualifications: ["M.E., Ph.D(Civil)"], department: "Science & Humanities", position: "Assistant Professor", email: "vignesan@nscet.org", photo: "/Premkumar.jpg", isHOD: false },
    { id: 81, name: "Ms. Nandhini M.", qualifications: ["ME(CSE)."], department: "Science & Humanities", position: "Assistant Professor", email: "benandhu10@gmail.com", photo: "/Nandini.jpeg", isHOD: false },
    { id: 82, name: "Dr. R. Saravanakumar", qualifications: ["M.SC.Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "saravanakumar@nscet.org", photo: "/saravanakumar.png", isHOD: false },
    { id: 83, name: "Dr. S. Selvapriya", qualifications: ["M.A., M.Phil., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "selvapriyashailesh@gamil.com", photo: "/Selvapriya.jpg", isHOD: false },
    { id: 84, name: "Mrs. S. Reka", qualifications: ["M.A., M.Phil."], department: "Science & Humanities", position: "Professor", email: "subhalakshmireka@gamil.com", photo: "/Reka.jpg", isHOD: false },
    { id: 85, name: " Mr. G. Arun Kumar", qualifications: ["ME"], department: "Science & Humanities", position: "Assistant Professor", email: "arunkumar1603@gmail.com", photo: "/arunkumar.jpg", isHOD: false },
    { id: 86, name: "Dr. P. Buvaneshwari", qualifications: ["B.Sc., M.Sc., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: "buvaneshjeyam5@gmail.com", photo: "/Buvaneswarih.jpg", isHOD: false },
    { id: 87, name: "Dr. P. Malarvizhi", qualifications: ["M.A., M.Phil., Ph.D."], department: "Science & Humanities", position: "Assistant Professor", email: " malarvizhi@nscet.org", photo: "/malarvizhi.jpg", isHOD: false },
    { id: 88, name: " Dr. R. Valarmathi", qualifications: [ "Ph.D"], department: "Science & Humanities", position: "Assistant Professor", email: "valarmathi@nscet.org", photo: "/Valarmathi.jpg", isHOD: false },
    { id: 89, name: "Mrs. S. Mufeena", qualifications: ["M.Sc., M.Phil."], department: "Science & Humanities", position: "Assistant Professor", email: "mufeena@nscet.org", photo: "/mufeena.JPG", isHOD: false },
    { id: 90, name: " Dr. S.R. Krishnamoorthi", qualifications: [" M.Sc., M.Phil., Ph.D., MISTE"], department: "Science & Humanities", position: "Assistant Professor", email: "krishnamoorthi@nscet.org", photo: "/krishnamoorthy.jpg", isHOD: false },
    { id: 91, name: " Ms. Jenifer K.", qualifications: ["B.Tech(IT)., ME(CSE)."], department: "Science & Humanities", position: "Assistant Professor", email: "jenifer.k@cietcbe.edu.in", photo: "/Jenifer.jpeg", isHOD: false },
  ];

  // Filtering data for the selected department
  const currentFaculty = facultyData.filter(staff => staff.department === activeDept);
  const hod = currentFaculty.find(staff => staff.isHOD);
  const regularStaffs = currentFaculty.filter(staff => !staff.isHOD);

  const handleCardClick = (id) => {
    setClickedCardId(id);
    setTimeout(() => {
      setClickedCardId(null);
    }, 400); 
  };

  const slideCards = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 290; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderScrollCards = () => {
    if (regularStaffs.length === 0) return null;

    return regularStaffs.map((staff, index) => (
      <div 
        key={`scroll-${staff.id}-${index}`} 
        className={`tf-staff-card ${clickedCardId === staff.id ? 'card-zoom-animation' : ''}`}
        onClick={() => handleCardClick(staff.id)}
      >
        <div className="tf-card-top">
          <div className="tf-mail-icon-bg">✉️</div>
        </div>
        <img src={staff.photo} alt={staff.name} className="tf-staff-img" onError={(e) => e.target.src="https://via.placeholder.com/100"} />
        <h4 className="tf-staff-name">{staff.name}</h4>
        <p className="tf-staff-pos">{staff.position}</p>
        
        <div className="tf-qual-badges tf-center-badges">
          {staff.qualifications.map((qual, i) => (
            <span key={i} className="tf-badge-outline">{qual}</span>
          ))}
        </div>

        <div className="tf-contact-item-small">
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

        {hod && (
          <div className="tf-hod-card fade-in">
            <div className="tf-hod-image-col">
              <div className="tf-hod-img-bg"></div>
              <img src={hod.photo} alt={hod.name} className="tf-hod-img" onError={(e) => e.target.src="https://via.placeholder.com/150"} />
            </div>
            
            <div className="tf-hod-info-col">
              <span className="tf-badge-primary">HEAD OF DEPARTMENT</span>
              <h2 className="tf-hod-name">{hod.name}</h2>
              <p className="tf-hod-position">{hod.position}</p>
              <p className="tf-hod-dept">{hod.department}</p>
              <div className="tf-qual-badges">
                {hod.qualifications.map((qual, index) => (
                  <span key={index} className="tf-badge-outline">{qual}</span>
                ))}
              </div>
            </div>

            <div className="tf-hod-contact-col">
             <div className="tf-contact-item">
             <span className="tf-icon">✉️</span> 
             <a href={`mailto:${hod.email.trim()}`} style={{ color: 'inherit', textDecoration: 'none' }}>
    {hod.email}
  </a>
</div>
            </div>
          </div>
        )}

        {regularStaffs.length > 0 && (
          <>
            <div className="tf-staff-section-header">
              <h3 className="tf-section-title">Faculty Members</h3> 
            </div>

            <div className="tf-slider-container">
              <button className="tf-slider-btn left" onClick={() => slideCards('left')}>&#10094;</button>
              
              <div className="tf-scroll-track" ref={scrollRef}>
                {renderScrollCards()}
              </div>
              
              <button className="tf-slider-btn right" onClick={() => slideCards('right')}>&#10095;</button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default TeachingFaculty;
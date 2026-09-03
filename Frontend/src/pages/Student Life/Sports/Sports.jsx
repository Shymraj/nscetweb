import React from "react";
import { motion } from "framer-motion";
import {
    FaUserTie, FaTrophy, FaMedal, FaBasketballBall
} from "react-icons/fa";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import SportsCategoryWheel from "./SportsCategoryWheel";
import DepartmentHODProfile from "../../../components/common/DepartmentHODProfile/DepartmentHODProfile";
import DepartmentFacultyCard from "../../../components/common/DepartmentFacultyCard/DepartmentFacultyCard";
import "./Sports.css";

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

// Staff data imported from facultyData.js

// Sport Images
import Basketball from "./images/Basketball.png";
import Volleyball from "./images/vally.png";
import Badminton from "./images/badmiton.png";
import Kabaddi from "./images/kabadi.png";
import TableTennis from "./images/table.png";
import KhoKho from "./images/khokho.png";
import Handball from "./images/handball.png";
import Cycling from "./images/Cycling.jpeg";
import { sportsFacultyData } from "./facultyData";

// Student Images
const studentImgGlobs = import.meta.glob("./images/Sports students/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}", { eager: true, import: "default" });

const findImg = (nameStr) => {
    const key = Object.keys(studentImgGlobs).find(k => k.toLowerCase().includes(nameStr.toLowerCase()));
    return key ? studentImgGlobs[key] : null;
};

const studentPhotos = {
    // CIVIL
    "J. Ajay": findImg("Civil/01 Ajay"),
    "S. Bala": findImg("Civil/02 Bala"),
    "M. Iyyanathan": findImg("Civil/07 IYYANATHAN"),
    "S. Nithiya Shree": findImg("Civil/12 Nithya shree"),
    "R. Mohanapriya": findImg("Civil/13 MOHANAPRIYA"),
    "S. Subitchana Sri": findImg("Civil/17 SUBITCHANASRI"),
    "P. Siddharthan": findImg("Civil/21 SIDDHARTHAN"),
    
    // ECE
    "R. Aswanthika": findImg("ECE/04 Aswanthika"),
    "M. Bharathi": findImg("ECE/05 Bharathi"),
    "V. Atchaya Kamali": findImg("ECE/07 Atchayakamali"),
    "K. Devadharshini": findImg("ECE/09 Dhevadharshini"),
    "P. Pooja": findImg("ECE/36 Pooja"),
    "G. Santhiya": findImg("ECE/43 Santhiya"),
    
    // EEE
    "S. Anusri": findImg("EEE/01 Anushree"),
    "S. Devadharshini": findImg("EEE/02 Devadharshini"),
    "K. Dharanisri": findImg("EEE/06 Dharanishri"),
    "K. Ganesh Kumar": findImg("EEE/10 Ganesh Kumar"),
    "M. Guru Prasath": findImg("EEE/12 Guruprasath"),
    "M. Guru Prasad": findImg("EEE/12 Guruprasath"),
    "S. Harina": findImg("EEE/13 Harina"),
    "A. Mohammed Nowfil": findImg("EEE/21 Mohamed Nowfil"),
    "V. S. Shahana": findImg("EEE/21 Sahana"),
    "J. Santhosh": findImg("EEE/28 Santhosh"),
    "P. Yuvaraj": findImg("EEE/37 YUVARAJ"),
    
    // MECH
    "G. Bharathwaj": findImg("Mechanical/05 Bharathwaj"),
    "G. Yogesh": findImg("Mechanical/09 Yogesh"),
    "M. Sanjay Ram Kumar": findImg("Mechanical/19 SANJAY RAMKUMAR"),
    "S. Sudharsan": findImg("Mechanical/26 Sudharsan"),
    "S. Vishal": findImg("Mechanical/30 VISHAL")
};

const Sports = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const zoomIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const handleOpenProfile = (member) => {
        if (!member) return;
        const facultyId = member.id || member.slug;
        if (facultyId) {
            window.open(`/departments/sports/faculty/${facultyId}`, "_blank");
        }
    };

    const staffMembers = sportsFacultyData;
    const hod = staffMembers[0];
    const staff = staffMembers.slice(1);

    const sportsOffered = [
        { name: "Basketball", image: Basketball },
        { name: "Volleyball", image: Volleyball },
        { name: "Badminton", image: Badminton },
        { name: "Kabaddi", image: Kabaddi },
        { name: "Table Tennis", image: TableTennis },
        { name: "Kho Kho", image: KhoKho },
        { name: "Handball", image: Handball },
        { name: "Cycling", image: Cycling }
    ];

    const achievements = [
        { sno: 1, date: "26.01.2025", students: "G. K. Phiramoth – III CSE", event: "🏅 National Medalist – 2025 (HCL)\n• 9-Time State Champion in Cycling\n• Indian Book of Records Holder\n  → Completed 580 km from Puducherry to Kanyakumari in 36 hours\n• Selected for International Competitions – 2027\n• Represents the Sports Development Authority of Tamil Nadu (SDAT)", venue: "JCI Theni Honey Bee", highlight: false, goldenHighlight: true },
        { sno: 2, date: "23.02.2025", students: "O. Dinesh Babu – I AI&DS", event: "OSCAR World Record – “The longest duration of performing silambam multiweapons event one hour”", venue: "Velmurga Veerakalai Koedam", highlight: true },
        { sno: 3, date: "", students: "Bala Ganesh – IV CSE", event: "• Bronze Medal – Interzone Judo Tournament 2023–2024\n• Gold Medal – Interzone Wushu Tournament 2025–2026\n• Participated in All India Inter University Wushu Championship Tournament and secured 8th position overall\n• Bronze Medal – Interzone Judo Tournament 2025–2026", venue: "Paavai College of Engineering and Technology\nBNEC, Theni\n-\nPaavai College of Engineering and Technology", highlight: false },
        { sno: 4, date: "27.01.2025 & 28.01.2025", students: "V. Atchaya Kamali – IV ECE\nK. Devadharshini – IV ECE\nG. Santhiya – IV ECE\nS. Subitchana Sri – IV CIVIL\nV. Yuva Priya – IV CSE\nS. Devadharshini – III EEE", event: "Anna University Inter Zone Handball Women Tournament – Participated", venue: "PSNA College of Engineering and Technology, Dindigul", highlight: false },
        { sno: 5, date: "07.12.2024 to 10.12.2024", students: "G. K. Phiramoth – IV CSE", event: "Tamil Nadu Team – CFI Cycling National Championships – Participated", venue: "Odisha Cycling Association, Odisha", highlight: false },
        { sno: 6, date: "20.12.2024 to 02.01.2025", students: "M. Guru Prasath – IV EEE", event: "All India Inter University Boxing Men & Women Tournament – Participated", venue: "Guru Kashi University, Bathinda, Punjab", highlight: false },
        { sno: 7, date: "21.12.2024 & 22.12.2024", students: "O. Dinesh Babu – III AI&DS", event: "Anna University Inter Zone Power Lifting Men & Women Tournament – Participated", venue: "Paavai College of Engineering and Technology, Namakkal", highlight: false },
        { sno: 8, date: "06.11.2024 & 07.11.2024", students: "A. Mohammed Nowfil – IV EEE\nP. Yuvaraj – IV EEE\nK. Ganesh Kumar – IV EEE\nG. Yogesh – IV MECH\nM. Iyyanathan – IV CIVIL", event: "Anna University Inter Zone Cross Country Men Tournament – Participated", venue: "University College of Engineering, Trichy", highlight: false },
        { sno: 9, date: "06.11.2024 & 07.11.2024", students: "K. Devadharshini – IV ECE", event: "Anna University Inter Zone Cross Country Women Tournament – Participated", venue: "University College of Engineering, Trichy", highlight: false },
        { sno: 10, date: "07.11.2024 & 08.11.2024", students: "O. Dinesh Babu – III AI&DS", event: "Anna University Inter Zone Weight Lifting Men Tournament – Participated", venue: "Paavai College of Engineering, Namakkal", highlight: false },
        { sno: 11, date: "08.11.2024 & 09.11.2024", students: "S. Anjali – IV AI&DS\nK. Dharanisri – III EEE\nG. Santhiya – IV ECE\nR. Mohanapriya – III CIVIL\nS. Anusri – III EEE\nV. Sri Vaishnavi – III CIVIL\nP. Pooja – IV ECE", event: "Anna University Zone-17 Ball Badminton Women Tournament – III Position", venue: "Kamaraj College of Engineering & Technology, Virudhunagar", highlight: true },
        { sno: 12, date: "23.11.2024 & 24.11.2024", students: "MEN:\n1. A. Mohammed Nowfil – IV EEE (Half Marathon – I Position, 5000m – I Position)\n2. K. Ajay Prasath – IV AI&DS (High Jump – II Position)\n3. P. Yuvaraj – IV EEE (10000m – III Position)\n4. P. Devendra Kumar – IV AI&DS (Shot-Put – III Position)\nWOMEN:\n1. K. Devadharshini – IV ECE (5000m – I Position)\n2. S. Nithiya Shree – IV Civil (Javelin – III Position)", event: "Anna University Zone-17 Athletics Men & Women Tournament", venue: "PSNA College of Engineering and Technology, Dindigul", highlight: true },
        { sno: 13, date: "23.11.2024 & 24.11.2024", students: "M. Guru Prasad – IV EEE", event: "Anna University Inter Zone Boxing Men Tournament – I Position", venue: "Govt. College of Engineering, Bargur", highlight: true },
        { sno: 14, date: "30.11.2024 to 02.12.2024", students: "1. A. Mohammed Nowfil – IV EEE (Half Marathon – VIII Position)\n2. K. Devadharshini – IV ECE (5000m – Participated)\n3. S. Nithiya Shree – IV Civil (Javelin – Participated)", event: "Anna University Inter Zone Athletic Men & Women Tournament – Participated", venue: "KSR College of Technology, Thiruchengode", highlight: false },
        { sno: 15, date: "07.10.2024 & 08.10.2024", students: "L.M. Jeya Priya – IV EEE\nV. S. Shahana – III EEE\nS. Devadharshini – III EEE\nM. Vani Sri – IV IT", event: "Anna University Zone-17 Volleyball Women Tournament – IV Position", venue: "AAA College of Engineering & Technology, Sivakasi", highlight: false },
        { sno: 16, date: "08.10.2024 & 09.10.2024", students: "M. Iyyanathan – IV CIVIL\nK. Ajay Prasath – IV AI&DS\nJ. Santhosh – IV EEE\nM. Sanjay Ram Kumar – III MECH\nM. Bharathi – III ECE\nM. Ramachandran – III AI&DS\nM. Gokul – IV AI&DS", event: "Anna University Zone-17 Volleyball Men Tournament – Participated", venue: "Christian College of Engineering & Technology, Ottanchatram", highlight: false },
        { sno: 17, date: "09.10.2024 & 10.10.2024", students: "S. Ragul – IV CSE\nS. Vishal – III MECH", event: "Anna University Inter Zone Taekwondo Men Tournament – Participated", venue: "Stella Mary’s College of Engineering, Nagecoil", highlight: false },
        { sno: 18, date: "15.10.2024 & 16.10.2024", students: "M. Mukesh Kanna – IV CSE\nA. Kavin Prashad – IV CSE\nJ. Yokesh – IV AI&DS\nG. Bharathwaj – III MECH\nS. Sudharsan – III MECH", event: "Anna University Zone-17 Chess Men Tournament – IV Position", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 19, date: "15.10.2024 & 16.10.2024", students: "V.S. Thirunika – III AI&DS\nM. Priyadharshini – III IT\nA. Irfana Begam – III CSE\nR. Aswanthika – III ECE", event: "Anna University Zone-17 Chess Women Tournament – Participated", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 20, date: "15.10.2024 & 16.10.2024", students: "K. Akshaya Shri – IV CSE\nS. Harina – IV EEE\nA. Praveena – I IT\nM. Dheiva Shri – III AI&DS", event: "Anna University Zone-17 Table Tennis Women Tournament – Participated", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 21, date: "19.10.2024 & 20.10.2024", students: "P. Yuvaraj – IV EEE\nS. Bala – IV CIVIL\nK. Maruthupandi – III EEE\nP. Siddharthan – III CIVIL\nJ. Ajay – IV CIVIL", event: "Anna University Zone-17 Kabbadi Men Tournament – Participated", venue: "Christian College of Engineering & Technology, Ottanchatram", highlight: false },
        { sno: 22, date: "08.09.2024", students: "G. K. Phiramoth – IV CSE", event: "District Cycling Championship – II Position", venue: "State Cycling Association, Madurai", highlight: true },
        { sno: 23, date: "18.09.2024 & 19.09.2024", students: "V. Atchaya Kamali – IV ECE\nK. Devadharshini – IV ECE\nG. Santhiya – IV ECE\nS. Subitchana Sri – IV CIVIL\nP. Pooja – IV ECE", event: "Anna University Zone-17 Basketball Women Tournament – II Position", venue: "Nadar Saraswathi College of Engineering & Technology, Theni", highlight: true },
        { sno: 24, date: "2026", students: "G. Mahima Grace – II IT", event: "Athletics (Sprint Fest) 4X100m Relay I Position, Relay II Position, 100m & 200m – III Position", venue: "Nadar Saraswathi Matriculation Higher Secondary School, Muthudevanpatti", highlight: true },
        { sno: 25, date: "2026", students: "S. Logammal II ECE", event:"Basketball (Zonal-17) II Position",highlight:true}
    ];

    const staffAchievements = [
        { sno: 1, date: "27.01.2025 & 28.01.2025", name: "Mrs. R. Malini", title: "Anna University Inter Zone Handball Women Tournament Selection Committee Member", venue: "PSNA College of Engineering and Technology, Dindigul" },
        { sno: 2, date: "20.12.2024 to 02.01.2025", name: "Mr. K. Sundararajan", title: "Team Manager – All India Inter University Boxing Men & Women Tournament", venue: "Anna University" },
        { sno: 3, date: "14.12.2024 & 15.12.2024", name: "Mrs. R. Malini", title: "Selection Committee Member – Inter Zone Kho-Kho Men & Women Tournament", venue: "Anna University" },
        { sno: 4, date: "06.11.2024", name: "Mr. K. Sundararajan", title: "Selection Committee Member – Inter Zone Cross Country Men & Women Tournament", venue: "Anna University" },
        { sno: 5, date: "30.11.2024 & 01.12.2024", name: "Mrs. R. Malini", title: "Zone-17 Team Manager – Inter Zone Athletic Men & Women Tournament", venue: "Anna University" },
        { sno: 6, date: "07.10.2024 & 08.10.2024", name: "Mr. K. Sundararajan", title: "Zone-17 Volleyball Women Tournament – Selection Committee Member", venue: "Anna University, AAA College of Engineering & Technology, Sivakasi" },
        { sno: 7, date: "15.10.2024 & 16.10.2024", name: "Mr. K. Sundararajan", title: "Zone-17 Chess Men & Women Tournament – Selection Committee Member", venue: "Anna University, University College of Engineering, Dindigul" },
        { sno: 8, date: "18.09.2024 & 19.09.2024", name: "Mr. K. Sundararajan", title: "Basketball Women Tournament – Selection Committee Member", venue: "Anna University Zone-17, Nadar Saraswathi College of Engineering & Technology, Theni" },
        { sno: 9, date: "26.09.2024 & 27.09.2024", name: "Mrs. R. Malini", title: "Badminton Women Tournament – Selection Committee Member", venue: "Anna University Zone-17, Kamaraj College of Engineering & Technology, Virudhunagar" },
        { sno: 10, date: "30.09.2024 & 01.10.2024", name: "Mr. K. Nethaji", title: "Basketball Men Tournament – Selection Committee Member", venue: "Anna University Zone-17, Chettinad College of Engineering & Technology, Karur" }
    ];

    return (
        <div className="sports-dept-container">

            {/* HERO BANNER */}
            <PageBanner
                title="SPORTS AT NSCET"
                subtitle="Promoting all-round growth — nurturing champions through discipline, teamwork, and athletic excellence."
                hideBreadcrumb={true}
                backgroundImage={bannerImg}
                height="auto"
            />

            <main className="content-wrapper">

                {/* BENTO GRID: ABOUT */}
                <motion.div
                    className="about-bento sports-bento-section"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    <motion.div className="sports-bento-card primary" variants={fadeInUp}>
                        <div className="bento-icon-wrapper">
                            <FaBasketballBall />
                        </div>
                        <h3>Sports</h3>
                        <p>
                            The College is committed to promote sports activities towards the all-round growth of its students.Our College has indoor facilities for Chess, Carrom, Table Tennis, Ball Badminton and outdoor facilities for Volleyball, Football, Basket Ball, Hand Ball, Kho Kho.
                        </p>
                        <p>
                            We have qualified Physical Education staffs to train the students. Students sent for participating in the Inter-College Sports and games have won many trophies in various events.
                        </p>
                    </motion.div>

                    <motion.div className="sports-bento-card primary" variants={zoomIn}>
                        <div className="bento-icon-wrapper">
                            <FaTrophy />
                        </div>
                        <h3>Highlights</h3>
                        <p><strong>Indoor:</strong> Chess, Carrom, Table Tennis, Ball Badminton.</p>
                        <p><strong>Outdoor:</strong> Volleyball, Football,Basketball, Handball, Kho Kho grounds.</p>
                        <p><strong>Pride:</strong> Our Volleyball team is an unbeaten State Champion at national level inter-college matches.</p>
                    </motion.div>
                </motion.div>

                {/* LEADERSHIP */}
                <h2 className="glam-title" style={{ marginTop: "2rem" }}>Sports <span>Leadership</span></h2>
                <DepartmentHODProfile 
                    hod={{
                        ...hod,
                        quoteText: "Nurturing champions through discipline, teamwork, and athletic excellence.",
                        expBadge: "Physical Director"
                    }} 
                    onOpenProfile={handleOpenProfile}
                />

                {/* STAFF GRID */}
                <h2 className="glam-title">Expert <span>Staff</span></h2>
                <motion.div
                    className="faculty-team-grid"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    {staff.map((member, idx) => (
                        <DepartmentFacultyCard 
                            key={idx} 
                            member={member} 
                            fadeInUp={fadeInUp} 
                            onOpenProfile={handleOpenProfile}
                        />
                    ))}
                </motion.div>

                {/* SPORTS CATEGORY WHEEL */}
                <SportsCategoryWheel achievementsData={achievements} studentPhotos={studentPhotos} />

                {/* ACHIEVEMENTS */}
                <h2 className="glam-title">Student <span>Achievements</span></h2>
                <motion.div
                    className="achievements-wrapper"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="achievements-table-container">
                        <table className="achievements-tbl">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>Student(s)</th>
                                    <th>Achievement / Event</th>
                                    <th>Venue / Organizer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {achievements.map((a) => (
                                    <tr key={a.sno} className={a.goldenHighlight ? "golden-star-row" : a.highlight ? "trophy-row" : ""}>
                                        <td>{a.sno}</td>
                                        <td>{a.date}</td>
                                        <td>{a.students}</td>
                                        <td>{a.highlight ? <><FaMedal className="medal-icon" /> <strong>{a.event}</strong></> : a.event}</td>
                                        <td>{a.venue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* STAFF ACHIEVEMENTS */}
                <h2 className="glam-title">Staff <span>Achievements</span></h2>
                <motion.div
                    className="achievements-wrapper"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="achievements-table-container">
                        <table className="achievements-tbl">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>Name of Staff</th>
                                    <th>Title / Event</th>
                                    <th>Program Organizer & Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffAchievements.map((a) => (
                                    <tr key={a.sno}>
                                        <td>{a.sno}</td>
                                        <td>{a.date}</td>
                                        <td>{a.name}</td>
                                        <td>{a.title}</td>
                                        <td>{a.venue}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </main>
        </div>
    );
};

export default Sports;

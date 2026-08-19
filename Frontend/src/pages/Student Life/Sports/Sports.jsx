import React from "react";
import { motion } from "framer-motion";
import {
    FaUserTie, FaTrophy, FaMedal, FaBasketballBall
} from "react-icons/fa";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./Sports.css";

// Auto-load banner image inside ./images/banner/
const bannerGlobs = import.meta.glob("./images/banner/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, import: "default" });
const bannerImg = Object.values(bannerGlobs)[0] || null;

// Staff Images
import Vayalsamy from "./images/Vayalsamy.JPG";

// Sport Images
import Basketball from "./images/Basketball.png";
import Volleyball from "./images/vally.png";
import Badminton from "./images/badmiton.png";
import Kabaddi from "./images/kabadi.png";
import TableTennis from "./images/table.png";
import KhoKho from "./images/khokho.png";
import Handball from "./images/handball.png";
import Cycling from "./images/Cycling.jpeg";

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

    const staffMembers = [
        { name: "Mr. Ponnaiah", desig: "HOD & Physical Director", qual: "B.Com., M.P.Ed., PG.DY", image: null },
        { name: "Mr. M. Vayalsamy", desig: "Assistant Physical Director", qual: "B.Sc., M.P.Ed.", image: Vayalsamy }
    ];

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
        { sno: 1, date: "26.01.2025", students: "G. K. Phiramoth – IV CSE", event: "🏅 National Medalist – 2025 (HCL)\n• 9-Time State Champion in Cycling\n• Indian Book of Records Holder\n  → Completed 580 km from Puducherry to Kanyakumari in 36 hours\n• Selected for International Competitions – 2027\n• Represents the Sports Development Authority of Tamil Nadu (SDAT)", venue: "JCI Theni Honey Bee", highlight: false, goldenHighlight: true },
        { sno: 2, date: "23.02.2025", students: "O. Dinesh Babu – III AI&DS", event: "OSCAR World Record – “The longest duration of performing silambam multiweapons event one hour”", venue: "Velmurga Veerakalai Koedam", highlight: true },
        { sno: 3, date: "27.01.2025 & 28.01.2025", students: "K. Uvasri – IV CSE\nS. Reshma – III EEE\nV. Atchaya Kamali – II ECE\nK. Devadharshini – II ECE\nG. Santhiya – II ECE\nS. Subitchana Sri – II CIVIL\nV. Yuva Priya – II CSE\nS. Devadharshini – I EEE", event: "Anna University Inter Zone Handball Women Tournament – Participated", venue: "PSNA College of Engineering and Technology, Dindigul", highlight: false },
        { sno: 4, date: "07.12.2024 to 10.12.2024", students: "G. K. Phiramoth – II CSE", event: "Tamil Nadu Team – CFI Cycling National Championships – Participated", venue: "Odisha Cycling Association, Odisha", highlight: false },
        { sno: 5, date: "20.12.2024 to 02.01.2025", students: "M. Guru Prasath – II EEE", event: "All India Inter University Boxing Men & Women Tournament – Participated", venue: "Guru Kashi University, Bathinda, Punjab", highlight: false },
        { sno: 6, date: "21.12.2024 & 22.12.2024", students: "S. Bharathwaj – IV EEE\nO. Dinesh Babu – I AI&DS", event: "Anna University Inter Zone Power Lifting Men & Women Tournament – Participated", venue: "Paavai College of Engineering and Technology, Namakkal", highlight: false },
        { sno: 7, date: "06.11.2024 & 07.11.2024", students: "A. Mohammed Nowfil – II EEE\nP. Yuvaraj – II EEE\nK. Ganesh Kumar – II EEE\nT. Aravind – III EEE\nG. Yogesh – II MECH\nM. Iyyanathan – II CIVIL", event: "Anna University Inter Zone Cross Country Men Tournament – Participated", venue: "University College of Engineering, Trichy", highlight: false },
        { sno: 8, date: "06.11.2024 & 07.11.2024", students: "K. Devadharshini – II ECE\nD. Christina – II ECE", event: "Anna University Inter Zone Cross Country Women Tournament – Participated", venue: "University College of Engineering, Trichy", highlight: false },
        { sno: 9, date: "07.11.2024 & 08.11.2024", students: "B. Thiyagarajan – III EEE\nO. Dinesh Babu – I AI&DS", event: "Anna University Inter Zone Weight Lifting Men Tournament – Participated", venue: "Paavai College of Engineering, Namakkal", highlight: false },
        { sno: 10, date: "08.11.2024 & 09.11.2024", students: "S. Anjali – II AI&DS\nK. Dharanisri – I EEE\nG. Santhiya – II ECE\nR. Mohanapriya – I CIVIL\nS. Anusri – I EEE\nV. Sri Vaishnavi – I CIVIL\nP. Pooja – II ECE", event: "Anna University Zone-17 Ball Badminton Women Tournament – III Position", venue: "Kamaraj College of Engineering & Technology, Virudhunagar", highlight: true },
        { sno: 11, date: "23.11.2024 & 24.11.2024", students: "MEN:\n1. A. Mohammed Nowfil – II EEE (Half Marathon – I Position, 5000m – I Position)\n2. K. Ajay Prasath – II AI&DS (High Jump – II Position)\n3. P. Yuvaraj – II EEE (10000m – III Position)\n4. P. Devendra Kumar – II AI&DS (Shot-Put – III Position)\n5. B. Sabareeshwaran – IV ECE (Pole Vault – III Position)\nWOMEN:\n1. K. Devadharshini – II ECE (5000m – I Position)\n2. S. Reshma – III EEE (Shot-Put – II Position, Hammer – III Position)\n3. S. Nithiya Shree – II Civil (Javelin – III Position)", event: "Anna University Zone-17 Athletics Men & Women Tournament", venue: "PSNA College of Engineering and Technology, Dindigul", highlight: true },
        { sno: 12, date: "23.11.2024 & 24.11.2024", students: "M. Guru Prasad – II EEE", event: "Anna University Inter Zone Boxing Men Tournament – I Position", venue: "Govt. College of Engineering, Bargur", highlight: true },
        { sno: 13, date: "30.11.2024 to 02.12.2024", students: "1. A. Mohammed Nowfil – II EEE (Half Marathon – VIII Position)\n2. S. Reshma – III EEE (Shot-Put – VII Position)\n3. K. Devadharshini – II ECE (5000m – Participated)\n4. S. Nithiya Shree – II Civil (Javelin – Participated)", event: "Anna University Inter Zone Athletic Men & Women Tournament – Participated", venue: "KSR College of Technology, Thiruchengode", highlight: false },
        { sno: 14, date: "07.10.2024 & 08.10.2024", students: "M. Gobika – IV EEE\nE. Abirami – IV CIVIL\nS. Reshma – III EEE\nS. Susmitha – III CSE\nB. Uma Maheshwari – III CSE\nL.M. Jeya Priya – II EEE\nV. S. Shahana – I EEE\nS. Devadharshini – I EEE\nM. Vani Sri – II IT\nM. Dheiva Shree – III AI&DS", event: "Anna University Zone-17 Volleyball Women Tournament – IV Position", venue: "AAA College of Engineering & Technology, Sivakasi", highlight: false },
        { sno: 15, date: "08.10.2024 & 09.10.2024", students: "M. Logesh – IV CSE\nM. Iyyanathan – II CIVIL\nK. Ajay Prasath – II AI&DS\nJ. Santhosh – II EEE\nS. Naveen Prasath – III ECE\nM. Sanjay Ram Kumar – I MECH\nV. Siva Pandi – III CSE\nM. Bharathi – I ECE\nM. Ramachandran – I AI&DS\nA. Surya Prakash – III IT\nM. Gokul – II AI&DS\nK. Ganesh Kumar – III EEE\nR. Mouna Rahul – IV MECH", event: "Anna University Zone-17 Volleyball Men Tournament – Participated", venue: "Christian College of Engineering & Technology, Ottanchatram", highlight: false },
        { sno: 16, date: "09.10.2024 & 10.10.2024", students: "S. Ragul – II CSE\nS. Vishal – I MECH", event: "Anna University Inter Zone Taekwondo Men Tournament – Participated", venue: "Stella Mary’s College of Engineering, Nagecoil", highlight: false },
        { sno: 17, date: "15.10.2024 & 16.10.2024", students: "M. Mukesh Kanna – II CSE\nA. Kavin Prashad – II CSE\nB. Abisheck – IV CSE\nJ. Yokesh – II AI&DS\nG. Bharathwaj – I MECH\nS. Sudharsan – I MECH", event: "Anna University Zone-17 Chess Men Tournament – IV Position", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 18, date: "15.10.2024 & 16.10.2024", students: "V.S. Thirunika – I AI&DS\nA. Abarna – III CSE\nM. Priyadharshini – I IT\nA. Irfana Begam – I CSE\nR. Aswanthika – I ECE\nLakshmi Priya – III ECE", event: "Anna University Zone-17 Chess Women Tournament – Participated", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 19, date: "15.10.2024 & 16.10.2024", students: "K. Akshaya Shri – II CSE\nS. Harina – II EEE\nA. Praveena – I AI&DS\nM. Dheiva Shri – III AI&DS", event: "Anna University Zone-17 Table Tennis Women Tournament – Participated", venue: "University College of Engineering, Dindigul", highlight: false },
        { sno: 20, date: "19.10.2024 & 20.10.2024", students: "J. Vijay – IV MECH\nM. Sriram – IV MECH\nK. Harimuthu Krishnan – IV MECH\nP. Yuvaraj – II EEE\nC. Arun Pandi – IV ECE\nV. Suryanarayanan – IV MECH\nP. Lokesh Kumar – IV ECE\nS. Bala – II CIVIL\nA. Yugesh Kumar – III CSE\nK. Maruthupandi – I EEE\nP. Siddharthan – I CIVIL\nJ. Ajay – II CIVIL", event: "Anna University Zone-17 Kabbadi Men Tournament – Participated", venue: "Christian College of Engineering & Technology, Ottanchatram", highlight: false },
        { sno: 21, date: "08.09.2024", students: "G. K. Phiramoth – II CSE", event: "District Cycling Championship – II Position", venue: "State Cycling Association, Madurai", highlight: true },
        { sno: 22, date: "18.09.2024 & 19.09.2024", students: "K. Uvasri – IV CSE\nS. Punitha – IV CSE\nG. Roobini – IV CSE\nS. Reshma – III EEE\nV. Atchaya Kamali – II ECE\nK. Devadharshini – II ECE\nG. Santhiya – II ECE\nS. Subitchana Sri – II CIVIL\nP. Pooja – II ECE\nS. Nandhini – III IT", event: "Anna University Zone-17 Basketball Women Tournament – II Position", venue: "Nadar Saraswathi College of Engineering & Technology, Theni", highlight: true }
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

                {/* SPORTS SHOWCASE — Large Photo Gallery */}
                <h2 className="glam-title">Sports in <span>Our College</span></h2>
                <motion.div
                    className="sports-photo-gallery"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    {sportsOffered.map((sport, idx) => (
                        <motion.div
                            className="sport-photo-card"
                            key={idx}
                            variants={fadeInUp}
                        >
                            <h4 className="sport-photo-title">{sport.name}</h4>
                            <div className="sport-photo-wrapper">
                                <img src={sport.image} alt={sport.name} />
                                <div className="sport-photo-overlay">
                                    <span>{sport.name}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* LEADERSHIP */}
                <h2 className="glam-title" style={{ marginTop: "2rem" }}>Sports <span>Leadership</span></h2>
                <motion.div
                    className="hod-banner"
                    initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                >
                    <motion.div
                        className="hod-avatar"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.2 }}
                    >
                        <div className="hod-avatar-ring"></div>
                        {hod.image ? <img src={hod.image} alt={hod.name} /> : <FaUserTie />}
                    </motion.div>
                    <div className="hod-details">
                        <motion.h3
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {hod.name}
                        </motion.h3>
                        <motion.span
                            className="designation"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {hod.desig}
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <strong>Qualifications:</strong> {hod.qual}
                        </motion.p>
                    </div>
                </motion.div>

                {/* STAFF GRID */}
                <h2 className="glam-title">Expert <span>Staff</span></h2>
                <motion.div
                    className="faculty-team-grid"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    {staff.map((member, idx) => (
                        <motion.div key={idx} className="sports-member-card" variants={fadeInUp}>
                            <div className="sports-member-avatar">
                                {member.image ? <img src={member.image} alt={member.name} /> : <FaUserTie />}
                            </div>
                            <div className="sports-member-info">
                                <h4 style={{ color: "var(--theme-primary, #0EA5E9)" }}>{member.name}</h4>
                                <span className="desig">{member.desig}</span>
                                <span className="qual">{member.qual}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

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

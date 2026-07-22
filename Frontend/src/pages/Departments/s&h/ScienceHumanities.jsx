import React from "react";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
    FaFlask, FaMicroscope, FaUserTie,
    FaEnvelope, FaSquareRootAlt, FaGlobe, FaBookOpen, FaCalendarTimes, FaAtom
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./ScienceHumanities.css";

import shBannerImg from "./images/sh-banner.png";
// If a specific 7th sense association logo is available, replace this icon with an image tag.
import logo7thSense from "./images/seventh.png";

// Faculty Imports
import imgVembathuRajesh from "./images/vembathurajesh.png";
import imgChithra from "./images/drchitra.jpg";
import imgDavidMathan from "./images/davidmathan.jpg";
import imgRichardBritto from "./images/richard britto.jpg";
import imgSubathamani from "./images/Subathamani.png";
import imgMallaiyasamy from "./images/mailysamy.jpg";
import imgKarunyah from "./images/karunyah.jpg";
import imgArulvizhi from "./images/arulvizhi.jpg";
import imgDhandayuthapani from "./images/dhandayuthapani.jpg";
import imgRajaguru from "./images/rajaguru.jpg";
import imgKrishnamoorthi from "./images/krishnamoorthy.jpg";
import imgArunKumar from "./images/arunkumar.jpg";
import imgSelvapriya from "./images/Selvapriya.jpg";
import imgReka from "./images/Reka.jpg";
import imgBuvaneshwari from "./images/Buvaneswarih.jpg";
import imgDeviMeenakshi from "./images/1778918990_Chemistry - Devi Meenakshi.jpg";
import imgMalarvizhi from "./images/malarvizhi.jpg";
import imgValarmathi from "./images/Valarmathi.jpg";
import imgMufeena from "./images/Mufeena.JPG";
import imgSaravanakumar from "./images/Saravakumar.png";
import imgSumathra from "./images/1778919066_Chemistry - Sumathra.jpeg";
import imgSangeetha from "./images/1778919146_English - Sangeetha.jpeg";
import imgMurugan from "./images/1778919261_Maths - Murugan.jpeg";
import imgDiana from "./images/Physics - Diana.jpg";
import imgEaswari from "./images/1778919497_Physics - Easwari.jpeg";
import imgIniya from "./images/General Engg - Iniya.jpeg";
import imgJenifer from "./images/General Engg - Jenifer.jpeg";
import imgNandhini from "./images/General Engg - Nandini.jpeg";
import imgPremkumar from "./images/General Engg - Premkumar.jpg";
import imgSrinithi from "./images/Chemistry - Srinithi.jpeg";
import imgRajeshshree from "./images/Rajeshshree.jpeg";
import imgThisha from "./images/thisha.jpeg";
import imgRamKumar from "./images/ramkumar.jpeg";

const ScienceHumanities = () => {
    // Scroll Entrance Animations
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

    const faculties = [
        { name: "Dr. A. Vembathurajesh", desig: "Assistant Professor & Head [I/C]", qual: "M.E., Ph.D, MISTE.", email: "vembathurajesh@nscet.org", image: imgVembathuRajesh },
        { name: "Dr. C. Chithra", desig: "Professor & Co-Ordinator", qual: "M.Sc., M.Phil., B.Ed., P.G.D.C.A., Ph.D.", email: "chithra.c@nscet.org", image: imgChithra },
        { name: "Dr. N. David Mathan", desig: "Professor", qual: "M.Sc., Ph.D.", email: "davidmathan@nscet.org", image: imgDavidMathan },
        { name: "Mr. R.C. Richard Britto", desig: "Assistant Professor", qual: "M.A., M.Phil.", email: "richardbritto@nscet.org", image: imgRichardBritto },
        { name: "Mrs. T. Subathamani", desig: "Assistant Professor", qual: "M.A., M.Phil., B.Ed.", email: "subathamani@gmail.com", image: imgSubathamani },
        { name: "Dr. B. Mallaiyasamy", desig: "Associate Professor", qual: "M.Sc., M.Phil., M.Ed., PGDCA, Ph.D., MIST", email: "mallaiyasamy@nscet.org", image: imgMallaiyasamy },
        { name: "Mrs. R. Karunyah", desig: "Assistant Professor", qual: "M.Sc., M.Phil.", email: "mkaruniya@gmail.com", image: imgKarunyah },
        { name: "Mrs. M. Arulvizhi", desig: "Assistant Professor", qual: "M.Sc., M.Phil.", email: "arulvizhimaths@gmail.com", image: imgArulvizhi },
        { name: "Mr. R. Dhandayuthapani", desig: "Assistant Professor", qual: "M.Sc., M.Phil.", email: "rdpani2000@gmail.com", image: imgDhandayuthapani },
        { name: "Mr. K. Rajaguru", desig: "Assistant Professor", qual: "M.Sc., M.Phil.", email: "rajaguru@nscet.org", image: imgRajaguru },
        { name: "Dr. S.R. Krishnamoorthi", desig: "Associate Professor", qual: "M.Sc., M.Phil., Ph.D., MISTE", email: "krishnamoorthi@nscet.org", image: imgKrishnamoorthi },
        { name: "Mr. G. Arun Kumar", desig: "Assistant Professor (General)", qual: "M.E.", email: "arunkumar1603@gmail.com", image: imgArunKumar },
        { name: "Dr. S. Selvapriya", desig: "Assistant Professor", qual: "M.A., M.Phil., Ph.D.", email: "selvapriyashailesh@gmail.com", image: imgSelvapriya },
        { name: "Mrs. S. Reka", desig: "Assistant Professor", qual: "M.A., M.Phil.", email: "subhalakshmireka@gmail.com", image: imgReka },
        { name: "Dr. P. Buvaneshwari", desig: "Physics", qual: "B.Sc., M.Sc., Ph.D.", email: "buvaneshjeyam5@gmail.com", image: imgBuvaneshwari },
        { name: "Dr. S. Devimeenakshmi", desig: "Assistant Professor (Chemistry)", qual: "M.Sc., Ph.D.", email: "devimeenakshi84@gmail.com", image: imgDeviMeenakshi },
        { name: "Dr. P. Malarvizhi", desig: "Assistant Professor", qual: "M.A., M.Phil., Ph.D.", email: "malarvizhi@nscet.org", image: imgMalarvizhi },
        { name: "Dr. R. Valarmathi", desig: "Assistant Professor", qual: "Ph.D.", email: "valarmathi@nscet.org", image: imgValarmathi },
        { name: "Mrs. S. Mufeena", desig: "Assistant Professor", qual: "M.Sc., M.Phil.", email: "mufeena@nscet.org", image: imgMufeena },
        { name: "Dr. R. Saravanakumar", desig: "Assistant Professor", qual: "M.Sc., Ph.D.", email: "saravanakumar@nscet.org", image: imgSaravanakumar },
        { name: "Dr. Sumathra M", desig: "Assistant Professor", qual: "M.Sc., Ph.D - Chemistry", email: "sumathravms@gmail.com", image: imgSumathra },
        { name: "Sangeetha V", desig: "Assistant Professor", qual: "M.A. English", email: "vijayansangeetha281985@gmail.com", image: imgSangeetha },
        { name: "Murugan M", desig: "Assistant Professor", qual: "M.Sc – Maths", email: "muruganmaths92@gmail.com", image: imgMurugan },
        { name: "Dr. Diana P", desig: "Assistant Professor", qual: "M.Sc., Ph.D - Physics", email: "13diana83@gmail.com", image: imgDiana },
        { name: "Dr. Easwari M", desig: "Assistant Professor", qual: "M.Sc., Ph.D - Physics", email: "easwariphy@gmail.com", image: imgEaswari },
        { name: "Ms. A. Iniya", desig: "Assistant Professor (General)", qual: "M.E (CSE)", email: "iniyakames777@gmail.com", image: imgIniya },
        { name: "Ms. Jenifer K.", desig: "Assistant Professor (General)", qual: "B.Tech(IT)., M.E(CSE)", email: "jenifer.k@cietcbe.edu.in", image: imgJenifer },
        { name: "Ms. Nandhini M.", desig: "Assistant Professor (General)", qual: "M.E (CSE)", email: "benandhu10@gmail.com", image: imgNandhini },
        { name: "Dr. Premkumar S.", desig: "Assistant Professor (General)", qual: "M.E., Ph.D (Civil)", email: "spremmagu@gmail.com", image: imgPremkumar },
        { name: "Dr. Srinithi S", desig: "Assistant Professor", qual: "M.Sc., Ph.D (Chemistry)", email: "-", image: imgSrinithi },
        { name: "Mrs. S. Rajeshshree", desig: "Assistant Professor (General)", qual: "B.E., M.E.", email: "rajeshshree@nscet.org", image: imgRajeshshree },
        { name: "Mrs. N. Thisha", desig: "Assistant Professor (Tamil)", qual: "B.A., M.A., NET.", email: "thisha@nscet.org", image: imgThisha },
        { name: "Mr. Ram Kumar K", desig: "Assistant Professor (General)", qual: "B.E - EEE., M.B.A", email: "ramkumar@nscet.org", image: imgRamKumar }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="sh-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF SCIENCE AND HUMANITIES"
                subtitle="Nurturing the scientific temper, analytical reasoning, and foundational intellect that bridge raw curiosity with advanced engineering."
                hideBreadcrumb={true}
                backgroundImage={shBannerImg}
            />

            <main className="content-wrapper">

                {/* BENTO GRID: ABOUT US */}
                <motion.div
                    className="about-bento"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    <motion.div className="bento-card primary" variants={fadeInUp}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsBuildingsFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Our Department</h3>
                        <p>
                            Science and Humanities dept. aims to provide a strong foundation for students of Engineering. It is one of the indispensable departments of the institute.
                        </p>
                        <p>
                            We aim to instill confidence, moral values, and an appreciation of independent thought, accuracy, neatness, and thoroughness, while molding students to adapt to emerging technologies.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Core Focus:</strong> Comprises applied physics, applied chemistry, applied mathematics, along with essential communication skills.</p>
                        <p><strong>Excellence:</strong> Qualified staff enable students to employ fundamental principles to create innovative new technologies across well-equipped advanced labs.</p>
                    </motion.div>
                </motion.div>

                {/* VISION & MISSION GLASS CARDS */}
                <h2 className="glam-title">Goal & <span>Purpose</span></h2>
                <div className="vm-wrapper">
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="icon-wrapper vision-icon">
                            <GiEyeTarget />
                        </div>
                        <h3>Our Vision</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#475569' }}>
                            To bridge the gap between the school and college education in basic engineering and language skills.
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                    >
                        <div className="icon-wrapper mission-icon">
                            <GiStairsGoal />
                        </div>
                        <h3>Our Mission</h3>
                        <ul>
                            <li>To make students familiar with science and technology to overcome the issues in the society and industry.</li>
                            <li>To develop skills in the fields of Mathematics, Science, and Communication with ethical values.</li>
                            <li>To promote soft skills, leadership qualities, and innovative research skills.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* CAPABILITIES & FACILITIES */}
                <h2 className="glam-title">Excellence & <span>Facilities</span></h2>
                <motion.div
                    className="capabilities-grid"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaSquareRootAlt className="cap-icon" />
                        <h4 style={{ color: "var(--sh-primary)" }}>Applied Mathematics</h4>
                        <p>Fostering analytical logic and mathematical precision crucial for understanding complex engineering problem-solving.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaAtom className="cap-icon" />
                        <h4 style={{ color: "var(--sh-primary)" }}>Applied Physics</h4>
                        <p>Well-equipped optics and mechanics laboratories to ensure a deep understanding of natural physical laws and theories.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaFlask className="cap-icon" />
                        <h4 style={{ color: "var(--sh-primary)" }}>Applied Chemistry</h4>
                        <p>Providing hands-on experiments mapping chemical principles to materials, energy, and environmental sustainability.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaGlobe className="cap-icon" />
                        <h4 style={{ color: "var(--sh-primary)" }}>Communication Skills</h4>
                        <p>Empowering students with soft skills, leadership acumen, and global linguistic abilities for corporate success.</p>
                    </motion.div>
                </motion.div>

                {/* ASSOCIATION HIGHLIGHT */}
                <motion.div
                    className="glam-banner"
                    initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                >
                    <motion.div
                        className="glam-banner-icon"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
                    >
                        <img src={logo7thSense} alt="7th Sense Logo" className="glam-banner-logo" style={{ background: "white", padding: "10px" }} />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        7TH SENSE ASSOCIATION
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Touch allows connection. Hearing and sight allow awareness. Your sixth sense allows you to ‘feel’ the intangible. Welcome to the 7th Sense—pushing boundaries beyond standard perception.
                    </motion.p>
                </motion.div>

                {/* LEADERSHIP */}
                <h2 className="glam-title">Department <span>Leadership</span></h2>
                <motion.div
                    className="hod-banner"
                    initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                >
                    <motion.div
                        className="hod-avatar"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.4 }}
                    >
                        <div className="hod-avatar-ring"></div>
                        {hod.image ? <img src={hod.image} alt={hod.name} /> : <FaUserTie />}
                    </motion.div>
                    <div className="hod-details">
                        <motion.h3
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {hod.name}
                        </motion.h3>
                        <motion.span
                            className="designation"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {hod.desig}
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <strong>Qualifications:</strong> {hod.qual}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <FaEnvelope style={{ color: 'var(--sh-accent)' }} /> {hod.email}
                        </motion.p>
                    </div>
                </motion.div>

                {/* STELLAR FACULTY GRID */}
                <h2 className="glam-title">Expert <span>Faculty</span></h2>
                <motion.div
                    className="faculty-team-grid"
                    variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    {staff.map((member, idx) => (
                        <motion.div key={idx} className="member-card" variants={fadeInUp}>
                            <div className="member-avatar">
                                {member.image ? <img src={member.image} alt={member.name} /> : <span style={{ fontSize: "2rem" }}>{member.name.charAt(0)}</span>}
                            </div>
                            <div className="member-info">
                                <h4 style={{ color: "var(--sh-primary)", fontSize: "1.2rem" }}>{member.name}</h4>
                                <span className="desig">{member.desig}</span>
                                <span className="qual">{member.qual}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* EVENTS SECTION */}
                <h2 className="glam-title">Department <span>Events</span></h2>
                <motion.div
                    className="empty-events-state"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}
                >
                    <FaCalendarTimes className="empty-icon" />
                    <p>No events created yet for this department.</p>
                </motion.div>

            </main>
        </div>
    );
};

export default ScienceHumanities;

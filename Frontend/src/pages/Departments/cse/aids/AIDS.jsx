import React from "react";
import { motion } from "framer-motion";
import {
    FaBrain, FaNetworkWired, FaUserTie,
    FaEnvelope, FaRobot, FaDatabase, FaProjectDiagram, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import "./AIDS.css";

import aidsBannerImg from "./images/aids-banner.png";
import aimLogo from "./images/aim.png";

// Faculty Imports
import imgVignesh from "./images/vignesh.jpg";
import imgVinothKumar from "./images/vinothkumar.jpg";
import imgKanimoli from "./images/kanimoli.jpg";
import imgGeerthiga from "./images/68060bda58c98_Geerthiga.jpg";
import imgPavithra from "./images/Pavithra.jpg";
import imgNagajothi from "./images/Nagajothi.jpg";
import imgSunitha from "./images/1778918688_ADS - Sunitha.jpeg";
import imgKodeeswaran from "./images/1778918812_ADS - Kodeeswaran.jpeg";

const AIDS = () => {
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
        { name: "Mr. L.S. Vignesh", desig: "Assistant Professor & Head [I/C]", qual: "M.E., (Ph.D)", email: "hodai_ds@nscet.org", image: imgVignesh },
        { name: "Mr. J. Vinoth Kumar", desig: "Assistant Professor", qual: "M.E., (Ph.D)", email: "vinothkumar@nscet.org", image: imgVinothKumar },
        { name: "J. Kanimoli", desig: "Assistant Professor", qual: "M.E.", email: "kanimoli@nscet.org", image: imgKanimoli },
        { name: "Mrs. G. Geerthiga", desig: "Assistant Professor", qual: "M.E.", email: "-", image: imgGeerthiga },
        { name: "Mrs. M. Pavithra", desig: "Assistant Professor", qual: "M.E.", email: "pavithra@nscet.org", image: imgPavithra },
        { name: "Ms. P. Nagajothi", desig: "Assistant Professor", qual: "M.E.", email: "nagajothi@nscet.org", image: imgNagajothi },
        { name: "Sunitha S", desig: "Assistant Professor", qual: "M.E.", email: "sunitha.sagee@gmail.com", image: imgSunitha },
        { name: "Kodeeswaran S", desig: "Assistant Professor", qual: "M.Tech.", email: "mail2kodees@gmail.com", image: imgKodeeswaran }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="aids-container">

            {/* HERO BANNER — Curved box, no blue overlay */}
            <section className="aids-hero-section">
                <div
                    className="aids-hero-box"
                    style={{ backgroundImage: `url(${aidsBannerImg})` }}
                >
                    <div className="aids-hero-overlay"></div>
                    <div className="aids-hero-content">
                        <motion.h1
                            className="aids-hero-title"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE
                        </motion.h1>
                        <motion.p
                            className="aids-hero-subtitle"
                            style={{ fontSize: "1.15rem", maxWidth: "750px", marginTop: "1rem", fontWeight: 400, letterSpacing: "normal" }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Equipping engineers to combine cutting-edge technology, neural optimization, and analytics to create intelligent software capable of limitless automation.
                        </motion.p>
                    </div>
                </div>
            </section>

            <main className="content-wrapper">

                {/* BENTO GRID: ABOUT US */}
                <motion.div
                    className="about-bento"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    <motion.div className="bento-card primary" variants={fadeInUp}>
                        <h3>Our Department</h3>
                        <p>
                            B.Tech. Artificial Intelligence & Data Science is an undergraduate programme featuring advanced learning paradigms like machine learning, reinforcement learning, deep learning, big data, data sciences, and artificial intelligence.
                        </p>
                        <p>
                            The core curriculum is constructed to give students the skills necessary to combine cutting-edge technology into intelligent machinery while functioning ethically and practically in both academic research and professional corporate structures.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3>Overview</h3>
                        <p><strong>Goal:</strong> To provide computers the capacity to learn from datasets implicitly, optimizing sectors like finance, vocal recognition, and industry automation.</p>
                        <p><strong>Execution:</strong> Graduates adapt rapidly to technology shifts, devise solutions for data structures, and work with environmental and societal awareness.</p>
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
                            To become a center for excellence in the field of Artificial Intelligence by promoting knowledge based education, innovation and cutting edge research in artificial engineering and data science.
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
                            <li>To create an environment that encourages students to achieve their potential and pursue their professional goals.</li>
                            <li>To support ongoing research and development efforts in partnership with prestigious enterprises and research centers.</li>
                            <li>To improve students’ interpersonal talents and human personalities to instill entrepreneurial skills that can thrive national growth.</li>
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
                        <FaBrain className="cap-icon" />
                        <h4 style={{ color: "var(--aids-primary)" }}>Machine Learning</h4>
                        <p>Specializing in reinforcement and deep learning models to predict trends and automate data clustering algorithms implicitly.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaDatabase className="cap-icon" />
                        <h4 style={{ color: "var(--aids-primary)" }}>Data Science</h4>
                        <p>Analyzing extensive datasets via big data architectures, statistics, mapping interfaces, and mathematical regression testing.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaRobot className="cap-icon" />
                        <h4 style={{ color: "var(--aids-primary)" }}>Industrial Robotics</h4>
                        <p>Designing sophisticated AI applications targeted toward financial routing, voice synthesis, and autonomous task handling.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaProjectDiagram className="cap-icon" />
                        <h4 style={{ color: "var(--aids-primary)" }}>Algorithm Architecture</h4>
                        <p>Constructing scalable node graphs for rapid response servers interfacing heavily with unstructured raw datasets.</p>
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
                        <img src={aimLogo} alt="AIM Logo" className="glam-banner-logo" style={{ borderRadius: '15px' }} />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        ASSOCIATION OF INTELLIGENCE MINDS
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Connecting ambitious students seeking advanced breakthroughs in Artificial Intelligence. This community promotes intellectual collaboration and rapid development across highly advanced algorithms and statistical projects.
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
                            <FaEnvelope style={{ color: 'var(--aids-accent)' }} /> {hod.email}
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
                                <h4 style={{ color: "var(--aids-primary)", fontSize: "1.2rem" }}>{member.name}</h4>
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

export default AIDS;

import React from "react";
import { motion } from "framer-motion";
import {
    FaBolt, FaMicrochip, FaUserTie,
    FaEnvelope, FaSolarPanel, FaIndustry, FaBroadcastTower, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import "./Electrical.css";

import eeeBannerImg from "./images/eee-banner.png";
import electroblitzLogo from "./images/Electroblitz.png";

import imgGanesh from "./images/ganesh.jpg";
import imgRajaKarthick from "./images/raja_karthick.jpg";
import imgNishetha from "./images/Nishetha_jeflin_nixon.jpg";
import imgVijayalakshmi from "./images/Vijayalakshmi.jpg";
import imgShiva from "./images/shiva.jpg";
import imgAbirami from "./images/Abirami.jpg";
import imgChitra from "./images/chitra.jpg";
import imgJuriyaBanu from "./images/juriyabanu.jpg";
import imgPandiSelvi from "./images/pandiselvi.jpeg";

const Electrical = () => {
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
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const faculties = [
        { name: "Mr. K. Ganesh", desig: "Assistant Professor", qual: "M.E., (Ph.D.)", email: "ganesh@nscet.org", image: imgGanesh },
        { name: "Mr. R. Raja Karthick", desig: "Assistant Professor", qual: "M.E.", email: "rajakarthick@nscet.org", image: imgRajaKarthick },
        { name: "Mrs. A. Nishetha Jeflin Nixon", desig: "Assistant Professor", qual: "M.E.", email: "nishethajeflinnixon@nscet.org", image: imgNishetha },
        { name: "Mrs. M. Vijayalakshmi", desig: "Assistant Professor", qual: "M.E.", email: "vijayalakshmi@nscet.org", image: imgVijayalakshmi },
        { name: "Mr. C. Shiva", desig: "Assistant Professor", qual: "M.E., (Ph.D.)", email: "shiva@nscet.org", image: imgShiva },
        { name: "Mrs. N. Abirami", desig: "Assistant Professor", qual: "M.E., (Ph.D.)", email: "abiramin@nscet.org", image: imgAbirami },
        { name: "Mrs. R. Chitra", desig: "Associate Professor", qual: "M.E.", email: "chitrar@nscet.org", image: imgChitra },
        { name: "Mrs. H. Juriya Banu", desig: "Assistant Professor", qual: "M.E.", email: "juriyabanu@nscet.org", image: imgJuriyaBanu },
        { name: "Dr. N. Pandi Selvi", desig: "Assistant Professor", qual: "B.E., M.E., Ph.D.", email: "pandiselvi@nscet.org", image: imgPandiSelvi }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="eee-container">

            {/* HERO BANNER — Curved box, no blue overlay */}
            <section className="eee-hero-section">
                <div
                    className="eee-hero-box"
                    style={{ backgroundImage: `url(${eeeBannerImg})` }}
                >
                    <div className="eee-hero-overlay"></div>
                    <div className="eee-hero-content">
                        <motion.h1
                            className="eee-hero-title"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            DEPARTMENT OF ELECTRICAL AND ELECTRONICS ENGINEERING
                        </motion.h1>
                        <motion.p
                            className="eee-hero-subtitle"
                            style={{ fontSize: "1.15rem", maxWidth: "750px", marginTop: "1rem", fontWeight: 400, letterSpacing: "normal" }}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            The front runner of modern innovation — powering generation, automation, and consumer electronics with technical expertise.
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
                            We aim to produce engineers with the abilities to make students the best in analytical ability, technical skills, and engineering concepts necessary to renovate a concept into a reliable, commercial, and safe product.
                        </p>
                        <p>
                            We prepare students in multifaceted areas of Electrical and Electronics Engineering suitable for working in core industries, research establishments, and entrepreneurship by understanding the importance of professional ethics and professional practice.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3>Overview</h3>
                        <p><strong>Multidisciplinary:</strong> Enhancing the knowledge of students in varied areas with scientific and engineering scope to understand, examine, and design products securely.</p>
                        <p><strong>Societal Focus:</strong> Preparing students to solve relevant challenges while emphasizing ethical engineering solutions and continuous life-long learning.</p>
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
                            To emerge as a valuable global resource for power sector and consumer electronics.
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
                            <li>To utilize efficient and required teaching methodologies to nurture learners, as well as, establish industry-institute interactions.</li>
                            <li>To execute projects with integrity and ethics keeping pace with the latest trends in power industry.</li>
                            <li>To develop energy parks to handle various sustainable challenges in the society.</li>
                            <li>To upgrade the technical knowledge and skills of faculty through quality improvement programmes.</li>
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
                        <FaBolt className="cap-icon" />
                        <h4 style={{ color: "var(--eee-primary)" }}>Power Systems</h4>
                        <p>Advanced study of power generation, transmission, and seamless distribution across electrical grids and infrastructures.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaMicrochip className="cap-icon" />
                        <h4 style={{ color: "var(--eee-primary)" }}>Consumer Electronics</h4>
                        <p>Specialized focus on designing, analyzing, and improving sophisticated AC, DC, and special electric machines.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaSolarPanel className="cap-icon" />
                        <h4 style={{ color: "var(--eee-primary)" }}>Energy Parks</h4>
                        <p>Establishing sustainable energy structures and projects to handle various environmentally sustainable challenges in society.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaBroadcastTower className="cap-icon" />
                        <h4 style={{ color: "var(--eee-primary)" }}>Control Engineering</h4>
                        <p>Providing quality education in multi-disciplinary fields including electronics, communication, and advanced control systems.</p>
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
                        <img src={electroblitzLogo} alt="Electroblitz Logo" className="glam-banner-logo" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Electroblitz
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        The objective of Electroblitz is to support the development of highly skilled engineers and technicians needed by industries through technical events, enhancing both academic and extracurricular activities.
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
                            <FaEnvelope style={{ color: 'var(--eee-accent)' }} /> {hod.email}
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
                                {member.image ? <img src={member.image} alt={member.name} /> : <FaUserTie />}
                            </div>
                            <div className="member-info">
                                <h4 style={{ color: "var(--eee-primary)" }}>{member.name}</h4>
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

export default Electrical;

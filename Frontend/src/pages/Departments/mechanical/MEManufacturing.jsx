import React from "react";
import { motion } from "framer-motion";
import {
    FaCogs, FaIndustry, FaUserTie,
    FaEnvelope, FaFlask, FaRobot, FaTools, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import "./Mechanical.css";

import mechBannerImg from "./images/mech-banner.png";

// Faculty images
import imgMathalaiSundaram from "./images/mathalai sundharam.png";
import imgVennimalaiRajan from "./images/Vennimalairajan.jpg";

const MEManufacturing = () => {
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
        { name: "Dr. C. Mathalai Sundaram", desig: "Principal & Professor", qual: "M.E., M.B.A., Ph.D., MISTE", email: "principal@nscet.org", image: imgMathalaiSundaram },
        { name: "Dr. A. Vennimalai Rajan", desig: "Assistant Professor", qual: "M.E., Ph.D, MISTE.", email: "vennimalairajan@nscet.org", image: imgVennimalaiRajan }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="mech-container">

            {/* HERO BANNER */}
            <section className="mech-hero-section">
                <div
                    className="mech-hero-box"
                    style={{ backgroundImage: `url(${mechBannerImg})` }}
                >
                    <div className="mech-hero-overlay"></div>
                    <div className="mech-hero-content">
                        <motion.h1
                            className="mech-hero-title"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            DEPARTMENT OF ME MANUFACTURING ENGINEERING
                        </motion.h1>
                        <motion.p
                            className="mech-hero-subtitle"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Advancing postgraduate excellence in manufacturing systems, research innovation, and industrial engineering technology.
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
                            The Department of Manufacture Engineering aims to produce engineers with the abilities:
                        </p>
                        <ul style={{ color: "rgba(255, 255, 255, 0.85)", paddingLeft: "1.2rem", lineHeight: 2, fontSize: "0.95rem" }}>
                            <li>To design and conduct experiments, as well as to analyze and interpret data.</li>
                            <li>To design a system, component to meet desired needs.</li>
                            <li>To function on a multi-disciplinary team.</li>
                            <li>To identify, formulate, and solve engineering problems.</li>
                            <li>Understanding of professional and ethical responsibility.</li>
                            <li>To use the techniques, skills, and modern engineering tools which are necessary for engineering practice, recognition of the need for, and an ability to engage in lifelong learning.</li>
                        </ul>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3>Overview</h3>
                        <p><strong>Scope:</strong> Principles employed in industries such as power generation, manufacturing, automotive, aerospace, robotics, and nanotechnology.</p>
                        <p><strong>Competence:</strong> Interdisciplinary themes such as Health, Environment, Civics, and Entrepreneurship are taught to motivate, inspire, and build trust.</p>
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
                            To emerge as a center of excellence, offering Technical education and research opportunities of very high standards to the students, and imparting timeless core values to the learners to serve Multicultural Society.
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
                            <li>Imparting quality education to create efficient Mechanical Engineers who can compete at the global level.</li>
                            <li>Building state of the art research facilities in Mechanical Engineering in order to enable the faculty and students to learn and disseminate knowledge and innovative in their applications.</li>
                            <li>Facilitating team work culture, improve the social standards and quality of life of gratitude.</li>
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
                        <FaFlask className="cap-icon" />
                        <h4>Advanced Testing Labs</h4>
                        <p>State-of-the-art facilities equipped with modern instruments for thermal, manufacturing, and materials testing.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaCogs className="cap-icon" />
                        <h4>Manufacturing Workshop</h4>
                        <p>Comprehensive workshop with CNC machines, lathes, milling, and welding equipment for hands-on training.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaRobot className="cap-icon" />
                        <h4>Automation & Robotics Lab</h4>
                        <p>Training in automation, control systems, robotics, and Industry 4.0 technologies for modern engineering practice.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaTools className="cap-icon" />
                        <h4>CAD/CAM Software Lab</h4>
                        <p>Extensive training on industry software including AutoCAD, SolidWorks, CATIA, ANSYS, and Pro-E for design excellence.</p>
                    </motion.div>
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
                            <FaEnvelope style={{ color: 'var(--mech-accent)' }} /> {hod.email}
                        </motion.p>
                    </div>
                </motion.div>

                {/* FACULTY GRID */}
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
                                <h4>{member.name}</h4>
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

export default MEManufacturing;

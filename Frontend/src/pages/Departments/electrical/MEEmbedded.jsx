import React from "react";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
    FaBolt, FaMicrochip, FaUserTie,
    FaEnvelope, FaSolarPanel, FaIndustry, FaBroadcastTower, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./Electrical.css";

import eeeBannerImg from "./images/eee-banner.png";

// Faculty images
import imgKalaivani from "./images/kalaivani.jpg";
import imgAthilingam from "./images/Dr_athilingam.jpg";

const MEEmbedded = () => {
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
        { name: "Dr. R. Athilingam", desig: "Associate Professor & Head [I/C]", qual: "M.E., Ph.D", email: "athilingam@nscet.org", image: imgAthilingam },
        { name: "Mrs. S. Kalaivani", desig: "Assistant Professor", qual: "M.Tech.", email: "kalaivani@nscet.org", image: imgKalaivani }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="eee-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF ME EMBEDDED SYSTEMS"
                subtitle="Mastering the core of smart technology—designing sophisticated embedded architecture for automation and intelligent computing."
                hideBreadcrumb={true}
                backgroundImage={eeeBannerImg}
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
                            The Department of ME Embedded System and Technologies aims to produce engineers with the abilities:
                        </p>
                        <ul style={{ color: "rgba(255, 255, 255, 0.85)", paddingLeft: "1.2rem", lineHeight: 2, fontSize: "0.95rem" }}>
                            <li>To make the students best in analytical ability, technical skills and engineering concepts those are necessary to renovate a concept into a reliable, commercial and safe product.</li>
                            <li>To develop the students in core areas of Electrical and Electronics Engineering in order to make them suitable for working in core Industries, research establishment and also as entrepreneurs by understanding the importance of professional ethics and codes of professional practice.</li>
                            <li>To enhance the knowledge of the students in multidisciplinary areas with good scientific and engineering scope to understand, examine and design products.</li>
                            <li>To prepare the students to understand problems relevant to the society and provide ethical engineering solutions.</li>
                            <li>To encourage student consciousness for continuous learning and importance of professional ethics and codes of professional practice.</li>
                        </ul>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Scope:</strong> Embedded systems engineering covers the design, development, and optimization of hardware-software integrated systems used in industrial automation, IoT, robotics, and intelligent technologies.</p>
                        <p><strong>Competence:</strong> The department emphasizes analytical ability, technical skills, and ethical engineering practices to create reliable, commercial, and safe embedded products for real-world applications.</p>
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
                            To emerge as a valuable global resource for embedded systems and intelligent technologies.
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
                            <li>To utilize efficient and required teaching methodologies to nurture learners, as well as establish industry-institute interactions.</li>
                            <li>To execute projects with integrity and ethics keeping pace with the latest trends in embedded and electronics industries.</li>
                            <li>To develop innovative solutions to handle various sustainable challenges in the society.</li>
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
                        <FaMicrochip className="cap-icon" />
                        <h4>Embedded Systems Lab</h4>
                        <p>Advanced facilities equipped with microcontrollers, FPGA boards, and development kits for hands-on embedded system design and programming.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaBolt className="cap-icon" />
                        <h4>Power Electronics Lab</h4>
                        <p>Comprehensive training on power converters, motor drives, and control systems for industrial and renewable energy applications.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaBroadcastTower className="cap-icon" />
                        <h4>IoT & Communication Lab</h4>
                        <p>Dedicated facilities for Internet of Things, wireless communication protocols, and intelligent sensor network design.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaSolarPanel className="cap-icon" />
                        <h4>Automation & Control Lab</h4>
                        <p>State-of-the-art equipment for industrial automation, PLC programming, SCADA systems, and real-time control applications.</p>
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
                            <FaEnvelope style={{ color: 'var(--eee-accent)' }} /> {hod.email}
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

export default MEEmbedded;

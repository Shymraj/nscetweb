import React from "react";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
    FaMicrochip, FaBroadcastTower, FaUserTie,
    FaEnvelope, FaSatelliteDish, FaRobot, FaLaptopCode, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./Electronics.css";

import eceBannerImg from "./images/ece-banner.png";
import echelonzLogo from "./images/ECHELONZ.png";

import imgVenishkumar from "./images/venishkumar.jpg";
import imgMathavan from "./images/Mathavan.jpg";
import imgIdhayachandran from "./images/idhayachandran.jpg";
import imgPrathap from "./images/prathap.jpg";
import imgPradeepKumar from "./images/pradeepkumar.jpg";
import imgTamilSelvi from "./images/tamilselvi.jpg";
import imgShanthaDevi from "./images/shanthadevi.jpg";
import imgGowthami from "./images/gowthami.jpg";
import imgBharathiKannan from "./images/bharathikannan.jpg";

const Electronics = () => {
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
        { name: "Dr. T. Venishkumar", desig: "Associate Professor & Head [I/C]", qual: "M.E., Ph.D", email: "venishkumar@nscet.org", image: imgVenishkumar },
        { name: "Dr. N. Mathavan", desig: "Assistant Professor", qual: "B.Tech., M.E., Ph.D", email: "memadhavan@gmail.com", image: imgMathavan },
        { name: "Mr. M. Idhayachandran", desig: "Assistant Professor", qual: "M.E.", email: "idhayachandran@nscet.org", image: imgIdhayachandran },
        { name: "Mr. S. Prathap", desig: "Assistant Professor", qual: "M.E (PhD)", email: "prathaps@nscet.org", image: imgPrathap },
        { name: "Mr. R. Pradeep Kumar", desig: "Assistant Professor", qual: "M.E (PhD)", email: "pradeepkumar@nscet.org", image: imgPradeepKumar },
        { name: "Mrs. T. Tamil Selvi", desig: "Assistant Professor", qual: "M.Tech., (Ph.D.)", email: "tamilselvi@nscet.org", image: imgTamilSelvi },
        { name: "Mrs. P. Shantha Devi", desig: "Assistant Professor", qual: "M.E., (Ph.D.)", email: "shanthadevi@nscet.org", image: imgShanthaDevi },
        { name: "Mrs. P. Gowthami", desig: "Assistant Professor", qual: "M.E.", email: "gowthami@nscet.org", image: imgGowthami },
        { name: "Mr. K. Bharathi Kannan", desig: "Assistant Professor (General Engg.)", qual: "M.E.", email: "bharathikannan@nscet.org", image: imgBharathiKannan }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="ece-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING"
                subtitle="Connecting the world through silicon and signals — mastering semiconductor design, embedded systems, and telecommunication."
                hideBreadcrumb={true}
                backgroundImage={eceBannerImg}
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
                            The Department of Electronics and Communication Engineering aims to impart an enduring source of inspiration and a frame of reference for students' professional and ethical values.
                        </p>
                        <p>
                            We provide practical exposure through continuously upgraded laboratories, foster technical awareness through eminent expert interactions, and promote overall excellence in the fields of communication and computing.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Core Focus:</strong> Optimum mix of Electronics, Communication, and Computer Engineering emphasizing VLSI, Embedded Systems, Instrumentation, Automation, and Robotics.</p>
                        <p><strong>Excellence:</strong> Strict adherence to quality norms in teaching-learning is our strength, carving students to be technically skilled and socially conscious.</p>
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
                            To become pioneer in creating engineers well-versed in communication engineering and electronic market.
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
                            <li>To provide quality education as per the requirement of the communication field using the state-of-art infrastructure.</li>
                            <li>To promote excellence, creativity, nurture the spirit of innovation in the field of digital technology.</li>
                            <li>To enhance relationships with electronics and communication industries, professional society, government bodies and alumni.</li>
                            <li>To promote soft skills, leadership qualities and innovative research skills with ethical values.</li>
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
                        <h4 style={{ color: "var(--ece-primary)" }}>VLSI Design</h4>
                        <p>Specialized laboratories optimizing deep sub-micron design, architecture, and semiconductor technologies.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaBroadcastTower className="cap-icon" />
                        <h4 style={{ color: "var(--ece-primary)" }}>Communication Systems</h4>
                        <p>Hands-on experimentation with wireless fidelity arrays, optical networking, and multi-band transmission setups.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaRobot className="cap-icon" />
                        <h4 style={{ color: "var(--ece-primary)" }}>Embedded & Robotics</h4>
                        <p>Dedicated facilities for microprocessor programming, microcontroller integration, and automated robotic systems designing.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaLaptopCode className="cap-icon" />
                        <h4 style={{ color: "var(--ece-primary)" }}>Digital Prototyping</h4>
                        <p>Advanced digital logic infrastructures for rapid testing, simulations, and real-time electronic algorithm validation.</p>
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
                        <img src={echelonzLogo} alt="Echelonz Logo" className="glam-banner-logo" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        ECHELONZ
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        The Echelonz Association empowers students by selecting leaders who organize skill-enhancing programs and provide platforms to showcase talent across academic and cultural environments.
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
                            <FaEnvelope style={{ color: 'var(--ece-accent)' }} /> {hod.email}
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
                                <h4 style={{ color: "var(--ece-primary)" }}>{member.name}</h4>
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

export default Electronics;

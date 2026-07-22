import React from "react";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
    FaLaptopCode, FaDatabase, FaServer, FaUserTie,
    FaEnvelope, FaCodeBranch, FaShieldAlt, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./CSE.css";

import cseBannerImg from "./images/cse-banner.png";

import imgSathya from "./images/sathya.jpeg";
import imgKarthick from "./images/karthick.jpeg";

const MECSE = () => {
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
        { name: "Dr. M. SATHYA", desig: "Professor", qual: "M.Tech., MBA., Ph.D", email: "hodit@nscet.org", image: imgSathya },
        { name: "Naveenkarthick G R", desig: "Assistant Professor", qual: "M.E.", email: "grnaveenkarthick@gmail.com", image: imgKarthick }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="cse-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF ME COMPUTER SCIENCE AND ENGINEERING"
                subtitle="Driving the next generation of computing through advanced research, scalable architecture, and intelligent systems."
                hideBreadcrumb={true}
                backgroundImage={cseBannerImg}
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
                            The Department of ME Computer Science and Engineering aims to produce the engineers with the abilities:
                        </p>
                        <ul style={{ color: "rgba(255, 255, 255, 0.85)", paddingLeft: "1.2rem", lineHeight: 2, fontSize: "0.95rem" }}>
                            <li>Be life long learners who continue to pursue professional development.</li>
                            <li>Participate and thrive in a multidisciplinary, systems-oriented work environment.</li>
                            <li>Contribute to the solution of complex technical problems that exist in the software industry.</li>
                            <li>Understand their ethical roles as a professional engineer and strive to promote a practice of integrity, tolerance, and respect in the workplace.</li>
                        </ul>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Excellence:</strong> Nurturing a conducive environment for advanced research and postgraduate learning by adopting cutting-edge computing technologies while producing confident, research-driven software professionals.</p>
                        <p><strong>Environment:</strong> The department features an excellent academic grounding intertwined with teamwork, inspiring technical enhancement through deep, continuous faculty-guided learning and research.</p>
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
                            To become a leading hub in the field of Computer engineering.
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
                            <li>To provide a strong theoretical and practical knowledge emphasizing on software developments.</li>
                            <li>To encourage autonomous learning foster interactions and establish partnership with renowned software industries.</li>
                            <li>To inculcate soft skills, leadership qualities and innovative research skills with ethical values.</li>
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
                        <FaLaptopCode className="cap-icon" />
                        <h4 style={{ color: "var(--cse-primary)" }}>Software Engineering</h4>
                        <p>Advanced coding labs equipped with latest platforms emphasizing practical methodology and full-stack development.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaDatabase className="cap-icon" />
                        <h4 style={{ color: "var(--cse-primary)" }}>Data Systems</h4>
                        <p>Extensive training on robust databases, big data tools, analytics, and foundational storage algorithms.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaShieldAlt className="cap-icon" />
                        <h4 style={{ color: "var(--cse-primary)" }}>Cyber Solutions</h4>
                        <p>Learning environments tailored towards exploring ethical practices, system security, and reliable protocols.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaCodeBranch className="cap-icon" />
                        <h4 style={{ color: "var(--cse-primary)" }}>System Research</h4>
                        <p>Empowering innovation and technology incubation to convert academic ideas into robust real-world products.</p>
                    </motion.div>
                </motion.div>

                {/* LEADERSHIP */}
                <h2 className="glam-title" style={{ marginTop: "2rem" }}>Department <span>Leadership</span></h2>
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
                            <FaEnvelope style={{ color: 'var(--cse-accent)' }} /> {hod.email}
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
                                <h4 style={{ color: "var(--cse-primary)" }}>{member.name}</h4>
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

export default MECSE;

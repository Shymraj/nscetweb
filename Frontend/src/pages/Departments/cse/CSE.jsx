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
import fistLogo from "./images/fist.png";
import ispinLogo from "./images/ispin.png";

import imgMathalaiRaj from "./images/67dd26bfce3c4_mathalairaj.jpg";
import imgVelkumar from "./images/69143b078344d_velkumar.JPG";
import imgDeepiga from "./images/deepika.jpg";
import imgArchana from "./images/archana.jpg";
import imgAbirami from "./images/1774499419_abirami mam.jpeg";
import imgVenkataLakshmi from "./images/69143b5a4fe7e_venkatalakshmi.JPG";
import imgAnusuya from "./images/1774870992_anusuya.jpeg";
import imgVinothini from "./images/1778918321_CSE - Vinothini.jpeg";
import imgSnega from "./images/1778918481_CSE - Snega Priyanka.png";

const CSE = () => {
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
        { name: "Dr. J. Mathalai Raj", desig: "Assistant Professor & Head [I/C]", qual: "M.E (CSE), Ph.D", email: "hodcse@nscet.org", image: imgMathalaiRaj },
        { name: "Mr. K. Velkumar", desig: "Assistant Professor", qual: "M.E, (Ph.D)", email: "velkumar@nscet.org", image: imgVelkumar },
        { name: "Mrs. K. Deepiga", desig: "Assistant Professor", qual: "B.E, M.E", email: "deepiga.kece@gmail.com", image: imgDeepiga },
        { name: "Mrs. R. Archana", desig: "Assistant Professor", qual: "M.E., (Ph.D)", email: "archana@nscet.org", image: imgArchana },
        { name: "Ms. S. Abirami Kayathiri", desig: "Assistant Professor", qual: "M.E.", email: "abiramikayathiri@nscet.org", image: imgAbirami },
        { name: "Mrs. M. Venkata Lakshmi", desig: "Assistant Professor", qual: "M.E.", email: "venkatalakshmi@nscet.org", image: imgVenkataLakshmi },
        { name: "Anusuya V", desig: "Assistant Professor", qual: "M.E.", email: "anusuya@nscet.org", image: imgAnusuya },
        { name: "Vinothini V", desig: "Assistant Professor", qual: "M.E - Software", email: "vinoramesh2703@gmail.com", image: imgVinothini },
        { name: "Snega Priyanka J S", desig: "Assistant Professor", qual: "M.E.", email: "snegapriyanka20@gmail.com", image: imgSnega }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="cse-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING"
                subtitle="Innovating the digital frontier — shaping the future through code, intelligence, and boundless creativity."
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
                            The Department of Computer Science and Engineering aims to produce engineers who are life-long learners pursuing professional development and thriving in a multidisciplinary, systems-oriented work environment.
                        </p>
                        <p>
                            We train students to contribute to the solution of complex technical problems existing in the software industry, understanding their ethical roles as professional engineers striving to promote integrity, tolerance, and respect.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Excellence:</strong> Nurturing a conducive environment for erudition and research by adopting appropriate computing technologies while creating confident, real-time software professionals.</p>
                        <p><strong>Environment:</strong> The department features an excellent academic grounding intertwined with teamwork, inspiring technical enhancement through deep, continuous faculty-guided learning.</p>
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

                {/* ASSOCIATION HIGHLIGHTS */}
                <h2 className="glam-title">Department <span>Associations</span></h2>

                <motion.div
                    className="glam-banner"
                    style={{ marginBottom: "2rem" }}
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
                        <img src={fistLogo} alt="FIST Logo" className="glam-banner-logo" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Fraternity of Immortal Software Technocrats (FIST)
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Running successfully for over six years, our passionate group of engineers constantly involve themselves in organizing technical and non-technical events to invoke creativity.
                    </motion.p>
                </motion.div>

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
                        <img src={ispinLogo} alt="iSPIN Logo" className="glam-banner-logo" style={{ background: "white", padding: "10px" }} />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Innovative Software Product Industry of NSCET (iSPIN)
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        A pure IT sector established within NSCET serving as an incubation cell. Under the guidance of industry specialists, iSPIN focuses on Unlearn & Learn strategy to develop products for NSCET and its clients.
                    </motion.p>
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

export default CSE;

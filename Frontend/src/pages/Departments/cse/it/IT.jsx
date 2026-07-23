import React from "react";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import { motion } from "framer-motion";
import {
    FaLaptopCode, FaServer, FaUserTie,
    FaEnvelope, FaNetworkWired, FaCloudUploadAlt, FaDatabase, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../../components/common/PageBanner/PageBanner";
import "./IT.css";

import itBannerImg from "./images/it-banner.png";
import nexusLogo from "./images/nexus.jpg";

// Faculty Imports
import imgPrathap from "./images/prathap.jpg";
import imgUdhayakumar from "./images/udhayakumar.jpg";
import imgKesavamoorthy from "./images/kesavamoorthy.jpg";
import imgSaiSuganya from "./images/68060d94a3a65_sai suganya.jpg";
import imgBhavani from "./images/681edc339e8a7_bhavani photos.jpg";
import imgMahalakshmi from "./images/Mahalakshmi.jpg";
import imgJasmineJose from "./images/jasminejose.jpg";
import imgArulJothi from "./images/aruljothi.jpg";

const IT = () => {
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
        { name: "Mr. C. Prathap", desig: "Assistant Professor & Head [I/C]", qual: "M.Tech., (Ph.D)", email: "prathapc@nscet.org", image: imgPrathap },
        { name: "Mr. R. Udhaya Kumar", desig: "Assistant Professor", qual: "M.E (CSE), MBA (ITM), (Ph.D)", email: "udhayakumar@nscet.org", image: imgUdhayakumar },
        { name: "Mr. N. Kesavamoorthy", desig: "Assistant Professor", qual: "M.E (CSE)", email: "kesavamoorthy@nscet.org", image: imgKesavamoorthy },
        { name: "B. SAI SUGANYA", desig: "Assistant Professor", qual: "M.Tech.", email: "saisuganya@nscet.org", image: imgSaiSuganya },
        { name: "Mrs. M Bhavani", desig: "Assistant Professor", qual: "B.Tech.", email: "gmbhavani1990@gmail.com", image: imgBhavani },
        { name: "Mrs. S. Mahalakshmi", desig: "Assistant Professor", qual: "M.E.", email: "mahalakshmi@nscet.org", image: imgMahalakshmi },
        { name: "Mrs. P. Jasmine Jose", desig: "Assistant Professor", qual: "M.E.", email: "jasminejose@nscet.org", image: imgJasmineJose },
        { name: "Mrs. S. Arul Jothi", desig: "Assistant Professor", qual: "M.E., (Ph.D)", email: "aruljothi@nscet.org", image: imgArulJothi }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="it-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF INFORMATION TECHNOLOGY"
                subtitle="Empowering the connected world — transforming data into intelligent solutions for a digital future."
                hideBreadcrumb={true}
                backgroundImage={itBannerImg}
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
                            The Information Technology department aims to produce engineers equipped to understand the Multidisciplinary Domain of Information Science and work towards Industrial needs.
                        </p>
                        <p>
                            We focus on producing ethically consistent and adaptive technicians who will contribute to the technical, scientific, and economic needs of specialized sectors in the IT field, thriving in an ever-demanding industry.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Ecosystem:</strong> Nurturing a conducive environment for erudition and research using appropriate, scalable computing technologies.</p>
                        <p><strong>Professionalism:</strong> The prime objective is to produce confident professionals tuned to real-time working environments with cutting-edge academic faculty.</p>
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
                            To bring out streamlined technocrats for building sustenance civilization.
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
                            <li>To inculcate technologies that decodes the solution for real world exigency.</li>
                            <li>To encourage and develop generous and ethical contributions to cater the industrial demands.</li>
                            <li>To impart and ignite the research skills along with soft skills to shine in the era of automation.</li>
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
                        <h4 style={{ color: "var(--it-primary)" }}>Software Prototyping</h4>
                        <p>Extensive hands-on laboratories equipped with advanced algorithmic, machine learning, and automation tools.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaNetworkWired className="cap-icon" />
                        <h4 style={{ color: "var(--it-primary)" }}>Information Architecture</h4>
                        <p>Designing sophisticated multi-tier networks, emphasizing reliability, redundancy, and modern protocol configurations.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaDatabase className="cap-icon" />
                        <h4 style={{ color: "var(--it-primary)" }}>Data Systems</h4>
                        <p>Managing extensive datasets with cloud integration, structural analysis, and intelligent parsing solutions.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaCloudUploadAlt className="cap-icon" />
                        <h4 style={{ color: "var(--it-primary)" }}>Cloud Technology</h4>
                        <p>Practical deployment environments designed around virtual scalability, security encapsulation, and global delivery systems.</p>
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
                        <img src={nexusLogo} alt="NEXUS Logo" className="glam-banner-logo" style={{ borderRadius: '50%' }} />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        NEXUS
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        Network Of Experts in Unified Systems — Connecting pioneering minds to engage in real-world problem-solving through workshops, hackathons, and collaborative software innovation.
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
                            <FaEnvelope style={{ color: 'var(--it-accent)' }} /> {hod.email}
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
                                <h4 style={{ color: "var(--it-primary)", fontSize: "1.2rem" }}>{member.name}</h4>
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

export default IT;

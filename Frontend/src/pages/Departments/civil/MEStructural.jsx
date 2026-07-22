import { motion } from "framer-motion";
import {
    FaHardHat, FaDraftingCompass, FaUserTie,
    FaEnvelope, FaAward, FaFlask, FaMapMarkedAlt, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./Civil.css";

import civilBannerImg from "./images/civil-banner.png";

// Faculty images
import imgAnanthaKrishnan from "./images/ananthakrishnan.jpg";
import imgSindhu from "./images/sindhu.jpg";
import imgBenita from "./images/Benita Photo.jpg";

const MEStructural = () => {
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
        { name: "Dr. E. Anantha Krishnan", desig: "Professor", qual: "M.E., Ph.D.", email: "ananthakrishnan@nscet.org", image: imgAnanthaKrishnan },
        { name: "Mrs. M. Sindhu", desig: "Assistant Professor", qual: "M.E., (Ph.D)", email: "sindhu@nscet.org", image: imgSindhu },
        { name: "Mrs. K. Benita Merlin Isabella", desig: "Assistant Professor", qual: "M.E", email: "benitamerlin22@gmail.com", image: imgBenita }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="civil-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF ME STRUCTURAL ENGINEERING"
                subtitle="Pioneering advanced design and analysis for resilient, modern, and sustainable infrastructure."
                hideBreadcrumb={true}
                backgroundImage={civilBannerImg}
            />

            <main className="content-wrapper">

                {/* BENTO GRID: ABOUT US */}
                <motion.div
                    className="about-bento"
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                >
                    <motion.div className="bento-card primary" variants={fadeInUp}>
                        <h3>Our Department</h3>
                        <p>
                            The Department of Structural Engineering aims to produce engineers with the abilities:
                        </p>
                        <ul style={{ color: "rgba(255, 255, 255, 0.85)", paddingLeft: "1.2rem", lineHeight: 2, fontSize: "0.95rem" }}>
                            <li>Structural Engineering is concerned with Design and Analysis of Buildings, Bridges, Towers, Flyovers, Tunnels, etc.</li>
                            <li>The Structural Engineer must Design the structures to be Safe for their users and to Successfully fulfill the function they are designed for (Serviceable).</li>
                            <li>Design considerations will include Strength, Stiffness, and Stability of the Structure.</li>
                            <li>Other considerations include Cost, Constructability, Safety, Aesthetics and Sustainability.</li>
                        </ul>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3>Overview</h3>
                        <p><strong>Scope:</strong> Structural Engineering encompasses the design and analysis of a wide range of structures including buildings, bridges, towers, flyovers, and tunnels with focus on safety and serviceability.</p>
                        <p><strong>Competence:</strong> The department emphasizes strength, stiffness, stability alongside cost-effectiveness, constructability, safety, aesthetics, and sustainability in all engineering solutions.</p>
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
                            Build professional and entrepreneurial skills to lead socio-economic domains.
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
                            <li>Practice sustainable environment to meet professional challenges with ethics.</li>
                            <li>Mentor students for innovative thinking with relevance to civilization.</li>
                            <li>Interact consistently with the industries to work on problems.</li>
                            <li>Endeavour for excellence in all facets of civil engineering.</li>
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
                        <FaDraftingCompass className="cap-icon" />
                        <h4>Structural Design Lab</h4>
                        <p>Advanced facilities for structural analysis, design computation, and modeling of complex engineering structures.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaFlask className="cap-icon" />
                        <h4>Materials Testing Lab</h4>
                        <p>State-of-the-art equipment for testing strength, stiffness, and stability of construction materials and structural components.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaHardHat className="cap-icon" />
                        <h4>Construction Technology</h4>
                        <p>Hands-on training in modern construction techniques, safety practices, and sustainable building methodologies.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaMapMarkedAlt className="cap-icon" />
                        <h4>Survey & Geotechnical Lab</h4>
                        <p>Comprehensive facilities for surveying, soil testing, and geotechnical investigation supporting structural foundation design.</p>
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
                            <FaEnvelope style={{ color: '#c9a84c' }} /> {hod.email}
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

export default MEStructural;

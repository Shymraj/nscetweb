import { motion } from "framer-motion";
import { BsBuildingsFill, BsEyeFill } from "react-icons/bs";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import {
    FaHardHat, FaDraftingCompass, FaUserTie,
    FaEnvelope, FaAward, FaFlask, FaMapMarkedAlt, FaCalendarTimes
} from "react-icons/fa";
import { GiEyeTarget, GiStairsGoal } from "react-icons/gi";
import "./Civil.css";

import imgNagarathinam from "./images/nagarathinam.jpg";
import imgGayathri from "./images/gayathri.jpg";
import imgShanmugapriyan from "./images/shanmugapriyan.jpg";
import imgSowmiya from "./images/sowmiya.jpg";
import imgKanimozhi from "./images/kanimozhi.jpg";
import imgAruljebaraj from "./images/aruljebaraj.jpg";
import imgNathirunSabinash from "./images/nathirunsabinash.jpg";
import imgHariprasath from "./images/hariprasath.jpg";
import imgManojPrabakar from "./images/Manoj_prabakar.jpg";
import civilBannerImg from "./images/civil-banner.png";
import eycaLogo from "./images/eyca-logo.png";

const Civil = () => {
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
        { name: "Mr. N. Nagarathinam", desig: "Head of Department [I/C]", qual: "M.E., M.I.S.T.E., (Ph.D)", email: "nagarathinam@nscet.org", image: imgNagarathinam },
        { name: "Mrs. S. Gayathri", desig: "Assistant Professor", qual: "M.E., M.I.S.T.E.", email: "gayathri@nscet.org", image: imgGayathri },
        { name: "Mr. R. Shanmugapriyan", desig: "Assistant Professor", qual: "M.E.", email: "shanmugapriyan@nscet.org", image: imgShanmugapriyan },
        { name: "Mrs. B. Sowmiya", desig: "Assistant Professor", qual: "M.E.", email: "sowmiya@nscet.org", image: imgSowmiya },
        { name: "Mrs. M. Kanimozhi", desig: "Assistant Professor", qual: "M.E.", email: "kanimozhi@nscet.org", image: imgKanimozhi },
        { name: "Mr. P. Arul Jebaraj", desig: "Assistant Professor", qual: "M.Tech", email: "aruljebaraj@nscet.org", image: imgAruljebaraj },
        { name: "Mrs. R. Nathirun Sabinash", desig: "Assistant Professor", qual: "M.E.", email: "nathirunsabinash@nscet.org", image: imgNathirunSabinash },
        { name: "Mr. T. Hariprasath", desig: "Assistant Professor", qual: "M.E.", email: "mailtohari16@gmail.com", image: imgHariprasath },
        { name: "Mr. R. Manoj Prabakar", desig: "Assistant Professor", qual: "M.E.", email: "manojprabakar@nscet.org", image: imgManojPrabakar }
    ];

    const hod = faculties[0];
    const staff = faculties.slice(1);

    return (
        <div className="civil-container">

            {/* HERO BANNER */}
            <PageBanner
                title="DEPARTMENT OF CIVIL ENGINEERING"
                subtitle="Building the foundation of tomorrow — where sustainable design meets structural excellence."
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
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsBuildingsFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Engineering the World</h3>
                        <p>
                            Our department aims to produce engineers with extraordinary abilities focusing on the
                            Strength, Stiffness, and Stability of structures. We embed a deep understanding of Cost,
                            Constructability, Safety, Aesthetics, and Sustainability into every student.
                        </p>
                        <p>
                            From mammoth Bridges and Flyovers to sustainable Towers and Tunnels, our Structural Engineers
                            are trained to design solutions that are absolutely safe and fiercely serviceable exactly as required.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" variants={zoomIn}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><BsEyeFill style={{ color: 'var(--theme-primary, #3b82f6)' }} /> Overview</h3>
                        <p><strong>Approved Intake:</strong> Active UG program with stellar placements and training.</p>
                        <p><strong>PG Specialization:</strong> Dedicated M.E. in Structural Engineering with an exclusive intake of 18 scholars shaping advanced techno-managers.</p>
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
                            To build professional and entrepreneurial skills to face the challenges in the
                            rapidly evolving socio-economic domains of modern society.
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
                            <li>Create a sustainable environment to meet professional challenges head-on.</li>
                            <li>Mentor learners to adapt to innovative, structural, and designing excellence.</li>
                            <li>Keep in constant touch with industries to update requirements during learning.</li>
                            <li>Endeavour for excellence in all facets of Civil Engineering.</li>
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
                        <p>State-of-the-art facilities equipped with modern instruments matching international technical requirements.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaHardHat className="cap-icon" />
                        <h4>Consultancy Cell</h4>
                        <p>Active consultancy testing the absolute quality of concrete, brick, soil, water, bitumen, and steel reinforcement.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaDraftingCompass className="cap-icon" />
                        <h4>Industry Software Lab</h4>
                        <p>Extensive training on industry licenses including AutoCAD, Primavera, MS-Project, StaadPro, ANSYS, and REVIT.</p>
                    </motion.div>

                    <motion.div className="cap-card" variants={fadeInUp}>
                        <FaMapMarkedAlt className="cap-icon" />
                        <h4>Surveying & Fieldwork</h4>
                        <p>Comprehensive practical fieldwork empowering students with hands-on topography and structural mapping.</p>
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
                        <img src={eycaLogo} alt="EYCA Logo" className="glam-banner-logo" />
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Energy Young Civil Association
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        The official departmental association driving student innovation, symposia, and technical enrichment.
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
                            <FaEnvelope style={{ color: '#c9a84c' }} /> {hod.email}
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
        </div >
    );
};

export default Civil;

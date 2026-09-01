import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Award, Users, BookMarked, Globe, Lightbulb, Target, CheckCircle } from 'lucide-react';
import './Elearning.css';

// Import local images
import infosysLogo from './images/infosys.png';
import nptelLogo from './images/nptel.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="el-section-header">
    <h2 className="el-section-heading">{title}</h2>
    {subtitle && <p className="el-section-subtitle">{subtitle}</p>}
  </div>
);

const InfosysContent = () => (
  <motion.div 
    className="el-partner-content"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div className="el-hero-section" variants={itemVariants}>
      <div className="el-hero-background"></div>
      <div className="el-hero-inner">
        <div className="el-intro-eyebrow">E-Learning Platform</div>
        
        <div className="el-partner-logo-wrapper">
          <img src={infosysLogo} alt="Infosys Springboard Logo" className="el-hero-logo" />
        </div>
        
        <h1 className="el-main-page-title">NSCET × Infosys Springboard</h1>
        <p className="el-tagline">Empowering the next generation of engineers with advanced digital skills through industry-aligned learning.</p>
        
        <div className="el-cta-container">
          <a href="https://infyspringboard.onwingspan.com/" target="_blank" rel="noopener noreferrer" className="el-primary-button">
            Access Portal <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>

    <div className="el-partner-details">
      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Partnership Overview" subtitle="Bridging the gap between academia and industry requirements." />
        <div className="el-text-card">
          <p className="el-content-paragraph">
            To implement the education vision of the Government of India, Nadar Saraswathi College of Engineering and Technology (NSCET) aims to integrate state-of-the-art skill development subjects into its engineering curriculum in collaboration with Infosys Springboard.
          </p>
          <p className="el-content-paragraph">
            It is essential for NSCET’s faculty to be proficient in the latest technologies to effectively train students in industry-relevant skills. Infosys has launched Infosys Springboard, which offers a rich repository of over 12,000 courses. In this context, NSCET leverages the Memorandum of Understanding (MoU) between Anna University and Infosys Springboard to utilize the program for developing the digital skills of its faculty and students.
          </p>
        </div>
      </motion.section>

      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Platform Highlights" subtitle="What Infosys Springboard offers to our students." />
        <div className="el-highlights-grid">
          <div className="el-highlight-card">
            <div className="el-icon-wrapper"><BookOpen size={24} /></div>
            <h3 className="el-highlight-title">12,000+ Courses</h3>
            <p className="el-highlight-desc">A vast repository of industry-relevant courses spanning cutting-edge technologies.</p>
          </div>
          <div className="el-highlight-card">
            <div className="el-icon-wrapper"><Award size={24} /></div>
            <h3 className="el-highlight-title">Certifications</h3>
            <p className="el-highlight-desc">Earn globally recognized certificates upon successful completion of modules.</p>
          </div>
          <div className="el-highlight-card">
            <div className="el-icon-wrapper"><Users size={24} /></div>
            <h3 className="el-highlight-title">Faculty Development</h3>
            <p className="el-highlight-desc">Empowering educators with the latest tech to effectively train future engineers.</p>
          </div>
          <div className="el-highlight-card">
            <div className="el-icon-wrapper"><Globe size={24} /></div>
            <h3 className="el-highlight-title">Digital Skills</h3>
            <p className="el-highlight-desc">Mastering digital fluency aligned with the Government of India's education vision.</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Glimpses of the Partnership" subtitle="Key activities and sessions conducted under the program." />
        <div className="el-gallery-grid">
          <div className="el-gallery-item">
            <img src="https://www.nscet.org/e-learning/files/IMG1.jpg" alt="Partnership Activity 1" className="el-gallery-img" />
            <div className="el-gallery-overlay">
              <span>Training Session</span>
            </div>
          </div>
          <div className="el-gallery-item">
            <img src="https://www.nscet.org/e-learning/files/IMG2.jpeg" alt="Partnership Activity 2" className="el-gallery-img" />
            <div className="el-gallery-overlay">
              <span>Faculty Orientation</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  </motion.div>
);

const NptelContent = () => (
  <motion.div 
    className="el-partner-content"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div className="el-hero-section" variants={itemVariants}>
      <div className="el-hero-background nptel-bg"></div>
      <div className="el-hero-inner">
        <div className="el-intro-eyebrow">Academic Partnerships</div>
        
        <div className="el-partner-logo-wrapper">
          <img src={nptelLogo} alt="NPTEL Logo" className="el-hero-logo" />
        </div>
        
        <h1 className="el-main-page-title">NSCET × NPTEL Local Chapter</h1>
        <p className="el-tagline">Providing students and faculty with advanced online learning opportunities through IITs and IISc curated courses.</p>
        
        <div className="el-cta-container">
          <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" className="el-primary-button">
            Explore NPTEL Courses <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>

    <div className="el-partner-details">
      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Program Overview" subtitle="A joint initiative of the IITs and IISc." />
        <div className="el-text-card">
          <p className="el-content-paragraph">
            The National Programme on Technology Enhanced Learning (NPTEL) is a project of MHRD initiated by seven Indian Institutes of Technology (Bombay, Delhi, Kanpur, Kharagpur, Madras, Guwahati and Roorkee) along with the Indian Institute of Science, Bangalore. It provides e-learning through online Web and Video courses in Engineering, Science and humanities streams.
          </p>
          <p className="el-content-paragraph">
            NSCET has established an NPTEL Local Chapter to facilitate students and faculty to take up these online courses, appearing for the proctored exams, and obtaining certificates from the IITs. This initiative significantly broadens the academic horizons and enhances the employability of our graduates.
          </p>
        </div>
      </motion.section>

      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Core Objectives" subtitle="The primary goals of our NPTEL Local Chapter." />
        <div className="el-objectives-grid">
          {[
            { id: '01', icon: <BookMarked />, title: 'Quality Content', desc: 'Provide students with access to curated courses developed by elite IITs and IISc faculty.' },
            { id: '02', icon: <Award />, title: 'Certification', desc: 'Facilitate participation in NPTEL’s certification exams to enhance career opportunities and academic records.' },
            { id: '03', icon: <Lightbulb />, title: 'Faculty Development', desc: 'Support continuous learning and skill development for NSCET faculty members.' },
            { id: '04', icon: <Target />, title: 'Academic Support', desc: 'Encourage the use of NPTEL content as supplementary resources for classroom teaching and self-study.' }
          ].map((obj, index) => (
            <motion.div className="el-objective-card" key={index} whileHover={{ y: -5 }}>
              <div className="el-obj-header">
                <div className="el-obj-icon">{obj.icon}</div>
                <div className="el-obj-number">{obj.id}</div>
              </div>
              <h3 className="el-obj-title">{obj.title}</h3>
              <p className="el-obj-desc">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="el-content-section" variants={itemVariants}>
        <SectionHeader title="Key Benefits" subtitle="Why you should enroll in NPTEL courses." />
        <div className="el-benefits-list">
          {[
            { title: '2500+ COURSES', desc: 'Access to an extensive library of courses across multiple engineering, science, and management disciplines.' },
            { title: 'MENTORSHIP', desc: 'Direct mentorship and guidance from NPTEL-certified NSCET faculty coordinators.' },
            { title: 'EMPLOYABILITY', desc: 'Significant improvement in employability and skill set through specialized domain-focused learning paths.' },
            { title: 'RECOGNITION', desc: 'Prestigious recognition and verified certificates from premier institutions (IITs/IISc) upon successful completion.' }
          ].map((benefit, idx) => (
            <div className="el-benefit-item" key={idx}>
              <div className="el-benefit-check"><CheckCircle size={20} /></div>
              <div className="el-benefit-content">
                <h4 className="el-benefit-title">{benefit.title}</h4>
                <p className="el-benefit-desc">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  </motion.div>
);

const Elearning = () => {
  const location = useLocation();
  const activeTab = location.pathname.includes('nptel') ? 'nptel' : 'infosys';

  return (
    <div className="el-page-container">
      {activeTab === 'infosys' && <InfosysContent />}
      {activeTab === 'nptel' && <NptelContent />}
    </div>
  );
};

export default Elearning;

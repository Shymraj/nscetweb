import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  BookOpen,
  FileText,
  Users,
  Compass,
  CheckCircle,
  Share2,
  Download,
  Sparkles,
  ArrowRight,
  Send,
  Building,
  GraduationCap,
  Layers,
  Search,
  Copy,
  ChevronRight,
  ShieldCheck,
  Check,
  Globe,
  Cog,
  FlaskConical,
  Lightbulb,
  Leaf,
  Handshake
} from "lucide-react";

import "./AMPSE.css";
import AMPSERegistrationModal from "./AMPSERegistrationModal";

// Assets
import patronPrincipal from "../images/mathalai sundharam.png";
import chairMathavan from "../images/Mathavan.jpg";
import chairSathya from "../images/sathya.jpeg";
import chairKarthikeyan from "../images/dr_karthikeyan.png";
import convenorRadha from "../images/radhakrishnan.jpg";
import convenorVembathu from "../images/vembathurajesh.png";
import coordinatorSanthaseelan from "../images/santhaseelan.jpg";
import coordinatorVennimalai from "../images/Vennimalairajan.jpg";
import qrCodeImg from "./ampse_qr.png";
import heroBannerImg from "./ampse_banner.jpg";

const AMPSE = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedCommitteeTab, setSelectedCommitteeTab] = useState("all");
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedRegTier, setSelectedRegTier] = useState("tier2");

  React.useEffect(() => {
    document.title = "AMPSE - 2K27 | 3rd International Conference | NSCET Theni";
    window.scrollTo(0, 0);

    if (window.location.hash === "#register") {
      setIsRegisterModalOpen(true);
    }
  }, []);

  const handleOpenRegister = (tier = "tier2") => {
    setSelectedRegTier(tier);
    setIsRegisterModalOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ampse@nscet.org");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleEmailPaper = (e) => {
    if (e) e.preventDefault();
    const email = "ampse@nscet.org";
    const subject = encodeURIComponent("AMPSE-2K27 Abstract / Paper Submission");
    const body = encodeURIComponent(
      `Dear Conference Secretariat,\n\nI would like to submit my research paper / abstract for the 3rd International Conference on Advanced Material Processing & Sustainable Energy (AMPSE-2K27) at Nadar Saraswathi College of Engineering and Technology, Theni.\n\n----------------------------------------\nPaper Title:\nPrimary Author Name:\nDesignation & Department:\nCollege / Institution Name:\nMobile / WhatsApp Number:\nConference Track / Domain:\nCo-Author Details (if any):\n----------------------------------------\n\nPlease find my manuscript file attached.\n\nThank you,\n[Author Name]`
    );
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    // 1. Trigger desktop/default mail application
    window.location.href = mailtoUrl;

    // 2. Also open Gmail web compose in a new tab as guaranteed fallback
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }, 350);
  };

  const topics = [
    { title: "Composite Materials", tag: "Materials", desc: "Polymer, metal & ceramic matrix composites, fiber architecture, and mechanical testing." },
    { title: "Advance Welding", tag: "Manufacturing", desc: "Friction stir welding, laser beam welding, ultrasonic welding & metallurgy." },
    { title: "Materials Processing", tag: "Processing", desc: "Forming, extrusion, casting, powder metallurgy & advanced sintering techniques." },
    { title: "Smart Materials", tag: "Innovations", desc: "Shape memory alloys, piezoelectric, magnetostrictive & self-healing materials." },
    { title: "Nano Materials", tag: "Nanotechnology", desc: "Carbon nanotubes, graphene synthesis, nanocomposites & nano-coatings." },
    { title: "Materials Testing", tag: "Characterization", desc: "Non-destructive testing (NDT), SEM, XRD, tensile, fatigue, and fracture analysis." },
    { title: "Refrigeration and Air Conditioning", tag: "Thermal", desc: "Eco-friendly refrigerants, HVAC optimization, heat pump systems & energy audits." },
    { title: "Renewable Energy", tag: "Sustainability", desc: "Solar thermal, wind energy, biofuels, hydrogen storage & hybrid power systems." },
    { title: "Advanced Materials Processing", tag: "Manufacturing", desc: "Additive manufacturing, 3D/4D printing, precision machining & laser cladding." },
    { title: "CFD and Simulation", tag: "Computational", desc: "Turbulence modeling, multiphase flows, heat transfer & structural FEA simulations." },
    { title: "Coating Technology", tag: "Surface Engg", desc: "Thermal spray, PVD, CVD, anti-corrosive coatings & tribological performance." }
  ];

  const filteredTopics = activeTab === "all"
    ? topics
    : topics.filter(t => t.tag.toLowerCase() === activeTab.toLowerCase());

  const importantDates = [
    {
      date: "25th February 2027",
      title: "Full Paper Submission Deadline",
      desc: "Last date for submitting complete manuscript for review & proceedings",
      badge: "Full Paper"
    },
    {
      date: "2nd March 2027",
      title: "Last Date of Abstract Submission",
      desc: "Final deadline to submit abstracts for presentation acceptance",
      badge: "Abstract Deadline",
      highlight: true
    },
    {
      date: "12th & 13th March 2027",
      title: "Conference Date (AMPSE-2K27)",
      desc: "Inaugural keynote, plenary guest talks, and oral research presentations",
      badge: "Event Day",
      highlight: true
    }
  ];

  const touristPlaces = [
    { name: "Gowmariamman Temple", distance: "7.5 KM", type: "Spiritual Heritage", desc: "Ancient historical temple renowned for its rich cultural traditions in Veerapandi." },
    { name: "Vaigai Dam", distance: "17 KM", type: "Scenic Reservoir", desc: "Magnificent reservoir bordered by lush picnic gardens and evening light fountains." },
    { name: "Kuchanur Sanibhagavan Temple", distance: "21 KM", type: "Spiritual", desc: "Sole self-manifested (Swayambhu) temple dedicated to Lord Saturn in India." },
    { name: "Sothuparai Dam", distance: "26 KM", type: "Nature & Dam", desc: "Picturesque dam set amidst mango groves and misty Western Ghat foothills." },
    { name: "Kurangani", distance: "26 KM", type: "Trekker's Paradise", desc: "Stunning mountain valley famous for organic tea estates and hiking trails." },
    { name: "Suruli Falls", distance: "30 KM", type: "Medicinal Waterfall", desc: "Two-stage cascading waterfalls flowing through herbs from the Meghamalai hills." },
    { name: "Kumbakkarai Falls", distance: "30 KM", type: "Waterfalls", desc: "Crystal-clear mountain stream cascading along unique rock formations near Periyakulam." },
    { name: "Chinna Suruli", distance: "32 KM", type: "Eco Tourism", desc: "Serene wild falls nestled deep inside dense green teak forests." },
    { name: "Megamalai", distance: "40 KM", type: "Hill Station", desc: "The Highwavys - a tranquil cloud-kissed haven of rolling tea estates and wildlife." },
    { name: "Kolukkumalai", distance: "64 KM", type: "Tea Estate Peak", desc: "World's highest orthodox tea plantation offering spectacular sunrise ocean-of-clouds views." },
    { name: "Kodaikkanal", distance: "75 KM", type: "Princess of Hill Stations", desc: "Famed scenic hill resort with star-shaped lake, pine forests, and cool mountain air." },
    { name: "Munnar", distance: "78 KM", type: "Tea Valley Paradise", desc: "Endless rolling emerald hills, misty valleys, tea museums, and exotic flora." },
    { name: "Top Station", distance: "116 KM", type: "Skyline Viewpoint", desc: "Historic ropeway terminal delivering breathtaking panoramic views of the Western Ghats." }
  ];

  const chiefPatrons = [
    { name: "Mr. T. Rajamohan", qual: "B.Sc.", role: "President, TMHNU" },
    { name: "Mr. P. P. Ganesh", qual: "B.Sc.", role: "Vice President, TMHNU" },
    { name: "Mr. M. M. Anandavel", qual: "M.B.A.", role: "General Secretary, TMHNU" },
    { name: "Mr. M. Palaniappan", qual: "", role: "Treasurer, TMHNU" },
    { name: "Mr. A. Rajkumar", qual: "B.B.A.", role: "Secretary, NSCET" },
    { name: "Mr. A. S. R. Maheswaran", qual: "B.Sc.", role: "Secretary, NSCET" },
    { name: "Er. S. Naveen Ram", qual: "B.E., MBA.", role: "Joint Secretary, NSCET" }
  ];

  const conferenceChairs = [
    {
      name: "Dr. N. Mathavan",
      qual: "M.E., MBA., Ph.D., MISTE.",
      role: "Vice Principal, NSCET",
      image: chairMathavan,
      objectPosition: "center 20%"
    },
    {
      name: "Dr. M. Sathya",
      qual: "M.Tech., MBA., Ph.D.",
      role: "Vice Principal & HOD - IT, NSCET",
      image: chairSathya,
      objectPosition: "center 15%"
    },
    {
      name: "Dr. C. Karthikeyan",
      qual: "M.A., B.Ed., CELTA., Ph.D.",
      role: "Placement Officer, NSCET",
      image: chairKarthikeyan,
      objectPosition: "center 15%"
    }
  ];

  const advisoryCommittee = [
    { name: "Dr. K. L. Muthuramu", role: "Professor & Principal", inst: "Shanmuganatha Engineering College, Pudhukottai" },
    { name: "Dr. V. Vijayan", role: "Professor, Mechanical Dept & Head CERD", inst: "K. Ramakrishna College of Engineering and Technology, Trichy" },
    { name: "Dr. S. Irudhaya Raj", role: "Professor", inst: "Veltech University, Chennai" },
    { name: "Dr. R. Balasundharam", role: "Professor, Mechanical Department", inst: "SRM Institute of Science and Technology, Trichy" },
    { name: "Dr. V. Arumugaprabhu", role: "Head Incharge, Mechanical Department", inst: "Kalasalingam Academy of Research and Education, Virudhunagar" },
    { name: "Dr. M. S. Ravi Kumar", role: "Principal", inst: "PSN College of Technology, Tirunelveli" },
    { name: "Dr. R. Ninja Merina", role: "Associate Professor / HOD", inst: "University College of Engineering, Nagerkovil" },
    { name: "Dr. K. Ganeshan", role: "Former Principal", inst: "Government College of Engineering, Tirunelveli" },
    { name: "Dr. V. Anandakrishnan", role: "Professor, Production Engineering", inst: "NIT, Trichy" },
    { name: "Dr. P. Sathiya", role: "Professor, Production Engineering", inst: "NIT, Trichy" },
    { name: "Dr. M. Sekar", role: "Principal", inst: "AAA College of Engineering & Technology, Virudhunagar" }
  ];

  return (
    <div className="ampse-page">
      {/* HERO SECTION */}
      <section className="ampse-hero">
        <div className="ampse-hero-bg" aria-hidden="true">
          <img
            src={heroBannerImg}
            alt=""
            className="ampse-hero-bg-img"
          />
          <div className="ampse-hero-overlay" />
        </div>

        <div className="ampse-container ampse-hero-content">
          {/* Top Tagline Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="ampse-hero-tagline"
          >
            <span className="ampse-pill-badge">
              <Sparkles size={14} className="ampse-sparkle-icon" /> 3RD INTERNATIONAL CONFERENCE
            </span>
            <span className="ampse-host-tag">
              Organized by Department of Mechanical Engineering
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="ampse-hero-h1"
          >
            ADVANCED MATERIAL PROCESSING &<br />
            <span className="ampse-gradient-text">SUSTAINABLE ENERGY</span>
          </motion.h1>

          {/* Central Acronym & Date Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ampse-acronym-banner"
          >
            <div className="ampse-acronym-chip">
              <span className="ampse-acronym-letters">AMPSE - 2K27</span>
              <span className="ampse-acronym-date">
                <Calendar size={18} /> 12th & 13th March 2027
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="ampse-hero-desc"
          >
            A premier international forum uniting researchers, academicians, scientists, and industry leaders across the globe to exchange breakthrough ideas and explore next-generation technologies in materials engineering and green energy.
          </motion.p>

          {/* 3 CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="ampse-hero-cta-group"
          >
            <button
              type="button"
              onClick={() => handleOpenRegister("tier2")}
              className="ampse-btn ampse-btn-primary"
            >
              <ExternalLink size={18} /> Register via Google Form
            </button>
            <a href="#call-for-papers" className="ampse-btn ampse-btn-outline">
              <FileText size={18} /> Call for Papers
            </a>
            <a href="#registration-fee" className="ampse-btn ampse-btn-subtle">
              <Award size={18} /> Fee & Publications
            </a>
          </motion.div>

          {/* Quick Metrics Cards */}
          <div className="ampse-hero-metrics-grid">
            <div className="ampse-metric-card">
              <div className="ampse-metric-icon-wrap">
                <Calendar size={22} />
              </div>
              <div>
                <span className="ampse-metric-label">CONFERENCE DATE</span>
                <span className="ampse-metric-val">12th & 13th March 2027</span>
              </div>
            </div>

            <div className="ampse-metric-card">
              <div className="ampse-metric-icon-wrap highlight">
                <Clock size={22} />
              </div>
              <div>
                <span className="ampse-metric-label">ABSTRACT DEADLINE</span>
                <span className="ampse-metric-val">2nd March 2027</span>
              </div>
            </div>

            <div className="ampse-metric-card">
              <div className="ampse-metric-icon-wrap">
                <BookOpen size={22} />
              </div>
              <div>
                <span className="ampse-metric-label">ISBN BOOK CHAPTER</span>
                <span className="ampse-metric-val">978-93-6128-639-1</span>
              </div>
            </div>

            <div className="ampse-metric-card">
              <div className="ampse-metric-icon-wrap">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="ampse-metric-label">INVITED KEYNOTES</span>
                <span className="ampse-metric-val">Foreign Univ, IIT & NIT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUB-NAVIGATION */}
      <nav className="ampse-quick-nav">
        <div className="ampse-container ampse-nav-scroll">
          <a href="#about-institution" className="ampse-nav-link">
            <Building size={14} className="ampse-mini-nav-icon" /> About College
          </a>
          <a href="#scope" className="ampse-nav-link">
            <Compass size={14} className="ampse-mini-nav-icon" /> Scope & Theme
          </a>
          <a href="#call-for-papers" className="ampse-nav-link">
            <FileText size={14} className="ampse-mini-nav-icon" /> Call for Papers
          </a>
          <a href="#publications" className="ampse-nav-link">
            <BookOpen size={14} className="ampse-mini-nav-icon" /> Publications
          </a>
          <a href="#registration-fee" className="ampse-nav-link">
            <Award size={14} className="ampse-mini-nav-icon" /> Registration Fee
          </a>
          <a href="#important-dates" className="ampse-nav-link">
            <Calendar size={14} className="ampse-mini-nav-icon" /> Important Dates
          </a>
          <a href="#committee" className="ampse-nav-link">
            <Users size={14} className="ampse-mini-nav-icon" /> Organizing Committee
          </a>
          <a href="#tourist-spots" className="ampse-nav-link">
            <MapPin size={14} className="ampse-mini-nav-icon" /> Places to Visit
          </a>
          <a href="#register-contact" className="ampse-nav-link ampse-nav-highlight">
            <CheckCircle size={14} className="ampse-mini-nav-icon" /> Register & Contact
          </a>
        </div>
      </nav>

      {/* SECTION 1: ABOUT THE INSTITUTION */}
      <section id="about-institution" className="ampse-section ampse-section-light">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Institution Heritage</span>
            <h2 className="ampse-section-h2">About the Institution</h2>
            <div className="ampse-quote-card">
              <Sparkles size={20} className="ampse-quote-icon" />
              <blockquote className="ampse-quote-text">
                "An investment in Knowledge always pays the best interest"
              </blockquote>
            </div>
          </div>

          <div className="ampse-institution-grid">
            <div className="ampse-institution-narrative">
              <p>
                <strong>Nadar Saraswathi College of Engineering and Technology</strong> was established in the year <strong>2010</strong> with the motto of uplifting rural student's cadre and to nurture them with excellence. It is exclusively constructed for molding up outstanding Engineers as responsible citizen and dynamic professionals.
              </p>
              <p>
                Excellence in teaching will continue to be the most important criterion in faculty recruitment. At the same time, the ability to do research, to engage in continuous scholarly and creative work, and to provide service, primarily to the region and the state, will be important additional qualifications.
              </p>
              <p>
                The college will provide a comprehensive range of support services for students. The College surrounded by the Greeny Environment which creates a calm and peaceful mind to the students.
              </p>

              <div className="ampse-host-dept-box">
                <div className="ampse-dept-box-header">
                  <Building size={20} />
                  <h3>Department of Mechanical Engineering</h3>
                </div>
                <p>
                  Approved by Anna University as an official <strong>Research Centre</strong>. Equipping students and scholars with state-of-the-art CNC, Thermal, Mechatronics, CAD/CAM, and advanced material testing facilities.
                </p>
              </div>
            </div>

            {/* College Features & Milestones Card */}
            <div className="ampse-features-card">
              <h3 className="ampse-features-title">
                <Award size={20} /> College Features & Accreditations
              </h3>
              <ul className="ampse-features-list">
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Accredited by <strong>NAAC with "A" Grade</strong></span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Secured <strong>1st position in Theni district</strong> spontaneously for 11 years and <strong>21st Rank in Anna University</strong> Academic Ranking</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Mechanical Department received approval for <strong>Anna University Research Centre</strong></span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Received <strong>3 Star ranking</strong> from Institution Innovation Cell (IIC)</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Students won <strong>Dr. Kalam Young Achievers Award</strong> for Innovative Projects</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Students received <strong>₹1 Lakh Cash Award</strong> for Tamil Nadu Students Innovation (TNSI) through Entrepreneurship Development Cell</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Students registered their own <strong>Start-ups</strong> through Entrepreneurship Development Cell</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Students achieved prestigious awards in National and International levels <strong>Hackathon and Blockathon</strong> events</span>
                </li>
                <li>
                  <CheckCircle size={18} className="ampse-check-icon" />
                  <span>Equipped with well-conditioned advanced laboratories for all departments and spacious playgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCOPE OF THE CONFERENCE */}
      <section id="scope" className="ampse-section ampse-section-alt">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Conference Mission</span>
            <h2 className="ampse-section-h2">Scope of the Conference</h2>
            <p className="ampse-section-sub">
              Empowering the next generation of engineers with global research dialogues and sustainable engineering breakthroughs.
            </p>
          </div>

          <div className="ampse-scope-card">
            <div className="ampse-scope-body">
              <p>
                This Conference will provide a forum for undergraduate, postgraduate, research scholars and personnel from industry to come together and discuss the latest developments and innovations in Engineering and Technology.
              </p>
              <p>
                The noble aim is to bring together the professional and budding researchers on a common platform to discuss and exchange ideas on recent developments and challenges in the field of engineering and technology. This will help the delegates to update their knowledge and provide a platform for future research activities in the field of engineering.
              </p>
              <p>
                This also serves as an intensive workshop for young students to build their career. The Conference will feature plenary lectures by eminent personalities from reputed institutions to introduce the theme of the conference. Each session starts with an invited talk followed by oral presentation of accepted papers.
              </p>
            </div>

            <div className="ampse-scope-highlights-grid">
              <div className="ampse-scope-highlight-item">
                <div className="ampse-highlight-num">01</div>
                <h4>Interdisciplinary Platform</h4>
                <p>Bringing together UG, PG, Ph.D. scholars, scientists, and industry leaders on one dynamic stage.</p>
              </div>
              <div className="ampse-scope-highlight-item">
                <div className="ampse-highlight-num">02</div>
                <h4>Plenary Keynotes</h4>
                <p>Eminent keynote speakers invited from Foreign Universities, IITs, NITs, and Anna University.</p>
              </div>
              <div className="ampse-scope-highlight-item">
                <div className="ampse-highlight-num">03</div>
                <h4>Oral Paper Presentations</h4>
                <p>Rigorous peer-reviewed sessions with constructive feedback from distinguished session chairs.</p>
              </div>
              <div className="ampse-scope-highlight-item">
                <div className="ampse-highlight-num">04</div>
                <h4>Career & Research Catalyst</h4>
                <p>Nurturing young student researchers to author papers, initiate startups, and pursue doctoral studies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CALL FOR PAPERS & PROPOSED TOPICS */}
      <section id="call-for-papers" className="ampse-section ampse-section-light">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Author Guidelines</span>
            <h2 className="ampse-section-h2">Call for Papers</h2>
            <p className="ampse-section-sub">
              Full paper submissions are invited for the International Conference on Multidisciplinary Research to be held in Nadar Saraswathi College of Engineering and Technology, Theni on or before <strong>25th February 2027</strong>.
            </p>
          </div>

          <div className="ampse-topics-filter-bar">
            <span className="ampse-filter-label">Filter Domains:</span>
            <button
              className={`ampse-filter-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Topics ({topics.length})
            </button>
            <button
              className={`ampse-filter-btn ${activeTab === "materials" ? "active" : ""}`}
              onClick={() => setActiveTab("materials")}
            >
              Materials
            </button>
            <button
              className={`ampse-filter-btn ${activeTab === "manufacturing" ? "active" : ""}`}
              onClick={() => setActiveTab("manufacturing")}
            >
              Manufacturing
            </button>
            <button
              className={`ampse-filter-btn ${activeTab === "sustainability" ? "active" : ""}`}
              onClick={() => setActiveTab("sustainability")}
            >
              Sustainability & Energy
            </button>
            <button
              className={`ampse-filter-btn ${activeTab === "computational" ? "active" : ""}`}
              onClick={() => setActiveTab("computational")}
            >
              CFD & Simulation
            </button>
          </div>

          <div className="ampse-topics-grid">
            {filteredTopics.map((item, idx) => (
              <div key={idx} className="ampse-topic-card">
                <div className="ampse-topic-top">
                  <span className="ampse-topic-tag">{item.tag}</span>
                  <Sparkles size={16} className="ampse-topic-icon" />
                </div>
                <h3 className="ampse-topic-title">{item.title}</h3>
                <p className="ampse-topic-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="ampse-note-banner">
            <div className="ampse-note-icon-wrap">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="ampse-note-title">Open Topic Submission Notice</h4>
              <p className="ampse-note-text">
                <strong>Participants can send papers excluding these topics also.</strong> Multidisciplinary engineering, interdisciplinary applied sciences, mechanical, manufacturing, civil, electrical, computing, and sustainable energy topics are warmly welcomed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PUBLICATIONS & PROCEEDINGS */}
      <section id="publications" className="ampse-section ampse-section-alt">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Indexed Publications</span>
            <h2 className="ampse-section-h2">Publication & Proceedings</h2>
            <p className="ampse-section-sub">
              High-impact publication avenues with international indexing, ISBN allocation, and global visibility.
            </p>
          </div>

          <div className="ampse-pub-grid">
            {/* Book Chapter Card */}
            <div className="ampse-pub-card ampse-pub-highlight">
              <div className="ampse-pub-tag">Official Conference Publication</div>
              <h3 className="ampse-pub-title">Book Chapter Publication</h3>
              <div className="ampse-isbn-badge">
                <span>ISBN Number:</span>
                <strong>978-93-6128-639-1</strong>
              </div>
              <ul className="ampse-pub-list">
                <li>
                  <CheckCircle size={18} />
                  <span>Abstract will be published in official <strong>Conference Proceedings</strong>.</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>The conference proceedings will be sent directly to the corresponding <strong>Author's email</strong>.</span>
                </li>
                <li>
                  <CheckCircle size={18} />
                  <span>All accepted papers (Full paper) will be published with <strong>ISBN in book chapter</strong>.</span>
                </li>
              </ul>
              <div className="ampse-pub-author-rule">
                <span>Maximum of <strong>4 Authors</strong> per paper (1 Main Author / 3 Co-Authors).</span>
              </div>
            </div>

            {/* Journal Publications Card */}
            <div className="ampse-pub-card">
              <div className="ampse-pub-tag">Global Journal Indexing</div>
              <h3 className="ampse-pub-title">Journal Publications</h3>
              <p className="ampse-pub-desc">
                Authors opting for presentation and journal publication will have their peer-reviewed manuscripts routed through prestigious indexed publication partners:
              </p>

              <div className="ampse-publisher-badges-row">
                <div className="ampse-publisher-box">
                  <div className="ampse-publisher-logo-text atlantis">
                    <span className="ampse-pub-sub">Partner Publisher</span>
                    <h4>ATLANTIS PRESS</h4>
                    <span className="ampse-pub-tiny">Part of Springer Nature</span>
                  </div>
                </div>

                <div className="ampse-publisher-box">
                  <div className="ampse-publisher-logo-text springer">
                    <span className="ampse-pub-sub">International Indexing</span>
                    <h4>SPRINGER NATURE</h4>
                    <span className="ampse-pub-tiny">Indexed in Leading Databases</span>
                  </div>
                </div>
              </div>

              <div className="ampse-pub-fee-badge">
                <span>Presentation & Publications: <strong>₹7,500 /-</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REGISTRATION FEE STRUCTURE */}
      <section id="registration-fee" className="ampse-section ampse-section-light">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Pricing & Categories</span>
            <h2 className="ampse-section-h2">Registration Fee Details</h2>
            <p className="ampse-section-sub">
              Subsidized fee tiers for UG, PG, Research Scholars, Faculty members & Industrial personnel.
            </p>
          </div>

          <div className="ampse-pricing-grid">
            {/* Tier 1 */}
            <div className="ampse-pricing-card">
              <div className="ampse-pricing-header">
                <span className="ampse-pricing-tier">Attendee Only</span>
                <div className="ampse-price">
                  <span className="ampse-currency">₹</span>
                  <span className="ampse-amount">500</span>
                  <span className="ampse-per">/- per head</span>
                </div>
              </div>
              <div className="ampse-pricing-body">
                <p className="ampse-pricing-target">Ideal for delegates wanting to attend plenary lectures & network.</p>
                <ul className="ampse-pricing-features">
                  <li><Check size={16} /> Access to all keynote sessions</li>
                  <li><Check size={16} /> Participation Certificate</li>
                  <li><Check size={16} /> Conference Kit & Proceedings Copy</li>
                  <li className="ampse-muted-feat"><Check size={16} /> Paper Presentation (Not included)</li>
                  <li className="ampse-muted-feat"><Check size={16} /> ISBN Book Chapter (Not included)</li>
                </ul>
              </div>
              <div className="ampse-pricing-footer">
                <button
                  type="button"
                  onClick={() => handleOpenRegister("tier1")}
                  className="ampse-pricing-btn"
                >
                  Select Participant
                </button>
              </div>
            </div>

            {/* Tier 2 - Most Popular */}
            <div className="ampse-pricing-card ampse-pricing-popular">
              <div className="ampse-popular-ribbon">Most Popular</div>
              <div className="ampse-pricing-header">
                <span className="ampse-pricing-tier">Presentation & Book Chapter</span>
                <div className="ampse-price">
                  <span className="ampse-currency">₹</span>
                  <span className="ampse-amount">1,000</span>
                  <span className="ampse-per">/- per paper</span>
                </div>
              </div>
              <div className="ampse-pricing-body">
                <p className="ampse-pricing-target">For UG, PG, Scholars, Faculty & Industry (Max 4 Authors).</p>
                <ul className="ampse-pricing-features">
                  <li><Check size={16} /> <strong>Oral Presentation Slot</strong> at AMPSE-2K27</li>
                  <li><Check size={16} /> <strong>Published with ISBN</strong> in Book Chapter</li>
                  <li><Check size={16} /> ISBN: <strong>978-93-6128-639-1</strong></li>
                  <li><Check size={16} /> Maximum 4 Authors (1 Author / 3 Co-Authors)</li>
                  <li><Check size={16} /> Abstract published in proceedings</li>
                  <li><Check size={16} /> Presentation Certificates for all authors</li>
                </ul>
              </div>
              <div className="ampse-pricing-footer">
                <button
                  type="button"
                  onClick={() => handleOpenRegister("tier2")}
                  className="ampse-pricing-btn ampse-popular-btn"
                >
                  Register for ₹1,000
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="ampse-pricing-card">
              <div className="ampse-pricing-header">
                <span className="ampse-pricing-tier">Presentation & Publications</span>
                <div className="ampse-price">
                  <span className="ampse-currency">₹</span>
                  <span className="ampse-amount">7,500</span>
                  <span className="ampse-per">/- per paper</span>
                </div>
              </div>
              <div className="ampse-pricing-body">
                <p className="ampse-pricing-target">For authors seeking publication in Atlantis Press / Springer Nature.</p>
                <ul className="ampse-pricing-features">
                  <li><Check size={16} /> Oral Presentation at AMPSE-2K27</li>
                  <li><Check size={16} /> <strong>Indexed Journal Publication</strong> channel</li>
                  <li><Check size={16} /> <strong>Atlantis Press / Springer Nature</strong></li>
                  <li><Check size={16} /> Global digital indexing & DOI allocation</li>
                  <li><Check size={16} /> Presentation & Author Certificates</li>
                </ul>
              </div>
              <div className="ampse-pricing-footer">
                <button
                  type="button"
                  onClick={() => handleOpenRegister("tier3")}
                  className="ampse-pricing-btn"
                >
                  Select Publications Tier
                </button>
              </div>
            </div>
          </div>

          {/* Submission Instructions Box */}
          <div className="ampse-submission-guide-card">
            <div className="ampse-guide-left">
              <div className="ampse-guide-icon-box">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="ampse-guide-h4">Paper Format & Soft Copy Submission</h4>
                <p className="ampse-guide-text">
                  The Format and Payment Details of the paper is available in conference portal. The authors should also send a soft copy of Abstract/Paper by email to:
                </p>
                <div className="ampse-email-copy-bar">
                  <span className="ampse-email-text">ampse@nscet.org</span>
                  <button className="ampse-copy-btn" onClick={handleCopyEmail}>
                    {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="ampse-guide-right">
              <a
                href="mailto:ampse@nscet.org?subject=AMPSE-2K27%20Abstract/Paper%20Submission"
                onClick={handleEmailPaper}
                className="ampse-btn ampse-btn-primary ampse-btn-email-paper"
                title="Send Abstract or Paper directly to ampse@nscet.org"
              >
                <Send size={16} />
                <span>Email Your Paper</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: IMPORTANT DATES */}
      <section id="important-dates" className="ampse-section ampse-section-alt">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Timeline</span>
            <h2 className="ampse-section-h2">Important Dates</h2>
            <p className="ampse-section-sub">
              Mark these critical milestones in your calendar to secure your slot at AMPSE-2K27.
            </p>
          </div>

          <div className="ampse-dates-timeline">
            {importantDates.map((item, idx) => (
              <div key={idx} className={`ampse-date-card ${item.highlight ? "highlighted" : ""}`}>
                <div className="ampse-date-badge">{item.badge}</div>
                <div className="ampse-date-box">
                  <Calendar size={20} className="ampse-date-icon" />
                  <span className="ampse-date-day">{item.date}</span>
                </div>
                <h3 className="ampse-date-title">{item.title}</h3>
                <p className="ampse-date-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Keynote Speakers Notice */}
          <div className="ampse-speakers-banner">
            <div className="ampse-speakers-icon">
              <Users size={28} />
            </div>
            <div className="ampse-speakers-content">
              <span className="ampse-speaker-badge">Eminent Leadership</span>
              <h3 className="ampse-speakers-title">Keynote & Plenary Speakers</h3>
              <p className="ampse-speakers-desc">
                "The Speakers invited from Foreign Universities, IIT, NIT & Anna University"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: ORGANIZING COMMITTEE MEMBERS */}
      <section id="committee" className="ampse-section ampse-section-light">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Leadership & Mentors</span>
            <h2 className="ampse-section-h2">Organizing Committee Members</h2>
            <p className="ampse-section-sub">
              Distinguished patrons, convenors, and advisory council guiding AMPSE-2K27.
            </p>
          </div>

          {/* Committee Filter Tabs */}
          <div className="ampse-committee-tabs">
            <button
              className={`ampse-comm-tab ${selectedCommitteeTab === "all" ? "active" : ""}`}
              onClick={() => setSelectedCommitteeTab("all")}
            >
              All Committees
            </button>
            <button
              className={`ampse-comm-tab ${selectedCommitteeTab === "patrons" ? "active" : ""}`}
              onClick={() => setSelectedCommitteeTab("patrons")}
            >
              Patrons & Chairs
            </button>
            <button
              className={`ampse-comm-tab ${selectedCommitteeTab === "convenors" ? "active" : ""}`}
              onClick={() => setSelectedCommitteeTab("convenors")}
            >
              Convenors & Coordinators
            </button>
            <button
              className={`ampse-comm-tab ${selectedCommitteeTab === "advisory" ? "active" : ""}`}
              onClick={() => setSelectedCommitteeTab("advisory")}
            >
              Advisory Committee
            </button>
          </div>

          {/* CHIEF PATRONS */}
          {(selectedCommitteeTab === "all" || selectedCommitteeTab === "patrons") && (
            <div className="ampse-committee-group">
              <h3 className="ampse-comm-group-heading">
                <Award size={18} /> Chief Patrons
              </h3>
              <div className="ampse-chief-patrons-grid">
                {chiefPatrons.map((person, idx) => (
                  <div key={idx} className="ampse-patron-chip">
                    <div className="ampse-patron-avatar">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h4 className="ampse-patron-name">
                        {person.name}{person.qual && `, ${person.qual}`}
                      </h4>
                      <span className="ampse-patron-role">{person.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PATRON & CHAIRS */}
          {(selectedCommitteeTab === "all" || selectedCommitteeTab === "patrons") && (
            <div className="ampse-committee-group">
              <h3 className="ampse-comm-group-heading">
                <ShieldCheck size={18} /> Patron & Conference Chairs
              </h3>
              <div className="ampse-core-leaders-grid">
                {/* Patron Card */}
                <div className="ampse-leader-card patron-special">
                  <div className="ampse-leader-img-box">
                    <img
                      src={patronPrincipal}
                      alt="Dr. C. Mathalai Sundaram"
                      className="ampse-leader-img"
                      style={{ objectPosition: "center 15%" }}
                    />
                    <span className="ampse-leader-tag">Patron</span>
                  </div>
                  <div className="ampse-leader-details">
                    <h4 className="ampse-leader-name">Dr. C. Mathalai Sundaram</h4>
                    <span className="ampse-leader-qual">M.E., MBA., Ph.D., MISTE.</span>
                    <span className="ampse-leader-post">Principal, NSCET</span>
                  </div>
                </div>

                {/* Conference Chairs */}
                {conferenceChairs.map((chair, idx) => (
                  <div key={idx} className="ampse-leader-card">
                    <div className="ampse-leader-img-box">
                      <img
                        src={chair.image}
                        alt={chair.name}
                        className="ampse-leader-img"
                        style={{ objectPosition: chair.objectPosition || "center 20%" }}
                      />
                      <span className="ampse-leader-tag">Conference Chair</span>
                    </div>
                    <div className="ampse-leader-details">
                      <h4 className="ampse-leader-name">{chair.name}</h4>
                      <span className="ampse-leader-qual">{chair.qual}</span>
                      <span className="ampse-leader-post">{chair.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONVENORS & ORGANIZING COMMITTEE */}
          {(selectedCommitteeTab === "all" || selectedCommitteeTab === "convenors") && (
            <div className="ampse-committee-group">
              <h3 className="ampse-comm-group-heading">
                <Users size={18} /> Convenors & Organizing Committee
              </h3>
              <div className="ampse-convenors-grid">
                {/* Convenor 1 */}
                <div className="ampse-team-card">
                  <div className="ampse-team-img-box">
                    <img
                      src={convenorRadha}
                      alt="Dr. B. Radha Krishnan"
                      className="ampse-team-img"
                      style={{ objectPosition: "center top" }}
                    />
                    <span className="ampse-team-badge">Convenor</span>
                  </div>
                  <div className="ampse-team-info">
                    <h4 className="ampse-team-name">Dr. B. Radha Krishnan</h4>
                    <span className="ampse-team-qual">M.E., Ph.D.</span>
                    <p className="ampse-team-role">Head Incharge - Mechanical Engineering</p>
                  </div>
                </div>

                {/* Convenor 2 */}
                <div className="ampse-team-card">
                  <div className="ampse-team-img-box">
                    <img
                      src={convenorVembathu}
                      alt="Mr. A. Vembathurajesh"
                      className="ampse-team-img"
                      style={{ objectPosition: "center top" }}
                    />
                    <span className="ampse-team-badge">Convenor</span>
                  </div>
                  <div className="ampse-team-info">
                    <h4 className="ampse-team-name">Mr. A. Vembathurajesh</h4>
                    <span className="ampse-team-qual">M.E., MISTE., (Ph.D.)</span>
                    <p className="ampse-team-role">Head Incharge - Manufacturing Engineering</p>
                  </div>
                </div>

                {/* Organizing Committee 1 */}
                <div className="ampse-team-card">
                  <div className="ampse-team-img-box">
                    <img
                      src={coordinatorSanthaseelan}
                      alt="Mr. R. Santhaseelan"
                      className="ampse-team-img"
                      style={{ objectPosition: "center top" }}
                    />
                    <span className="ampse-team-badge coord">Organizing Committee</span>
                  </div>
                  <div className="ampse-team-info">
                    <h4 className="ampse-team-name">Mr. R. Santhaseelan</h4>
                    <span className="ampse-team-qual">M.E., (Ph.D.)</span>
                    <p className="ampse-team-role">Asst. Professor - Mechanical Engg.</p>
                  </div>
                </div>

                {/* Organizing Committee 2 */}
                <div className="ampse-team-card">
                  <div className="ampse-team-img-box">
                    <img
                      src={coordinatorVennimalai}
                      alt="Mr. A. Vennimalai Rajan"
                      className="ampse-team-img"
                      style={{ objectPosition: "center top" }}
                    />
                    <span className="ampse-team-badge coord">Organizing Committee</span>
                  </div>
                  <div className="ampse-team-info">
                    <h4 className="ampse-team-name">Mr. A. Vennimalai Rajan</h4>
                    <span className="ampse-team-qual">M.E., (Ph.D.)</span>
                    <p className="ampse-team-role">Asst. Professor - Mechanical Engg.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ADVISORY COMMITTEE MEMBERS */}
          {(selectedCommitteeTab === "all" || selectedCommitteeTab === "advisory") && (
            <div className="ampse-committee-group">
              <h3 className="ampse-comm-group-heading">
                <GraduationCap size={18} /> Advisory Committee Members
              </h3>
              <div className="ampse-advisory-grid">
                {advisoryCommittee.map((adv, idx) => (
                  <div key={idx} className="ampse-advisory-item">
                    <div className="ampse-advisory-bullet"></div>
                    <div className="ampse-advisory-text">
                      <h4 className="ampse-advisory-name">{adv.name}</h4>
                      <span className="ampse-advisory-role">{adv.role}</span>
                      <p className="ampse-advisory-inst">{adv.inst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 8: PLACES TO VISIT AROUND US (TOURIST ATTRACTIONS) */}
      <section id="tourist-spots" className="ampse-section ampse-section-alt">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Explore Theni District</span>
            <h2 className="ampse-section-h2">Places to Visit Around Us</h2>
            <p className="ampse-section-sub">
              Nestled at the foothills of the Western Ghats, Theni is surrounded by scenic hill stations, cascades, and ancient temples.
            </p>
          </div>

          <div className="ampse-places-grid">
            {touristPlaces.map((place, idx) => (
              <div key={idx} className="ampse-place-card">
                <div className="ampse-place-top">
                  <span className="ampse-place-type">{place.type}</span>
                  <div className="ampse-distance-pill">
                    <MapPin size={13} />
                    <span>{place.distance}</span>
                  </div>
                </div>
                <h3 className="ampse-place-name">{place.name}</h3>
                <p className="ampse-place-desc">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: REGISTRATION, CONTACT & LOCATION */}
      <section id="register-contact" className="ampse-section ampse-section-light">
        <div className="ampse-container">
          <div className="ampse-section-header">
            <span className="ampse-section-badge">Get Registered</span>
            <h2 className="ampse-section-h2">Registration & Contact Details</h2>
            <p className="ampse-section-sub">
              Submit your paper, complete registration via Google Form, or connect directly with our coordinators.
            </p>
          </div>

          <div className="ampse-contact-layout">
            {/* Left Box: Online Registration QR & Form link */}
            <div className="ampse-registration-box">
              <div className="ampse-qr-header">
                <Sparkles size={20} className="ampse-qr-icon" />
                <h3>Online Registration</h3>
              </div>
              <p className="ampse-qr-instruction">
                Scan the QR code below using your mobile phone camera or click the direct button to register online for AMPSE - 2K27:
              </p>

              <div className="ampse-qr-container">
                <img src={qrCodeImg} alt="Registration QR Code" className="ampse-qr-image" />
                <span className="ampse-qr-caption">Scan to Register for AMPSE - 2K27</span>
              </div>

              <div className="ampse-form-link-box">
                <span className="ampse-form-link-label">Registration Link:</span>
                <button
                  type="button"
                  onClick={() => handleOpenRegister("tier2")}
                  className="ampse-form-link-url ampse-form-link-btn"
                >
                  <FileText size={15} /> Open Official Registration Form (AMPSE - 2K27)
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleOpenRegister("tier2")}
                className="ampse-btn ampse-btn-primary ampse-btn-full"
              >
                <FileText size={18} /> Open Conference Registration Form
              </button>
            </div>

            {/* Right Box: Direct Contacts & Venue */}
            <div className="ampse-direct-contact-box">
              <h3 className="ampse-contact-heading">For Further Details Contact:</h3>

              {/* Coordinator 1 */}
              <div className="ampse-coordinator-row">
                <div className="ampse-coord-avatar">
                  <img
                    src={coordinatorSanthaseelan}
                    alt="Mr. R. Santhaseelan"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="ampse-coord-info">
                  <h4 className="ampse-coord-name">Mr. R. Santhaseelan, M.E., (Ph.D.)</h4>
                  <span className="ampse-coord-designation">Assistant Professor, Department of Mechanical Engineering</span>
                  <a href="tel:9003398111" className="ampse-coord-phone">
                    <Phone size={15} /> <strong>9003398111</strong>
                  </a>
                </div>
              </div>

              {/* Coordinator 2 */}
              <div className="ampse-coordinator-row">
                <div className="ampse-coord-avatar">
                  <img
                    src={coordinatorVennimalai}
                    alt="Mr. A. Vennimalai Rajan"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="ampse-coord-info">
                  <h4 className="ampse-coord-name">Mr. A. Vennimalai Rajan, M.E., (Ph.D.)</h4>
                  <span className="ampse-coord-designation">Assistant Professor, Department of Mechanical Engineering</span>
                  <a href="tel:9566585541" className="ampse-coord-phone">
                    <Phone size={15} /> <strong>9566585541</strong>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="ampse-official-email-card">
                <Mail size={22} className="ampse-email-card-icon" />
                <div>
                  <span className="ampse-email-label">Official Conference Email ID</span>
                  <a href="mailto:ampse@nscet.org" className="ampse-email-address">ampse@nscet.org</a>
                </div>
                <button className="ampse-copy-btn ampse-copy-small" onClick={handleCopyEmail}>
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              {/* Postal Address */}
              <div className="ampse-venue-card">
                <div className="ampse-venue-icon">
                  <MapPin size={22} />
                </div>
                <div className="ampse-venue-text">
                  <span className="ampse-venue-label">Conference Venue & Postal Address</span>
                  <h4 className="ampse-venue-name">Theni Melapettai Hindu Nadargal Uravinmurai</h4>
                  <p className="ampse-venue-address">
                    <strong>Nadar Saraswathi College of Engineering & Technology</strong><br />
                    Vadapudupatti, Theni - 625531, Tamilnadu, India.<br />
                    Website: <a href="http://www.nscet.org" target="_blank" rel="noopener noreferrer">www.nscet.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="ampse-map-wrapper">
            <div className="ampse-map-header">
              <div className="ampse-map-header-title">
                <MapPin size={18} />
                <span>Campus Location: Nadar Saraswathi College of Engineering & Technology, Vadapudupatti, Theni</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nadar+Saraswathi+College+of+Engineering+and+Technology+Vadapudupatti+Theni"
                target="_blank"
                rel="noopener noreferrer"
                className="ampse-map-direct-link"
              >
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>
            <div className="ampse-map-frame-container">
              <iframe
                title="NSCET Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.855198814781!2d77.50433431479672!3d10.029834392828628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07673c886df3e9%3A0x6b772fc81b1d7d08!2sNadar%20Saraswathi%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Conference Registration Modal */}
      <AMPSERegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        initialTier={selectedRegTier}
      />
    </div>
  );
};

export default AMPSE;

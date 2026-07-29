import React, { useState } from 'react';
import './AcademicLeadership.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import bannerImg from './Banner/AcademicLeadership.png';

const AcademicLeadership = () => {
  const data = {
    executiveAdmin: [
      { id: "ea1", name: "Dr. C. Mathalai Sundaram", role: "Principal", qualification: "M.E., M.B.A., Ph.D.", photo: "/principle.png", quote: "Empowering students for the future through excellence in education." },
      { id: "ea2", name: "Dr. M. Sathya", role: "Vice Principal & Academic", qualification: "M.Tech., M.B.A., Ph.D", photo: "/sathya.jpeg", quote: "Fostering innovation and academic brilliance across all departments." }
    ],
    departmentHeads: {
      "be": [
        { id: "h1", name: "Dr. J. Mathalai Raj", dept: "CSE Department", role: "Head [I/C]", photo: "/mathalairaj.jpg" },
        { id: "h2", name: "Dr. T. Venishkumar", dept: "ECE Department", role: "Head [I/C]", photo: "/venishkumar.jpg" },
        { id: "h3", name: "Mr. K. Ganesh", dept: "EEE Department", role: "Head [I/C]", photo: "/ganesh.jpg" },
        { id: "h4", name: "Mr. N. Nagarathinam", dept: "Civil Engineering", role: "Head [I/C]", photo: "/nagarathinam.jpg" },
        { id: "h5", name: "Dr. B. Radha Krishnan", dept: "Mechanical Engg.", role: "Head [I/C]", photo: "/radhakrishnan.jpg"}
      ],
      "btech": [
        { id: "h6", name: "Mr. L.S. Vignesh", dept: "AI & Data Science", role: "Head [I/C]", photo: "/vignesh.jpg" },
        { id: "h7", name: "Mr. C. Prathap", dept: "Information Technology", role: "Head [I/C]", photo: "/prathap c.jpg" }
      ],
      "sh": [
        { id: "h8", name: "Dr. A. Vembathurajesh", dept: "Science & Humanities", role: "Head [I/C]", photo: "/vembathurajesh.png" }
      ],
      "me": [
        { id: "h9", name: "Dr. M. Sathya", dept: "M.E (CSE)", role: "Head [I/C]", photo: "/sathya.jpeg" },
        { id: "h10", name: "Dr. E. Anantha Krishnan", dept: "Structural Engg.", role: "Head [I/C]", photo: "/ananthakrishnan.jpg" },
        { id: "h11", name: "Dr. R. Athilingam", dept: "Embedded Systems", role: "Head [I/C]", photo: "/athilingam.jpg" }
      ],
      "phd": [
        { id: "h13", name: "Dr. C. Chithra", dept: "Ph.D Scholar Rep", role: "Coordinator", photo: "/chithra.jpg" }
      ]
    }
  };

  const [selectedView, setSelectedView] = useState({ category: "Executive Admin", label: "Executive Admin" });
  const [openUg, setOpenUg] = useState(true);
  const [openPg, setOpenPg] = useState(false);

  const showDepartmentHeads = (label, keyPath) => {
    setSelectedView({ category: keyPath, label: label });
  };

  const getActiveList = () => {
    if (selectedView.category === "Executive Admin") return [];
    return data.departmentHeads[selectedView.category] || [];
  };

  return (
    <div className="al-page">
      {/* Banner */}
      <PageBanner
        backgroundImage={bannerImg}
        hideBreadcrumb={true}
        showOverlay={false}
        showText={false}
      />

      <div className="al-container">
        {/* Left Sidebar */}
        <aside className="al-sidebar">
          <div className="al-sidebar-header">Quick Filters</div>
          <nav className="al-nav">
            <button 
              className={`al-nav-item ${selectedView.category === "Executive Admin" ? "active" : ""}`}
              onClick={() => setSelectedView({ category: "Executive Admin", label: "Executive Admin" })}
            >
              Executive Admin
            </button>

            <div className="al-group">
              <div className="al-group-title">Department Heads</div>
              
              <div className="al-accordion">
                <button className={`al-accordion-btn ${openUg ? "open" : ""}`} onClick={() => setOpenUg(!openUg)}>
                  <span>Undergraduate (UG)</span>
                  <span className="al-chevron">{openUg ? "▲" : "▼"}</span>
                </button>
                {openUg && (
                  <div className="al-submenu">
                    <button className={selectedView.label === "S&H" ? "active" : ""} onClick={() => showDepartmentHeads("S&H", "sh")}>Science & Humanities</button>
                    <button className={selectedView.label === "B.E" ? "active" : ""} onClick={() => showDepartmentHeads("B.E", "be")}>B.E Departments</button>
                    <button className={selectedView.label === "B.Tech" ? "active" : ""} onClick={() => showDepartmentHeads("B.Tech", "btech")}>B.Tech Departments</button>
                  </div>
                )}
              </div>

              <div className="al-accordion">
                <button className={`al-accordion-btn ${openPg ? "open" : ""}`} onClick={() => setOpenPg(!openPg)}>
                  <span>Postgraduate (PG)</span>
                  <span className="al-chevron">{openPg ? "▲" : "▼"}</span>
                </button>
                {openPg && (
                  <div className="al-submenu">
                    <button className={selectedView.label === "M.E" ? "active" : ""} onClick={() => showDepartmentHeads("M.E", "me")}>M.E Programs</button>
                  </div>
                )}
              </div>

              <button 
                className={`al-nav-item ${selectedView.label === "PhD" ? "active" : ""}`}
                onClick={() => showDepartmentHeads("PhD", "phd")}
              >
                Ph.D. Research
              </button>
            </div>
            
            {/* Bottom Support Widget */}
            <div className="al-sidebar-widget">
              <h4>NSCET Admin</h4>
              <p>For administrative queries and support, contact the office.</p>
              <div className="widget-contact">📞 +91 4546 292929</div>
            </div>

          </nav>
        </aside>

        {/* Main Display Area */}
        <main className="al-main-content">
          <div className="al-content-header">
            <h3>{selectedView.category === "Executive Admin" ? "Executive Leadership" : `Heads of Department — ${selectedView.label}`}</h3>
          </div>

          {selectedView.category === "Executive Admin" ? (
            
            /* EXECUTIVE ADMIN - COMPACT WIDE CARDS */
            <div className="exec-cards-container">
              {data.executiveAdmin.map(admin => (
                <div className="exec-premium-card" key={admin.id}>
                  
                  <div className="exec-photo-wrapper">
                    {admin.photo ? <img src={admin.photo} alt={admin.name} /> : <div className="no-photo-placeholder">👤</div>}
                  </div>
                  
                  <div className="exec-content">
                    <div className="exec-details">
                      <h3>{admin.name}</h3>
                      <span className={`role-badge ${admin.role.includes("Vice") ? "badge-secondary" : ""}`}>
                        {admin.role}
                      </span>
                      <p className="exec-qual">{admin.qualification}</p>
                    </div>
                    
                    <div className="exec-quote-box">
                      <span className="quote-mark">“</span>
                      <p>{admin.quote || "Empowering students for the future through excellence in education."}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          ) : (

            /* STAFF / HODs - COMPACT LIST CARDS */
            <div className="hod-list-container">
              {getActiveList().map(hod => (
                <div className="hod-horizontal-card" key={hod.id}>
                  
                  <div className="hod-list-photo">
                    {hod.photo ? <img src={hod.photo} alt={hod.name} /> : <div className="no-photo-placeholder">👤</div>}
                  </div>
                  
                  <div className="hod-list-content">
                    <div className="hod-text-info">
                      <h4>{hod.name}</h4>
                      <p className="hod-dept">{hod.dept}</p>
                    </div>
                    <span className="role-badge hod-badge">{hod.role}</span>
                  </div>

                </div>
              ))}
            </div>

          )}
        </main>
      </div>
    </div>
  );
};

export default AcademicLeadership;
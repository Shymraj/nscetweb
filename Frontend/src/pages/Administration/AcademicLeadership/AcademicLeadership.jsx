import React, { useState } from 'react';
import './AcademicLeadership.css';

const AcademicLeadership = () => {
  const data = {
    executiveAdmin: [
      { id: "ea1", name: "Dr. C. Mathalai Sundaram", role: "Principal", qualification: "M.E., M.B.A., Ph.D.", photo: "/principle.png" },
      { id: "ea2", name: "Dr. M. Sathya", role: "Vice Principal & Academic", qualification: "M.Tech., M.B.A., Ph.D", photo: "/sathya.jpeg", quote: null }
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
      {/* Hero Banner */}
      <div className="al-hero">
        <h2>Academic Leadership</h2>
        <p>Meet the visionary leaders driving educational excellence and innovation at NSCET.</p>
      </div>

      <div className="al-container">
        {/* Left Sidebar Menu */}
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
              
              {/* UG Section */}
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

              {/* PG Section */}
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

              {/* PhD Button */}
              <button 
                className={`al-nav-item ${selectedView.label === "PhD" ? "active" : ""}`}
                onClick={() => showDepartmentHeads("PhD", "phd")}
              >
                Ph.D. Research
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Display Grid */}
        <main className="al-main-content">
          <div className="al-content-header">
            <h3>{selectedView.category === "Executive Admin" ? "Executive Leadership" : `Heads of Department — ${selectedView.label}`}</h3>
          </div>

          {selectedView.category === "Executive Admin" ? (
            <div className="al-executive-grid">
              {data.executiveAdmin.map(admin => (
                <div className="al-executive-card" key={admin.id}>
                  <div className="al-avatar-large">
                    {/* Added Image Rendering Logic here */}
                    {admin.photo ? <img src={admin.photo} alt={admin.name} className="al-profile-img" /> : <span>Photo</span>}
                  </div>
                  <div className="al-details">
                    <h4>{admin.name}</h4>
                    <span className="al-badge">{admin.role}</span>
                    <p className="al-qual">{admin.qualification}</p>
                    {admin.quote && <blockquote className="al-quote">"{admin.quote}"</blockquote>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="al-card-grid">
              {getActiveList().map(hod => (
                <div className="al-hod-card" key={hod.id}>
                  <div className="al-avatar-medium">
                    {/* Added Image Rendering Logic here */}
                    {hod.photo ? <img src={hod.photo} alt={hod.name} className="al-profile-img" /> : <span>Photo</span>}
                  </div>
                  <h4>{hod.name}</h4>
                  <p className="al-dept">{hod.dept}</p>
                  <p className="al-role">{hod.role}</p>
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
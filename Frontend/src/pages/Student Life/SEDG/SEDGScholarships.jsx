import React, { useState } from 'react';
import { Award, ArrowLeft, ExternalLink, Search, GraduationCap, Building2, CheckCircle2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PremiumSubPages.css';

const SEDGScholarships = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const scholarshipsData = [
    {
      category: 'undergraduate',
      department: 'Ministry of Social Justice and Empowerment',
      title: 'Post Matric Scholarships for SC Students',
      target: 'SC Candidates in Higher Education',
      income: 'Up to ₹2,50,000 / annum',
      amount: '₹3,000 to ₹13,500 / year (Based on course)',
      link: 'https://scholarships.gov.in'
    },
    {
      category: 'undergraduate',
      department: 'Ministry of Tribal Affairs',
      title: 'Post Matric Scholarship Scheme for ST Students',
      target: 'ST Candidates in recognized courses post Class X',
      income: 'Up to ₹2,50,000 / annum',
      amount: 'Hosteller: ₹1,200/mo | Day Scholar: ₹550/mo + Allowances',
      link: 'https://scholarships.gov.in'
    },
    {
      category: 'undergraduate',
      department: 'Department of Higher Education',
      title: 'Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Yojana',
      target: '80th percentile in Class XII (Graduation & Professional)',
      income: 'Up to ₹4,50,000 / annum',
      amount: '₹12,000 p.a. (UG) | ₹20,000 p.a. (PG / Professional)',
      link: 'https://scholarships.gov.in'
    },
    {
      category: 'undergraduate',
      department: 'Ministry of Minority Affairs',
      title: 'Merit Cum Means Scholarship for Professional & Technical Courses',
      target: 'Minority Communities (Muslims, Sikhs, Christians, Buddhists, Jain, Parsis)',
      income: 'Up to ₹2,50,000 / annum',
      amount: 'Course Fee: ₹20,000 p.a. + Maintenance allowance',
      link: 'https://scholarships.gov.in'
    },
    {
      category: 'aicte',
      department: 'All India Council for Technical Education (AICTE)',
      title: 'Pragati Scholarship Scheme for Girl Students',
      target: 'Girls in 1st/2nd year of B.E / B.Tech / Technical Degree',
      income: 'Up to ₹8,00,000 / annum',
      amount: '₹50,000 per annum for each year of study',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes'
    },
    {
      category: 'aicte',
      department: 'All India Council for Technical Education (AICTE)',
      title: 'Saksham Scholarship for Specially Abled Students',
      target: 'Differently-abled students (≥ 40% disability)',
      income: 'Up to ₹8,00,000 / annum',
      amount: '₹50,000 per annum for each year of study',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes'
    },
    {
      category: 'aicte',
      department: 'All India Council for Technical Education (AICTE)',
      title: 'AICTE – Swanath Scholarship Scheme',
      target: 'Orphans, COVID-19 affected, or wards of Armed Forces martyrs',
      income: 'Up to ₹8,00,000 / annum',
      amount: '₹50,000 per annum for each year of study',
      link: 'https://www.aicte-india.org/schemes/students-development-schemes'
    },
    {
      category: 'postgraduate',
      department: 'University Grants Commission (UGC) – MHRD',
      title: 'Post Graduate Scholarship for Professional Courses for SC/ST',
      target: 'SC/ST candidates in approved ME / M.Tech programs',
      income: 'As per UGC guidelines',
      amount: 'ME/M.Tech: ₹7,800 PM | Other Courses: ₹4,500 PM',
      link: 'https://ugc.ac.in'
    },
    {
      category: 'postgraduate',
      department: 'University Grants Commission (UGC)',
      title: 'Post Graduate Scholarship for Single Girl Child',
      target: 'Single girl child in PG courses (Age ≤ 30 years)',
      income: 'No income ceiling',
      amount: '₹36,200 per annum for 2 years',
      link: 'https://ugc.ac.in'
    },
    {
      category: 'fellowship',
      department: 'Ministry of Tribal Affairs',
      title: 'National Fellowship & Scholarship for Higher Education of ST Students',
      target: 'ST Candidates enrolled in M.Phil / Ph.D in Engineering & Science',
      income: 'Up to ₹6,00,000 / annum',
      amount: 'M.Phil: ₹25,000 PM | Ph.D: ₹28,000 PM + Full Tuition Fee',
      link: 'https://tribal.nic.in'
    },
    {
      category: 'fellowship',
      department: 'Ministry of Social Justice and Empowerment',
      title: 'National Overseas Scholarship for SC Candidates',
      target: 'SC/ST candidates pursuing Master’s/Ph.D abroad (Top 500 QS)',
      income: 'Up to ₹8,00,000 / annum',
      amount: 'Full Tuition Fee + Living & Contingency Allowances',
      link: 'https://nosmsje.gov.in'
    }
  ];

  const filtered = scholarshipsData.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.target.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="premium-subpage-wrapper">
      <div className="premium-container">
        <Link to="/student-life/sedg" className="premium-back-link">
          <ArrowLeft size={18} /> Back to SEDG Cell
        </Link>

        <div className="subpage-header text-center">
          <div className="subpage-badge gold">
            <Award size={18} />
            <span>FINANCIAL EMPOWERMENT PORTAL</span>
          </div>
          <h1 className="subpage-title">Scholarships & Welfare Schemes</h1>
          <p className="subpage-desc">
            Explore government, AICTE, UGC, and institutional scholarship schemes crafted to ensure no student is deprived of quality technical education.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="subpage-filter-bar">
          <div className="filter-tabs">
            <button className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>
              All Schemes ({scholarshipsData.length})
            </button>
            <button className={`filter-tab ${activeCategory === 'undergraduate' ? 'active' : ''}`} onClick={() => setActiveCategory('undergraduate')}>
              Undergraduate
            </button>
            <button className={`filter-tab ${activeCategory === 'aicte' ? 'active' : ''}`} onClick={() => setActiveCategory('aicte')}>
              AICTE Special
            </button>
            <button className={`filter-tab ${activeCategory === 'postgraduate' ? 'active' : ''}`} onClick={() => setActiveCategory('postgraduate')}>
              Postgraduate
            </button>
            <button className={`filter-tab ${activeCategory === 'fellowship' ? 'active' : ''}`} onClick={() => setActiveCategory('fellowship')}>
              Ph.D / Fellowships
            </button>
          </div>

          <div className="subpage-search-input">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search scheme, ministry, eligibility..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="subpage-cards-grid">
          {filtered.map((item, index) => (
            <div className="scholarship-modern-card" key={index}>
              <div className="card-top-row">
                <span className="card-dept-tag">{item.department}</span>
                <span className={`card-type-pill ${item.category}`}>{item.category.toUpperCase()}</span>
              </div>
              <h3 className="card-scheme-title">{item.title}</h3>
              
              <div className="card-specs-list">
                <div className="spec-item">
                  <GraduationCap size={16} className="spec-icon" />
                  <div>
                    <label>Target Group</label>
                    <p>{item.target}</p>
                  </div>
                </div>
                <div className="spec-item">
                  <DollarSign size={16} className="spec-icon" />
                  <div>
                    <label>Income Limit</label>
                    <p>{item.income}</p>
                  </div>
                </div>
                <div className="spec-item highlight">
                  <CheckCircle2 size={16} className="spec-icon text-success" />
                  <div>
                    <label>Benefit Amount</label>
                    <p><strong>{item.amount}</strong></p>
                  </div>
                </div>
              </div>

              <div className="card-footer-action">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="apply-external-btn">
                  <span>Official Portal</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEDGScholarships;
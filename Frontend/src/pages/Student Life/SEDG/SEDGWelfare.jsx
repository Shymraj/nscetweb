import React from 'react';
import { HeartHandshake, ArrowLeft, ExternalLink, Globe, Landmark, ShieldCheck, UserCheck, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PremiumSubPages.css';

const SEDGWelfare = () => {
  const welfareLinks = [
    {
      name: "Ministry of Skill Development and Entrepreneurship (MSDE)",
      desc: "Skill India programs, vocational training initiatives, PMKVY, and national apprenticeship promotion.",
      category: "Central Ministry",
      url: "https://www.msde.gov.in"
    },
    {
      name: "Ministry of Youth Affairs and Sports",
      desc: "Youth development programs, National Service Scheme (NSS), and leadership initiatives.",
      category: "Central Ministry",
      url: "https://yas.gov.in"
    },
    {
      name: "Tamil Nadu State Commission for Women",
      desc: "Statutory body addressing rights, protection, welfare, and empowerment of women across Tamil Nadu.",
      category: "State Statutory Body",
      url: "https://www.tnsocialwelfare.tn.gov.in/swd/tamil-nadu-state-commission-for-women/"
    },
    {
      name: "Union Public Service Commission (UPSC)",
      desc: "Central agency for recruitment to Civil Services, Engineering Services, and premier government posts.",
      category: "National Recruitment",
      url: "https://upsc.gov.in"
    },
    {
      name: "Tamil Nadu Public Service Commission (TNPSC)",
      desc: "State recruitment portal for Group I, II, IV, and technical engineering services across Tamil Nadu.",
      category: "State Recruitment",
      url: "https://www.tnpsc.gov.in"
    },
    {
      name: "Tamil Nadu E-Scholarships Portal",
      desc: "Online state portal for BC, MBC, DNC, SC, and ST post-matric scholarship disbursement.",
      category: "Scholarships",
      url: "http://escholarship.tn.gov.in/scholarship.html"
    },
    {
      name: "Tamil Nadu Information Commission (TNIC)",
      desc: "State body for transparency, access to public information, and Right to Information (RTI) services.",
      category: "Statutory Commission",
      url: "https://www.tnsic.gov.in"
    },
    {
      name: "Central Information Commission (CIC)",
      desc: "Apex national authority for Right to Information enforcement and public authority transparency.",
      category: "National Commission",
      url: "https://cic.gov.in"
    },
    {
      name: "National Human Rights Commission (NHRC)",
      desc: "National statutory agency for human rights protection, grievance inquiry, and legal safeguards.",
      category: "Human Rights",
      url: "https://nhrc.nic.in"
    },
    {
      name: "Tamil Nadu State Human Rights Commission (SHRC)",
      desc: "State body safeguarding human rights, investigating grievances, and ensuring civic dignity.",
      category: "Human Rights",
      url: "https://www.shrc.tn.gov.in"
    },
    {
      name: "National Commission for Scheduled Tribes (NCST)",
      desc: "Constitutional body established under Article 338A to safeguard ST rights and constitutional development.",
      category: "Constitutional Body",
      url: "https://ncst.nic.in"
    },
    {
      name: "National Commission for Scheduled Castes (NCSC)",
      desc: "Constitutional body under Article 338 protecting SC community rights, educational reservations, and welfare.",
      category: "Constitutional Body",
      url: "https://ncsc.nic.in"
    }
  ];

  return (
    <div className="premium-subpage-wrapper">
      <div className="premium-container">
        <Link to="/student-life/sedg" className="premium-back-link">
          <ArrowLeft size={18} /> Back to SEDG Cell
        </Link>

        <div className="subpage-header text-center">
          <div className="subpage-badge teal">
            <HeartHandshake size={18} />
            <span>STATUTORY BODIES & SCHEMES</span>
          </div>
          <h1 className="subpage-title">National & State Welfare Portals</h1>
          <p className="subpage-desc">
            Direct gateway to official statutory commissions, skill development ministries, recruitment boards, and public welfare portals.
          </p>
        </div>

        <div className="welfare-links-grid">
          {welfareLinks.map((link, idx) => (
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="welfare-portal-card" 
              key={idx}
            >
              <div className="welfare-card-top">
                <span className="welfare-cat-badge">{link.category}</span>
                <ExternalLink size={18} className="welfare-link-icon" />
              </div>
              <h3 className="welfare-card-title">{link.name}</h3>
              <p className="welfare-card-desc">{link.desc}</p>
              <div className="welfare-card-cta">
                <span>Visit Official Website</span>
                <Globe size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEDGWelfare;

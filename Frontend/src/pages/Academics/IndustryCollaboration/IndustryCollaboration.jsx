import React from 'react';
import './IndustryCollaboration.css';
import PageBanner from './images/dji_fly_20250823_102246_695_1755932926647_photo.jpg';

// Import Assets
import pdfFile from './images/IIPC cell committee members.pdf';
import img1 from './images/mou 1.jpeg';
import img2 from './images/mou 2.jpeg';
import img3 from './images/mou 3.jpeg';
import mainImg from './images/InShot_20230518_.jpg';

const mous2025 = [
  { no: 1, name: "LearnLike", institution: "LearnLike, Haven Radhakrishnan Enclave, 4D, Trichy Road, Aryan Soap Colony, Ramasamy Nagar, Ramanathapuram, Coimbatore - 641045", year: 2025 },
  { no: 2, name: "Cybervault Innovations & Technologies Private Limited", institution: "Cybervault Innovations, 4th Floor, Haven Radhakrishnan Enclave, 1741, Trichy Road, Aryan Soap Colony, Ramasamy Nagar, Ramanathapuram, Coimbatore - 641045", year: 2025 },
  { no: 3, name: "Proventures Education And Consulting Private Limited", institution: "Proventures Education and Consulting Private Limited, Flat 102, Nestcon Zion, Plot No. 104E HIG HUDA Layout, Nallagandla, Hyderabad-500019", year: 2025 },
  { no: 4, name: "Quatek Technologies India Pvt Ltd", institution: "Quatek Technologies India Pvt Ltd, No.104A. Sidco Industrial Estate, Kappalur, Madurai - 625008", year: 2025 },
  { no: 5, name: "Tesla Electric", institution: "Tesla Electric, 1/4 Anna Street, Theni Main Road, Karimathat, Madurai (DI) -625514. Tamil Nadu, India", year: 2025 },
  { no: 6, name: "Techvolt Software Private Limited", institution: "Techvolt Software Private Limited, #55,2nd Floor, NSR Road, Nearby One Care Hospital, Saibaba Colony, Coimbatore -641011", year: 2025 },
  { no: 7, name: "Innovative Engineering Products", institution: "Innovative Engineering Products, MIG 19/41, Rajakotta Housing Board, Hosur -635109", year: 2025 },
  { no: 8, name: "TM Innovations", institution: "TM Innovations, 256, Sir line street, Periyakulam main road, Theni", year: 2025 },
  { no: 9, name: "Diya Edulabs Private Ltd", institution: "Diya Edulabs Private ltd, Plot 237, Ambica street, Golden George Nagar, Nerkundram, mogappair east, Chennai", year: 2025 },
  { no: 10, name: "Blink Foundation", institution: "Blink Foundation, 6, Shree Ave, Saibaba Nagar, Pallikarunai, Chennai", year: 2025 }
];

const previousMous = [
  { no: 1, name: "Desometric Engineering Services", institution: "Coimbatore", year: 2023, purpose: "Internship (Student Exchange)", duration: "4 Days", activities: "Knowledge Sharing, Internship" },
  { no: 2, name: "Infosys", institution: "Mysore", year: 2023, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 3, name: "NSK Automotive", institution: "Chennai", year: 2023, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training" },
  { no: 4, name: "Yazhini Rubbers", institution: "Theni", year: 2023, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training" },
  { no: 5, name: "Aran Technologies", institution: "Madurai", year: 2022, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training, Placement, Projects" },
  { no: 6, name: "Just Integrate IT", institution: "Chennai", year: 2022, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training, Placement, Projects" },
  { no: 7, name: "Spica Tech Software Services", institution: "Theni", year: 2022, purpose: "Placement, Internship", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training, Placement, Projects" },
  { no: 8, name: "Heartfulness Education Trust", institution: "Vijayawada", year: 2022, purpose: "Placement, Internship", duration: "5 Years", activities: "Knowledge Sharing, FDPs" },
  { no: 9, name: "Vikebike India Private Limited", institution: "Theni", year: 2022, purpose: "Internship, On-the-job Training, Project Work", duration: "1 Week", activities: "Knowledge Sharing, Internship" },
  { no: 10, name: "Inian Motors", institution: "Usilampatti", year: 2022, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship" },
  { no: 11, name: "SNK Interlock Bricks", institution: "Kamatchipuram", year: 2022, purpose: "Placement, Internship", duration: "5 Years", activities: "Knowledge Sharing, Internship" },
  { no: 12, name: "Profenaa Automation", institution: "Coimbatore", year: 2023, purpose: "Internship (Student Exchange)", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 13, name: "Prim Engineering", institution: "Coimbatore", year: 2023, purpose: "Internship (Student Exchange)", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 14, name: "Sathuragiri Motor Works", institution: "Theni", year: 2023, purpose: "Placement, Internship", duration: "1 Week", activities: "Knowledge Sharing, Internship" },
  { no: 15, name: "All India Radio Air Madurai", institution: "Madurai", year: 2023, purpose: "Internship (Student Exchange)", duration: "5 Days", activities: "Internship" },
  { no: 16, name: "Petal Automations", institution: "Madurai", year: 2023, purpose: "Internship (Student Exchange)", duration: "2 Weeks", activities: "Knowledge Sharing, Internship" },
  { no: 17, name: "Master Safety Security System", institution: "Theni", year: 2023, purpose: "Internship (Student Exchange)", duration: "2 Days", activities: "Knowledge Sharing, Internship" },
  { no: 18, name: "Hazzino Technology", institution: "Theni", year: 2023, purpose: "Internship (Student Exchange)", duration: "2 Weeks", activities: "Knowledge Sharing, Internship" },
  { no: 19, name: "Naveen Auto Works", institution: "Cumbum", year: 2023, purpose: "Internship (Student Exchange)", duration: "1 Week", activities: "Knowledge Sharing, Internship" },
  { no: 20, name: "Sri Maruthi Motors", institution: "Batlagundu", year: 2023, purpose: "Internship (Student Exchange)", duration: "1 Week", activities: "Knowledge Sharing, Internship" },
  { no: 21, name: "Sri Mookambika Info Solutions", institution: "Madurai", year: 2023, purpose: "Internship (Student Exchange)", duration: "4 Months", activities: "Knowledge Sharing, Internship" },
  { no: 22, name: "M & S Software Solutions", institution: "Chennai", year: 2023, purpose: "Internship (Student Exchange)", duration: "5 Months", activities: "Knowledge Sharing, Internship, Placement, Training" },
  { no: 23, name: "SS Automation Solution", institution: "Bangalore", year: 2022, purpose: "Internship (Student Exchange)", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 24, name: "Sri Vinayaga Engineering Works", institution: "Theni", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship" },
  { no: 25, name: "Theni Aiswaryam Poly Plastics Industries", institution: "Theni", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship" },
  { no: 26, name: "Aclude Foundation", institution: "Kharghar", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 27, name: "S.D.Exports", institution: "Theni", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 28, name: "R.M.R Automations", institution: "Madurai", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 29, name: "CADD Center Training Services", institution: "Theni", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 30, name: "Systimanx It Solutions Private Ltd", institution: "Chennai", year: 2021, purpose: "Internship", duration: "5 Years", activities: "Knowledge Sharing" },
  { no: 31, name: "Pro Designa Consultants", institution: "Madurai", year: 2021, purpose: "Internship, On-the-job Training, Project Work", duration: "5 Years", activities: "Knowledge Sharing, Internship, In-Plant Training, Projects" },
  { no: 32, name: "Live Wire (CADD Centre)", institution: "Theni", year: 2021, purpose: "Skill based Training, Placement, Industrial Visit", duration: "Long Term", activities: "Knowledge Sharing" },
  { no: 33, name: "Sakthi Builders", institution: "Cumbum", year: 2022, purpose: "Placement, Internship", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 34, name: "Synergy Group Of Companies", institution: "India, Saudi, Bahrain, South Korea", year: 2021, purpose: "Skill based Training, Placement, Industrial Visit", duration: "5 Years", activities: "Knowledge Sharing, Internship" },
  { no: 35, name: "KMC Associates", institution: "Theni", year: 2021, purpose: "Skill based Training, Placement, Industrial Visit", duration: "Life Time", activities: "Knowledge Sharing, Internship" },
  { no: 36, name: "Bharath Niketan Engineering College", institution: "Aundipatti", year: 2020, purpose: "Faculty and Student Exchange, Research, Guest Lecture, FDPs", duration: "Life Time", activities: "Knowledge Sharing" },
  { no: 37, name: "Sethu Institute of Technology", institution: "Kariapatti", year: 2019, purpose: "Faculty and Student Exchange, Research, Guest Lecture, FDPs", duration: "Life Time", activities: "Knowledge Sharing" },
  { no: 38, name: "Holycross Engineering College", institution: "Thoothukudi", year: 2019, purpose: "Faculty and Student Exchange, Research, Guest Lecture, FDPs", duration: "Life Time", activities: "Knowledge Sharing" },
  { no: 39, name: "Madhu Architects", institution: "Theni", year: 2020, purpose: "Skill based Training, Placement, Industrial Visit", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 40, name: "S N Builders & Contractors", institution: "Periyakulam", year: 2020, purpose: "Skill based Training, Placement, Industrial Visit", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 41, name: "Sansons Civil Consultant", institution: "Rajapalayam", year: 2020, purpose: "Skill based Training, Placement, Industrial Visit", duration: "1 Month", activities: "Knowledge Sharing, Internship" },
  { no: 42, name: "Mangayarkarasi College Of Engineering", institution: "Madurai", year: 2018, purpose: "Faculty and Student Exchange, Research, Guest Lecture, FDPs", duration: "Life Time", activities: "Knowledge Sharing" },
  { no: 43, name: "AS-Salam College of Engineering and Technology", institution: "Thanjavur", year: 2018, purpose: "Faculty and Student Exchange, Research, Guest Lecture, FDPs", duration: "Life Time", activities: "Knowledge Sharing" }
];

function IndustryCollaboration() {
  return (
    <div className="ic-page">
      {/* Hero Section */}
      <PageBanner
        title="Industry Collaboration"
        subtitle="Bridging the gap between academia and industry through strategic MOUs, internships, and dynamic partnerships."
        hideBreadcrumb={true}
      />

      {/* Introduction Section */}
      <section className="ic-intro-section ic-fade-in delay-1">
        <h2>Introduction to MOUs</h2>
        <p>
          A Memorandum of Understanding (MOU) is a formal agreement between the institution and companies, industries, or other organizations. It facilitates student internships, faculty exchange, research projects, training programs, skill development, placements, and more. These partnerships enhance academic and professional growth without being legally binding like contracts.
        </p>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="ic-btn">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          View IIPC Committee Members
        </a>
      </section>

      {/* Image Gallery */}
      <section className="ic-gallery-section ic-fade-in delay-2">
        <div className="ic-gallery-grid">
          <img src={mainImg} alt="MOU Signing Event Large" className="ic-gallery-img ic-main-img" />
          <img src={img1} alt="MOU Signing Event 1" className="ic-gallery-img" />
          <img src={img2} alt="MOU Signing Event 2" className="ic-gallery-img" />
          <img src={img3} alt="MOU Signing Event 3" className="ic-gallery-img" />
        </div>
      </section>

      {/* 2025 MOUs Table */}
      <section className="ic-table-section ic-fade-in delay-3">
        <h2>MOUs Signed in 2025</h2>
        <div className="ic-table-container">
          <div className="ic-table-wrapper">
            <table className="ic-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of the MoU / Linkage</th>
                  <th>Name of the Institution / Industry</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {mous2025.map((mou) => (
                  <tr key={mou.no}>
                    <td>{mou.no}</td>
                    <td><strong>{mou.name}</strong></td>
                    <td>{mou.institution}</td>
                    <td><span className="ic-badge">{mou.year}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Previous MOUs Table */}
      <section className="ic-table-section ic-fade-in delay-3">
        <h2>MOUs Signed in Previous Years</h2>
        <div className="ic-table-container">
          <div className="ic-table-wrapper">
            <table className="ic-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of the MoU / Linkage</th>
                  <th>Institution / Industry</th>
                  <th>Year</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                  <th>Actual Activities</th>
                </tr>
              </thead>
              <tbody>
                {previousMous.map((mou) => (
                  <tr key={mou.no}>
                    <td>{mou.no}</td>
                    <td><strong>{mou.name}</strong></td>
                    <td>{mou.institution}</td>
                    <td><span className="ic-badge">{mou.year}</span></td>
                    <td>{mou.purpose}</td>
                    <td>{mou.duration}</td>
                    <td>{mou.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustryCollaboration;

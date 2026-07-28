import React from 'react';
import './ResearchCentre.css';
import PageBanner from '../../../components/common/PageBanner/PageBanner';
import { FaGraduationCap, FaBullseye, FaRocket, FaAward, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import heroImg from './images/researchcentre.png';

const facultyData = [
  { id: 1, name: "Dr. N. David Mathan", department: "Chemistry", designation: "Professor", googleScholar: "https://scholar.google.co.in/citations?user=8vCJQToAAAAJ&hl=en", scopus: "https://www.scopus.com/authid/detail.uri?authorId=35746491800", orcid: "https://orcid.org/0000-0003-0894-4260" },
  { id: 2, name: "R. Archana", department: "CSE", designation: "Assistant Professor", googleScholar: "https://scholar.google.com/scholar?scilib=1&hl=en&as_sdt=0,5&authuser=1", scopus: "-", orcid: "https://orcid.org/0009-0008-2710-7891" },
  { id: 3, name: "Dr R ATHILINGAM", department: "EEE", designation: "Associate Professor", googleScholar: "https://scholar.google.com/citations?hl=en&user=2CvoZZwAAAAJ", scopus: "https://www.scopus.com/authid/detail.uri?authorId=55270334400", orcid: "-" },
  { id: 4, name: "SHIVA C", department: "EEE", designation: "Assistant Professor", googleScholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=1&hl=en&user=-1fjFkEAAAAJ&sortby=title&authuser=1", scopus: "-", orcid: "https://orcid.org/0009-0000-5213-5343" },
  { id: 5, name: "Venish Kumar T", department: "ECE", designation: "Professor & Head of the Department", googleScholar: "https://scholar.google.com/citations?hl=en&user=uREGNX8AAAAJ", scopus: "https://www.scopus.com/authid/detail.uri?authorId=57378163700", orcid: "https://orcid.org/0000-0002-7712-9748" },
  { id: 6, name: "TAMILSELVI T", department: "ECE", designation: "Assistant Professor", googleScholar: "https://scholar.google.com/citations?hl=en&user=IHKNa80AAAAJ", scopus: "-", orcid: "https://orcid.org/0000-0003-1267-753X" },
  { id: 7, name: "Dr. B. Radha Krishnan", department: "MECH", designation: "Professor & Head Of Department", googleScholar: "https://scholar.google.co.in/citations?user=o_b0-3sAAAAJ", scopus: "https://www.scopus.com/authid/detail.uri?authorId=57200580185", orcid: "https://orcid.org/0000-0002-5070-5653" },
];

const patents = [
  { id: 1, author: "Dr. C. Mathalai Sundaram", title: "Automation in Portable Oil Seal Assembly Machine", patentNo: "2017/123456" },
  { id: 2, author: "Dr. B. Radha Krishnan", title: "Movable Staircase and Lifting Setup in Vehicle", patentNo: "2023/654321" },
];

function ResearchCentre() {
  return (
    <div className='rc-page'>
      <PageBanner
        title="Research Centre"
        subtitle="Advancing Knowledge, Innovation, and Excellence in Engineering Research"
        hideBreadcrumb={true}
        backgroundImage={heroImg}
      />

      <div className='rc-container'>
        {/* Overview Section */}
        <section className='rc-section rc-overview'>
          <div className='rc-header'>
            <FaGraduationCap className='rc-header-icon' />
            <h2>Overview</h2>
          </div>
          <div className='rc-content'>
            <p>
              The Department of Mechanical Engineering has been recognized as the <strong>first Research Centre in Mechanical Engineering</strong> in Theni District Engineering Colleges by Anna University, Chennai, since November 2016.
            </p>
            <p>
              The department was established in the academic year 2010-2011 and introduced the M.E. (Manufacturing Engineering) program in 2014-2015. It focuses on developing an "Engineering Science"-based curriculum that combines practical skills and theoretical knowledge.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <div className='rc-row'>
          <section className='rc-card rc-vision'>
            <div className='rc-card-header'>
              <FaBullseye className='rc-card-icon' />
              <h3>Vision</h3>
            </div>
            <div className='rc-card-content'>
              <p>
                To become an advanced center of research, producing innovative solutions and skilled doctorates in Mechanical Engineering.
              </p>
            </div>
          </section>

          <section className='rc-card rc-mission'>
            <div className='rc-card-header'>
              <FaRocket className='rc-card-icon' />
              <h3>Mission</h3>
            </div>
            <div className='rc-card-content'>
              <p>
                We partner with the research community to foster high achievement, ethical conduct, and enhance grant management capabilities.
              </p>
            </div>
          </section>
        </div>

        {/* Approved Research Centre */}
        <section className='rc-section rc-approved'>
          <div className='rc-header'>
            <FaAward className='rc-header-icon' />
            <h2>Approved Research Centre</h2>
          </div>
          <div className='rc-content rc-featured'>
            <p>
              The Department of Mechanical Engineering at NSCET is an <strong>approved research centre by Anna University, Chennai</strong>. This allows faculty members to supervise Ph.D. and M.S. (by Research) scholars, creating a strong research environment.
            </p>
          </div>
        </section>

        {/* Research & Publications */}
        <section className='rc-section rc-publications'>
          <div className='rc-header'>
            <FaFileAlt className='rc-header-icon' />
            <h2>Research & Publications</h2>
          </div>
          <div className='rc-content'>
            <h3>Faculty Members with Profiles</h3>
            <div className='rc-table-wrapper'>
              <table className='rc-table'>
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Google Scholar</th>
                    <th>Scopus</th>
                    <th>ORCID ID</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyData.map((faculty) => (
                    <tr key={faculty.id}>
                      <td>{faculty.id}</td>
                      <td><strong>{faculty.name}</strong></td>
                      <td>{faculty.department}</td>
                      <td>{faculty.designation}</td>
                      <td>
                        {faculty.googleScholar !== "#" ? (
                          <a href={faculty.googleScholar} target='_blank' rel='noopener noreferrer' className='rc-link'>
                            <FaExternalLinkAlt /> Link
                          </a>
                        ) : (
                          <span className='rc-na'>-</span>
                        )}
                      </td>
                      <td>
                        {faculty.scopus !== "#" && faculty.scopus !== "-" ? (
                          <a href={faculty.scopus} target='_blank' rel='noopener noreferrer' className='rc-link'>
                            <FaExternalLinkAlt /> Link
                          </a>
                        ) : (
                          <span className='rc-na'>-</span>
                        )}
                      </td>
                      <td>
                        {faculty.orcid !== "#" && faculty.orcid !== "-" ? (
                          <a href={faculty.orcid} target='_blank' rel='noopener noreferrer' className='rc-link'>
                            <FaExternalLinkAlt /> Link
                          </a>
                        ) : (
                          <span className='rc-na'>-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recent Patents */}
        <section className='rc-section rc-patents'>
          <div className='rc-header'>
            <FaAward className='rc-header-icon' />
            <h2>Recent Patents</h2>
          </div>
          <div className='rc-content'>
            <div className='rc-patents-grid'>
              {patents.map((patent) => (
                <div key={patent.id} className='rc-patent-card'>
                  <div className='rc-patent-number'>
                    <strong>Patent No:</strong> {patent.patentNo}
                  </div>
                  <div className='rc-patent-author'>
                    <strong>{patent.author}</strong>
                  </div>
                  <div className='rc-patent-title'>
                    "{patent.title}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ResearchCentre;

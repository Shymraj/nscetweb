import './iqac.css';

const IQAC = () => {
  return (
    <div className="iqac-container">
      <header className="iqac-header">
        <h1>INTERNAL QUALITY ASSURANCE CELL (IQAC)</h1>
        <p>“Striving for Excellence in Quality Education”</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About IQAC</h2>
          <p>The IQAC of the college was established on 2nd July 2017 after a year's time of inspection of the college. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of the Institution.</p>
        </div>
      </section>

      {/* Committee Members Grid */}
      <section className="members-section">
        <h2>IQAC Committee Members</h2>
        <div className="members-grid">
          <div className="member-card">
            <h3>CHAIRPERSON</h3>
            <p>Dr. C. Mathalai Sundaram, Principal</p>
          </div>
          {/* Add other cards similarly */}
        </div>
      </section>

      {/* Meeting Records */}
      <section className="records-section">
        <h2>IQAC Meeting Records</h2>
        <div className="records-grid">
          {[2020, 2021, 2022, 2023, 2024].map(year => (
            <div key={year} className="record-item">
              <span>{year}-{year + 1}</span>
              <button>View / Download</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IQAC;
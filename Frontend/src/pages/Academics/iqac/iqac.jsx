import heroImage from '../../../assets/about.jpeg';
import './iqac.css';

const committeeSections = [
  {
    title: 'Chairperson',
    items: [
      { label: 'Dr. C. Mathalai Sundaram', detail: 'Principal' },
    ],
  },
  {
    title: 'Coordinator of IQAC',
    items: [
      { label: 'Mr. R. Udhaya Kumar', detail: 'AP / CSE / Convenor' },
      { label: 'Dr. N. David Mathan', detail: 'ASP / CHE / Convenor' },
    ],
  },
  {
    title: 'Teachers to Represent All Levels',
    items: [
      { label: 'Mr. N. Nagarathinam', detail: 'HOD / SE' },
      { label: 'Dr. J. Mathalairaj', detail: 'HOD / CSE' },
      { label: 'Dr. B. Radha Krishnan', detail: 'HOD / MECH' },
      { label: 'Mr. A. VembathuRajesh', detail: 'HOD / MFE' },
      { label: 'Dr. E. Anantha Krishnan', detail: 'HOD / CIVIL' },
      { label: 'Dr. R. Athilingam', detail: 'HOD / EEE' },
      { label: 'Dr. T. Venishkumar', detail: 'HOD / ECE' },
      { label: 'Mr. L.S. Vignesh', detail: 'HOD / AD' },
      { label: 'Dr. M. Sathya', detail: 'VP / HOD / IT' },
      { label: 'Mr. C. Prathap', detail: 'HOD / S&H' },
      { label: 'Dr. C. Chithra', detail: 'Prof � Coordinator / S&H' },
    ],
  },
  {
    title: 'Members from the Management',
    items: [
      { label: 'A.S.S.S. Soma Sundaram B.E.', detail: 'Secretary' },
      { label: 'Mr. T. Subramani, BCA., MBA.', detail: 'Joint Secretary' },
    ],
  },
  {
    title: 'Senior Administrative Officer',
    items: [
      { label: 'Dr. N. Mathavan', detail: 'VP, HOD / Admin' },
    ],
  },
  {
    title: 'Nominee from Local Society',
    items: [
      { label: 'Mr. A. S. G. Dharmarajan', detail: 'B.A' },
    ],
  },
  {
    title: 'Nominee from Alumni',
    items: [
      { label: 'Mr. A. Vennimalai Rajan', detail: 'AP / Mech' },
      { label: 'Ms. M. Kanimozhi', detail: 'AP / Civil' },
    ],
  },
  {
    title: 'Nominee from Industrialists',
    items: [
      { label: 'Mr. Dhana Vignesh', detail: 'Arcolab, Bangalore, Process Lead & Talent Acquisition' },
    ],
  },
  {
    title: 'Nominee from Employer',
    items: [
      { label: 'Mr. T. Lakshmi Chandrakanth', detail: 'Founder, Systima NX' },
    ],
  },
];

const meetingRecords = [
  { label: '2020–2021', color: 'blue' },
  { label: '2021–2022', color: 'green' },
  { label: '2022–2023', color: 'orange' },
  { label: '2023–2024', color: 'purple' },
  { label: '2024–2025', color: 'teal' },
];

const IQAC = () => {
  return (
    <div className="iqac-page">
      <section className="iqac-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(13, 58, 116, 0.72), rgba(31, 111, 191, 0.72)), url(${heroImage})` }}>
        <div className="iqac-hero-content">
          <div className="iqac-hero-badge">IQAC</div>
          <h1>Internal Quality Assurance Cell</h1>
          <span>(IQAC)</span>
          <p>Striving for Excellence in Quality Education</p>
        </div>
      </section>

      <section className="iqac-about-card">
        <div className="iqac-about-icon">📋</div>
        <div>
          <h2>About IQAC</h2>
          <p>
            The IQAC of the college was established on 2nd July 2017 after a year's time of
            inspection of the college. The prime task of the IQAC is to develop a system for
            conscious, consistent and catalytic improvement in the overall performance of the
            institution. The cell precisely plans quality initiatives by ensuring quality culture,
            institutionalizing quality parameters, and taking necessary action for continual improvement.
          </p>
        </div>
      </section>

      <section className="iqac-section">
        <h2>IQAC Committee Members</h2>
        <div className="iqac-member-grid">
          {committeeSections.map((section) => (
            <article key={section.title} className="iqac-member-card">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="iqac-section">
        <h2>IQAC Meeting Records</h2>
        <div className="iqac-records-grid">
          {meetingRecords.map((record) => (
            <button key={record.label} type="button" className={`iqac-record-card iqac-record-${record.color}`}>
              <div className="iqac-record-year">{record.label}</div>
              <span>View / Download</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IQAC;

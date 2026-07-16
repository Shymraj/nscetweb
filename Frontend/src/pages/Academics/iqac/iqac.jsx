import './iqac.css';

const committeeMembers = [
  {
    role: 'Chairperson',
    name: 'Dr. C. Mathalai Sundaram',
    title: 'Principal',
  },
  {
    role: 'Co-ordinator',
    name: 'Dr. X. Xxxxxx',
    title: 'Professor',
  },
  {
    role: 'Member',
    name: 'Ms. Y. Yyyyyy',
    title: 'Assistant Professor',
  },
  {
    role: 'Member',
    name: 'Mr. Z. Zzzzzz',
    title: 'Lab Instructor',
  },
];

const meetingRecords = [
  { year: 2020, label: '2020-2021' },
  { year: 2021, label: '2021-2022' },
  { year: 2022, label: '2022-2023' },
  { year: 2023, label: '2023-2024' },
  { year: 2024, label: '2024-2025' },
];

const IQAC = () => {
  return (
    <div className="iqac-container">
      <header className="iqac-header">
        <h1>Internal Quality Assurance Cell (IQAC)</h1>
        <p>Striving for excellence in quality education and institutional improvement.</p>
      </header>

      <section className="about-section">
        <h2>About IQAC</h2>
        <p>
          The Internal Quality Assurance Cell (IQAC) was established on 2nd July 2017 to
          facilitate continuous improvement, promote quality culture, and support
          institutional excellence in academics, research, and administration.
        </p>
      </section>

      <section className="members-section">
        <h2>IQAC Committee Members</h2>
        <div className="members-grid">
          {committeeMembers.map((member) => (
            <article key={member.role} className="member-card">
              <h3>{member.role}</h3>
              <p><strong>{member.name}</strong></p>
              <p>{member.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="records-section">
        <h2>IQAC Meeting Records</h2>
        <div className="records-grid">
          {meetingRecords.map((record) => (
            <div key={record.year} className="record-item">
              <span>{record.label}</span>
              <button type="button">View / Download</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IQAC;
import './Certificates.css';

const certificates = [
  {
    title: 'EF SET English Certificate 65/100 (C1 Advanced)',
    issuer: 'EF SET',
    date: 'July 2024',
    link: 'https://cert.efset.org/zYExbB',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'June 2024',
    link: 'https://www.credly.com/badges/951337d6-69ba-42e3-882f-e9cd881bd9aa/print',
  },
  {
    title: 'Programming in HTML5 and CSS3',
    issuer: 'Pirple',
    date: 'October 2022',
    link: 'https://www.pirple.com/certificates/n7puzqwulq',
  },
  // Add more certificates as needed
];

// Helper to parse "Month YYYY" into a Date object
function parseMonthYear(str) {
  const date = new Date(str);
  if (!isNaN(date)) return date;
  const [month, year] = str.split(' ');
  return new Date(`${month} 1, ${year}`);
}

function Certificates(props) {
  // Sort by date descending
  const sortedCertificates = [...certificates].sort(
    (a, b) => parseMonthYear(b.date) - parseMonthYear(a.date)
  );

  return (
    <section className="Certificates section-card" id="certificates" {...props}>
      <h2>Certificates</h2>
      <ul className="Certificates-list">
        {sortedCertificates.map((cert, idx) => (
          <li key={idx} className="Certificate-card">
            <div>
              <strong>{cert.title}</strong>
              <hr className="Certificate-divider" />
              <span>{cert.issuer}</span> &middot; <span>{cert.date}</span>
            </div>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
import './Certificates.css';

const certificates = [
  {
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    date: 'May 2025',
    link: 'https://example.com/certificate-link',
  },
  {
    title: 'React Developer Workshop',
    issuer: 'FreeCodeCamp',
    date: 'March 2025',
    link: 'https://example.com/certificate-link',
  },
  // Add more certificates as needed
];

function Certificates() {
  return (
    <section className="Certificates" id="certificates">
      <h2>Certificates</h2>
      <ul className="Certificates-list">
        {certificates.map((cert, idx) => (
          <li key={idx} className="Certificate-card">
            <div>
              <strong>{cert.title}</strong> <br />
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
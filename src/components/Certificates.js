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
  {
    title: 'Web Attack Investigator',
    issuer: 'LetsDefend',
    date: 'October 2024',
    link: 'https://app.letsdefend.io/my-rewards/detail/5d15868a3b9a41018d1fdb846dd152b7',
  },
  {
    title: 'DECODE 2024 - University Capture the Flag Certificate of Participation',
    issuer: 'Trend Micro',
    date: 'August 2024',
    link: 'https://www.linkedin.com/in/mark-yabes-602026253/overlay/1750492196720/single-media-viewer/?profileId=ACoAAD55PeIBwjZbWdWa3lD3G-CqJ9DFd-X7078',
  },
  // Add more certificates as needed
];

function Certificates(props) {
  return (
    <section className="Certificates section-card" id="certificates" {...props}>
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
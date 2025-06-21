import React, { useState } from 'react';
import './ProfileSection.css';

const funFacts = [
  "I can code for hours with just coffee and good music! ☕🎵",
  "My favorite programming language is Python. 🐍",
  "I built my first website when I was 15.",
  "I love solving logic puzzles and brain teasers.",
  "I once debugged a project at 3 AM and it finally worked!",
  "I enjoy learning about cybersecurity and Backend.",
  "I can type over 100 words per minute!",
  "I love collaborating with other developers.",
  "I believe every bug is just a misunderstood feature. 🐞"
];

function ProfileSection(props) {
  const [showFact, setShowFact] = useState(false);
  const [fact, setFact] = useState('');

  const handleProfileClick = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFact(randomFact);
    setShowFact(true);
  };

  const handleClose = () => setShowFact(false);

  return (
    <section className="ProfileSection section-card" {...props}>
      <img
        src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/485373237_2701819540026912_55396551763862771_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFoyE_rIRPHFWjuq80I5PcFHmtlMtUfDCkea2Uy1R8MKYMNnzrPrT8sI3USjHKJAvHoxsTDFqnbuXMfPbdXz8dV&_nc_ohc=kCcMBWtRsIAQ7kNvwHFjda3&_nc_oc=Adkm0rFH6TNjmpNJbT59f2VOOuIBQPEGuTCmuQcD5sj4mMXDmyyJg5UfalXA75xK8Tw&_nc_zt=23&_nc_ht=scontent.fmnl31-1.fna&_nc_gid=pwHKbpPLqZ6VaAaYxUsLjw&oh=00_AfODCKy-DqA6hS7monPo_ERhdK-LRltEjMh5GTKokas36w&oe=684C52A5"
        className="ProfilePicture"
        alt="Mark John Wayne Alaras Yabes"
        onClick={handleProfileClick}
        style={{ cursor: 'pointer' }}
      />
      <h1>Mark John Wayne Alaras Yabes</h1>
      <h2>Bachelor of Science in Computer Engineering</h2>
      <h2>Technological Institute of the Philippines - Manila</h2>

      {showFact && (
        <div className="easter-egg-dialog">
          <div className="easter-egg-content">
            <p style={{ fontSize: '1.2em', marginBottom: '1em' }}>{fact}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileSection;

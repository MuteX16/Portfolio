import React, { useState } from 'react';
import './ProfileSection.css';
import profilePic from '../media/Profile_Picture.jpg'; // <-- Add this import

const funFacts = [
  "I can code for hours with just coffee and good music! ☕🎵",
  "I once debugged a project at 3 AM and it finally worked!",
  "I enjoy learning about cybersecurity and Backend.",
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
        src={profilePic} // <-- Use imported image
        className="ProfilePicture"
        alt="Mark John Wayne Alaras Yabes"
        onClick={handleProfileClick}
        style={{ cursor: 'pointer' }}
      />
      <h1 className="ProfileName">Mark John Wayne Alaras Yabes</h1>
      <p className="ProfileTagline">Aspiring Cybersecurity Specialist &amp; Backend Developer</p>
      <h2 className="ProfileDegree">Bachelor of Science in Computer Engineering</h2>
      <p className="ProfileSchool">Technological Institute of the Philippines - Manila</p>

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

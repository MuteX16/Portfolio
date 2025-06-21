import './AboutMe.css';

function AboutMe(props) {
  return (
    <section className="AboutMe section-card" id="about" {...props}>
      <h2>About Me</h2>
      <p>

As a student of computer engineering, I have a strong desire to construct and break things correctly.  I like working on both software and hardware projects, from developing backend systems to soldering circuits.  Whether it's system design, coding, or wiring, I like real and hands-on projects that makes concepts come to life.

 I've been learning more about cybersecurity lately by taking on real-world challenges on sites like LetsDefend and HackTheBox, which help me hone my offensive and defensive abilities.  I'm always pushing the boundaries of my technological knowledge in the areas of hardware, software, and security because I want to address important challenges.


      </p>
    </section>
  );
}

export default AboutMe;
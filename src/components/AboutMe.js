import './AboutMe.css';

function AboutMe(props) {
  return (
    <section className="AboutMe section-card" id="about" {...props}>
      <h2>About Me</h2>
      <p>

Hi, I'm a Computer Engineering student with a passion for building and breaking things in the best way possible. I enjoy diving into both the hardware and software sides of technology, and I'm constantly looking for opportunities to apply what I learn to real-world problems.

I'm a hands-on tech enthusiast who enjoys practical work, especially tasks like soldering and wiring circuits. Working with hardware gives me a sense of accomplishment, especially when I see my efforts come to life in physical form. While I have some experience with frontend development, I find myself more drawn to backend work, where I can focus on logic, system structure, and data handling.

In addition to development and electronics, I'm also deeply interested in cybersecurity. I enjoy learning how systems operate behind the scenes, how they can be exploited, and more importantly, how to secure them. I’ve been exploring this field further through platforms like HackTheBox and LetsDefend, where I take on challenges that help me build real-world defensive and offensive skills.

Overall, I love solving problems and building things that are not just functional but also meaningful. Whether it’s coding, securing a network, or wiring up a circuit, I enjoy working on projects that test          technical skills. I'm always open to learning new tools and expanding my knowledge across hardware, software, and security.


      </p>
    </section>
  );
}

export default AboutMe;
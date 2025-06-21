import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'Cybersecurity', icon: '🔒' },
  // Add more as needed
];

function Skills() {
  return (
    <section className="Skills" id="skills">
      <h2>My Skills</h2>
      <ul className="Skills-list">
        {skills.map(skill => (
          <li key={skill.name}>
            <span className="Skills-icon">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
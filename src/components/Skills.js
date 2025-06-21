import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'Cybersecurity', icon: '🔒' },
  { name: 'Django', icon: '🌿' }, // Added Django
  { name: 'Logic Circuits', icon: '🔌' }, // Added Logic Circuits
  // Add more as needed
];

function Skills(props) {
  return (
    <section className="Skills section-card" id="skills" {...props}>
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
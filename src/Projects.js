import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React showcasing my skills and projects.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'IoT Home Automation',
    description: 'A smart home system using Raspberry Pi and sensors.',
    link: 'https://github.com/yourusername/iot-home',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2>My Projects</h2>
      <div className="Projects-list">
        {projects.map(project => (
          <div className="Project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
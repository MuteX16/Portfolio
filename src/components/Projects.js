import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React showcasing my skills and projects.',
    link: 'https://github.com/MuteX16/Portfolio',
  },
  {
    title: 'Salon Inventory Management System',
    description: 'A web-based application for tracking salon products, managing stock levels, and generating inventory reports.',
    link: 'https://github.com/yourusername/iot-home',
  },
  // Add more projects as needed
];

function Projects(props) {
  return (
    <section className="Projects section-card" id="projects" {...props}>
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
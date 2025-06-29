import './Projects.css';

const projects = [
  {
    title: 'Counseling Scheduling Backend',
    description: 'A Node.js backend API for a counseling appointment scheduling system with authentication, booking management, and notification features. Developed during my 2nd year of college as a project requirement for Database Management Systems course.',
    link: 'https://github.com/Mark01-1104/Final_Project-Backend',
  },
  {
    title: 'Salon Inventory Management System',
    description: 'A web-based application for tracking salon products, managing stock levels, and generating inventory reports. I handled the backend development as a partial requirement for our Software Design course during my third year of college.',
    link: 'https://github.com/Mark01-1104/SALON-INVENTORY-AND-SORTING-SYSTEM',
  },
  {
    title: '8-Bit Computer Project',
    description: 'A collaborative project to build a functional 8-bit computer from scratch. I was responsible for designing and implementing the clock module and program counter components, working with my team to create a complete working system.',
    link: 'https://drive.google.com/drive/folders/1BR08b-nV_GfJ4sgA9X7uYS3b3HbYvjiU',
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
            <hr className="Project-divider" />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
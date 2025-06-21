import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="contact">
      <h2>Contact</h2>
      <ul className="Contact-list">
        <li>
          <a href="mailto:mjwayneayabes@gmail.com">✉️ mjwayneayabes@gmail.com</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mark-yabes-602026253/" target="_blank" rel="noopener noreferrer">
            💼 LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/MuteX16" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
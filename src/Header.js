import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">My Portfolio</div>
      <nav className="Header-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
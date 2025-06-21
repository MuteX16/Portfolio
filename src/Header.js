import './Header.css';

function Header() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="Header">
      <div className="Header-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        My Portfolio
      </div>
      <nav className="Header-nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="Header-spacer"></div>
    </header>
  );
}

export default Header;
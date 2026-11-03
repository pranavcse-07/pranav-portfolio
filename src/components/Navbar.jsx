
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        PRANAV<span>.</span>
      </a>

      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="/assets/Pranav_Kumar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="navbar-resume"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

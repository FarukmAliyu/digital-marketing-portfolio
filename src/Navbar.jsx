import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          FARUK<span>.</span>
        </a>

        <nav className={isOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
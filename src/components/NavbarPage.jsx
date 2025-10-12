import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarPage.css";
import logo from "../images/dhtlogo7.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogoClick = () => (window.location.href = "/");

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="DesignHub Logo" className="logo-img" />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navbar Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        {/* Home */}
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <a href="#services" onClick={() => toggleDropdown("services")}>
            Services ▾
          </a>
          <ul className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
            <li>
              <Link to="/web-development" onClick={() => setIsOpen(false)}>
                Web Development
              </Link>
            </li>
            <li>
              <a href="/graphic" onClick={() => setIsOpen(false)}>
                Graphic Design
              </a>
            </li>
            <li>
              <a href="/digital-marketing" onClick={() => setIsOpen(false)}>
                Digital Marketing
              </a>
            </li>
          </ul>
        </li>

        {/* About Us */}
        <li className="dropdown">
          <a href="#about" onClick={() => toggleDropdown("about")}>
            About Us ▾
          </a>
          <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
            <li>
              <a href="/vision" onClick={() => setIsOpen(false)}>
                Our Vision & Mission
              </a>
            </li>
            <li>
              <a href="/company" onClick={() => setIsOpen(false)}>
                Our Company
              </a>
            </li>
          </ul>
        </li>

        {/* Other Links */}
        <li>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;









import React, { useState } from 'react';
import '../styles/NavbarPage.css';
import logo from '../images/dhtlogo7.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogoClick = () => window.location.reload();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
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

        {/* ✅ Home */}
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Home
          </a>
        </li>

        {/* Dropdown - Services */}
        <li className="dropdown">
          <a href="#services" onClick={() => toggleDropdown("services")}>
            Services ▾
          </a>

          <ul className={`dropdown-menu ${openDropdown === "services" ? "show" : ""}`}>
            {/* Application Development */}
            <li className="dropdown-submenu">
              <a href="#appdev" onClick={() => toggleSubmenu("appdev")}>
                Application Development
              </a>
              <ul className={`submenu ${openSubmenu === "appdev" ? "show" : ""}`}>
                <li><a href="#webdev" onClick={() => setIsOpen(false)}>Web Development</a></li>
                <li><a href="#appdev2" onClick={() => setIsOpen(false)}>App Development</a></li>
              </ul>
            </li>

            {/* UI/UX Design */}
            <li className="dropdown-submenu">
              <a href="#uiux" onClick={() => toggleSubmenu("uiux")}>
                UI/UX Design
              </a>
              <ul className={`submenu ${openSubmenu === "uiux" ? "show" : ""}`}>
                <li><a href="#webdesign" onClick={() => setIsOpen(false)}>Web Design Services</a></li>
                <li><a href="#mobiledesign" onClick={() => setIsOpen(false)}>Mobile App Design Services</a></li>
              </ul>
            </li>

            {/* Graphic Design */}
            <li className="dropdown-submenu">
              <a href="#graphic" onClick={() => toggleSubmenu("graphic")}>
                Graphic Design
              </a>
              <ul className={`submenu ${openSubmenu === "graphic" ? "show" : ""}`}>
                <li><a href="#branding" onClick={() => setIsOpen(false)}>Branding & Logo Design</a></li>
                <li><a href="#socialmedia" onClick={() => setIsOpen(false)}>Social Media Graphics</a></li>
              </ul>
            </li>

            {/* Digital Marketing */}
            <li className="dropdown-submenu">
              <a href="#marketing" onClick={() => toggleSubmenu("marketing")}>
                IT Support
              </a>
              <ul className={`submenu ${openSubmenu === "marketing" ? "show" : ""}`}>
                <li><a href="#seo" onClick={() => setIsOpen(false)}>Managed IT Services</a></li>
                <li><a href="#socialads" onClick={() => setIsOpen(false)}>Network Setup & Maintenance</a></li>
                <li><a href="#socialads" onClick={() => setIsOpen(false)}>Technical Support & Helpdesk</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* ✅ About Us with Submenu */}
        <li className="dropdown">
          <a href="#about" onClick={() => toggleDropdown("about")}>
            About Us ▾
          </a>
          <ul className={`dropdown-menu ${openDropdown === "about" ? "show" : ""}`}>
            <li><a href="#vision" onClick={() => setIsOpen(false)}>Our Vision & Mission</a></li>
            <li><a href="#company" onClick={() => setIsOpen(false)}>Our Company</a></li>
            <li><a href="#ceo" onClick={() => setIsOpen(false)}>Message from CEO</a></li>
          </ul>
        </li>

        {/* Other Menu Items */}
        <li><a href="#solutions" onClick={() => setIsOpen(false)}>Our Clients</a></li>
        <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;







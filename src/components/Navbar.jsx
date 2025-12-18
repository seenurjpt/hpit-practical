import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Company", path: "/company" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Industries", path: "/industries" },
    { name: "Insight", path: "/insight" },
    { name: "Career", path: "/career" },
  ];

  return (
    <nav className='navbar'>
      {/* Main Navigation Bar */}
      <div className='navbar-main'>
        <div className='navbar-container'>
          {/* Logo */}
          <Link to='/' className='navbar-logo'>
            <img src='/logo.svg' alt='HPIT Logo' />
          </Link>

          {/* Desktop Navigation Links */}
          <div className='navbar-links'>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className='navbar-link'>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className='navbar-icons'>
            <button className='navbar-icon-btn' aria-label='Search'>
              <img src='/icons/search_icon.svg' alt='Search' />
            </button>
            <button className='navbar-icon-btn' aria-label='Language'>
              <img src='/icons/globe_icon.svg' alt='Language' />
            </button>
            <button
              className='navbar-icon-btn'
              aria-label='Menu'
              onClick={toggleMobileMenu}
            >
              <img src='/icons/menu_icon.svg' alt='Menu' />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className='navbar-mobile-link'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

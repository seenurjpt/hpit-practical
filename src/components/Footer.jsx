import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const aboutLinks = [
    { name: "Company", path: "/company" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/insights" },
    { name: "Careers", path: "/careers", highlight: true },
  ];

  const quickLinks = [
    { name: "Privacy", path: "/privacy" },
    { name: "Cookies", path: "/cookies" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "EEO", path: "/eeo" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Employee Tools", path: "/employee-tools" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "X", icon: "x", url: "#" },
  ];

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          {/* Left Section - Logo and Tagline */}
          <div className='footer-section footer-logo-section'>
            <Link to='/' className='footer-logo'>
              <img src='/logo.svg' alt='HPIT Logo' />
            </Link>
            <p className='footer-tagline'>
              Top IT Consulting Delivering
              <br />
              Custom Innovation Solutions.
            </p>
          </div>

          {/* Middle-Left Section - About us */}
          <div className='footer-section'>
            <h3 className='footer-heading'>About us</h3>
            <ul className='footer-links'>
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  {link.highlight ? (
                    <Link
                      to={link.path}
                      className='footer-link footer-link-highlight'
                    >
                      {link.name}
                      <span className='footer-badge'>We're hiring</span>
                    </Link>
                  ) : (
                    <Link to={link.path} className='footer-link'>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle-Right Section - Quick Links */}
          <div className='footer-section'>
            <h3 className='footer-heading'>Quick Links</h3>
            <ul className='footer-links'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className='footer-link'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div className='footer-section footer-social-section'>
            <h3 className='footer-heading'>Social Media</h3>
            <p className='footer-social-description'>
              Don't Miss to follow us on our
              <br />
              social networks accounts.
            </p>
            <div className='footer-social-icons'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className='footer-social-icon'
                  aria-label={social.name}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {social.icon === "facebook" && (
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='2'
                        y='2'
                        width='20'
                        height='20'
                        rx='5'
                        ry='5'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                      <path
                        d='M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.802C15.2063 14.5518 14.5932 15.1631 13.8416 15.5297C13.0901 15.8962 12.2385 16.0022 11.4078 15.8325C10.5771 15.6628 9.80976 15.2249 9.21484 14.5699C8.61992 13.9149 8.22723 13.0776 8.09007 12.23C7.95291 11.3824 8.07651 10.5625 8.44332 9.84171C8.81013 9.12093 9.40126 8.53818 10.1401 8.18289C10.8789 7.82759 11.7305 7.71925 12.5615 7.87567C13.3925 8.03208 14.1575 8.44574 14.7547 9.06215C15.3519 9.67856 15.7501 10.4679 15.891 11.31H15.89'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <circle cx='17.5' cy='6.5' r='1.5' fill='currentColor' />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M6 9H2V21H6V9Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <circle
                        cx='4'
                        cy='4'
                        r='2'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                    </svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0697 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.42C2.93025 4.55318 2.50186 4.80824 2.16126 5.15941C1.82066 5.51057 1.57879 5.94541 1.46 6.42C1.14521 8.18386 0.991236 9.96815 1 11.76C0.991236 13.5518 1.14521 15.3361 1.46 17.1C1.57879 17.5746 1.82066 18.0094 2.16126 18.3606C2.50186 18.7118 2.93025 18.9668 3.4 19.1C5.12 19.52 12 19.52 12 19.52C12 19.52 18.88 19.52 20.6 19.1C21.0697 18.9668 21.4981 18.7118 21.8387 18.3606C22.1793 18.0094 22.4212 17.5746 22.54 17.1C22.8548 15.3361 23.0088 13.5518 23 11.76C23.0088 9.96815 22.8548 8.18386 22.54 6.42Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.75 15.02L15.5 11.76L9.75 8.5V15.02Z'
                        fill='currentColor'
                      />
                    </svg>
                  )}
                  {social.icon === "x" && (
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 6L6 18M6 6L18 18'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='footer-copyright'>
          <div className='footer-divider'></div>
          <p className='footer-copyright-text'>
            2024 HighPoint Information Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

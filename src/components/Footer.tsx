import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-text">
            Created by Sarthak Sethi
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href="https://github.com/1300Sarthak"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://sarthaksethi.lol"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Personal website"
            >
              Website
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

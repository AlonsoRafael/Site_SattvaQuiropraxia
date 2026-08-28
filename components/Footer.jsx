import React from 'react';
import { InstagramIcon } from './Icons';

const Footer = React.forwardRef(function Footer(_, ref) {
  return (
    <footer className="footer" ref={ref}>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Sattva Saúde Integrativa — Todos os direitos reservados.</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/quiro.betogoulart/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;


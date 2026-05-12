import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Caillault Jérémy</h3>
          <p className="text-secondary">Étudiant BTS SIO SLAM à l'Institution Beaupeyrat</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/tolkya" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://fr.linkedin.com/in/jeremy-caillault-365a6a346" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jc.caillault@outlook.fr" className="social-link" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jérémy Caillault. Fait avec React.</p>
      </div>
    </footer>
  );
};

export default Footer;

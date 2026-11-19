import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>✦ TechNova</h2>
          <p>
            Building the future through
            technology and innovation.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <Link to="/services">Web Development</Link>
          <Link to="/services">UI/UX Design</Link>
          <Link to="/services">AI Solutions</Link>
          <Link to="/services">Cloud Computing</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TechNova. All Rights Reserved.</p>
        <p>Designed with passion ✦</p>
      </div>
    </footer>
  );
}

export default Footer;
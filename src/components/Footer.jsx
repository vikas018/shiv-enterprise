import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">💧 Shiv <strong>Enterprise</strong></div>
          <p>Delivering pure, safe water solutions to homes and businesses across India since 2005.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">in</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer__col">
          <h4>Products</h4>
          <a href="#">RO Purifiers</a>
          <a href="#">UV Purifiers</a>
          <a href="#">RO + UV Systems</a>
          <a href="#">Commercial Units</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>📍 12, Industrial Area, Sector 5, Delhi - 110001</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@shiventerprises.in</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Shiv Enterprise. All rights reserved.</p>
          <p>Made with 💧 for clean water.</p>
        </div>
      </div>
    </footer>
  );
}

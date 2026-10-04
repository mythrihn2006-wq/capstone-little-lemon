import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span>🍋</span>
            <strong>Little Lemon</strong>
          </div>

          <p>Traditional Mediterranean food with a modern twist.</p>
        </div>

        <div>
          <h3>Navigation</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#menu">Menu</a>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <address>
            123 Mediterranean Street
            <br />
            Chicago, IL
            <br />
            +1 312 555 0124
            <br />
            hello@littlelemon.com
          </address>
        </div>

        <div>
          <h3>Social media</h3>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Email: info@example.com
            <br />
            Phone: +1 123 456 7890
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Image Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

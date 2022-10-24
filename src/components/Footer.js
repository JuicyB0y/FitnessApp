import React from 'react';
import Logo from '../assets/images/Logo-1.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-stack">
        <img className="footer-img" src={Logo} alt="logo" />
        <h5 className="footer-author">Made with ❤️ by Ivan</h5>
      </div>
    </div>
  );
};

export default Footer;

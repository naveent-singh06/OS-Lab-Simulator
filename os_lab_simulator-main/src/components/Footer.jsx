import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      &copy; <span id="year">{new Date().getFullYear()}</span>
      <span> All rights reserved to Navneet Singh</span>
    </div>
  );
};

export default Footer;
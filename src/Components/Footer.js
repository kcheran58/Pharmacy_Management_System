import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>Empowering pharmacies to excel through seamless management and precise care.</p>
      <p>&copy; {new Date().getFullYear()} SKCET Pharmacy. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

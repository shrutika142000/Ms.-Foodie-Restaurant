// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <p>Ms. Foodie Restaurant &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;

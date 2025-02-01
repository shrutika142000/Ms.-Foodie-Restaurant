import React from "react";
import "./HeroSection.css"; // Custom styling for hero section

const HeroSection = () => {
  return (
    <div id="hero" className="hero-section text-center">
      <h1 className="display-4">Welcome to Ms. Foodie Restaurant</h1>
      <p className="lead">
        Experience the best of Indian, Korean, and Cake cuisines and many more
        foods items are here!
      </p>

      <a href="#menu" className="btn btn-primary btn-lg mt-4">
        Explore Our Menu
      </a>
    </div>
  );
};

export default HeroSection;

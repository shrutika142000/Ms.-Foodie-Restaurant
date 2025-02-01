// src/components/Services.js
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="section-title text-center mt-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>Catering</h4>
            <p>We offer top-notch catering services for any occasion.</p>
          </div>
          <div className="col-md-4">
            <h4>Private Dining</h4>
            <p>Enjoy an intimate dining experience with our special menu.</p>
          </div>
          <div className="col-md-4">
            <h4>Delivery</h4>
            <p>Get your favorite dishes delivered straight to your door.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

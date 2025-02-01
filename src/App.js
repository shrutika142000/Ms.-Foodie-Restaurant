import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Include global styling

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

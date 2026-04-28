import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="about-page">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />

      {}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="about-hero-content">
            <h1>Make every wall a masterpiece</h1>
            <button className="about-shop-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {}
      <Gallery />

      <Footer />
    </div>
  );
};

export default About;
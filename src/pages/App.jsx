import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery"; 
import Footer from "../components/Footer"; 

import Bestsellers from "../components/Bestsellers"; 

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Gallery />
      <Bestsellers />
      <Footer />
    </div>
    
  );
}

export default App;  
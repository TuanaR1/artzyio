import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Bestsellers from "../components/Bestsellers";
import Footer from "../components/Footer";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import Login from "./Login";
import Signup from "./Signup";

import "./App.css";

function HomePage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
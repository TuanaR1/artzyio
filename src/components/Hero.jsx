import React from "react";
import heroImage from "../assets/hero.jpg"; 

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
  Make every wall <br /> a masterpiece
</h1>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
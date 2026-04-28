import React from "react";
import "./Gallery.css";
import lanaImg from "../assets/lana.png";
import partImg from "../assets/part.jpg";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Welcome to Artzy</h2>
        <p>We believe every wall deserves a story.</p>
        <p className="subtext">
          That's why we create artwork that adds personality, emotion, and style to your space.
        </p>
      </div>

      <div className="gallery-grid">
        <div className="art-card">
          <img src={lanaImg} alt="Born to Die Artwork" />
        </div>
        <div className="art-card">
          <img src={partImg} alt="Process Artwork" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
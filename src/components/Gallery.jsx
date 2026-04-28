import React from "react";
import "./Gallery.css";

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
          <img src="/lana.png" alt="Born to Die Artwork" />
        </div>
        <div className="art-card">
          <img src="/part.jpg" alt="Process Artwork" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
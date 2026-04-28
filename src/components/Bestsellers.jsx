import React from "react";
import "./Bestsellers.css";

import lanaImg from "../assets/lanadelrey.png";
import porscheImg from "../assets/porsche.png"; 
import rubyImg from "../assets/rubylips.png"; 

const Bestsellers = () => {
  const products = [
    {
      id: 1,
      name: "Born To Die",
      price: "24.99€",
      img: lanaImg,
    },
    {
      id: 2,
      name: "Porsche 911",
      price: "24.99€",
      img: porscheImg,
    },
    {
      id: 3,
      name: "Ruby Lips",
      price: "19.99€",
      img: rubyImg,
    },
  ];

  return (
    <section className="bestsellers-section">
      {}
      <h2 className="bestsellers-title">Our Bestsellers</h2>

      {}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {}
      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <div className="feature-text">
            <h4>Fast Delivery</h4>
            <p>Get your orders quickly and reliably.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎧</div>
          <div className="feature-text">
            <h4>Customer Support</h4>
            <p>We're here to help you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
import React from "react";
import Navbar from "../components/Navbar";
import "./Products.css";
import Footer from "../components/Footer";

import img1 from "../assets/pr1.jpg";
import img2 from "../assets/pr4.jpg";
import img3 from "../assets/pr11.jpg";
import img4 from "../assets/pr13.jpg";
import img5 from "../assets/pr14.jpg";
import img6 from "../assets/pr2.jpg";
import img7 from "../assets/pr3.jpg";
import img8 from "../assets/pr15.jpg";
import img9 from "../assets/pr18.jpg";
import img10 from "../assets/pr10.jpg";
import img11 from "../assets/pr8.jpg";
import img12 from "../assets/pr7.jpg";

const products = [
  {
    id: 1,
    name: "Lana Del Rey",
    price: "25€",
    image: img1,
  },
  {
    id: 2,
    name: "Porsche 911",
    price: "35€",
    image: img2,
  },
  {
    id: 3,
    name: "I am a Rich Man",
    price: "25€",
    image: img3,
  },
  {
    id: 4,
    name: "Tones Of Blue",
    price: "30€",
    image: img4,
  },
  {
    id: 5,
    name: "Ruby Lips",
    price: "25€",
    image: img5,
  },
  {
    id: 6,
    name: "Make Things Happen",
    price: "20€",
    image: img6,
  },
  {
    id: 7,
    name: "Chaos",
    price: "20€",
    image: img7,
  },
  {
    id: 8,
    name: "Prison Break",
    price: "35€",
    image: img8,
  },
  {
    id: 9,
    name: "Chill",
    price: "20€",
    image: img9,
  },
  {
    id: 10,
    name: "Go Left",
    price: "25€",
    image: img10,
  },
  {
    id: 11,
    name: "Mazda RX-7",
    price: "30€",
    image: img11,
  },
  {
    id: 12,
    name: "Money On Mind",
    price: "30€",
    image: img12,
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <Navbar />

      <section className="products-gallery">
  {products.map((product) => (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="product-bottom">
          <span>{product.price}</span>

          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  ))}
</section>
  <Footer />
    </div>
  );
};

export default Products;
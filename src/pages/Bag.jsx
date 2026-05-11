import React from "react";
import Navbar from "../components/Navbar";
import "./Bag.css";
import Footer from "../components/Footer";


const Bag = () => {
  return (
    <div className="bag-page">
      <Navbar />

      {/* HERO */}
      <section className="bag-hero">
        
      </section>

      {/* TABLE */}
      <section className="bag-table-section">
        <div className="table-wrapper">
          <table className="bag-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4" className="empty-cart">
                  Your bag is currently empty.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ORDER FORM */}
      <section className="checkout-section">
        <div className="checkout-card">
          <h2>Complete Your Order</h2>

          <form className="checkout-form">
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Gmail Address" />

            <input type="text" placeholder="Shipping Address" />

            <input type="tel" placeholder="Phone Number" />

            <button type="submit">Place Order</button>
          </form>
        </div>
      </section>
    </div>
  );
  <Footer />
};

export default Bag;
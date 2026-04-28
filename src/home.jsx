import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css"; 

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home">
      {}
      <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776; {}
        </div>

        <div className="logo"> </div>

        <div className="nav-right">
          <button className="login-btn">Login / Sign In</button>
          <div className="shopping-bag">&#128717;</div> {}
        </div>
      </nav>

      {}
      <Sidebar open={sidebarOpen} toggle={toggleSidebar} />

      {}
      <div className="hero">
        <img
          src="/hero.jpg"
          alt="Shop Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Discover the Best Products</h1>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
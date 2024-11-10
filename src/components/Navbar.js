import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyBrand</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="navbar-button">
        <a href="/" className="nav-btn">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="navbar-section">
        <div className="navbar-logo-container">
          <img src={logo} alt="logo" />
          <p>DecentralAi</p>
        </div>
        <nav className="navbar-links">
          <ul>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Tokenomics</a>
            </li>
            <li>
              <a href="">Roadmap</a>
            </li>
            <li>
              <a href="">Faq</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const screenHeight = window.innerHeight;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= screenHeight) {
      setNavbarClass("navbar-scrolled");
    } else {
      setNavbarClass("");
    }
  };
  return (
    <div className={`navbar-container ${navbarClass}`}>
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

import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";
import { useGlobalContext } from "../components/Context";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const { homeRef, aboutRef, tokenomicsRef, roadmapRef, faqRef } =
    useGlobalContext();
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
    <div data-aos="zoom-in" className={`navbar-container ${navbarClass}`}>
      <section className="navbar-section">
        <div className="navbar-logo-container">
          <img src={logo} alt="logo" />
          <p>DecentralAi</p>
        </div>
        <nav className={`navbar-links ${isOpened && "navbar-links-active"}`}>
          <ul>
            <li>
              <p
                onClick={() => {
                  homeRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpened(false);
                }}
              >
                home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpened(false);
                }}
              >
                About Us
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  tokenomicsRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpened(false);
                }}
              >
                Tokenomics
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  roadmapRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpened(false);
                }}
              >
                Roadmap
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  faqRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpened(false);
                }}
              >
                Faq
              </p>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpened(!isOpened)}
          className={`toggle-btn ${isOpened && "toggle-btn-active"}`}
        >
          <span />
          <span />
          <span />
        </button>
      </section>
    </div>
  );
};

export default Navbar;

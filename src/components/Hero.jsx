import React from "react";
import { useGlobalContext } from "./Context";
import "./Hero.css";

const Hero = () => {
  const { homeRef } = useGlobalContext();
  return (
    <div ref={homeRef} className="hero-container">
      <section data-aos="zoom-out" className="hero-content">
        <h2>DecentralAI</h2>
        <p>
          Welcome to our AI-powered platform for investing, staking,
          micro-lending and lottery! Our platform is built on cutting-edge
          technology and powered by AI algorithms that constantly analyze the
          market to identify the best investment opportunities. Our goal is to
          help you grow your wealth and achieve your financial goals in a secure
          and transparent manner.
        </p>
        <a href="">View Whitepaper</a>
      </section>
    </div>
  );
};

export default Hero;

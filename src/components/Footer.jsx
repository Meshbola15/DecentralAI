import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <section>
          <h2>Decentral</h2>
          <p>AI</p>
          <h4>
            AI-powered platform for investing, staking, and micro-lending!
          </h4>
        </section>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="">About</a>
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
            <li>
              <a href="">Whitepaper</a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Subscribe to our newsletter</h2>
          <p>
            Don't miss out on all the latest updates on Ordinal Protocol &
            developments.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </section>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

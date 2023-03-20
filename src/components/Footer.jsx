import React from "react";
import { useGlobalContext } from "./Context";
import "./Footer.css";

const Footer = () => {
  const { homeRef, aboutRef, tokenomicsRef, roadmapRef, faqRef } =
    useGlobalContext();
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
              <p
                onClick={() => {
                  homeRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
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
                }}
              >
                Faq
              </p>
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

import React from "react";
import { useGlobalContext } from "./Context";
import "./Tokenomics.css";

const Tokenomics = () => {
  const { tokenomicsRef } = useGlobalContext();
  return (
    <div ref={tokenomicsRef} className="tokenomics-container">
      <div className="tokenomics-content-border">
        <div className="tokenomics-content">
          <h2 data-aos="fade">Our Tokenomics</h2>
          <section data-aos="zoom-in" className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Token Symbol</p>
              <p>$DXAI</p>
            </div>
          </section>
          <section data-aos="zoom-in" className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Circulating Supply</p>
              <p>700,000,000</p>
            </div>
          </section>
          <section data-aos="zoom-in" className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Maximum Supply</p>
              <p>700,000,000</p>
            </div>
          </section>
          {/* <section data-aos="zoom-in" className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Token Price</p>
              <p>$0.00001</p>
            </div>
          </section> */}
        </div>
      </div>
      <button className="tokenomics-list-btn">Join the Presale</button>
      <div className="tokenomics-bg-blur" />
    </div>
  );
};

export default Tokenomics;

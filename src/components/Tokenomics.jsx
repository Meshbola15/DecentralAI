import React from "react";
import "./Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <div className="tokenomics-content-border">
        <div className="tokenomics-content">
          <h2>Our Tokenomics</h2>
          <section className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Token Symbol</p>
              <p>$DXAI</p>
            </div>
          </section>
          <section className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Circulating Supply</p>
              <p>700,000,000</p>
            </div>
          </section>
          <section className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Maximum Supply</p>
              <p>700,000,000</p>
            </div>
          </section>
          <section className="tokenomics-list-border">
            <div className="tokenomics-list">
              <p>Token Price</p>
              <p>$0.00001</p>
            </div>
          </section>
        </div>
      </div>
      <div className="tokenomics-bg-blur" />
    </div>
  );
};

export default Tokenomics;

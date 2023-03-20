import React from "react";
import "./Roadmap.css";
import checkmark from "../assets/Done.svg";
import clock from "../assets/clock.svg";

const RoadmapContent = ({ message }) => {
  return (
    <div className="roadmap-content-card">
      <article className="checkmark-container">
        <img src={checkmark} alt="checkmark" />
      </article>
      <p>{message}</p>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <h1>Roadmap</h1>
      <div className="roadmap-content-border">
        <section className="roadmap-content">
          <div className="">
            <RoadmapContent message="Development of decentralized fund" />
            <RoadmapContent message="Launchpad for AI projects" />
            <RoadmapContent message="Micro-lending service" />
            <RoadmapContent message="ESIS development (Ethereum Stakeholder Incentive System)" />
          </div>
        <img src={clock} alt="clock" className="roadmap-clock" />
        </section>
      </div>
    </div>
  );
};

export default Roadmap;

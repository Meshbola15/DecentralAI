import React from "react";
import "./AboutUs.css";
import AboutCard from "./fragments/AboutCard";
import shield from "../assets/icon1.svg";
import rocket from "../assets/icon2.svg";
import safe from "../assets/icon3.svg";
import wallet from "../assets/icon4.svg";

const AboutUs = () => {
  return (
    <div className="AboutUs-container">
      <h2>About Us</h2>
      <div className="AboutUs-grid-container">
        <AboutCard
          title="Launchpad AI"
          message="A platform for launching and investing in AI-related projects. Whether you're an entrepreneur looking to raise funds or an investor looking for promising projects, Launchpad AI has you covered."
          icon={rocket}
        />
        <AboutCard
          title="Decentralized Fund"
          message="A fully decentralized investment fund that uses AI algorithms to manage your funds and achieve the best returns. With our transparent and low-fee platform, you can invest in sustainable projects and have a positive social impact."
          icon={wallet}
        />
        <AboutCard title="Staking" message="" icon={rocket} />
        <AboutCard
          title="Launchpad AI"
          message="A platform for launching and investing in AI-related projects. Whether you're an entrepreneur looking to raise funds or an investor looking for promising projects, Launchpad AI has you covered."
          icon={rocket}
        />
      </div>
    </div>
  );
};

export default AboutUs;

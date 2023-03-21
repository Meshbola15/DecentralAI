import React from "react";
import "./AboutUs.css";
import AboutCard from "./fragments/AboutCard";
import shield from "../assets/icon1.svg";
import rocket from "../assets/icon2.svg";
import safe from "../assets/icon3.svg";
import wallet from "../assets/icon4.svg";
import { useGlobalContext } from "./Context";

const AboutUs = () => {
  const { aboutRef } = useGlobalContext();
  return (
    <div ref={aboutRef} className="AboutUs-container">
      <h2 data-aos="fade-up">About Us</h2>
      <div className="AboutUs-grid-container">
        <AboutCard
          title="Launchpad AI"
          message="A platform for launching and investing in AI-related projects. Whether you're an entrepreneur looking to raise funds or an investor looking for promising projects, Launchpad AI has you covered."
          icon={rocket}
        />
        <AboutCard
          title="Decentralized Fund"
          message="A fully decentralized investment fund that uses AI algorithms to manage your funds and achieve the best returns. With our transparent and low-fee platform, you can invest in sustainable projects and have a positive social impact."
          icon={shield}
        />
        <AboutCard
          title="Staking"
          message="A governance and launchpad allocation service that allows you to earn rewards by holding and staking our tokens. With our secure and user-friendly platform, you can participate in the growth of our ecosystem and contribute to our community.
"
          icon={safe}
        />
        <AboutCard
          title="Micro-lending"
          message="A micro-loan service that provides quick and affordable loans to individuals who may not have access to traditional financing options. Our flexible repayment options and responsible lending practices ensure that you can get the funds you need without experiencing financial difficulties."
          icon={wallet}
        />
      </div>
    </div>
  );
};

export default AboutUs;

import Aos from "aos";
import React from "react";
import "./AboutCard.css";

const AboutCard = ({ icon, title, message }) => {
  Aos.init()
  return (
    <div data-aos="fade-up" className="AboutCard-container">

      <div className="AboutCard-header">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default AboutCard;

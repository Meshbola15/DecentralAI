import React from "react";
import "./AboutCard.css";

const AboutCard = ({ icon, title, message }) => {
  return (
    <div className="AboutCard-container">
      <div className="AboutCard-header">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default AboutCard;

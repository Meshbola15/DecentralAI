import React from "react";
import "./Faq.css";

const FaqCard = ({ title, body, index }) => {
  return (
    <div className={"faq-card"}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Faq</h2>
      <p>Check out our frequently asked questions</p>
      <section className="faq-grid">
        <FaqCard
          title="What is the main focus of your project?"
          body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?"
        />
        <FaqCard
          title="What is the main focus of your project?"
          body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?"
        />
        <FaqCard
          title="What is the main focus of your project?"
          body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?"
        />
        <FaqCard
          title="What is the main focus of your project?"
          body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?"
        />
      </section>
    </div>
  );
};

export default Faq;

import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import "./Faq.css";

const data = [
  {
    id: 0,
    title: "What is the main focus of your project?",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?",
  },
  {
    id: 1,
    title: "What is the main focus of your project?",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?",
  },
  {
    id: 2,
    title: "What is the main focus of your project?",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?",
  },
  {
    id: 3,
    title: "What is the main focus of your project?",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, molestias?",
  },
];

const FaqCard = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={index}
      onClick={() => {
        index === item.id ? setIsOpen(true) : setIsOpen(false);
        setIsOpen(!isOpen);
      }}
      className={`faq-card ${isOpen && "faq-card-open"}`}
    >
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

const Faq = () => {
  const { faqRef } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div ref={faqRef} className="faq-container">
      <h2>Faq</h2>
      <p>Check out our frequently asked questions</p>
      <section data-aos="fade-up" className="faq-grid">
        {data.map((item, index) => (
          <FaqCard index={index} item={item} {...data} />
        ))}
      </section>
    </div>
  );
};

export default Faq;

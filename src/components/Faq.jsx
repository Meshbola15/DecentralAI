import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import "./Faq.css";
import plus from "../assets/plus.png"

const data = [
  {
    id: 0,
    title: "What is the main focus of your project?",
    body: "Our project focuses on creating a launchpad for AI projects and building a decentralized investment fund that leverages AI algorithms to identify the best investment opportunities in real-time.",
  },
  {
    id: 1,
    title: "What is the purpose of your launchpad for AI projects?",
    body: " Our launchpad provides funding, mentorship, and community support for entrepreneurs and developers working on innovative AI projects. We aim to help drive the development and adoption of AI technologies that can solve real-world problems and benefit society as a whole.",
  },
  {
    id: 2,
    title: "What is the goal of your decentralized investment fund?",
    body: "Our goal is to offer a decentralized investment fund that gives our investors greater control over their funds and leverages AI algorithms to identify the best investment opportunities in real-time. By using blockchain technology, we aim to ensure the security and transparency of all transactions and keep our fees low and transparent.",
  },
  {
    id: 3,
    title:
      "What are the advantages of investing in your decentralized investment fund?",
    body: "Our decentralized investment fund offers several advantages over traditional funds, including greater control over your funds, transparency and security of all transactions, low and transparent fees, and the potential for long-term growth.",
  },
  {
    id: 4,
    title: "How do you ensure the security of transactions on your platform?",
    body: "We use blockchain technology to ensure the security and transparency of all transactions on our platform. This minimizes the risk of fraud or loss and gives our investors greater peace of mind.",
  },
  {
    id: 5,
    title: "How do you select which AI projects to fund?",
    body: "We ensure that our micro-loans are affordable by evaluating borrowers' ability to repay the loan and offering flexible repayment options. We also report to credit bureaus, which can help improve borrowers' credit scores if they make timely repayments.",
  },
];

const FaqCard = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={index}
      // data-aos="fade-in"
      onClick={() => {
        index === item.id ? setIsOpen(true) : setIsOpen(false);
        setIsOpen(!isOpen);
      }}
      className={`faq-card ${isOpen && "faq-card-open"}`}
    >
      <div>
        <h3>{item.title}</h3>
        <img src={plus} alt="plus" />
      </div>
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

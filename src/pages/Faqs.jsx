import { useState } from "react";
import HeaderPage from "../components/header";
import FooterPage from "../components/footer";

export default function FaQs() {
  // State to keep track of which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the click and toggle the FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeaderPage />
      <div className="faqs">
        <h1>FAQs</h1>
        <h2>
          <span>Home/</span>FAQs
        </h2>
      </div>
      <div className="ordercontainer">
        <div className="order">
          <h1>Order and Returns</h1>
          <div className="lyno"></div>
          <div>
            {[
              {
                question: "Can I order over the phone?",
                answer: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
              },
              {
                question: "Donec mattis finibus elit ut tristique?",
                answer: `The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it.`,
              },
              {
                question: "Vestibulum a lorem placerat, porttitor urna vel?",
                answer: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="ordersub" onClick={() => toggleFAQ(index)}>
                  <h2>{item.question}</h2>
                  <h2>{openIndex === index ? "-" : "+"}</h2>
                </div>
                {openIndex === index && <p>{item.answer}</p>}
                <div className="lyno2"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="order">
          <h1>Ordering from AYO</h1>
          <div className="lyno"></div>
          <div>
            {[
              {
                question: "What is the rules of Payment?",
                answer: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
              },
              {
                question: "How much i need to pay?",
                answer: `The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it.`,
              },
              {
                question: "Nam pellentesque aliquam metus?",
                answer: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="ordersub" onClick={() => toggleFAQ(index + 3)}>
                  <h2>{item.question}</h2>
                  <h2>{openIndex === index + 3 ? "-" : "+"}</h2>
                </div>
                {openIndex === index + 3 && <p>{item.answer}</p>}
                <div className="lyno2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

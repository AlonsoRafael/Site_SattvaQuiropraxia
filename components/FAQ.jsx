"use client";

import { useState } from 'react';

export default function FAQ({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="section-padded" id="duvidas">
      <div className="container fade-in">
        <h2 className="section-title text-center">Dúvidas Frequentes</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              key={faq.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              >
                <h3>{faq.question}</h3>
                <i className="fa-solid fa-plus" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';

export default function FAQ({ faqs }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="section-padded" id="duvidas">
      <div className="container fade-in">
        <h2 className="section-title text-center">Dúvidas Frequentes</h2>
        <div className="faq-container" role="region" aria-label="Perguntas e Respostas">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                className={`faq-item ${isOpen ? 'active' : ''}`}
                key={faq.question}
              >
                <h3 className="faq-heading-wrapper">
                  <button
                    type="button"
                    className="faq-question"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <i className="fa-solid fa-plus" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

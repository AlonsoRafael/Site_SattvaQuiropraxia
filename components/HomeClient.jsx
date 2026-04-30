"use client";

import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import TherapiesInfo from './TherapiesInfo';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import { services, faqs, gallery } from '../data/siteData';

export default function HomeClient() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [footerOffset, setFooterOffset] = useState(20);
  const footerRef = useRef(null);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealTargets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return undefined;
    const updateFooterOffset = () => setFooterOffset(footer.offsetHeight + 20);
    updateFooterOffset();
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) updateFooterOffset();
      },
      { threshold: 0.1 }
    );
    observer.observe(footer);
    window.addEventListener('resize', updateFooterOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateFooterOffset);
    };
  }, []);

  return (
    <>
      <a
        href="https://wa.me/553498346009"
        className="whatsapp-flutuante"
        target="_blank"
        rel="noreferrer"
        aria-label="Agende agora pelo WhatsApp"
        style={{ bottom: footerVisible ? `${footerOffset}px` : '20px' }}
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        <span className="whatsapp-flutuante-texto">Agende Agora</span>
      </a>

      <Header />
      <main>
        <Hero />
        <TherapiesInfo />
        <Services services={services} />
        <About />
        <Contact />
        <FAQ faqs={faqs} />
        <Footer ref={footerRef} />
      </main>
    </>
  );
}

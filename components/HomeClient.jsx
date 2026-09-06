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
import Testimonials from './Testimonials';
import { services, faqs } from '../data/siteData';
import FloatingWhatsApp from './FloatingWhatsApp';

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
      <FloatingWhatsApp footerVisible={footerVisible} footerOffset={footerOffset} />

      <Header />
      <main>
        <Hero />
        <TherapiesInfo />
        <Services services={services} />
        <About />

        {/* Wave Divider 1: White to #faf8f5 (Testimonials) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: '#ffffff', marginTop: '-1px', marginBottom: '-1px' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 'clamp(20px, 5vw, 60px)', transform: 'scale(1.02)' }}>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#faf8f5" opacity=".5"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-50.24V120H0Z" fill="#faf8f5"></path>
          </svg>
        </div>

        <Testimonials />

        {/* Wave Divider 2: #faf8f5 to #d3ac6b (Contact) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: '#faf8f5', marginTop: '-1px', marginBottom: '-1px' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 'clamp(20px, 5vw, 60px)', transform: 'rotateY(180deg) scale(1.02)' }}>
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#d3ac6b" opacity=".5"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-50.24V120H0Z" fill="#d3ac6b"></path>
          </svg>
        </div>

        <Contact />

        {/* Curve Divider: #d3ac6b (Contact) to White (FAQ) */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: 'transparent', marginTop: '-1px', marginBottom: '-1px' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 'clamp(50px, 10vw, 120px)', transform: 'scale(1.02)' }}>
            <path d="M0,0 L0,20 Q600,160 1200,20 L1200,0 Z" fill="#d3ac6b"></path>
          </svg>
        </div>

        <FAQ faqs={faqs} />
        <Footer ref={footerRef} />
      </main>
    </>
  );
}

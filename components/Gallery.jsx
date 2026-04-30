"use client";

import { useState, useRef } from 'react';

export default function Gallery({ gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const prev = () => setCurrentSlide((s) => (s - 1 + gallery.length) % gallery.length);
  const next = () => setCurrentSlide((s) => (s + 1) % gallery.length);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const start = touchStartRef.current;
    const end = touchEndRef.current || start;
    const diff = start - end;
    const threshold = 40; // px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) next(); else prev();
    }
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <div
      className="gallery-card fade-in"
    >
      <div
        className="gallery-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {gallery.map((item, idx) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className={`gallery-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ objectPosition: item.src.includes('portaClinica') ? 'center bottom' : 'center center' }}
          />
        ))}

        {gallery.length > 1 && (
          <>
            <button className="gallery-arrow left" onClick={prev} aria-label="Anterior">‹</button>
            <button className="gallery-arrow right" onClick={next} aria-label="Próximo">›</button>
          </>
        )}
      </div>
      {gallery.length > 1 && (
        <div className="gallery-dots">
          {gallery.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className="gallery-caption">Conheça nosso espaço, projetado para o seu conforto e bem-estar.</p>
    </div>
  );
}

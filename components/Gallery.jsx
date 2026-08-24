"use client";

import { useState, useRef, useEffect, useCallback } from 'react';

export default function Gallery({ gallery }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const containerRef = useRef(null);

  const prev = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const next = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % gallery.length);
  }, [gallery.length]);

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
      if (diff > 0) next();
      else prev();
    }
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  return (
    <div className="gallery-card fade-in" onKeyDown={handleKeyDown} tabIndex={0} aria-label="Galeria de fotos do consultório">
      <div
        ref={containerRef}
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
            loading="lazy"
            decoding="async"
            width="1200"
            height="800"
            className={`gallery-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{
              objectPosition: item.src.includes('portaClinica')
                ? 'center bottom'
                : 'center center'
            }}
          />
        ))}

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow left"
              onClick={prev}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-arrow right"
              onClick={next}
              aria-label="Próxima foto"
            >
              ›
            </button>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="gallery-dots" role="tablist" aria-label="Navegação das fotos">
          {gallery.map((item, i) => (
            <button
              type="button"
              key={item.src}
              role="tab"
              aria-selected={i === currentSlide}
              className={`gallery-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className="gallery-caption">
        Conheça nosso espaço, projetado para o seu conforto e bem-estar.
      </p>
    </div>
  );
}

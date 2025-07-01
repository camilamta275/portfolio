import React, { useRef, useEffect, useState } from 'react';
import './style.css';

function HeroSection() {
  const ctaBoxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMoonHovered, setIsMoonHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ctaBoxRef.current) {
      observer.observe(ctaBoxRef.current);
    }

    return () => {
      if (ctaBoxRef.current) {
        observer.unobserve(ctaBoxRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div
          className="moon-container"
          onMouseEnter={() => setIsMoonHovered(true)}
          onMouseLeave={() => setIsMoonHovered(false)}
        >
          <img
            src="/moon.png"
            alt="Moon"
            className={`moon-img moon-default ${isMoonHovered ? 'hidden' : ''}`}
          />
          <img
            src="/another-moon.png"
            alt="Another Moon"
            className={`moon-img moon-hover ${isMoonHovered ? 'visible' : ''}`}
          />
        </div>

        <div className="left-column">
          <div ref={ctaBoxRef} className={`cta-box ${isVisible ? 'fade-in' : ''}`}>
            <h2>Olá, sou Camila, dev fullstack!</h2>
            <p>E estou aqui para te ajudar a construir experiências completas: da ideia à implementação, vem comigo?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
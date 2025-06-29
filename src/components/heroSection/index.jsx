import React from 'react';
import './style.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="main-title">MOONDAY</h1>
      <div className="hero-content">
        <img src="/moon.png" alt="Moon" className="moon-img" />
        <div className="left-column">
          <div className="cta-box">
            <h2>Olá, sou Camila, dev fullstack!</h2>
            <p>E estou aqui para te ajudar a construir experiências completas: da ideia à implementação, vem comigo?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
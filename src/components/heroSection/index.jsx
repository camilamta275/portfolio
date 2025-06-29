import React from 'react';
import './style.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="main-title">MOONDAY</h1>
      <div className="hero-content">
        <img src="/moon.png" alt="Moon" className="moon-img" />
      </div>
    </section>
  );
}

export default HeroSection;
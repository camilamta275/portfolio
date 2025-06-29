// src/components/About/About.jsx
import React from 'react';
import './style.css';
import profilePic from '/profile.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text-wrapper">
          <p className="about-text">
            Olá! Eu sou um(a) <span className="about-highlight">desenvolvedor(a) front-end</span> apaixonado(a) por criar experiências digitais incríveis e intuitivas. Com foco em <span className="about-highlight">React e design responsivo</span>, transformo ideias em interfaces de usuário funcionais e visualmente atraentes.
          </p>
          <p className="about-text">
            Minha jornada na programação começou com a curiosidade de como os sites e aplicativos funcionam, e desde então, tenho me dedicado a aprender e aplicar as melhores práticas de desenvolvimento web. Busco constantemente aprimorar minhas habilidades e estar atualizado(a) com as últimas tecnologias.
          </p>
          <p className="about-text">
            Quando não estou codificando, gosto de <span className="about-highlight">explorar novas tecnologias, ler sobre design de interação e contribuir para projetos open-source</span>. Acredito que a colaboração e o aprendizado contínuo são essenciais para o crescimento profissional.
          </p>
        </div>
        <img src={profilePic} alt="Sua Foto de Perfil" className="about-image" />
      </div>
    </section>
  );
}

export default About;
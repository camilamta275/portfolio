import React from 'react';
import './style.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Entre em Contato</h2>
      <p className="contact-description">
        Quer se conectar comigo? Se você tem um projeto em mente, uma oportunidade de trabalho, ou apenas quer dizer "Oi", sinta-se à vontade para me enviar uma mensagem! Estou sempre aberta a novas conexões e colaborações. Você pode me encontrar nas redes sociais abaixo.
      </p>

      <div className="contact-info-grid">
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3 className="contact-item-title">LinkedIn</h3>
          <p className="contact-item-value">
            <a href="https://www.linkedin.com/in/camilamta275/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/camilamta275/</a>
          </p>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <h3 className="contact-item-title">GitHub</h3>
          <p className="contact-item-value">
            <a href="https://github.com/camilamta275" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/camilamta275</a>
          </p>
        </div>
      </div>

    </section>
  );
};

export default Contact;
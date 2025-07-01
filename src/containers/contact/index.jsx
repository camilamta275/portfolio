import React from 'react';
import './style.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Entre em Contato</h2>
      <p className="contact-description">
        Ficarei feliz em conectar! Se você tem um projeto em mente, uma oportunidade de trabalho, ou apenas quer dizer "olá", sinta-se à vontade para me contatar.
      </p>

      <div className="contact-info-grid">
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3 className="contact-item-title">LinkedIn</h3>
          <p className="contact-item-value">
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/seu-perfil</a> {/* Substitua pelo seu LinkedIn */}
          </p>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <h3 className="contact-item-title">GitHub</h3>
          <p className="contact-item-value">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/seu-usuario</a> {/* Substitua pelo seu GitHub */}
          </p>
        </div>
      </div>

    </section>
  );
};

export default Contact;
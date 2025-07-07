import React, { useState } from 'react';
import './style.css';

// Importa os ícones de sol e lua do React Icons (Font Awesome)
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ toggleTheme, currentTheme }) { // Recebe toggleTheme e currentTheme via props
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    clearTimeout(window.notificationTimer);
    window.notificationTimer = setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>Camila</span>
      </div>

      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projetos</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); handleNotification("Em andamento!"); setIsMenuOpen(false); }}>Serviços</a></li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <button className="btn contact-btn-mobile">Contato &rarr;</button>
            </a>
          </li>
          {/* Botão de mudança de tema para mobile */}
          <li className="theme-toggle-mobile">
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false); // Fecha o menu ao alternar o tema
              }}
              className="btn theme-toggle-btn"
              aria-label={currentTheme === 'light-mode' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
            >
              {currentTheme === 'light-mode' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </li>
        </ul>
      </nav>
      
      {/* Botão de mudança de tema para desktop */}
      <button
        onClick={toggleTheme}
        className="btn theme-toggle-btn contact-btn-desktop"
        aria-label={currentTheme === 'light-mode' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      >
        {currentTheme === 'light-mode' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>

      <a href="#contact" onClick={() => setIsMenuOpen(false)}>
        <button className="btn contact-btn-desktop">Contato &rarr;</button>
      </a>

      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {showNotification && (
        <div className="notification">
          {notificationMessage}
        </div>
      )}
    </header>
  );
}

export default Header;

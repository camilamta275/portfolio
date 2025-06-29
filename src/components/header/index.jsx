import React from 'react';
import './style.css';
import { useState } from "react";

function Header() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    clearTimeout(window.notificationTimer); 
    window.notificationTimer = setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <span>Camila</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#" onClick={() => handleNotification("Em breve!")}>Projetos</a></li>
          <li><a href="#" onClick={() => handleNotification("Em breve!")}>Skills</a></li>
          <li><a href="#" onClick={() => handleNotification("Em breve!")}>Serviços</a></li>
        </ul>
      </nav>
      <button className="btn contact-btn">Contact &rarr;</button>
      {showNotification && (
        <div className="notification">
          {notificationMessage}
        </div>
      )}
    </header>
  );
}

export default Header;
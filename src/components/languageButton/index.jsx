import React from 'react';
import { useTranslation } from '../../contexts/LanguageContext'; // Caminho ajustado
import '../header/style.css'; // Importa o CSS do Header para os estilos do botão

const LanguageToggleButton = () => {
  const { language, toggleLanguage, t } = useTranslation();

  return (
    <button
      className="language-toggle-btn" // Classe para estilização
      onClick={toggleLanguage}
      aria-label={`Mudar idioma para ${language === 'pt' ? 'Inglês' : 'Português'}`}
    >
      {t.language_button_text} {/* Exibe "EN" ou "PT" */}
    </button>
  );
};

export default LanguageToggleButton;
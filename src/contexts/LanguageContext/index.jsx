import React, { createContext, useState, useEffect, useContext } from 'react';
import ptTranslations from '../../translations/pt.json'; // Caminho ajustado
import enTranslations from '../../translations/en.json'; // Caminho ajustado

const translations = {
  pt: ptTranslations,
  en: enTranslations,
};

// Cria o contexto de idioma
export const LanguageContext = createContext();

// Provedor do contexto de idioma
export const LanguageProvider = ({ children }) => {
  // Inicializa o idioma a partir do localStorage ou 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    return savedLanguage || 'pt';
  });

  // Estado para as traduções atuais
  const [t, setT] = useState(translations[language]);

  // Efeito para atualizar as traduções e salvar no localStorage quando o idioma muda
  useEffect(() => {
    setT(translations[language]);
    localStorage.setItem('portfolioLanguage', language);
  }, [language]);

  // Função para alternar o idioma
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto de idioma nos componentes
export const useTranslation = () => {
  return useContext(LanguageContext);
};
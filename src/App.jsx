import { useState, useEffect } from 'react';
import Header from './components/header/index.jsx';
import HeroSection from './components/heroSection/index.jsx';
import About from './containers/about/index.jsx';
import Projects from './containers/projects/index.jsx';
import Skills from './containers/skills/index.jsx';
import Contact from './containers/contact/index.jsx';
// Importa o LanguageProvider
import { LanguageProvider } from './contexts/LanguageContext/index.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light-mode';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  return (
    // Envolve a aplicação com LanguageProvider
    <LanguageProvider>
      <div>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
import { useState, useEffect } from 'react';
import Header from './components/header/index.jsx';
import HeroSection from './components/heroSection/index.jsx';
import About from './containers/about/index.jsx';
import Projects from './containers/projects/index.jsx';
import Skills from './containers/skills/index.jsx';
import Contact from './containers/contact/index.jsx';

function App() {
  // Inicializa o tema com base no localStorage ou 'light-mode' como padrão
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light-mode';
  });

  // Efeito para aplicar a classe do tema ao body e salvar no localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  return (
    <>
      <div>
        {/* Passa a função toggleTheme para o componente Header */}
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;

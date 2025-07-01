import React from 'react';
import './style.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaVuejs,
  FaSass,
  FaChartBar,
  FaMobileAlt,
  FaFire,
} from 'react-icons/fa';

const Skills = () => {

  const techIconsMap = {
    'HTML5': <FaHtml5 />,
    'CSS3': <FaCss3Alt />,
    'JavaScript': <FaJsSquare />,
    'React': <FaReact />,
    'Node.js': <FaNodeJs />,
    'Python': <FaPython />,
    'Git': <FaGitAlt />,
    'Figma': <FaFigma />,
    'SQL': <FaDatabase />,
    'MongoDB': <FaDatabase />,
    'Vue.js': <FaVuejs />,
    'Sass': <FaSass />,
    'Express': <FaNodeJs />,
    'Redux': <FaReact />,
    'Stripe API': <FaJsSquare />,
    'PWA': <FaMobileAlt />,
    'IndexedDB': <FaDatabase />,
    'Service Workers': <FaMobileAlt />,
    'Firebase': <FaFire />,
    'D3.js': <FaChartBar />,
    'Chart.js': <FaChartBar />,
    'REST API': <FaJsSquare />,
    'UX/UI Design': <FaFigma />,
    'Material-UI': <FaReact />,
    'CSS Modules': <FaCss3Alt />,
    'Vue Router': <FaVuejs />, //
  };

  const skillsList = [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'Git' },
    { name: 'Figma' },
    { name: 'SQL' },
    { name: 'MongoDB' },
    { name: 'Vue.js' },
    { name: 'Sass' },
    { name: 'Express' },
    { name: 'Redux' },
    { name: 'Firebase' },
    { name: 'D3.js' },
    { name: 'PWA' },
    // Adicione mais habilidades do techIconsMap
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Minhas Habilidades</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon-container">
              {techIconsMap[skill.name] || <span className="fallback-icon">?</span>}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
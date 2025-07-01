import React from 'react';
import './style.css';

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaVuejs,
  FaSass,
  FaDatabase,
  FaFigma,
  FaChartBar,
  FaMobileAlt,
  FaFire,
} from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const techIcons = {
    'React': <FaReact />,
    'Node.js': <FaNodeJs />,
    'HTML5': <FaHtml5 />,
    'CSS3': <FaCss3Alt />,
    'JavaScript': <FaJsSquare />,
    'Python': <FaPython />,
    'Git': <FaGitAlt />,
    'Vue.js': <FaVuejs />,
    'Sass': <FaSass />,
    'MongoDB': <FaDatabase />,
    'SQL': <FaDatabase />,
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
    'Figma': <FaFigma />,
    'UX/UI Design': <FaFigma />,
    'Material-UI': <FaReact />,
    'CSS Modules': <FaCss3Alt />,
    'Vue Router': <FaVuejs />,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="modal-image" />
          <h2 className="modal-title">{project.title}</h2>
        </div>
        <div className="modal-body">
          <p className="modal-full-description">{project.fullDescription}</p>

          <h4 className="modal-tech-title">Tecnologias Utilizadas:</h4>
          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="modal-tech-tag">
                {techIcons[tech] || tech}
                <span className="modal-tech-name">{tech}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
              <FaGithub /> GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
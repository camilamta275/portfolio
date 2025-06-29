// src/components/Projects/Projects.jsx (ou src/containers/projects/index.jsx, se você renomeou)

import React, { useState } from 'react';
import './style.css';
import ProjectModal from '../../components/projectModal';

// Importe os ícones para os CARDS
import {
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

// Importe suas imagens de projeto
// Verifique se os caminhos estão corretos! '/project1.jpg' significa na raiz pública do seu projeto.
// Se estiverem em 'src/assets', o caminho correto seria '../../assets/project1.jpg'.
import projectImage1 from '/project1.jpg';
import projectImage2 from '/project2.jpg';
import projectImage3 from '/project3.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Mapeamento de nomes de tecnologias para seus respectivos ícones
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
    // CORREÇÃO AQUI: Adicione o '>' faltante no FaVuejs
    'Vue Router': <FaVuejs />, // <-- AQUI estava o erro!
  };

  const projectsData = [
    {
      id: 1,
      title: 'Site de E-commerce Moderno',
      description: 'Um e-commerce completo com funcionalidades de carrinho, autenticação de usuário e integração de pagamentos. Desenvolvido com foco em usabilidade e design responsivo.',
      fullDescription: 'Este projeto de e-commerce foi construído do zero utilizando React no frontend para uma interface de usuário dinâmica, Node.js e Express para o backend RESTful API, e MongoDB como banco de dados NoSQL. Implementamos recursos como autenticação de usuário JWT, gerenciamento de produtos, carrinho de compras, checkout seguro com Stripe API, e um painel administrativo para controle de pedidos e estoque. A arquitetura foi pensada para escalabilidade e fácil manutenção.',
      image: projectImage1,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API', 'Material-UI'],
      githubLink: 'https://github.com/seu-usuario/ecommerce-moderno',
      demoLink: 'https://demo.ecommerce-moderno.com',
    },
    {
      id: 2,
      title: 'Aplicativo de Tarefas PWA',
      description: 'Um Progressive Web App para gerenciamento de tarefas diárias, permitindo adicionar, editar e marcar tarefas como concluídas offline. Possui notificações e sincronização em nuvem.',
      fullDescription: 'O aplicativo de tarefas é um Progressive Web App (PWA) que oferece uma experiência de usuário nativa através de service workers para cache e funcionalidade offline. Os dados são armazenados localmente usando IndexedDB e sincronizados com o Firebase Firestore quando online, garantindo que as tarefas estejam sempre atualizadas. Notificações personalizadas lembram o usuário sobre prazos. O design responsivo garante uma excelente experiência em qualquer dispositivo.',
      image: projectImage2,
      technologies: ['React', 'PWA', 'IndexedDB', 'Service Workers', 'Firebase', 'CSS Modules'],
      githubLink: 'https://github.com/seu-usuario/todo-pwa',
      demoLink: 'https://todo-pwa.netlify.app',
    },
    {
      id: 3,
      title: 'Dashboard de Análise de Dados',
      description: 'Dashboard interativo para visualização de dados financeiros, com gráficos dinâmicos e filtros avançados. Construído para ser escalável e de fácil manutenção.',
      fullDescription: 'Desenvolvemos um dashboard de análise de dados utilizando Vue.js para o frontend, focado na criação de componentes reativos e reutilizáveis. A visualização de dados é feita com bibliotecas poderosas como D3.js e Chart.js, permitindo gráficos complexos e interativos. Os dados são consumidos via REST API e podem ser filtrados e agregados em tempo real. O estilo foi construído com Sass, seguindo uma metodologia BEM para maior organização.',
      image: projectImage3,
      technologies: ['Vue.js', 'D3.js', 'Chart.js', 'REST API', 'Sass', 'Vue Router'],
      githubLink: 'https://github.com/seu-usuario/dashboard-analytics',
      demoLink: 'https://dashboard-analytics.vercel.app',
    },
    // Adicione mais projetos aqui
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-with-icon">
                    {techIcons[tech] || tech}
                    <span className="tech-name">{tech}</span>
                  </span>
                ))}
              </div>

              <button
                className="read-more-button"
                onClick={() => openModal(project)}
              >
                Ver Mais
              </button>

              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.819-.258.819-.575 0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.619-.542-1.373-1.325-1.738-1.325-1.738-1.082-.742.082-.727.082-.727 1.205.086 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.871.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.895-.015 3.284 0 .319.217.693.829.574 4.766-1.587 8.201-6.082 8.201-11.387C24 5.373 18.627 0 12 0z"/></svg>
                    GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm3-9.5c0 .83-.67 1.5-1.5 1.5S15 8.33 15 7.5 15.67 6 16.5 6 18 6.67 18 7.5z"/></svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projects;
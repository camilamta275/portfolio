import React, { useState } from 'react';
import './style.css';
import ProjectModal from '../../components/projectModal';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImage1 from '/project1.jpg';
import projectImage2 from '/project2.jpg';
import projectImage3 from '/project3.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: '3° lugar da Olimpíada Nacional de Aplicativos (ONDA)',
      description: 'O Clepher consiste em um aplicativo acessível que visa auxiliar no cuidado a saúde do idoso, integrando uma aplicação mobile a dispositivos de smartwatch para fornecer dados vitais, como pressão arterial, batimentos cardíacos, e ajudar com a gestão de medicamentos e outras informações médicas relevantes.',
      fullDescription: `O Clepher é uma solução inovadora focada em promover a saúde e a segurança dos idosos, oferecendo tranquilidade para eles e suas famílias. Desenvolvido para integrar tecnologia vestível (smartwatches) com uma intuitiva aplicação mobile, o Clepher permite o monitoramento contínuo de dados vitais, como pressão arterial e batimentos cardíacos.

Além de coletar informações cruciais, a plataforma se destaca pela gestão inteligente de medicamentos, auxiliando na adesão ao tratamento com lembretes e registros claros. Com o Clepher, cuidadores e familiares podem acompanhar de perto a saúde de seus entes queridos, recebendo alertas importantes e tendo acesso facilitado a um histórico médico completo. É a tecnologia a serviço de um envelhecimento mais seguro e com mais qualidade de vida.`,
      image: projectImage1,
      technologies: ['Figma', 'Trello',],
      githubLink: 'https://github.com/seu-usuario/ecommerce-moderno',
      demoLink: 'https://www.figma.com/design/COQPPt85nd0ehzYiU3ftAh/Untitled?node-id=0-1&p=f',
    },
{
  id: 2,
  title: 'Site de Planejamento Financeiro',
  description: 'O conceito do Popay é usar IA preditiva para ajudar os usuários a entenderem seus hábitos de consumo e planejarem o futuro. Neste MVP que apresentamos, focamos em construir a base da jornada educacional e as ferramentas de planejamento, materializando nossa visão em uma aplicação funcional desenvolvida com React!',
  fullDescription: `O conceito do Popay é usar IA preditiva para ajudar os usuários a entenderem seus hábitos de consumo e planejarem o futuro. Neste MVP que apresentamos, focamos em construir a base da jornada educacional e as ferramentas de planejamento, materializando nossa visão em uma aplicação funcional desenvolvida com React!

Foi um desafio e tanto:
- Desenvolver uma aplicação completa com React do zero, como nosso MVP;
- Idealizar a arquitetura e o conceito de uma IA preditiva para futuros insights financeiros;
- Estruturar a jornada do usuário, do controle de dívidas à educação para investimentos;
- Enfrentar os desafios reais de deploy para colocar o projeto no ar.

Foi um aprendizado imenso construir o Popay, unindo tecnologia, finanças e um propósito claro: dar aos jovens o controle do seu futuro financeiro.`,
  image: projectImage2,
  technologies: ['React', 'JavaScript', 'Firebase', 'CSS3', 'HTML5', 'Figma', 'Trello'],
  githubLink: 'https://github.com/camilamta275/popay',
  demoLink: 'https://popay-15c0b.web.app/',
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
    // Adicionar mais projetos aqui
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
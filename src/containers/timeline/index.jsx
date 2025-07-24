import React from 'react';
import './style.css'; // Importa o CSS específico para o componente

const Timeline = () => {
  const timelineEvents = [
    {
      type: 'academic',
      date: 'Ago 2024 - Dez 2026',
      title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Cesar School, Recife/PE',
      description: 'Estudando desenvolvimento de software, com foco em tecnologias web, mobile e projetos completos. Aprendizado de linguagens como JavaScript, Python, Java, e frameworks modernos como React. Desenvolvimento de habilidades práticas em projetos reais, incluindo metodologias ágeis e integração contínua.',
    },
    {
      type: 'professional',
      date: 'Jan 2025 - Atualmente',
      title: 'Estagiária',
      company: 'MV, Recife/PE',
      description: 'Apoio na análise de falhas no processo de faturamento, contribuindo para a melhoria contínua dos sistemas. Colaboração com equipes multidisciplinares para identificar e resolver problemas, sugerir melhorias nos fluxos operacionais, garantindo a eficiência e a qualidade dos serviços.',
    },
    {
      type: 'academic',
      date: 'Fev 2021 - Dez 2023',
      title: 'Ensino Médio/Técnico em Programação de Jogos Digitais',
      institution: 'Escola Técnica Estadual Cícero Dias, Recife/PE',
      description: 'Formação em desenvolvimento de jogos digitais, com foco em 2D e 3D. Aprendizado da linguagem C#, incluindo também HTML, CSS, JavaScript, além de ferramentas como Unity e Construct3.',
    },
    {
      type: 'professional',
      date: 'Ago 2024 - Atualmente',
      title: 'Desenvolvedora de Jogos',
      company: 'FORJA Game Studio, Recife/PE',
      description: 'Desenvolvimento de jogos 2D utilizando Unity e C#. Colaboração em equipe para criação de mecânicas de jogo, design de níveis e otimização de performance.',
    },
    { 
      type: 'academic',
      date: 'Ago 2023 - Dez 2024',
      title: 'Curso Técnico em Design Gráfico',
      institution: 'Escola Técnica Estadual Professor Antônio Carlos Gomes da Costa, EAD',
      description: 'Formação em design gráfico, com foco em criação de interfaces, branding e design responsivo. Aprendizado de ferramentas como Adobe Photoshop, Canva e Figma.',
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">Minha Jornada</h2>

      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${event.type}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <h3 className="timeline-event-title">{event.title}</h3>
              {event.institution && <p className="timeline-subtitle">{event.institution}</p>}
              {event.company && <p className="timeline-subtitle">{event.company}</p>}
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
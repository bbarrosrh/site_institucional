export interface MethodologyStep {
  title: string;
  description: string;
}

export interface Methodology {
  name: string;
  description: string;
  steps: MethodologyStep[];
}

export const methodologies: Methodology[] = [
  {
    name: "7em4",
    description:
      "Trabalharemos o seu desenvolvimento técnico, comportamental, emocional e estratégico, preparando o profissional para atuar com segurança e protagonismo:",
    steps: [
      {
        title: "Visibilidade e Reestruturação de perfil",
        description:
          "Ajustar vitrine profissional, LinkedIn, negócios e, se houver, portfólios, apresentações etc. Apoio em estratégias que condizem com a tendência estratégica do mercado, adotando postura em Liderança e Visibilidade.",
      },
      {
        title: "Persuasão",
        description:
          "Saber negociar, influenciar e encantar pessoas através de sua performance, postura e produtividade assertiva, proporcionando atitude positiva frente a dinâmicas de negociação objetiva e subjetiva.",
      },
      {
        title: "Comunicação",
        description:
          "Desenvolver e habilitar comunicação franca, direta e objetiva, fortalecendo a comunicação, o marketing pessoal e a tomada de negociação.",
      },
      {
        title: "Planejamento",
        description:
          "Conhecer a interface do todo, quais forças se mantêm pelo objetivo, fraquezas e cenários desfavoráveis e revertê-los, trazendo assertividade e fortalecendo sua posição.",
      },
      {
        title: "Atualizações",
        description: "Sugestões de cursos, conforme perfil, em Gestão e Liderança em sua área.",
      },
      {
        title: "Foco em resultados",
        description:
          "Identificar prioridades, ações e estratégias com foco em resultados, mantendo-se em desenvolvimento para sua área de atuação.",
      },
      {
        title: "Inteligência emocional",
        description:
          "Explorar a capacidade de identificar e lidar com as emoções e sentimentos pessoais e de outros indivíduos, analisando ambientes e suas necessidades de forma imparcial e com foco em seu objetivo profissional.",
      },
    ],
  },
  {
    name: "3M1",
    description:
      "Esta metodologia foi criada para atender profissionais que vivem momentos de alta urgência em suas carreiras:",
    steps: [
      {
        title: "Recolocação profissional acelerada",
        description:
          "Para profissionais que precisam retornar ao mercado com rapidez e fortalecer seu posicionamento diante de novas oportunidades.",
      },
      {
        title: "Transição em processos de desligamento",
        description:
          "Para profissionais que receberam um aviso de desligamento — ou identificam sinais concretos de mudança — e desejam se preparar estrategicamente para essa nova etapa.",
      },
      {
        title: "Reposicionamento de performance",
        description:
          "Para profissionais que receberam feedbacks estruturados, possuem um Plano de Desenvolvimento Individual (PDI) em andamento ou precisam fortalecer competências e recuperar sua influência, desempenho e credibilidade no ambiente corporativo.",
      },
    ],
  },
];

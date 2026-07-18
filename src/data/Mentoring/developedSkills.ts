import type { IconName } from "@/components/Icon/IconName";

export interface DevelopedSkill {
  value: string;
  label: string;
  badge?: string;
  icon: IconName;
  color: string;
  description: string;
  items: string[];
}

export const developedSkills: DevelopedSkill[] = [
  {
    value: "soft",
    label: "Soft Skills",
    icon: "user-filled",
    color: "bg-sky-400",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Inteligência emocional e comunicação estratégica",
      "Liderança humanizada",
      "Negociação e gestão de conflitos",
      "Influência e relacionamento interpessoal",
    ],
  },
  {
    value: "hard",
    label: "Hard Skills",
    icon: "diamond-filled",
    color: "bg-purple-600",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Competências técnicas da função",
      "Planejamento estratégico",
      "Gestão de indicadores e por resultados",
      "Ferramentas corporativas",
    ],
  },
  {
    value: "green",
    label: "Green Skills",
    icon: "seedling-filled",
    color: "bg-green-600",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Sustentabilidade corporativa",
      "ESG e responsabilidade social",
      "Adaptabilidade",
      "Cultura organizacional sustentável",
    ],
  },
  {
    value: "brain",
    label: "Brain Skills",
    badge: "NOVO",
    icon: "bolt",
    color: "bg-pink-500",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Pensamento crítico e capacidade analítica",
      "Agilidade mental e aprendizagem contínua",
      "Capacidade analítica e resolução de problemas complexos",
      "Tomada de decisão sob pressão",
    ],
  },
];

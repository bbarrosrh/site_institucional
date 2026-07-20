import type { IconName } from "@/components/Icon/IconName";

export interface WhatWeDoItem {
  icon: IconName;
  title: string;
  description: string;
}

export const whatWeDoItems: WhatWeDoItem[] = [
  {
    icon: "message-filled",
    title: "Mentorias sociais e pro bono",
    description: "Individual e gratuito para quem está construindo ou reconstruindo a carreira.",
  },
  {
    icon: "folder-filled",
    title: "Desenvolvimento de liderança",
    description: "Formação para quem lidera pessoas ou está se preparando para liderar.",
  },
  {
    icon: "gift-filled",
    title: "Orientação de Carreira",
    description: "Direção clara para quem está em transição ou início de trajetória profissional.",
  },
  {
    icon: "crown-filled",
    title: "Preparação para empregos",
    description: "Ferramentas práticas para quem está buscando a próxima oportunidade.",
  },
  {
    icon: "shield-check",
    title: "Formação de mentores sociais",
    description: "Preparamos pessoas para multiplicar esse impacto como mentoras.",
  },
  {
    icon: "chess-rook-filled",
    title: "Apoio à transição profissional",
    description: "Suporte para momentos de mudança de carreira ou de mercado.",
  },
  {
    icon: "bolt",
    title: "Soft e Hard skills",
    description: "Capacitação técnica e comportamental para o mercado de trabalho.",
  },
  {
    icon: "heart-filled",
    title: "Apoio a jovens talentos",
    description: "Programas voltados a quem está iniciando a vida profissional.",
  },
];

export const whatWeDoHighlight =
  "Nós desenvolvemos projetos em parceria com empresas, universidades e instituições.";

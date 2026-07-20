import type { IconName } from "@/components/Icon/IconName";

export interface MethodologyPillar {
  icon: IconName;
  title: string;
  description: string;
}

export const methodologyPillars: MethodologyPillar[] = [
  {
    icon: "message-filled",
    title: "Psicologia Organizacional",
    description: "Entenda o comportamento humano dentro da empresa.",
  },
  {
    icon: "folder-filled",
    title: "RH Estratégico",
    description: "Gestão de pessoas alinhada aos objetivos do negócio.",
  },
  {
    icon: "gift-filled",
    title: "Desenvolvimento Humano",
    description: "Crescimento de quem faz a empresa crescer e prosperar.",
  },
  {
    icon: "crown-filled",
    title: "Liderança",
    description: "Preparo de quem conduz equipes e decisões.",
  },
  {
    icon: "bolt",
    title: "Branding",
    description: "Tenha uma identidade que te diferencia no mercado.",
  },
  {
    icon: "heart-filled",
    title: "Marketing Humanizado",
    description: "Comunicação que conecta antes de vender.",
  },
  {
    icon: "chess-rook-filled",
    title: "LinkedIn Estratégico",
    description: "Conquiste presença digital com propósito comercial.",
  },
  {
    icon: "shield-check",
    title: "Lean Six Sigma",
    description: "Use processos baseados em indicadores reais para excelência operacional.",
  },
];

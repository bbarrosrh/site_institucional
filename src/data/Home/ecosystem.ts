import type { IconName } from "@/components/Icon/IconName";

export type EcosystemItem = {
  icon: IconName;
  subtitle: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export const ecosystemItems: EcosystemItem[] = [
  {
    icon: "compass",
    subtitle: "Pessoa Física",
    title: "B.Barros Mentoring",
    description:
      "Mentoria para líderes, recolocação e visibilidade profissional, com metodologia própria.",
    buttonLabel: "Saiba Mais",
    href: "#",
  },
  {
    icon: "book",
    subtitle: "Formação e Certificação",
    title: "B.Barros Academy",
    description: "Formação de mentores e multiplicação da metodologia em projetos corporativos.",
    buttonLabel: "Saiba Mais",
    href: "#",
  },
  {
    icon: "briefcase",
    subtitle: "Pessoa Jurídica",
    title: "B.Barros Business",
    description:
      "Do primeiro passo à visibilidade de mercado, em três pilares de desenvolvimento empresarial.",
    buttonLabel: "Saiba Mais",
    href: "#",
  },
];

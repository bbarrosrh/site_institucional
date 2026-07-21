import { Route } from "@/data/routes";

export interface Program {
  name: string;
  title: string;
  description: string;
  href: string;
}

export const programs: Program[] = [
  {
    name: "7em4",
    title: "7 passos para 4 meses de transformação",
    description:
      "Conduzimos o mentorado por sete etapas estruturadas de desenvolvimento, ao longo de aproximadamente quatro meses de acompanhamento intensivo, respeitando seu momento de carreira, seus objetivos e sua evolução.",
    href: `${Route.MENTORING}#metodologias-ensinadas`,
  },
  {
    name: "3M1",
    title: "Três estratégias para reposicionar sua carreira em um mês",
    description:
      "Indicado para profissionais que enfrentam mudanças imediatas, como processos de recolocação, transição de carreira, necessidade de reposicionamento interno ou desafios relacionados ao desempenho profissional.",
    href: `${Route.MENTORING}#metodologias-ensinadas`,
  },
];

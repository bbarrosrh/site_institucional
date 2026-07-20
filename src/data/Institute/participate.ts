import pintura01 from "@/assets/images/Institute/pintura_01.jpg";
import pintura02 from "@/assets/images/Institute/pintura_02.jpg";
import pintura03 from "@/assets/images/Institute/pintura_03.jpg";
import pintura04 from "@/assets/images/Institute/pintura_04.jpg";
import pintura05 from "@/assets/images/Institute/pintura_05.jpg";
import pintura06 from "@/assets/images/Institute/pintura_06.jpg";

export interface ParticipateItem {
  title: string;
  description: string;
  image: ImageMetadata;
}

export const participateItems: ParticipateItem[] = [
  {
    title: "Patrocínio Institucional",
    description: "Apoie financeiramente a operação e a expansão dos programas.",
    image: pintura01,
  },
  {
    title: "Investimento social privado",
    description: "Direcione recursos de forma estruturada para projetos específicos.",
    image: pintura02,
  },
  {
    title: "Responsabilidade social",
    description: "Integre o Instituto à estratégia de ESG da sua empresa.",
    image: pintura03,
  },
  {
    title: "Voluntariado Técnico",
    description: "Doe seu tempo e conhecimento como mentor ou especialista.",
    image: pintura04,
  },
  {
    title: "Doação de bolsas de mentoria",
    description: "Financie o acesso de uma pessoa a um programa completo.",
    image: pintura05,
  },
  {
    title: "Apoio a projetos",
    description: "Contribua com projetos específicos de inserção no mercado de trabalho.",
    image: pintura06,
  },
];

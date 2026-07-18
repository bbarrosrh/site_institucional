import type { ImageMetadata } from "astro";
import cardRoleplay from "@/assets/images/Mentoria/card-roleplay.jpeg";
import cardEstrategia from "@/assets/images/Mentoria/card-estrategia.jpg";
import cardFerramenta from "@/assets/images/Mentoria/card-ferramenta.jpg";

export interface CoveredTopic {
  title: string;
  image: ImageMetadata;
  items: string[];
}

export const coveredTopics: CoveredTopic[] = [
  {
    title: "Roleplay corporativo",
    image: cardRoleplay,
    items: [
      "Entrevistas por competência e entrevistas técnicas",
      "Painéis executivos e dinâmicas em grupo",
      "Reuniões difíceis e feedbacks complexos",
      "Promoções internas e conversas de desligamento",
      "Negociação com líderes e clientes e gestão de conflitos",
      "Apresentações para diretoria",
    ],
  },
  {
    title: "Jogos Corporativos e Estratégia de Carreira",
    image: cardEstrategia,
    items: [
      "Interpretação de cenários organizacionais",
      "Identificação de riscos e oportunidades",
      "Desenvolvimento de visão estratégica",
      "Construção de influência positiva",
      "Proteção da imagem profissional e inteligência emocional",
      "Aumento do capital político, de forma ética",
    ],
  },
  {
    title: "Ferramentas Exclusivas B.Barros",
    image: cardFerramenta,
    items: [
      "Mapeamento de competências e fortalecimento da liderança",
      "Identificação de padrões comportamentais",
      "Desenvolvimento de inteligência emocional aplicada",
      "Estruturação de um plano de carreira consistente",
      "Posicionamento da marca pessoal",
      "Construção de autoridade no LinkedIn e no mercado",
    ],
  },
];

import movBlackMoney from "@/assets/images/mov_black_money.png";
import lumenRh from "@/assets/images/lumen_rh.png";

export interface Recognition {
  logo: ImageMetadata;
  logoBordered?: boolean;
  name: string;
  year: string;
  description: string;
  href: string;
}

export const recognitions: Recognition[] = [
  {
    logo: movBlackMoney,
    name: "Black Money Business",
    year: "2024",
    description:
      'Selecionada para um programa de aceleração de negócios voltado a empreendedorismo e inovação, a B.Barros <strong class="text-primary font-semibold">avançou entre mais de 1.000 inscrições até o grupo das 10 finalistas</strong>, conquistando o <strong class="text-primary font-semibold">Capital Semente</strong> e um programa intensivo de aceleração empresarial.<br><br>Isso validou nossa capacidade de desenvolver soluções inovadoras em gestão de pessoas e impacto social.',
    href: "https://www.linkedin.com/posts/brunabarrospsicologia_carreira-desenvolvimento-mentoria-share-7180950351523549184-9N-a/",
  },
  {
    logo: lumenRh,
    logoBordered: true,
    name: "Lúmen RH & Recrutei",
    year: "2026",
    description:
      'Foi conquistado o <strong class="text-primary font-semibold">Troféu Criativo</strong>, reconhecimento concedido a <strong class="text-primary font-semibold">iniciativas que promovem transformação</strong> no ecossistema de Recursos Humanos, na categoria de abordagens originais e soluções fora da caixa para a gestão de pessoas.<br><br>A conquista está <strong class="text-primary font-semibold">ligada à B.Barros Academy</strong>, plataforma de formação de mentores e líderes através de metodologia própria.',
    href: "https://www.linkedin.com/posts/brunabarrospsicologia_lideranaexa-mentoria-desenvolvimentodelaedderes-share-7437938568620158976-Eoa6/",
  },
];

import movBlackMoney from "@/assets/images/mov_black_money.png";
import lumenRh from "@/assets/images/lumen_rh.png";

export interface Achievement {
  icon: ImageMetadata;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: movBlackMoney,
    title: "Movimento Black Money",
    description:
      "Entre os 10 finalistas entre +1.000 inscrições. Conquistamos o Capital semente e aceleração empresarial.",
  },
  {
    icon: lumenRh,
    title: "Lumen RH • Recrutei",
    description: "Troféu Criativo: Reconhecimento por inovação na formação de mentores e líderes.",
  },
];

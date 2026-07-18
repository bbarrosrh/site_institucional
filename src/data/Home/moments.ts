import { Route } from "@/data/routes";

export type Moment = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export type Audience = "pf" | "pj";

export const momentsByAudience: Record<Audience, Moment[]> = {
  pf: [
    {
      title: "Quero me recolocar ou realocar no mercado de trabalho",
      description:
        "Estou desempregado ou busco uma melhor posição no meio corporativo e preciso de direção.",
      linkLabel: "Mentoria",
      href: Route.MENTORING,
    },
    {
      title: "Já estou bem posicionado, mas quero alcançar outro nível",
      description: "Sou um profissional sênior buscando cargos de liderança e visibilidade.",
      linkLabel: "Programa de Mentoria para Líderes",
      href: Route.MENTORING,
    },
    {
      title: "Tenho experiência técnica e quero empreender",
      description:
        "Quero transformar o meu conhecimento em um negócio próprio, e posteriormente escalá-lo.",
      linkLabel: "Personal to Business (Nível III)",
      href: "#",
    },
    {
      title: "Quero me tornar um mentor técnico",
      description: "Já tenho experiência e quero formalizar isso como mentor certificado.",
      linkLabel: "B.Barros Academy",
      href: Route.ACADEMY,
    },
    {
      title: "Estou começando a minha carreira",
      description:
        "Sou universitário ou recém-formado e quero dar o primeiro passo. Preciso de direção em minha carreira.",
      linkLabel: "Mentoria",
      href: Route.MENTORING,
    },
    {
      title: "Quero uma carreira no exterior",
      description: "Busco oportunidades internacionais e quero refinar minha marca pessoal.",
      linkLabel: "Mentoria",
      href: Route.MENTORING,
    },
  ],
  pj: [
    {
      title: "Tenho uma empresa, mas não tenho alcance",
      description: "Preciso de uma nova estratégia para atrair clientes.",
      linkLabel: "Posicionamento Estratégico",
      href: "#",
    },
    {
      title: "Preciso atrair e reter talentos",
      description:
        "Quero fortalecer minha comunicação para atrair os profissionais certos e depois retê-los.",
      linkLabel: "Posicionamento Digital",
      href: "#",
    },
    {
      title: "Quero formar líderes dentro da minha empresa",
      description: "Busco um desenvolvimento interno de liderança via projeto corporativo.",
      linkLabel: "B.Barros Academy",
      href: Route.ACADEMY,
    },
    {
      title: "Sou uma empresa em fase inicial",
      description: "Pretendo construir propósito, identidade e entrada estratégica no mercado.",
      linkLabel: "B.Barros Business",
      href: "#",
    },
  ],
};

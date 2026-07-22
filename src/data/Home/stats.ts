export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export const stats: Stat[] = [
  {
    value: "9.2",
    suffix: "de 10",
    label: "Satisfação geral dos mentorados",
  },
  {
    value: "86%",
    label: "NPS estimado",
    sublabel: "Net Promoter Score",
  },
  {
    value: "84%",
    label: "Taxa de recolocação",
    sublabel: "Média do mercado: 50%",
  },
  {
    value: "98%",
    label: "Expectativas atendidas ou superadas",
  },
];

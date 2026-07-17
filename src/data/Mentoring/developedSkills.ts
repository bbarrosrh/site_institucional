import type { IconName } from "@/components/Icon/IconName";

export interface DevelopedSkill {
  value: string;
  label: string;
  icon: IconName;
  description: string;
  items: string[];
}

export const developedSkills: DevelopedSkill[] = [
  {
    value: "soft",
    label: "Soft Skills",
    icon: "users",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Inteligência emocional e comunicação estratégica",
      "Liderança humanizada",
      "Negociação e gestão de conflitos",
      "Influência e relacionamento interpessoal",
    ],
  },
  {
    value: "hard",
    label: "Hard Skills",
    icon: "bolt-outline",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    value: "green",
    label: "Green Skills",
    icon: "leaf",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    value: "brain",
    label: "Brain Skills",
    icon: "brain",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    items: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
];

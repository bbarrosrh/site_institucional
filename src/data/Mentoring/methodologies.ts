export interface MethodologyStep {
  title: string;
  description: string;
}

export interface Methodology {
  name: string;
  description: string;
  steps: MethodologyStep[];
}

export const methodologies: Methodology[] = [
  {
    name: "7em4",
    description:
      "Trabalharemos o seu desenvolvimento técnico, comportamental, emocional e estratégico, preparando o profissional para atuar com segurança, protagonismo e alta performance.",
    steps: [
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
      },
      {
        title: "Ut enim ad minim veniam",
        description:
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
      },
      {
        title: "Duis aute irure dolor",
        description:
          "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
      },
      {
        title: "Excepteur sint occaecat",
        description:
          "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
      },
      {
        title: "Sed ut perspiciatis unde",
        description:
          "Omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
      },
      {
        title: "Nemo enim ipsam voluptatem",
        description:
          "Quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
      },
      {
        title: "Neque porro quisquam est",
        description:
          "Qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.",
      },
    ],
  },
  {
    name: "3M1",
    description:
      "Esta metodologia foi criada para atender profissionais que vivem momentos de alta urgência em suas carreiras:",
    steps: [
      {
        title: "Ut labore et dolore magna",
        description:
          "Aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "Consequat duis aute irure",
        description:
          "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
      },
      {
        title: "Occaecat cupidatat non proident",
        description:
          "Sunt in culpa qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error.",
      },
    ],
  },
];

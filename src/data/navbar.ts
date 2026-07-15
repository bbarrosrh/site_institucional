import type { IconName } from "@/components/Icon/IconName";

export type ServiceMenuItem = {
  icon: IconName;
  subtitle: string;
  title: string;
  href: string;
};

export type NavLink = {
  name: string;
  href: string;
  dropdown?: ServiceMenuItem[];
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre-nos" },
  {
    name: "Serviços",
    href: "#",
    dropdown: [
      {
        icon: "compass",
        subtitle: "Pessoa Física",
        title: "B.Barros Mentoring",
        href: "/servicos/mentoria",
      },
      {
        icon: "book",
        subtitle: "Formação e Certificação",
        title: "B.Barros Academy",
        href: "#",
      },
      {
        icon: "briefcase",
        subtitle: "Pessoa Jurídica",
        title: "B.Barros Business",
        href: "#",
      },
    ],
  },
  { name: "Instituto", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Loja", href: "#" },
];

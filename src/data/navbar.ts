import type { IconName } from "@/components/Icon/IconName";
import { Route } from "./routes";

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
  { name: "Home", href: Route.HOME },
  { name: "Sobre Nós", href: Route.ABOUT },
  {
    name: "Serviços",
    href: "#",
    dropdown: [
      {
        icon: "compass",
        subtitle: "Pessoa Física",
        title: "B.Barros Mentoring",
        href: Route.MENTORING,
      },
      {
        icon: "book",
        subtitle: "Formação e Certificação",
        title: "B.Barros Academy",
        href: Route.ACADEMY,
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

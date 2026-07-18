import { useState, useEffect } from "react";
import { cn } from "@/utils/className";
import { Button } from "@/components/Button";
import { navLinks } from "@/data/navbar";
import { Route } from "@/data/routes";
import { MobileMenuButton, MobileMenuDropdown } from "./MobileMenu";
import { ServicesDropdown } from "./ServicesDropdown";
import logoWhite from "@/assets/images/logo_white.svg";

interface Props {
  currentPath: string;
}

export function Navbar({ currentPath }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-all duration-300",
        isSolid
          ? "bg-black/85 backdrop-blur-md border-white/5"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-16 xl:h-20 transition-all duration-300">
          <a href={Route.HOME} aria-label="Página inicial" className="shrink-0">
            <img src={logoWhite.src} alt="Logo" className="h-5 xl:h-7 w-auto drop-shadow-md" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === currentPath ||
                  link.dropdown?.some((item) => item.href === currentPath);

                return link.dropdown ? (
                  <ServicesDropdown
                    key={link.name}
                    link={link}
                    currentPath={currentPath}
                    className={cn(
                      "font-bold text-sm lg:text-base hover:text-primary",
                      isActive ? "text-primary" : "text-white",
                      !isSolid && "drop-shadow-md"
                    )}
                  />
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "font-bold text-sm lg:text-base hover:text-primary",
                      isActive ? "text-primary" : "text-white",
                      !isSolid && "drop-shadow-md"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <Button variant="secondary" contactCta>
              Contato
            </Button>
          </div>

          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isSolid={isSolid}
          />
        </div>
      </div>

      <MobileMenuDropdown
        isOpen={isMobileMenuOpen}
        close={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
      />
    </header>
  );
}

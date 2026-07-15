import { useState } from "react";
import { cn } from "@/utils/className";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { navLinks } from "@/data/navbar";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  isSolid: boolean;
}

export function MobileMenuButton({ isOpen, toggle, isSolid }: Props) {
  return (
    <button
      onClick={toggle}
      aria-label="Abrir menu"
      className={cn(
        "flex md:hidden items-center cursor-pointer focus:outline-none text-white hover:text-primary",
        !isSolid && "drop-shadow-md"
      )}
    >
      <Icon name={isOpen ? "close" : "menu"} className="size-6" />
    </button>
  );
}

interface DropdownProps {
  isOpen: boolean;
  close: () => void;
  currentPath: string;
}

export function MobileMenuDropdown({ isOpen, close, currentPath }: DropdownProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/5 max-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="px-4 pt-2 pb-6 space-y-1">
        {navLinks.map((link) => {
          const isActive =
            link.href === currentPath || link.dropdown?.some((item) => item.href === currentPath);

          return link.dropdown ? (
            <div key={link.name}>
              <button
                type="button"
                onClick={() => setOpenAccordion((prev) => (prev === link.name ? null : link.name))}
                className={cn(
                  "flex w-full items-center justify-between px-3 py-3 text-base font-bold cursor-pointer hover:text-primary hover:bg-white/5 rounded-lg",
                  isActive ? "text-primary bg-white/5" : "text-white"
                )}
              >
                {link.name}
                <Icon
                  name="chevron-down"
                  className={cn(
                    "size-4 transition-transform duration-200",
                    openAccordion === link.name && "rotate-180"
                  )}
                />
              </button>

              {openAccordion === link.name && (
                <div className="flex flex-col gap-1 pb-2 pl-3">
                  {link.dropdown.map((item) => {
                    const isItemActive = item.href === currentPath;

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={close}
                        className={cn(
                          "flex items-center gap-3 rounded-lg p-2 hover:bg-white/5",
                          isItemActive && "bg-white/5"
                        )}
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white">
                          <Icon name={item.icon} className="size-5 text-tertiary" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-xs text-white/60">{item.subtitle}</span>
                          <span
                            className={cn(
                              "font-heading text-base",
                              isItemActive ? "text-primary" : "text-white"
                            )}
                          >
                            {item.title}
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className={cn(
                "block px-3 py-3 text-base font-bold hover:text-primary rounded-lg hover:bg-white/5",
                isActive ? "text-primary bg-white/5" : "text-white"
              )}
            >
              {link.name}
            </a>
          );
        })}

        <Button variant="secondary" className="w-full mt-4 py-3">
          Contato
        </Button>
      </div>
    </div>
  );
}

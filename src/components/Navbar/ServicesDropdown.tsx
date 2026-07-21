import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";
import type { NavLink } from "@/data/navbar";

interface Props {
  link: NavLink;
  currentPath: string;
  className?: string;
}

export function ServicesDropdown({ link, currentPath, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!link.dropdown) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn("inline-flex cursor-pointer items-center gap-2", className)}
      >
        {link.name}
        <Icon
          name="chevron-down"
          className={cn(
            "size-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full mt-4 w-80 origin-top -translate-x-1/2 rounded-2xl bg-tertiary p-3 shadow-2xl shadow-black/50",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-85 opacity-0"
        )}
      >
        <div className="flex flex-col gap-2">
          {link.dropdown.map((item) => {
            const isItemActive = item.href === currentPath;

            return (
              <a
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-xl p-2 hover:bg-white/5",
                  isItemActive && "bg-white/5"
                )}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Icon name={item.icon} className="size-6 text-tertiary" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm text-white/60">{item.subtitle}</span>
                  <span
                    className={cn(
                      "font-heading text-lg",
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
      </div>
    </div>
  );
}

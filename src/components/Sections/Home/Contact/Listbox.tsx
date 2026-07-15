import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";

interface Props {
  id?: string;
  name?: string;
  options: string[];
  placeholder?: string;
  className?: string;
}

export function Listbox({ id, name, options, placeholder = "Selecione", className }: Props) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen && activeIndex >= 0) {
        selectOption(options[activeIndex]);
      } else {
        setIsOpen((prev) => !prev);
      }
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      {name && <input type="hidden" name={name} value={value} />}

      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-black px-4 py-3 text-left text-white focus:border-primary focus:outline-none"
      >
        <span className={value ? "text-white" : "text-white/40"}>{value || placeholder}</span>
        <Icon
          name="chevron-down"
          size={18}
          className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 flex flex-col gap-1 max-h-60 w-full overflow-auto rounded-lg bg-black p-1 shadow-xl"
        >
          {options.map((option, index) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setActiveIndex(index)}
              className={cn(
                "cursor-pointer rounded-sm px-4 py-2 text-white",
                (index === activeIndex || value === option) && "bg-white/10 text-primary"
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

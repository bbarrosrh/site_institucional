import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";
import { presetContactSubject } from "@/stores/contactModal";

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
  const [isDisabled, setIsDisabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    hiddenInputRef.current?.dispatchEvent(new Event("change", { bubbles: true }));
  }, [value]);

  useEffect(() => {
    return presetContactSubject.subscribe((subject) => {
      if (!subject || !options.includes(subject)) return;

      setValue(subject);
      presetContactSubject.set(null);
    });
  }, [options]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleSetDisabled = (event: Event) => {
      const disabled = (event as CustomEvent<boolean>).detail;
      setIsDisabled(disabled);
      if (disabled) {
        setValue("");
        setIsOpen(false);
      }
    };

    root.addEventListener("listbox:setdisabled", handleSetDisabled);
    return () => root.removeEventListener("listbox:setdisabled", handleSetDisabled);
  }, []);

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
    if (isDisabled) return;

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
      {name && (
        <input ref={hiddenInputRef} type="hidden" name={name} value={value} disabled={isDisabled} />
      )}

      <button
        id={id}
        type="button"
        disabled={isDisabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={isDisabled}
        className={cn(
          "flex w-full items-center justify-between rounded-lg border border-white/10 bg-black px-4 py-3 text-left text-white focus:border-primary focus:outline-none",
          isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        )}
      >
        <span className={value ? "text-white" : "text-white/40"}>{value || placeholder}</span>
        <Icon
          name="chevron-down"
          size={18}
          className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-white/15 bg-black shadow-xl">
          <ul
            role="listbox"
            className="flex max-h-50 flex-col gap-1 overflow-auto p-1 scrollbar-mini"
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
        </div>
      )}
    </div>
  );
}

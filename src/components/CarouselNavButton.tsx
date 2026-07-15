import { Icon } from "@/components/Icon";
import { cn } from "@/utils/className";

interface Props {
  direction: "prev" | "next";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "gold" | "light";
  className?: string;
}

const variantClasses = {
  gold: "bg-primary text-black hover:bg-primary-emphasis disabled:hover:bg-primary",
  light: "bg-white text-secondary hover:bg-white/90 disabled:hover:bg-white",
};

// Mesmo visual do carrossel de depoimentos (Home/Testimonials), extraído aqui para reuso —
// aquele é Astro + script vanilla e não pode ser importado num .tsx. A variante "light"
// (fundo branco, chevron vermelho) é para uso sobre fundo colorido.
export function CarouselNavButton({
  direction,
  label,
  onClick,
  disabled,
  variant = "gold",
  className,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full disabled:cursor-auto disabled:opacity-40",
        variantClasses[variant],
        className
      )}
    >
      <Icon name={direction === "prev" ? "chevron-left" : "chevron-right"} size={24} />
    </button>
  );
}

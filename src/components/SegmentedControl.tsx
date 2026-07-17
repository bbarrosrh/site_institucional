import { cn } from "@/utils/className";

interface Option {
  label: string;
  value: string;
  secondary?: boolean;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  secondary?: boolean;
}

export function SegmentedControl({ options, value, onChange, className, secondary }: Props) {
  return (
    <div
      className={cn(
        "flex max-md:bleed-left max-md:bleed-right max-md:container-pl max-md:container-pr max-md:scroll-pl",
        "max-md:gap-3 max-md:overflow-x-auto max-md:scroll-smooth max-md:snap-x max-md:snap-mandatory max-md:scrollbar-none max-md:[&::-webkit-scrollbar]:hidden",
        "md:rounded-xl md:p-1 md:w-full",
        secondary ? "md:bg-tertiary" : "md:bg-black",
        className
      )}
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "cursor-pointer whitespace-nowrap font-semibold text-sm lg:text-lg",
              "rounded-lg px-6 py-2 sm:px-10",
              "max-md:shrink-0 max-md:snap-start",
              "md:flex-1",

              isActive
                ? "bg-primary text-black"
                : cn(
                    "text-white hover:text-primary",
                    secondary ? "max-md:bg-tertiary" : "max-md:bg-black"
                  )
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

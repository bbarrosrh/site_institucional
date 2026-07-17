import { cn } from "@/utils/className";

interface Option {
  label: string;
  mobileLabel?: string;
  value: string;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({ options, value, onChange, className }: Props) {
  return (
    <div className={cn("flex rounded-xl bg-black p-1", className)}>
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 cursor-pointer rounded-lg px-6 py-2 text-sm lg:text-lg font-semibold whitespace-nowrap sm:px-10",
              isActive ? "bg-primary text-black" : "text-white hover:text-primary"
            )}
          >
            {option.mobileLabel ? (
              <>
                <span className="sm:hidden">{option.mobileLabel}</span>
                <span className="hidden sm:inline">{option.label}</span>
              </>
            ) : (
              option.label
            )}
          </button>
        );
      })}
    </div>
  );
}

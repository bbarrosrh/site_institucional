import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";

interface Props {
  items: string[];
  className?: string;
}

export function Checklist({ items, className }: Props) {
  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 max-lg:text-sm text-white/85">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-secondary text-white">
            <Icon name="check" size={14} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

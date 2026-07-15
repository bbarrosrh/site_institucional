import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

interface Props {
  badge: ReactNode;
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
}

export function Card({ badge, title, description, linkLabel, href }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-black p-6">
      <span className="font-extrabold inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-black">
        {badge}
      </span>

      <div>
        <h3 className="font-heading text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-1 text-white/85">{description}</p>
      </div>

      {linkLabel && href && (
        <a
          href={href}
          className="group mt-auto inline-flex w-fit items-center gap-1 pt-3 text-sm font-semibold text-white hover:text-primary"
        >
          {linkLabel}
          <span className="relative inline-block size-4 overflow-hidden">
            <Icon
              name="arrow-up-right"
              size={16}
              className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
            />
            <Icon
              name="arrow-up-right"
              size={16}
              className="absolute inset-0 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </span>
        </a>
      )}
    </div>
  );
}

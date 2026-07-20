import { useState } from "react";
import { cn } from "@/utils/className";
import type { Person } from "@/data/mentors";

interface Props {
  people: Person[];
}

export function PeopleList({ people }: Props) {
  const [selected, setSelected] = useState(0);
  const featured = people[selected];

  return (
    <div className="grid gap-3 lg:gap-6 lg:grid-cols-3">
      <div className="flex flex-col gap-3 lg:gap-6 lg:col-span-2">
        <div className="flex items-center gap-4 lg:gap-6 rounded-lg bg-tertiary p-3.5 lg:p-6 lg:rounded-2xl">
          <div className="size-12 lg:size-16 shrink-0 rounded-md lg:rounded-lg bg-white" />
          <div className="flex flex-col lg:gap-1">
            <p className="font-heading text-lg font-bold text-white lg:text-2xl">{featured.name}</p>
            <p className="text-white/85 text-sm lg:text-lg">{featured.specialty}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-8 rounded-lg bg-tertiary p-3.5 lg:p-6 lg:rounded-2xl">
          <div className="grid">
            {people.map((person, index) => (
              <p
                key={person.name}
                className={cn(
                  "col-start-1 row-start-1 leading-relaxed text-white/85 max-lg:text-sm",
                  index === selected ? "visible" : "invisible"
                )}
              >
                {person.bio}
              </p>
            ))}
          </div>

          <div className="flex flex-col-reverse items-start gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="grid flex-1">
              {people.map((person, index) => (
                <p
                  key={person.name}
                  className={cn(
                    "col-start-1 row-start-1 text-sm text-white/70",
                    index === selected ? "visible" : "invisible"
                  )}
                >
                  {person.age} anos &bull; {person.location} &bull; {person.education}
                </p>
              ))}
            </div>
            <a
              href={featured.linkedinHref}
              aria-label="LinkedIn"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <svg viewBox="0 0 448 512" fill="currentColor" className="size-4">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-h-30 overflow-hidden rounded-lg bg-tertiary lg:max-h-110 lg:rounded-2xl lg:min-h-120">
        <div className="scrollbar-mini flex h-full flex-row gap-3 overflow-x-auto p-3 lg:flex-col lg:gap-2 lg:overflow-x-hidden lg:overflow-y-auto">
          {people.map((person, index) => {
            const isActive = index === selected;

            return (
              <button
                key={person.name}
                type="button"
                onClick={() => setSelected(index)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center gap-4 rounded-xl p-2 text-left hover:bg-white/5 lg:shrink",
                  isActive && "bg-white/5"
                )}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white lg:rounded-lg" />
                <span className="hidden flex-col lg:flex">
                  <span
                    className={cn("font-heading text-lg", isActive ? "text-primary" : "text-white")}
                  >
                    {person.name}
                  </span>
                  <span className="text-sm text-white/60">{person.specialty}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

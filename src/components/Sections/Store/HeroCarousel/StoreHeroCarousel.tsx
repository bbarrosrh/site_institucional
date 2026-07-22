import { useState } from "react";
import { cn } from "@/utils/className";
import { CarouselNavButton } from "@/components/CarouselNavButton";
import type { StoreHeroSlide } from "@/data/Store/heroSlides";

interface Props {
  slides: StoreHeroSlide[];
}

export function StoreHeroCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div className="relative flex min-h-72 flex-col justify-end overflow-hidden border border-white/5 rounded-3xl bg-tertiary sm:min-h-128">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="relative flex items-end justify-between gap-6 p-6 sm:p-10">
        <div className="flex flex-col gap-3 sm:max-w-2/3">
          <p className="text-sm text-white/70 sm:text-base">{slide.eyebrow}</p>
          <p className="leading-relaxed text-white">{slide.description}</p>
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-2.5 cursor-pointer rounded-full",
                  i === index ? "bg-primary" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <CarouselNavButton
            direction="prev"
            label="Anterior"
            variant="gold"
            onClick={() => goTo(index - 1)}
          />
          <CarouselNavButton
            direction="next"
            label="Próximo"
            variant="gold"
            onClick={() => goTo(index + 1)}
          />
        </div>
      </div>
    </div>
  );
}

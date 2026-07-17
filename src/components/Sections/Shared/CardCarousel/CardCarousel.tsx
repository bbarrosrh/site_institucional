import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";
import { Card } from "@/components/Card";
import { CarouselNavButton } from "@/components/CarouselNavButton";
import type { IconName } from "@/components/Icon/IconName";

export interface CardCarouselCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface CardCarouselSlide {
  label: string;
  description: string;
  cards: CardCarouselCard[];
}

interface Props {
  title: string;
  slides: CardCarouselSlide[];
}

export function CardCarousel({ title, slides }: Props) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const goTo = (next: number) => setIndex((next + slides.length) % slides.length);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = titleRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transition = "none";
    el.style.transform = "translateX(4rem)";
    el.style.opacity = "0";
    void el.offsetHeight;

    requestAnimationFrame(() => {
      el.style.transition = "transform 500ms ease-out, opacity 500ms ease-out";
      el.style.transform = "translateX(0)";
      el.style.opacity = "1";
    });
  }, [index]);

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="section-title mb-3 lg:mb-10">{title}</h2>

      <div className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <h3
          ref={titleRef}
          className="text-center font-heading max-lg:mb-5 text-2xl font-semibold text-white sm:text-left sm:text-3xl"
        >
          {slide.label}
        </h3>

        <div className="flex w-full shrink-0 items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <CarouselNavButton
            direction="prev"
            label="Anterior"
            variant="light"
            className="order-1 sm:order-2"
            onClick={() => goTo(index - 1)}
          />

          <div className="order-2 flex gap-2 sm:order-1">
            {slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                aria-label={`Ir para ${s.label}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-2.5 cursor-pointer rounded-full",
                  i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <CarouselNavButton
            direction="next"
            label="Próximo"
            variant="light"
            className="order-3"
            onClick={() => goTo(index + 1)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-tertiary p-2 lg:p-3">
        <p className="leading-relaxed max-lg:text-center text-white lg:text-lg p-3 lg:p-6">
          {slide.description}
        </p>

        <div className="grid gap-2 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2 lg:gap-3">
          {slide.cards.map((card) => (
            <Card
              key={card.title}
              badge={<Icon name={card.icon} size={20} />}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

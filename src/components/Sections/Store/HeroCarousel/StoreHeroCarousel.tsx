import { useState } from "react";
import { cn } from "@/utils/className";
import { CarouselNavButton } from "@/components/CarouselNavButton";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { openProduct, isProductModalOpen } from "@/stores/storeModal";
import type { StoreHeroSlide } from "@/sanity/schemas/Store/data";

interface Props {
  slides: StoreHeroSlide[];
}

export function StoreHeroCarousel({ slides }: Props) {
  const [position, setPosition] = useState(0);
  const length = slides.length;
  const realIndex = ((position % length) + length) % length;

  const goToDelta = (delta: number) => setPosition((p) => p + delta);

  const goToIndex = (target: number) => {
    let delta = target - realIndex;
    if (delta > length / 2) delta -= length;
    if (delta < -length / 2) delta += length;
    setPosition((p) => p + delta);
  };

  const displaySlides = length === 2 ? [...slides, ...slides] : slides;
  const displayLength = displaySlides.length;

  return (
    <div className="relative flex min-h-128 max-lg:h-[50dvh] flex-col overflow-hidden bg-tertiary">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${-position * 100}%)` }}
      >
        {displaySlides.map((slide, i) => {
          const shift =
            Math.floor((position - i + displayLength / 2) / displayLength) * displayLength;
          const shiftedIndex = i + shift;
          const isActive = shiftedIndex === position;

          return (
            <div
              key={i}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 flex flex-col justify-end",
                !isActive && "pointer-events-none"
              )}
              style={{ transform: `translateX(${shiftedIndex * 100}%)` }}
            >
              <img
                src={slide.desktopImage}
                alt=""
                className="absolute inset-0 hidden h-full w-full object-cover lg:block"
              />
              <img
                src={slide.mobileImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover lg:hidden"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/60" />

              <div className="section-container relative flex flex-col gap-3 pb-24 sm:pb-28 max-sm:pt-32 lg:pb-16">
                <div className="flex flex-col gap-3 sm:max-w-2/3 sm:gap-6">
                  <h1 className="font-heading text-2xl font-semibold text-white sm:text-5xl max-lg:pt-32">
                    {slide.title}
                  </h1>
                  <p className="leading-relaxed text-white/80 sm:text-xl">{slide.subtitle}</p>

                  {slide.ctaText && slide.ctaProduct && !slide.ctaProduct.soldOut && (
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      className="w-fit"
                      onClick={() => {
                        openProduct.set(slide.ctaProduct!);
                        isProductModalOpen.set(true);
                      }}
                    >
                      {slide.ctaText}
                      <Icon name="arrow-right" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <div className="section-container relative z-10 mt-auto flex w-full items-center justify-between gap-4 pb-6 sm:pb-10 lg:justify-end lg:pb-16">
          <CarouselNavButton
            direction="prev"
            label="Anterior"
            variant="light"
            onClick={() => goToDelta(-1)}
            className="text-black lg:order-2"
          />

          <div className="flex gap-2 lg:order-1">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => goToIndex(i)}
                className={cn(
                  "size-2.5 cursor-pointer rounded-full",
                  i === realIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <CarouselNavButton
            direction="next"
            label="Próximo"
            variant="light"
            onClick={() => goToDelta(1)}
            className="text-black lg:order-3"
          />
        </div>
      )}
    </div>
  );
}

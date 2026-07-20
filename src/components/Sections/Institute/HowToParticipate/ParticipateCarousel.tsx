import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/className";
import { CarouselNavButton } from "@/components/CarouselNavButton";
import type { ParticipateItem } from "@/data/Institute/participate";

interface Props {
  items: ParticipateItem[];
}

function CardContent({ item, index }: { item: ParticipateItem; index: number }) {
  return (
    <>
      <div className="p-4">
        <p className="bg-linear-to-b from-primary to-tertiary bg-clip-text font-heading text-5xl font-bold text-transparent sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1 font-heading text-lg font-semibold text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-lg">{item.description}</p>
      </div>

      <img
        src={item.image.src}
        alt=""
        className="h-40 w-full rounded-2xl object-cover lg:flex-1"
      />
    </>
  );
}

export function ParticipateCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const length = items.length;

  const goToMobile = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const wrapped = ((i % length) + length) % length;
    track.scrollTo({ left: wrapped * track.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      setMobileIndex(Math.max(0, Math.min(i, length - 1)));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [length]);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="hidden w-full items-center justify-center gap-4 lg:flex">
        <CarouselNavButton
          direction="prev"
          label="Anterior"
          className="relative z-30 shrink-0"
          onClick={() => setIndex((i) => (i - 1 + length) % length)}
        />

        <div className="relative w-full lg:h-128 lg:overflow-hidden">
          {items.map((item, i) => {
            let offset = i - index;
            if (offset > length / 2) offset -= length;
            if (offset < -length / 2) offset += length;

            const isActive = offset === 0;

            return (
              <div
                key={item.title}
                className={cn(
                  "absolute top-0 left-1/2 flex aspect-square w-lg flex-col overflow-hidden rounded-3xl border-4 border-tertiary bg-black p-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isActive ? "z-20" : "z-10"
                )}
                style={{
                  transform: `translateX(calc(-50% + ${offset * 85}%)) scale(${isActive ? 1 : 0.8})`,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                }}
              >
                <CardContent item={item} index={i} />
              </div>
            );
          })}
        </div>

        <CarouselNavButton
          direction="next"
          label="Próximo"
          className="relative z-30 shrink-0"
          onClick={() => setIndex((i) => (i + 1) % length)}
        />
      </div>

      <div className="flex w-full flex-col gap-6 lg:hidden">
        <div
          ref={trackRef}
          className="scrollbar-none flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border-4 border-tertiary bg-black p-2"
            >
              <CardContent item={item} index={i} />
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-between">
          <CarouselNavButton
            direction="prev"
            label="Anterior"
            className="shrink-0"
            onClick={() => goToMobile(mobileIndex - 1)}
          />

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => goToMobile(i)}
                className={cn(
                  "size-2.5 cursor-pointer rounded-full",
                  i === mobileIndex ? "bg-primary" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>

          <CarouselNavButton
            direction="next"
            label="Próximo"
            className="shrink-0"
            onClick={() => goToMobile(mobileIndex + 1)}
          />
        </div>
      </div>
    </div>
  );
}

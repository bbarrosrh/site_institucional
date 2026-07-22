import { useEffect, useState } from "react";
import { cn } from "@/utils/className";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { openProduct } from "@/stores/storeModal";
import { contactInfo } from "@/data/footer";

const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function ProductModalContent() {
  const [product, setProduct] = useState(openProduct.get());
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(
    () =>
      openProduct.subscribe((next) => {
        setProduct(next);
        setActiveIndex(0);
      }),
    []
  );

  if (!product) return null;

  const images = product.gallery.length > 0 ? product.gallery : [product.coverImage];
  const whatsappHref = `${contactInfo.whatsapp.href}?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto ${product.title}.`
  )}`;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
      <div className="flex min-w-0 flex-col gap-3 lg:w-3/7 lg:flex-row lg:items-start">
        {images.length > 1 && (
          <div className="scrollbar-hidden order-2 flex gap-2 overflow-x-auto lg:order-1 lg:w-20 lg:shrink-0 lg:flex-col lg:overflow-x-visible lg:overflow-y-auto">
            {images.map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                aria-label={`Ver foto ${index + 1}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "size-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 lg:size-20",
                  index === activeIndex ? "border-white" : "border-transparent"
                )}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="order-1 aspect-square w-full min-w-0 shrink-0 overflow-hidden rounded-2xl bg-black/20 lg:order-2 lg:flex-1">
          <img
            src={images[activeIndex]}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-8 lg:w-4/7">
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-4xl">
          {product.title}
        </h2>

        <div className="flex max-sm:flex-col sm:items-center justify-between gap-3">
          <p className="font-heading text-2xl sm:text-4xl font-bold text-white">
            R$ {formatPrice(product.price)}
          </p>

          <Button
            href={whatsappHref}
            target="_blank"
            size="lg"
            className="hidden bg-green-600 text-white hover:bg-green-700 lg:inline-flex"
          >
            Pedir no WhatsApp
            <Icon name="whatsapp" size={20} className="shrink-0" />
          </Button>
        </div>

        <p className="leading-relaxed whitespace-pre-line max-sm:text-sm text-white">
          {product.description}
        </p>

        {product.specifications.length > 0 && (
          <div>
            <p className="mb-3 font-semibold text-white">Especificações do produto</p>
            <table className="w-full text-sm">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label} className="border-b border-white/10 last:border-b-0">
                    <th className="py-2 pr-4 text-left font-medium text-white/60">{spec.label}</th>
                    <td className="py-2 text-white/85">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

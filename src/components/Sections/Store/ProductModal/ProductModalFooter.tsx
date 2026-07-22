import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { openProduct } from "@/stores/storeModal";
import { contactInfo } from "@/data/footer";

export function ProductModalFooter() {
  const [product, setProduct] = useState(openProduct.get());

  useEffect(() => openProduct.subscribe(setProduct), []);

  if (!product) return null;

  const whatsappHref = `${contactInfo.whatsapp.href}?text=${encodeURIComponent(
    `Olá! Tenho interesse no produto ${product.title}.`
  )}`;

  return (
    <div className="bg-tertiary p-4 lg:hidden">
      <Button
        href={whatsappHref}
        target="_blank"
        size="lg"
        className="w-full justify-center bg-green-600 text-white hover:bg-green-700"
      >
        Pedir no WhatsApp
        <Icon name="whatsapp" size={20} className="shrink-0" />
      </Button>
    </div>
  );
}

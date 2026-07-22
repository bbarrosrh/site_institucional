import { atom } from "nanostores";
import type { Product } from "@/sanity/schemas/Store/data";

export const isProductModalOpen = atom(false);
export const openProduct = atom<Product | null>(null);

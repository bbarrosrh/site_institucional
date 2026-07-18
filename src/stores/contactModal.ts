import { atom } from "nanostores";

export const isContactModalOpen = atom(false);
export const presetContactSubject = atom<string | null>(null);

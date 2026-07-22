import type { WritableAtom } from "nanostores";

export function initModal(id: string, store: WritableAtom<boolean>, onOpen?: () => void) {
  const modal = document.getElementById(id);
  const card = document.getElementById(`${id}-card`);
  const backdrop = document.getElementById(`${id}-backdrop`);
  const closeButton = document.getElementById(`${id}-close-outside`);
  const handle = document.getElementById(`${id}-handle`);
  const scrollArea = document.getElementById(`${id}-scroll`);

  modal?.addEventListener("transitionend", (event) => {
    if (event.target !== modal || store.get()) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  store.subscribe((open) => {
    if (!modal || !card) return;

    if (open) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      void modal.offsetHeight;

      modal.classList.remove("opacity-0");
      card.classList.remove("is-closed");
    } else {
      modal.classList.add("opacity-0");
      card.classList.add("is-closed");
    }

    modal.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("overflow-hidden", open);

    if (open) {
      onOpen?.();
      requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
    }
  });

  closeButton?.addEventListener("click", () => store.set(false));
  backdrop?.addEventListener("click", () => store.set(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && store.get()) store.set(false);
  });

  if (!card) return;
  const isBottomSheet = () => window.matchMedia("(max-width: 1023px)").matches;

  const finishDrag = (dragging: boolean, dragY: number) => {
    card.style.transition = "";
    card.style.transform = "";
    if (dragging && dragY > card.offsetHeight * 0.25) store.set(false);
  };

  if (handle) {
    let startY = 0;
    let dragY = 0;
    let dragging = false;

    handle.addEventListener(
      "touchstart",
      (event) => {
        if (!isBottomSheet()) return;
        dragging = true;
        startY = event.touches[0].clientY;
        card.style.transition = "none";
      },
      { passive: true }
    );

    handle.addEventListener(
      "touchmove",
      (event) => {
        if (!dragging) return;
        dragY = Math.max(0, event.touches[0].clientY - startY);
        card.style.transform = `translateY(${dragY}px)`;
      },
      { passive: true }
    );

    handle.addEventListener("touchend", () => {
      finishDrag(dragging, dragY);
      dragging = false;
      dragY = 0;
    });
  }

  if (scrollArea) {
    let startY = 0;
    let dragY = 0;
    let dragging = false;

    scrollArea.addEventListener(
      "touchstart",
      (event) => {
        if (!isBottomSheet()) return;
        dragging = false;
        dragY = 0;
        startY = event.touches[0].clientY;
      },
      { passive: true }
    );

    scrollArea.addEventListener(
      "touchmove",
      (event) => {
        if (!isBottomSheet()) return;
        const currentY = event.touches[0].clientY;
        const delta = currentY - startY;

        if (!dragging) {
          if (delta > 0 && scrollArea.scrollTop <= 0) {
            dragging = true;
            startY = currentY;
            card.style.transition = "none";
          } else {
            return;
          }
        }

        dragY = Math.max(0, currentY - startY);
        card.style.transform = `translateY(${dragY}px)`;
        event.preventDefault();
      },
      { passive: false }
    );

    scrollArea.addEventListener("touchend", () => {
      finishDrag(dragging, dragY);
      dragging = false;
      dragY = 0;
    });
  }
}

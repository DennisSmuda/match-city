import { gameStore } from "./store";

export const onMouseMove = (e: MouseEvent) => {
  let doc, body;

  if (e.pageX == null && e.clientX != null) {
    doc = document.documentElement;
    body = document.body;

    const x =
      e.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    const y =
      e.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);

    gameStore.set(() => ({
      mouse: { x, y },
    }));
  }
};

export const onMouseEnterCell = (x: number, y: number) => {
  for (let i = 0; i < 5; i++) {
    const potentialMatchCell = document.querySelector(
      `[data-grid-pos="${i}:${y}"]`
    ) as HTMLElement;
    potentialMatchCell.classList.add("active");
  }
  for (let j = 0; j < 5; j++) {
    const potentialMatchCell = document.querySelector(
      `[data-grid-pos="${x}:${j}"]`
    ) as HTMLElement;
    potentialMatchCell.classList.add("active");
  }
};

export const onMouseLeaveCell = (x: number, y: number) => {
  for (let i = 0; i < 5; i++) {
    const potentialMatchCell = document.querySelector(
      `[data-grid-pos="${i}:${y}"]`
    ) as HTMLElement;
    potentialMatchCell.classList.remove("active");
  }
  for (let j = 0; j < 5; j++) {
    const potentialMatchCell = document.querySelector(
      `[data-grid-pos="${x}:${j}"]`
    ) as HTMLElement;
    potentialMatchCell.classList.remove("active");
  }
};

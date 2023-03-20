import { gameStore } from "./store";
import { sleep } from "./utils";

export const onMouseMove = (e: MouseEvent) => {
  gameStore.set(() => ({
    mouse: { x: e.pageX, y: e.pageY },
  }));
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

export const rippleEffect = async (x: number, y: number) => {
  console.log("Ripple", x, y);
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
  await sleep(300);
  // potentialMatchCell.classList.remove("active");
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

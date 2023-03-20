import { gameStore } from "./store";

export type Color = "primary" | "secondary" | "tertiary";
export const colors = ["primary", "secondary", "tertiary"];

export const generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)] as Color;
};

export const getRandomGridPosition = () => {
  let randomPos = null;
  while (!randomPos) {
    let x = Math.floor(Math.random() * 5);
    let y = Math.floor(Math.random() * 5);
    if (!gameStore.state.grid[`${x}:${y}`]) {
      randomPos = { x, y };
    }
  }

  return {
    x: randomPos.x,
    y: randomPos.y,
  };
};

export const getMatchCountDescription = (matchCount: number) => {
  switch (matchCount) {
    case 2:
      return "double";
    case 3:
      return "triple";
    case 4:
      return "quadruple";
    case 5:
      return "quintuple";
    default:
      return "";
  }
};

export const sleep = async (timeout: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
};

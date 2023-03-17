import { gameStore } from "./store";

export const generateRandomColor = () => {
  let nextChance = Math.random();
  let nextColor = "green";
  if (nextChance < 0.3) {
    nextColor = "pink";
  } else if (nextChance < 0.6) {
    nextColor = "blue";
  }

  return nextColor;
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

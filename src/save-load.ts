import { gameStore } from "./store";
import { generateTile } from "./tile-generation";

export const saveGame = () => {
  localStorage.setItem("grid", JSON.stringify(gameStore.state.grid));
  localStorage.setItem("score", JSON.stringify(gameStore.state.score));
};

export const loadGame = async () => {
  const loadedScore = localStorage.getItem("score") || ("0" as string);
  const gridDataString = localStorage.getItem("grid") || ("{}" as string);
  const grid = JSON.parse(gridDataString);

  gameStore.set(() => ({
    grid,
    score: parseInt(loadedScore),
  }));

  const scoreElement = document.getElementById("score") as HTMLElement;
  scoreElement.innerHTML = loadedScore;

  for (const tilePos in grid) {
    if (Object.prototype.hasOwnProperty.call(gameStore.state.grid, tilePos)) {
      const [x, y] = tilePos.split(":");
      generateTile(grid[tilePos], parseInt(x), parseInt(y));
    }
  }
};

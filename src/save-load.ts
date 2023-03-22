import { gameStore } from "./store";
import { generateTile } from "./tile-generation";

export const saveGame = () => {
  const gridData = gameStore.state.grid;
  localStorage.setItem("grid", JSON.stringify(gridData));
};

export const loadGame = async () => {
  const gridDataString = localStorage.getItem("grid") as string;
  const grid = JSON.parse(gridDataString);

  gameStore.set(() => ({
    grid,
  }));

  for (const tilePos in grid) {
    if (Object.prototype.hasOwnProperty.call(gameStore.state.grid, tilePos)) {
      console.log("Tile", tilePos, grid[tilePos]);
      const [x, y] = tilePos.split(":");
      generateTile(grid[tilePos], parseInt(x), parseInt(y));
    }
  }
};

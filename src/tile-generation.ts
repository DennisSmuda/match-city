import { animationConfig } from "./config";
import { gameStore } from "./store";
import { generateRandomColor, getRandomGridPosition } from "./utils";

export const generateNextTile = async () => {
  const nextTileContainer = document.getElementById("next-tile-container");
  const nextTile = document.createElement("div");
  nextTile.classList.add("tile", "next");
  nextTile.setAttribute("data-type", generateRandomColor());
  nextTile.innerHTML = "1";
  nextTileContainer?.appendChild(nextTile);
  await nextTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;
};

export const generateRandomTile = async () => {
  const randomTile = document.createElement("div");
  randomTile.classList.add("tile");
  randomTile.setAttribute("data-type", generateRandomColor());
  randomTile.innerHTML = "1";
  const { x, y } = getRandomGridPosition();
  const tileContainer = document.querySelector(`[data-grid-pos="${x}:${y}"]`);
  gameStore.state.grid[`${x}:${y}`] = randomTile.getAttribute("data-type");
  tileContainer?.appendChild(randomTile);
  await randomTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;

  return { x, y };
};

export const moveNextTileToCell = async (
  cell: Element,
  x: number,
  y: number
) => {
  const tile = document.querySelectorAll(".tile.next")[0] as HTMLElement;
  tile.animate(animationConfig.keyframesOut, animationConfig.timing).finished;

  cell.appendChild(tile);
  gameStore.state.grid[`${x}:${y}`] = tile.getAttribute("data-type");
  tile.classList.remove("next");

  await tile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;
};

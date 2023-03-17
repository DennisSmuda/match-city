import "./style.css";

import { animationConfig } from "./config";
import { onMouseEnterCell, onMouseLeaveCell, onMouseMove } from "./events";
import { floatingText, scoreCountAnimation } from "./floating-text";
import { gameStore } from "./store";
import {
  generateNextTile,
  generateRandomTile,
  moveNextTileToCell,
} from "./tile-generation";
import { gameOver } from "./game-over";

document.onmousemove = onMouseMove;

let isInputBlocked: boolean = false;

const checkGrid = async (x: number, y: number) => {
  const currentType = gameStore.state.grid[`${x}:${y}`];
  const currentTile = document.querySelector(
    `[data-grid-pos="${x}:${y}"] > .tile`
  ) as HTMLElement;
  // Check grid in all orthogonal directions
  let matchCount = 0;
  for (let i = x - 1; i >= x - 4; i--) {
    // Matching to the left
    const checkingType = gameStore.state.grid[`${i}:${y}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${i}:${y}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let i = x + 1; i <= x + 4; i++) {
    // Matching to the right
    const checkingType = gameStore.state.grid[`${i}:${y}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${i}:${y}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let j = y + 1; j <= y + 4; j++) {
    // Matching downwards
    const checkingType = gameStore.state.grid[`${x}:${j}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${x}:${j}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let j = y - 1; j >= y - 4; j--) {
    // Matching upwards
    const checkingType = gameStore.state.grid[`${x}:${j}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${x}:${j}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  // If there are more than 2 other connecting tiles -> collapse
  if (matchCount >= 2) {
    for (const pos in gameStore.state.matches) {
      if (Object.prototype.hasOwnProperty.call(gameStore.state.matches, pos)) {
        const tile = document.querySelector(`[data-grid-pos="${pos}"] > .tile`);
        const result =
          parseInt(tile?.innerHTML || "1") + parseInt(currentTile.innerHTML);
        currentTile.innerHTML = result.toString();
        // const newScore = gameStore.state.score + result;
        gameStore.set((state) => ({
          score: state.score + result,
        }));

        const scoreElement = document.getElementById("score") as HTMLElement;
        scoreElement.innerHTML = gameStore.state.score.toString();

        tile?.animate(animationConfig.keyframesOut, animationConfig.timingShort)
          .finished;
        await currentTile?.animate(
          animationConfig.keyframesIn,
          animationConfig.timingShort
        ).finished;

        tile?.remove();
        delete gameStore.state.matches[pos];
        delete gameStore.state.grid[pos];
      }
    }

    const totalScore = parseInt(currentTile.innerHTML);
    scoreCountAnimation(totalScore);
  }

  // reset matches
  gameStore.set(() => ({
    matches: {},
  }));
};

const placeTileOnCell = async (cell: Element, x: number, y: number) => {
  if (isInputBlocked) {
    return;
  } else {
    isInputBlocked = true;
  }

  const clickedType = gameStore.state.grid[`${x}:${y}`];
  if (clickedType) return;

  // Move from next-container to clicked cell
  await moveNextTileToCell(cell, x, y);

  // Generate next tile to place
  await generateNextTile();

  // Check Grid
  await checkGrid(x, y);

  // Spawn a random tile if enough room
  if (Object.keys(gameStore.state.grid).length <= 23) {
    const { x: randomX, y: randomY } = await generateRandomTile();
    await checkGrid(randomX, randomY);
  }

  // Lose condition
  if (Object.keys(gameStore.state.grid).length >= 25) {
    gameOver();
  }

  isInputBlocked = false;
};

const initCells = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell: Element) => {
    const position = cell.getAttribute("data-grid-pos") || "0:0";
    const [x, y] = position.split(":");

    cell.addEventListener(
      "click",
      placeTileOnCell.bind(null, cell, parseInt(x), parseInt(y))
    );
    cell.addEventListener(
      "mouseenter",
      onMouseEnterCell.bind(null, parseInt(x), parseInt(y))
    );
    cell.addEventListener(
      "mouseleave",
      onMouseLeaveCell.bind(null, parseInt(x), parseInt(y))
    );
  });
};

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    // Trigger events for debugging puproses
    // scoreCountAnimation(12);
    floatingText(12, 12, "hadsjklf");
  }
  if (e.key == "r" || e.code == "r") {
    gameOver();
  }
};

/**
 * Initialize
 */
initCells();

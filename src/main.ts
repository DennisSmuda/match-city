import "./style.css";

import { onMouseMove, rippleEffect } from "./event-handlers";
import { floatingText } from "./floating-text";
import { gameStore } from "./store";
import {
  generateNextTile,
  generateRandomTile,
  moveNextTileToCell,
} from "./tile-generation";
import { gameOver } from "./game-over";
import { checkGrid } from "./check-grid";
import { initUserTheme, setupThemeToggles } from "./theming";
import { launchTutorial, tutorialSteps, updateTutorial } from "./tutorial";
import { playSound, setupAudio } from "./audio";
import { sleep } from "./utils";
import { loadGame, saveGame } from "./save-load";

/**
 * Initialize grid cells
 * -> Puts events on each cell
 */
const initCells = async () => {
  await loadGame();
  playSound("helloSound");
  const cells = document.querySelectorAll(".cell:not(.demo)");
  cells.forEach((cell: Element) => {
    const position = cell.getAttribute("data-grid-pos") || "0:0";
    const [x, y] = position.split(":");

    cell.addEventListener(
      "click",
      placeTileOnCell.bind(null, cell, parseInt(x), parseInt(y))
    );
    // cell.addEventListener(
    //   "mouseenter",
    //   onMouseEnterCell.bind(null, parseInt(x), parseInt(y))
    // );
    // cell.addEventListener(
    //   "mouseleave",
    //   onMouseLeaveCell.bind(null, parseInt(x), parseInt(y))
    // );
  });
};

/**
 * Try to place the current next tile to a cell
 * @param cell Element containing a tile
 * @param x grid x-position
 * @param y grid y-position
 */
const placeTileOnCell = async (cell: Element, x: number, y: number) => {
  // Cell is occupied
  if (gameStore.state.grid[`${x}:${y}`]) return;

  rippleEffect(x, y);

  if (gameStore.state.tutorialStep === 0) {
    gameStore.set(() => ({
      tutorialStep: 1,
    }));
    updateTutorial();
    return;
  } else if (
    gameStore.state.tutorialStep === 2 ||
    gameStore.state.tutorialStep === 3
  ) {
    const cell = document.querySelector(`[data-grid-pos="${x}:${y}"]`);
    if (!cell?.classList.contains("highlight")) {
      floatingText("place on highlighted tile!", "yellow");
      return;
    }
  }
  await playSound("clickSound");

  // Move from next-container to clicked cell
  await moveNextTileToCell(cell, x, y);

  // Check Grid
  await checkGrid(x, y);

  await sleep(350);

  // Spawn a random tile if enough room
  if (
    Object.keys(gameStore.state.grid).length <= 23 &&
    gameStore.state.tutorialStep <= 3 === false
  ) {
    const { x: randomX, y: randomY } = await generateRandomTile();
    playSound("randomTileSound");
    await checkGrid(randomX, randomY);
  }

  // Generate next tile to place
  await generateNextTile();

  // Update Tutorial
  if (gameStore.state.tutorialStep <= tutorialSteps) {
    updateTutorial();
  }

  // Lose condition
  if (Object.keys(gameStore.state.grid).length >= 25) {
    gameOver();
  } else {
    saveGame();
  }
};

/**
 * General Events
 */
document.onmousemove = onMouseMove;
document.body.onkeyup = function (e) {
  if (e.key == "z" || e.code == "z") {
    // Trigger events for debugging puproses
    floatingText("hadsjklf");
  }
  if (e.key == "r" || e.code == "r") {
    gameOver();
  }
};

/**
 * Initialize
 */
initUserTheme();
initCells();
setupThemeToggles();

setupAudio();

// Tutorial
const hasFinishedTutorial = localStorage.getItem("has-finished-tutorial");
if (hasFinishedTutorial) {
  gameStore.set(() => ({
    tutorialStep: tutorialSteps + 1,
  }));
} else {
  launchTutorial();
}

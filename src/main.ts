import "./style.css";

import {
  onMouseEnterCell,
  onMouseLeaveCell,
  onMouseMove,
} from "./event-handlers";
import { floatingText } from "./floating-text";
import { gameStore } from "./store";
import {
  generateNextTile,
  generateRandomTile,
  moveNextTileToCell,
} from "./tile-generation";
import { gameOver } from "./game-over";
import { checkGrid } from "./check-grid";
import { showHighscores } from "./high-score";
import {
  AvailableThemes,
  changeColorTheme,
  setupColorSwitchers,
} from "./theming";

/**
 * Initialize grid cells
 * -> Puts events on each cell
 */
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

/**
 * Try to place the current next tile to a cell
 * @param cell Element containing a tile
 * @param x grid x-position
 * @param y grid y-position
 */
const placeTileOnCell = async (cell: Element, x: number, y: number) => {
  // Cell is occupied
  if (gameStore.state.grid[`${x}:${y}`]) return;

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
  if (e.key == "h" || e.code == "h") {
    showHighscores();
  }
};

const defaultTheme = localStorage.getItem("color-theme") || "black";
changeColorTheme(defaultTheme as AvailableThemes);

/**
 * Initialize
 */
initCells();
setupColorSwitchers();

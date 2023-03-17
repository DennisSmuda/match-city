import { animationConfig } from "./config";
import { gameStore } from "./store";
import "./style.css";
import { generateRandomColor } from "./utils";

let grid: { [key: string]: any } = {};
let matches: { [key: string]: any } = {};

// let currentTurn = 0;
let isInputBlocked: boolean = false;

// gameOverModal.style.opacity = "0";
// gameOverModal.style.pointerEvents = "none";

const generateNextTile = async () => {
  const nextTileContainer = document.getElementById("next-tile-container");
  const nextTile = document.createElement("div");
  nextTile.classList.add("tile", "next");
  nextTile.setAttribute("data-type", generateRandomColor());
  nextTile.innerHTML = "1";
  nextTileContainer?.appendChild(nextTile);
  await nextTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;
};

const generateRandomTile = async () => {
  const randomTile = document.createElement("div");
  randomTile.classList.add("tile");
  randomTile.setAttribute("data-type", generateRandomColor());
  randomTile.innerHTML = "1";
  const { x, y } = getRandomGridPosition();
  const tileContainer = document.querySelector(`[data-grid-pos="${x}:${y}"]`);
  grid[`${x}:${y}`] = randomTile.getAttribute("data-type");
  tileContainer?.appendChild(randomTile);
  await randomTile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;

  await checkGrid(x, y);
};

const getRandomGridPosition = () => {
  let randomPos = null;
  while (!randomPos) {
    let x = Math.floor(Math.random() * 5);
    let y = Math.floor(Math.random() * 5);
    if (!grid[`${x}:${y}`]) {
      randomPos = { x, y };
    }
  }
  return randomPos;
};

const checkGrid = async (x: number, y: number) => {
  const currentType = grid[`${x}:${y}`];
  const currentTile = document.querySelector(
    `[data-grid-pos="${x}:${y}"] > .tile`
  ) as HTMLElement;
  // Check grid in all orthogonal directions
  let matchCount = 0;
  for (let i = x - 1; i >= x - 4; i--) {
    // Matching to the left
    const checkingType = grid[`${i}:${y}`];
    if (checkingType === currentType) {
      matches[`${i}:${y}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let i = x + 1; i <= x + 4; i++) {
    // Matching to the right
    const checkingType = grid[`${i}:${y}`];
    if (checkingType === currentType) {
      matches[`${i}:${y}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let j = y + 1; j <= y + 4; j++) {
    // Matching downwards
    const checkingType = grid[`${x}:${j}`];
    if (checkingType === currentType) {
      matches[`${x}:${j}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  for (let j = y - 1; j >= y - 4; j--) {
    // Matching upwards
    const checkingType = grid[`${x}:${j}`];
    if (checkingType === currentType) {
      matches[`${x}:${j}`] = true;
      matchCount++;
    } else {
      break;
    }
  }

  // If there are more than 2 other connecting tiles -> collapse
  if (matchCount >= 2) {
    for (const pos in matches) {
      if (Object.prototype.hasOwnProperty.call(matches, pos)) {
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
        delete matches[pos];
        delete grid[pos];
      }
    }

    const totalScore = parseInt(currentTile.innerHTML);
    scoreCountAnimation(totalScore);
  }

  // reset matches
  matches = {};
};

const onClickCell = async (cell: Element, x: number, y: number) => {
  if (isInputBlocked) {
    return;
  } else {
    isInputBlocked = true;
  }

  const clickedType = grid[`${x}:${y}`];
  if (clickedType) return;

  const tile = document.querySelectorAll(".tile.next")[0] as HTMLElement;
  tile.animate(animationConfig.keyframesOut, animationConfig.timing).finished;

  cell.appendChild(tile);
  grid[`${x}:${y}`] = tile.getAttribute("data-type");
  tile.classList.remove("next");

  await tile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;

  // Generate next tile to place
  await generateNextTile();

  // Check Grid
  await checkGrid(x, y);

  // Spawn a random tile if enough room
  if (Object.keys(grid).length <= 23) {
    await generateRandomTile();
  }

  // Lose condition
  if (Object.keys(grid).length >= 25) {
    gameOver();
  }

  isInputBlocked = false;
};

const onMouseEnterCell = (x: number, y: number) => {
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

const onMouseLeaveCell = (x: number, y: number) => {
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

const initCells = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell: Element) => {
    const position = cell.getAttribute("data-grid-pos") || "0:0";
    const [x, y] = position.split(":");

    cell.addEventListener(
      "click",
      onClickCell.bind(null, cell, parseInt(x), parseInt(y))
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

const tile = document.querySelectorAll(".tile")[0] as HTMLElement;
console.log("tile", tile);

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    // Trigger events for debugging puproses
    scoreCountAnimation(12);
  }
  if (e.key == "r" || e.code == "r") {
    gameOver();
  }
};

const scoreCountAnimation = async (amount: number) => {
  const scoreElement = document.getElementById("score") as HTMLElement;
  const scoreText = document.createElement("div");
  scoreText.classList.add("floating-text", "score");
  scoreText.innerHTML = `+${amount.toString()}`;
  scoreElement?.appendChild(scoreText);
  await scoreText.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-1rem)", opacity: 0 },
    ],
    500
  ).finished;

  scoreText.remove();
};

const gameOver = async () => {
  const gameOverModal = document.getElementById("game-over") as HTMLElement;
  const finalScoreElement = document.getElementById(
    "final-score"
  ) as HTMLElement;
  finalScoreElement.innerHTML = gameStore.state.score.toString();
  gameOverModal.style.visibility = "visible";
  gameOverModal.style.pointerEvents = "auto";
  gameOverModal.style.opacity = "1";
  await gameOverModal?.animate(
    animationConfig.keyframesIn,
    animationConfig.timingShort
  ).finished;

  document
    .getElementById("restart-game-button")
    ?.addEventListener("click", restartGame);
};

const restartGame = async () => {
  console.log("Restart Game");
  const gameOverModal = document.getElementById("game-over") as HTMLElement;

  const tiles = document.querySelectorAll(`.tile:not(.next)`);
  tiles.forEach(async (tile) => {
    tile.innerHTML = "";
    await tile?.animate(
      animationConfig.keyframesDisappear,
      animationConfig.timingLong
    ).finished;
    tile?.remove();
  });

  await gameOverModal?.animate(
    // [{ opacity: 0 }, { opacity: 1 }],
    animationConfig.keyframesDisappear,
    animationConfig.timingShort
  ).finished;
  gameOverModal.style.opacity = "0";
  gameOverModal.style.pointerEvents = "none";
  gameStore.set(() => ({
    score: 0,
  }));
  const scoreElement = document.getElementById("score") as HTMLElement;
  scoreElement.innerHTML = gameStore.state.score.toString();
  grid = {};
};

/**
 * Initialize
 */
initCells();

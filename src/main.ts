import { animationConfig } from "./config";
import "./style.css";

const gameOverModal = document.getElementById("game-over") as HTMLElement;
const nextTileContainer = document.getElementById("next-tile-container");
let grid: { [key: string]: any } = {};
let matches: { [key: string]: any } = {};

// let currentTurn = 0;
let score = 0;
let isInputBlocked: boolean = false;

gameOverModal.style.opacity = "0";
gameOverModal.style.pointerEvents = "none";

const generateNextTile = async () => {
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
  console.log("Check grid for", x, y);
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
    let totalAddedScore = 0;
    for (const pos in matches) {
      if (Object.prototype.hasOwnProperty.call(matches, pos)) {
        const tile = document.querySelector(`[data-grid-pos="${pos}"] > .tile`);
        const result =
          parseInt(tile?.innerHTML || "1") + parseInt(currentTile.innerHTML);
        currentTile.innerHTML = result.toString();
        score += result;
        totalAddedScore += result;

        const scoreElement = document.getElementById("score") as HTMLElement;
        scoreElement.innerHTML = score.toString();

        await tile?.animate(
          animationConfig.keyframesOut,
          animationConfig.timingShort
        ).finished;
        tile?.remove();
        delete matches[pos];
        delete grid[pos];
      }
    }
    scoreCountAnimation(totalAddedScore);
  }
  // reset matches
  matches = {};
};

const onClickCell = async (cell: Element, x: number, y: number) => {
  // cell.ariaDisabled = "true";
  if (isInputBlocked) {
    return;
  } else {
    isInputBlocked = true;
  }

  const clickedType = grid[`${x}:${y}`];
  if (clickedType) return;

  // currentTurn++;
  const tile = document.querySelectorAll(".tile.next")[0] as HTMLElement;
  console.log("tile", tile);
  // let animation =
  tile.animate(animationConfig.keyframesOut, animationConfig.timing).finished;

  cell.appendChild(tile);
  grid[`${x}:${y}`] = tile.getAttribute("data-type");

  tile.classList.remove("next");

  await tile.animate(animationConfig.keyframesIn, animationConfig.timing)
    .finished;

  await generateNextTile();

  await checkGrid(x, y);
  console.log("Finish checking grid after click");

  if (Object.keys(grid).length <= 23) {
    await generateRandomTile();
  }

  console.log("Check if game over", Object.keys(grid).length);
  if (Object.keys(grid).length >= 25) {
    // grid is full 5x5 tiles are not empty
    gameOver();
  }
  console.log("Finish");
  isInputBlocked = false;
  // cell.ariaDisabled = "false";
};

const initCells = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell: Element) => {
    const position = cell.getAttribute("data-grid-pos") || "0:0";
    const [x, y] = position.split(":");
    console.log("Cell Pos: ", x, y);
    cell.addEventListener(
      "click",
      onClickCell.bind(null, cell, parseInt(x), parseInt(y))
    );
  });
};

initCells();

// let x = 0;
// let y = 0;
const tile = document.querySelectorAll(".tile")[0] as HTMLElement;
console.log("tile", tile);

// const onMouseMove = (e: MouseEvent) => {
//   x = e.clientX;
//   y = e.clientY;
//   console.log("Event", x, y);
// };

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    // Trigger events for debugging puproses
    scoreCountAnimation(12);
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

const generateRandomColor = () => {
  let nextChance = Math.random();
  let nextColor = "green";
  if (nextChance < 0.3) {
    nextColor = "pink";
  } else if (nextChance < 0.6) {
    nextColor = "blue";
  }

  return nextColor;
};

const gameOver = async () => {
  const finalScoreElement = document.getElementById(
    "final-score"
  ) as HTMLElement;
  finalScoreElement.innerHTML = score.toString();
  gameOverModal.style.visibility = "visible";
  gameOverModal.style.pointerEvents = "auto";
  gameOverModal.style.opacity = "1";
  await gameOverModal?.animate(
    animationConfig.keyframesIn,
    animationConfig.timingShort
  ).finished;

  document
    .getElementById("restart-game-button")
    ?.addEventListener("click", restartGame.bind(null, score, grid));
};

const restartGame = async () => {
  console.log("Restart Game");

  const tiles = document.querySelectorAll(`.tile:not(.next)`);
  tiles.forEach(async (tile) => {
    tile.innerHTML = "";
    await tile?.animate(
      animationConfig.keyframesOut,
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
  score = 0;
  const scoreElement = document.getElementById("score") as HTMLElement;
  scoreElement.innerHTML = score.toString();
  grid = {};
};

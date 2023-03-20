import { playSound } from "./audio";
import { animationConfig } from "./config";
import { floatingText, scoreCountAnimation } from "./floating-text";
import { gameStore } from "./store";
import { getMatchCountDescription } from "./utils";

// var comboSound = new Audio("/sounds/Tap03.wav");
// var combo2Sound = new Audio("/sounds/Woohoo05.wav");

// comboSound.volume = 0.25;
// combo2Sound.volume = 0.25;

export const checkGrid = async (x: number, y: number) => {
  const currentType = gameStore.state.grid[`${x}:${y}`];
  const currentTile = document.querySelector(
    `[data-grid-pos="${x}:${y}"] > .tile`
  ) as HTMLElement;
  // Check grid in all orthogonal directions
  let matchCount = 0; // TODO: can be computed out of matches{}
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
    const scoreElement = document.getElementById("score") as HTMLElement;

    gameStore.set((state) => ({
      score: state.score + parseInt(currentTile.innerHTML),
    }));
    let totalAddedScore = 1;

    if (matchCount > 4) {
      playSound("combo2Sound");
    } else {
      playSound("comboSound");
    }
    for (const pos in gameStore.state.matches) {
      if (Object.prototype.hasOwnProperty.call(gameStore.state.matches, pos)) {
        const tile = document.querySelector(
          `[data-grid-pos="${pos}"] > .tile`
        ) as HTMLElement;

        totalAddedScore += parseInt(tile.innerHTML);
        const result =
          parseInt(tile.innerHTML) + parseInt(currentTile.innerHTML);
        currentTile.innerHTML = result.toString();

        gameStore.set((state) => ({
          score: state.score + parseInt(tile.innerHTML),
        }));

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

    floatingText(`${getMatchCountDescription(matchCount)} match`);
    scoreElement.innerHTML = gameStore.state.score.toString();
    scoreCountAnimation(totalAddedScore);
  }

  // reset matches
  gameStore.set(() => ({
    matches: {},
  }));
};

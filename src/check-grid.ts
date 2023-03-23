import { playSound } from "./audio";
import { animationConfig } from "./config";
import { floatingText, scoreCountAnimation } from "./floating-text";
import { gameStore, numberOfMatches } from "./store";
import { getMatchCountDescription } from "./utils";

export const checkGrid = async (x: number, y: number) => {
  const currentType = gameStore.state.grid[`${x}:${y}`];
  const currentTile = document.querySelector(
    `[data-grid-pos="${x}:${y}"] > .tile`
  ) as HTMLElement;
  // Check grid in all orthogonal directions
  for (let i = x - 1; i >= x - 4; i--) {
    // Matching to the left
    const checkingType = gameStore.state.grid[`${i}:${y}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${i}:${y}`] = true;
    } else {
      break;
    }
  }

  for (let i = x + 1; i <= x + 4; i++) {
    // Matching to the right
    const checkingType = gameStore.state.grid[`${i}:${y}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${i}:${y}`] = true;
    } else {
      break;
    }
  }

  for (let j = y + 1; j <= y + 4; j++) {
    // Matching downwards
    const checkingType = gameStore.state.grid[`${x}:${j}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${x}:${j}`] = true;
    } else {
      break;
    }
  }

  for (let j = y - 1; j >= y - 4; j--) {
    // Matching upwards
    const checkingType = gameStore.state.grid[`${x}:${j}`];
    if (checkingType === currentType) {
      gameStore.state.matches[`${x}:${j}`] = true;
    } else {
      break;
    }
  }

  // If there are more than 2 other connecting tiles -> collapse
  const matches = numberOfMatches(gameStore.state);
  if (matches >= 2) {
    const scoreElement = document.getElementById("score") as HTMLElement;

    gameStore.set((state) => ({
      score: state.score + 1,
    }));

    let multiplier = 1;
    if (matches === 3) multiplier = 2;
    else if (multiplier >= 4) multiplier = 3;

    if (matches >= 3) {
      playSound("combo2Sound");
    } else {
      playSound("tootSound");
    }

    for (const pos in gameStore.state.matches) {
      if (Object.prototype.hasOwnProperty.call(gameStore.state.matches, pos)) {
        const [localX, localY] = pos.split(":");
        const tile = document.querySelector(
          `[data-grid-pos="${pos}"] > .tile`
        ) as HTMLElement;

        gameStore.set((state) => ({
          score: state.score + 1 * multiplier,
        }));

        scoreElement.innerHTML = gameStore.state.score.toString();

        const xMovement = x - parseInt(localX);
        const yMovement = y - parseInt(localY);
        const fontSize = parseInt(
          window.getComputedStyle(document.querySelector("html") as HTMLElement)
            .fontSize
        );

        tile?.animate(
          [
            { transform: `translateX(0px) translateY(0px)` },
            {
              transform: `
                translateX(${xMovement * 1.5 * fontSize * 2}px)
                translateY(${yMovement * fontSize * 2}px)
              `,
            },
          ],
          animationConfig.timingShort
        ).finished;
        await currentTile?.animate(
          animationConfig.keyframesIn,
          animationConfig.timingShort
        ).finished;

        tile?.remove();
        delete gameStore.state.matches[pos];
        delete gameStore.state.grid[pos];
      }
    }

    floatingText(`${getMatchCountDescription(matches)} match`);
    scoreElement.innerHTML = gameStore.state.score.toString();
    scoreCountAnimation(matches + 1, multiplier);
  }

  // reset matches
  gameStore.set(() => ({
    matches: {},
  }));
};

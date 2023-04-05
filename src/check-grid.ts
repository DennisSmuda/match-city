import { playSound } from "./audio";
import { animationConfig } from "./config";
import { floatingText, scoreCountAnimation } from "./floating-text";
import { gameStore, numberOfMatches } from "./store";
import { tutorialSteps } from "./tutorial";
import { getMatchCountDescription } from "./utils";

export const checkGrid = async (
  x: number,
  y: number,
  chainable: boolean = false
) => {
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

    playSound("confirmationSound");

    gameStore.set((state) => ({
      chain: chainable ? state.chain + 1 : state.chain,
    }));

    let multiplier = 1;
    if (gameStore.state.chain >= 2) multiplier = gameStore.state.chain;

    gameStore.set((state) => ({
      score: state.score + matches * multiplier,
    }));
    scoreElement.innerHTML = gameStore.state.score.toString();

    for (const pos in gameStore.state.matches) {
      if (Object.prototype.hasOwnProperty.call(gameStore.state.matches, pos)) {
        const [localX, localY] = pos.split(":");
        const tile = document.querySelector(
          `[data-grid-pos="${pos}"] > .tile`
        ) as HTMLElement;

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
                translateY(${yMovement * 1.5 * fontSize * 2}px)
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
    scoreCountAnimation(matches, multiplier);
  } else {
    gameStore.set((state) => ({
      chain: chainable ? 0 : state.chain,
    }));
  }
  updateCombo();
  // reset matches
  gameStore.set(() => ({
    matches: {},
  }));
};

const updateCombo = () => {
  if (gameStore.state.tutorialStep <= tutorialSteps) return;
  const messageEl = document.getElementById("game-message") as HTMLElement;
  if (gameStore.state.chain > 1) {
    messageEl.innerHTML = `combo x ${gameStore.state.chain}`;
  } else {
    messageEl.innerHTML = "&nbsp;";
  }
};

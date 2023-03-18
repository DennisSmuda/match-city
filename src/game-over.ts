import { animationConfig } from "./config";
import { gameStore } from "./store";

export const gameOver = async () => {
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

export const restartGame = async () => {
  const gameOverModal = document.getElementById("game-over") as HTMLElement;

  const tiles = document.querySelectorAll(`.tile:not(.next)`);
  tiles.forEach(async (tile) => {
    tile.innerHTML = "";
    await tile?.animate(animationConfig.keyframesDisappear, { duration: 0 })
      .finished;
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
    grid: {},
  }));

  const scoreElement = document.getElementById("score") as HTMLElement;
  scoreElement.innerHTML = gameStore.state.score.toString();
};

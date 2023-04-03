import { animationConfig } from "./config";
import { gameStore } from "./store";

export const gameOver = async () => {
  checkHighscore();

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

  const tiles = document.querySelectorAll(`.tile:not(.next):not(.demo)`);
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

const checkHighscore = () => {
  const personalBestScore = parseInt(localStorage.getItem("pb-score") || "0");
  const newScore = gameStore.state.score;

  const newBestScoreEl = document.querySelector(
    "#new-best-score"
  ) as HTMLElement;
  const oldBestScoreEl = document.querySelector(
    "#old-best-score"
  ) as HTMLElement;

  if (newScore > personalBestScore) {
    const scoreEl = document.querySelector(
      "#new-best-score span"
    ) as HTMLElement;

    newBestScoreEl.style.display = "inline-block";
    oldBestScoreEl.style.display = "none";
    localStorage.setItem("pb-score", `${newScore}`);
    scoreEl.innerHTML = ` (previously ${personalBestScore})`;
  } else {
    const scoreEl = document.querySelector(
      "#old-best-score .score"
    ) as HTMLElement;
    oldBestScoreEl.style.display = "inline-block";
    newBestScoreEl.style.display = "none";
    scoreEl.innerHTML = `${personalBestScore}`;
  }
};

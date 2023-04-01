import { gameStore } from "./store";

export const scoreCountAnimation = async (
  amount: number,
  multiplier: number = 1
) => {
  const scoreElement = document.getElementById("score") as HTMLElement;
  const scoreText = document.createElement("div");
  scoreText.classList.add("floating-text", "score");
  scoreText.innerHTML = `${amount.toString()}`;
  if (multiplier > 1) {
    scoreText.innerHTML += ` <span class="multiplier">x${multiplier.toString()}</span>`;
  }
  scoreElement?.appendChild(scoreText);
  await scoreText.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-1rem)", opacity: 0 },
    ],
    2000
  ).finished;

  scoreText.remove();
};

export const floatingText = async (
  message: string,
  color: string = "white"
) => {
  const scoreText = document.createElement("div");
  scoreText.classList.add("floating-text", color);
  scoreText.innerHTML = message;
  scoreText.style.left = `${gameStore.state.mouse.x}px`;
  scoreText.style.top = `calc(${gameStore.state.mouse.y}px - 2rem)`;
  scoreText.style.textAlign = "center";

  document.body.appendChild(scoreText);
  await scoreText.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-2rem)", opacity: 0 },
    ],
    1250
  ).finished;

  scoreText.remove();
};

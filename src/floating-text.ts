export const scoreCountAnimation = async (amount: number) => {
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

export const floatingText = async (x: number, y: number, message: string) => {
  const scoreText = document.createElement("div");
  scoreText.classList.add("floating-text");
  scoreText.innerHTML = message;
  scoreText.style.left = "1px";
  scoreText.style.top = y.toString();

  document.body.appendChild(scoreText);
  await scoreText.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-1rem)", opacity: 0 },
    ],
    500
  ).finished;

  // scoreText.remove();
};

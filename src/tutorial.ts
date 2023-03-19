import { gameStore } from "./store";
import { generateTile } from "./tile-generation";

export const tutorialSteps = 5;

const middleCell = document.querySelector(
  `[data-grid-pos="2:2"]`
) as HTMLElement;

const secondCell = document.querySelector(
  `[data-grid-pos="2:1"]`
) as HTMLElement;
const messageEl = document.getElementById("game-message") as HTMLElement;

export const launchTutorial = async () => {
  messageEl.innerHTML = "Welcome to Match City!";
  await new Promise((resolve) => setTimeout(resolve, 2500));
  if (gameStore.state.tutorialStep === 0) {
    messageEl.innerHTML = "Click to advance";
  }
};

export const updateTutorial = async () => {
  middleCell.classList.remove("highlight");
  const currentStep = gameStore.state.tutorialStep;

  if (currentStep === 1) {
    generateTile("primary", 2, 1);
    generateTile("primary", 2, 3);
    generateTile("primary", 1, 1);
    messageEl.innerHTML = `Place your first tile on the highlighted area!`;

    middleCell.classList.add("highlight");
  } else if (currentStep === 2) {
    messageEl.innerHTML = `Nice! Try another one!`;
    console.log(" update");
    generateTile("primary", 2, 0);
    generateTile("primary", 2, 3);
    generateTile("primary", 2, 4);
    secondCell.classList.add("highlight");
  } else if (currentStep === 3) {
    secondCell.classList.remove("highlight");
    messageEl.innerHTML = `There are more colors now?!`;
  } else if (currentStep === 4) {
    messageEl.innerHTML = `Also, after each turn, a random tile gets placed`;
  } else if (currentStep === 5) {
    messageEl.innerHTML = "Good luck, have fun!";
    localStorage.setItem("has-finished-tutorial", "true");
    await new Promise((resolve) => setTimeout(resolve, 2500));
    messageEl.style.opacity = "0";
  }

  gameStore.set((state) => ({
    tutorialStep: state.tutorialStep + 1,
  }));
};

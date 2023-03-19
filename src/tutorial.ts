import { gameStore } from "./store";
import { generateTile } from "./tile-generation";

const middleCell = document.querySelector(
  `[data-grid-pos="2:2"]`
) as HTMLElement;

const secondCell = document.querySelector(
  `[data-grid-pos="2:1"]`
) as HTMLElement;

export const launchTutorial = () => {
  generateTile("primary", 2, 1);
  generateTile("primary", 2, 3);
  generateTile("primary", 1, 1);

  middleCell.classList.add("highlight");
};

export const updateTutorial = () => {
  middleCell.classList.remove("highlight");
  if (gameStore.state.tutorialStep === 1) {
    console.log(" update");
    generateTile("primary", 2, 0);
    generateTile("primary", 2, 3);
    generateTile("primary", 2, 4);
    secondCell.classList.add("highlight");
    gameStore.set((state) => ({
      tutorialStep: state.tutorialStep + 1,
    }));
  }
};

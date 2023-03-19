import { makeStore } from "statery";
import { AvailableThemes } from "./theming";

export const gameStore = makeStore<{
  score: number;
  grid: { [key: string]: any };
  matches: { [key: string]: any };
  mouse: { x: number; y: number };
  currentTheme: AvailableThemes;
  tutorialStep: number;
}>({
  score: 0,
  grid: {},
  matches: {},
  mouse: { x: 0, y: 0 },
  currentTheme: "black",
  tutorialStep: 0,
});

import { makeStore } from "statery";

export const gameStore = makeStore<{
  score: number;
  grid: { [key: string]: any };
  matches: { [key: string]: any };
  mouse: { x: number; y: number };
}>({
  score: 0,
  grid: {},
  matches: {},
  mouse: { x: 0, y: 0 },
});

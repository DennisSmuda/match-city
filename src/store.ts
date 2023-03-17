import { makeStore } from "statery";

export const gameStore = makeStore<{
  score: number;
  grid: { [key: string]: any };
}>({
  score: 0,
  grid: {},
});

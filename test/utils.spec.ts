import { expect, it } from "vitest";
import { screen } from "@testing-library/dom";
import { generateRandomColor, getRandomGridPosition } from "../src/utils";

it("has useful util functions", async () => {
  expect(screen).toBeDefined();

  const color = generateRandomColor();
  expect(color).toBeTypeOf("string");

  const position = getRandomGridPosition();
  expect(position.x).toBeTypeOf("number");
  expect(position.y).toBeTypeOf("number");
});

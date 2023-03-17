export const generateRandomColor = () => {
  let nextChance = Math.random();
  let nextColor = "green";
  if (nextChance < 0.3) {
    nextColor = "pink";
  } else if (nextChance < 0.6) {
    nextColor = "blue";
  }

  return nextColor;
};

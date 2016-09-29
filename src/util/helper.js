export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function square(x) {
        return x * x;
    }


// Helper function to generate next upcoming tile.
export function newNextTile(nextTiles) {
  let k = Math.random();

  if (k < 0.3) {
    nextTiles.push('blue');
  }
  else if (k < 0.6) {
    nextTiles.push('red');
  }
  else {
    nextTiles.push('yellow');
  }

}

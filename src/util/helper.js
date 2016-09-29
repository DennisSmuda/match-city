export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function square(x) {
        return x * x;
    }


// Helper function to generate next upcoming tile.
export function newNextTile(nextTiles) {
  let k = Math.random();

  if (k < 0.16) {
    nextTiles.push('blue');
  }
  else if (k < 0.32) {
    nextTiles.push('red');
  }
  else if (k < 0.48) {
    nextTiles.push('yellow');
  }
  else if (k < 0.64) {
    nextTiles.push('purple');
  }
  else if (k < 0.80) {
    nextTiles.push('green');
  }
  else nextTiles.push('orange');

}

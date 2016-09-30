export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function square(x) {
        return x * x;
    }


// Helper function to generate next upcoming tile.
export function newNextTiles(nextTiles) {
  let k = getRandomInt(1, 10);
  k = (k-4)/10;

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
    nextTiles.push('orange');
  }
  else if (k < 0.80) {
    nextTiles.push('green');
  }
  else nextTiles.push('purple');
}


export function newRandomTiles(gamestate) {
  let num         = gamestate.numRand;
  let randomTiles = gamestate.nextRandoms;


  for (let i = 0; i <= num; i++) {
    let k = getRandomInt(1, 10);
    k =(k-4)/10;
    console.log(k);

    if (k < 0.16) {
      randomTiles.push('blue');
    }
    else if (k < 0.32) {
      randomTiles.push('red');
    }
    else if (k < 0.48) {
      randomTiles.push('yellow');
    }
    else if (k < 0.64) {
      randomTiles.push('orange');
    }
    else if (k < 0.80) {
      randomTiles.push('green');
    }
    else randomTiles.push('purple');
  }
}

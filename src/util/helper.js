export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function square(x) {
        return x * x;
    }


// Helper function to generate next upcoming tile.
export function newNextTiles(gamestate) {
  let nextTiles = gamestate.nextTiles;
  let k = getRandomInt(0, gamestate.numTiles-1);
  // console.log(k);
  if (k == 0) {
    nextTiles.push('red');
  }
  else if (k == 1) {
    nextTiles.push('blue');
  }
  else if (k == 2) {
    nextTiles.push('green');
  }
  else if (k == 3) {
    nextTiles.push('purple');
  }
  else if (k == 4) {
    nextTiles.push('yellow');
  }
  else if (k == 5) {
    nextTiles.push('orange');
  }
}

/**
 * Generate new Random placed tiles.
 * - Go through amount of tiles to be spawned.
 * - Calculate factor k -> k = random(0,numTiles)/10
 */
export function newRandomTiles(gamestate) {
  let num         = gamestate.numRand;
  let randomTiles = gamestate.nextRandoms;
  let differentTiles = gamestate.numTiles;

  if (gamestate.tilesOnGrid > 34) {
    gamestate.randomCounter = 0;
    // gamestate.numRand       = 0;
    return false;
  } else if (gamestate.randomCounter == 0 && gamestate.numRand < 1) {
    gamestate.randomCounter = getRandomInt(gamestate.minTurns, gamestate.maxTurns);
    gamestate.numRand       = getRandomInt(gamestate.minNumRand, gamestate.maxNumRand);
  }

  if (gamestate.tilesOnGrid <= 4) { num = 12; }

  for (let i = 0; i <= num; i++) {
    let k = getRandomInt(0, gamestate.numTiles-1);
    // k = k / gamestate.numTiles;
    /**
     *
     */
    if (k == 0) {
      randomTiles.push('red');
    }
    else if (k == 1) {
      randomTiles.push('blue');
    }
    else if (k == 2) {
      randomTiles.push('green');
    }
    else if (k == 3) {
      randomTiles.push('purple');
    }
    else if (k == 4) {
      randomTiles.push('yellow');
    }
    else if (k == 5) {
      randomTiles.push('orange');
    }
  }

  gamestate.randomCounter = getRandomInt(gamestate.minTurns, gamestate.maxTurns);
  gamestate.numRand       = getRandomInt(gamestate.minNumRand, gamestate.maxNumRand);
  return true;

}

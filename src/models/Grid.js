import Tile from './Tile';
import UI from './UI';
import TileMatcher from './TileMatcher';


import { newNextTiles, newRandomTiles, getRandomInt } from '../util/helper';


export default class Grid {
  constructor(game, gamestate) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid       = new Array(this.rows);
    this.tileGroup  = this.game.add.group();
    this.nextTile   = gamestate.nextTile;
    this.gamestate  = gamestate;
    this.possibleMatches = [];
    this.lastHovered = {
      x: null,
      y: null
    };
    this.newLevel = 1;

    this.UI = new UI(this.game, this.gamestate);
    this.TileMatcher = new TileMatcher(this.game, this.gamestate, this.grid, this.possibleMatches);

    this.tilesOnGrid = 0;
    this.initGrid();

  }

  initGrid() {
    /**
     * Initialize 2D array for easier referencing '[][]' - style
     * Additional grouping to control render order (zIndex)
     */
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64, 'empty', this.gamestate);
        this.tileGroup.add(this.grid[i][j]);
      }
    }
      newRandomTiles(this.gamestate);
      this.spawnRandomTiles();
  }

  resetPotentialLevels() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j].potentialLevel = 1;
      }
    }
  }

  generateNewLevel() {
    this.newLevel = 0;
    /**
    * Level check based on ( 1 + (i*3) ) | 1, 3, 6, 9, 12, etc..
    */
    let ones = this.gamestate.connectingLevels[1];

    for (let i = this.gamestate.maxLevel; i >= 0; i--) {

      if (i == 0) {
        if (this.newLevel == 0) { this.newLevel += 3; }
        if (ones >= 6) { this.newLevel += 6; }
      } else {
        let amount = this.gamestate.connectingLevels[i*3];
        let level  = i*3;
        if (amount >= 2) { this.newLevel += level*3 ;}
        if (amount >= 4) { this.newLevel *=2 ;}
      }
    }

    this.grid[this.gamestate.hovering.x][this.gamestate.hovering.y].updatePotentialLevel(this.newLevel);
  }

  updateLevel() {
    this.generateNewLevel();

    this.grid[this.gamestate.lastClicked.x][this.gamestate.lastClicked.y].updateLevel(this.newLevel);

    this.gamestate.needLevelUp = false;
    this.TileMatcher.resetConnecting();
    this.resetPotentialLevels();
    // this.gamestate.randomCounter += this.newLevel / 3;
  }

  update() {

    if (this.gamestate.needLevelUp) {
      this.updateLevel();
    }
    // Generate next tile randomly
    if (this.gamestate.nextTiles.length < 3) {
      newNextTiles(this.gamestate);
      this.UI.updateNextTiles();
    }

    // Spawn Random tiles
    if (this.gamestate.randomCounter == 0 &&
        this.gamestate.matchesHandled && this.gamestate.clickHandled) {
          if (newRandomTiles(this.gamestate)) {
            if (!this.gamestate.debug) {
              this.spawnRandomTiles();
            }
          }
    }

    // Handle Click
    if (!this.gamestate.clickHandled &&
        this.gamestate.lastClicked.x !== null) {
      this.handleClick();
    }
    // Return if there are still matches/clicks being handled
    if (!this.gamestate.matchesHandled &&
        !this.gamestate.clickHandled) {
        return;
    }

    // Finds possible Matches on
    // every new hovered tile
    if (this.gamestate.matchesHandled) {
      if (this.gamestate.updateMatches) {
        this.findPossibleMatches();
      }
    }
  }

  handleClick() {
    // Decrease counter each click
    this.gamestate.turns++;
    if (this.gamestate.tilesOnGrid >= (this.cols * this.rows)) {
      console.log('Loose');
      // this.gameOver();
    }

    console.log(this.gamestate.tilesOnGrid);
    if (this.gamestate.turns == 5) {
      this.gamestate.averageLevel = 3;
    }
    if (this.gamestate.turns == 150) {
      this.gamestate.averageLevel = 6;
    }

    if (this.gamestate.randomCounter > 0) {
      this.gamestate.randomCounter--;
    }
    this.UI.updateInfo();

    let numMatches = this.possibleMatches.length;

    // Have at least 2 Matching tiles ready
    if (numMatches < this.gamestate.minimumConnecting) {
      this.gamestate.matchesHandled = true;
      this.gamestate.clickHandled   = true;
      return;
    }

    // Toggle control variables
    this.gamestate.clickHandled = false;
    this.gamestate.matchesHandled = false;
    this.gamestate.matches++;
    // TODO: maybe add, to delay random spawns
    // this.gamestate.randomCounter++;

    // Loop through array and collapse all matching (surrounding tiles)
    while (numMatches > 0 && !this.gamestate.matchesHandled) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      // Delay next random counter
      (this.possibleMatches[numMatches-1]).collapse();
      this.possibleMatches.splice(numMatches-1, 1);
      this.gamestate.individualMatches++;
      numMatches--;
    }

    this.UI.updateInfo();
    // console.log(this.gamestate.connectingLevels);

    this.gamestate.clickHandled = true;
  }



  findPossibleMatches() {
    this.gamestate.updateMatches = false;
    // Check all possible matches on
    // the current hovered tile.
    if (this.gamestate.hovering.x === null) { return; }

    // Currently Hovering
    let x           = this.gamestate.hovering.x;
    let y           = this.gamestate.hovering.y;
    let currentType = this.gamestate.nextTiles[0];

    if (this.lastHovered.x === null) {
      this.lastHovered.x = x;
      this.lastHovered.y = y;
    }

    // Only check once per hover
    if (this.lastHovered.x == x && this.lastHovered.y == y) {
      return;
    } else {
      // New Hover position
      this.lastHovered.x = x;
      this.lastHovered.y = y;
      this.TileMatcher.clearPossibleMatches();
    }

    this.TileMatcher.checkMatches(x, y, currentType);

    // If at least than 2 Matching tiles
    if (this.possibleMatches.length >= 2) {
      this.generateNewLevel();
      for (let match of this.possibleMatches) {
        match.startWiggling();
      }
    }
  }

  spawnRandomTiles() {
    let randX = getRandomInt(0, 6);
    let randY = getRandomInt(0, 6);
    let counter = this.gamestate.numRand;

    while (counter) {
      if (this.grid[randX][randY].type == 'empty') {
        // console.log('Spawning ' +  this.gamestate.nextRandoms[counter])
        this.grid[randX][randY].spawn(counter);
        counter--;
      } else {
        randX = getRandomInt(0, 6);
        randY = getRandomInt(0, 6);
      }
    }
  }


  gameOver() {
    console.log('Game Over');
    this.game.state.start('GameOver');
  }
}

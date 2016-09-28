import Tile from './Tile';

export default class Grid {
  constructor(game, gamestate) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid = new Array(this.rows);
    this.nextTile = gamestate.nextTile;
    this.gamestate = gamestate;
    this.possibleMatches = [];
    this.lastHovered = {
      x: null,
      y: null
    };

    this.tilesOnGrid = 0;

    this.initGrid();

  }

  initGrid() {
    // Initialize 2D Grid Array
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64, 'empty', this.nextTile, this.gamestate);
      }
    }
  }


  update() {

    if (!this.gamestate.matchesHandled &&
      !this.gamestate.clickHandled) {
        console.log('Nothing handled');
        return;
      }

    // Finds possible Matches on
    // every new hovered tile
    if (this.gamestate.matchesHandled) {
      this.findPossibleMatches();
    }

    // console.log(this.possibleMatches);

    if (!this.gamestate.clickHandled &&
         this.gamestate.lastClicked.x !== null) {
      this.handleClick();
    }

    // console.log(this.gamestate.matchesHandled);
    // console.log(this.possibleMatches.length);
    // this.gamestate.matchesHandled = false;


  }

  handleClick() {
    // console.log('Handle Click')

    if (this.gamestate.tilesOnGrid == 1) {
      this.gamestate.clickHandled = true;
      this.gamestate.matchesHandled = true;
      return;
    }
    let numMatches = this.possibleMatches.length;

    this.gamestate.clickHandled = false;
    this.gamestate.matchesHandled = false;


    if (numMatches == 0) {
      console.log('No matches')
      this.gamestate.matchesHandled = true;
      this.gamestate.clickHandled   = true;
      return;
    }


    while (numMatches > 0 && !this.gamestate.matchesHandled) {
      console.log(this.possibleMatches[numMatches-1]);
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      (this.possibleMatches[numMatches-1]).collapse(numMatches-1);
      // this.possibleMatches.splice(numMatches-1, 1);
      numMatches--;
    }



    // this.gamestate.matchesHandled = true;
    console.log('CLICK HANDLED')

    this.gamestate.clickHandled = true;

  }

  check(x, y) {
    if (this.grid[x][y].tilestate.type == this.nextTile) {
      return true;
    } else {
      return false;
    }
  }

  clearPossibleMatches() {
    // console.log('Clear wiggles');
    let numMatches = this.possibleMatches.length;
    while (numMatches > 0) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      this.possibleMatches[numMatches-1].stopWiggling();
      this.possibleMatches.splice(numMatches-1, 1);
      numMatches--;
    }
  }

  findPossibleMatches() {
    // console.log('Find Possible');

    // Check all possible matches on
    // the current hovered tile.
    if (this.gamestate.hovering.x === null) {
      return;
    }

    // Currently Hovering
    let x           = this.gamestate.hovering.x;
    let y           = this.gamestate.hovering.y;
    let currentType = this.nextTile;

    if (this.lastHovered.x === null) {
      this.lastHovered.x = x;
      this.lastHovered.y = y;
    }

    if (this.lastHovered.x == x && this.lastHovered.y == y) {
      // Only do the checks once

      return;
    } else {
      // New Hover position
      this.lastHovered.x = x;
      this.lastHovered.y = y;
      this.clearPossibleMatches();
    }

    console.log('New Hover');

    if (x < 6) {

      if (this.check(x+1, y)) {
        console.log('match to the left');
        // console.log((this.grid[x+1][y]).addWiggle);
        this.grid[x+1][y].direction = 'left';
        this.possibleMatches.push(this.grid[x+1][y]);
        console.log('add match')

        if (y < 6) {
          if (this.check(x, y+1)) {
            console.log('match down');
          }

          if (y < 5) {
            if (this.check(x, y+2)) {
              console.log('double match down');
            }
          }

        }
      }
    }

    // TODO: Replace with > 2 to have at least three matching tiles.
    if (this.possibleMatches.length >= 1) {
    // console.log('Start wiggle');
      for (let match of this.possibleMatches) {
        match.startWiggling();
      }
    }
  }
}

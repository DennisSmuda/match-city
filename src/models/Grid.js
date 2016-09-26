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
    // console.log('Update');
    this.findPossibleMatches();
    // console.log(this.possibleMatches);

  }

  check(x, y) {
    if (this.grid[x][y].tilestate.type == this.nextTile) {
      return true;
    } else {
      return false;
    }
  }

  clearWiggles() {
    let numMatches = this.possibleMatches.length;
    while (numMatches > 0) {
      // Go Backwards through possibleMatches
      // this.possibleMatches[numMatches].stopWiggle();
      this.possibleMatches[numMatches-1].stopWiggling();
      console.log(numMatches);
      numMatches--;


    }

    // this.possibleMatches = new Array();

  }

  findPossibleMatches() {
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
      this.clearWiggles();
    }


    if (x < 6) {

      if (this.check(x+1, y)) {
        console.log('match to the left');
        // console.log((this.grid[x+1][y]).addWiggle);
        this.grid[x+1][y].startWiggling('left');
        this.possibleMatches.push(this.grid[x+1][y]);

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


      // if (this.grid[i][j+1].tilestate.type == currentType) {
      //   if (this.grid[i][j+2].tilestate.type == currentType) {
      //     this.tripleDownMatch(i, j);
      //   } else {
      //     this.doubleDownMatch(i, j);
      //   }
      //
      //   // console.log(this.grid[i][j-1]);
      //   let toDelete = this.grid[i][j];
      //   toDelete.resetToEmpty();
      //
      }


    }
  }

  doubleDownMatch(i, j) {
    console.log(this.gamestate.lastClicked);

  }

  tripleDownMatch(i, j) {

  }


}

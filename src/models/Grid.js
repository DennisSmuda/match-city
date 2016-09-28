import Tile from './Tile';



export default class Grid {
  constructor(game, gamestate) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid = new Array(this.rows);
    this.tiles = this.game.add.group();
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
    /**
     * Initialize 2D array for easier referencing '[][]' - style
     * Additional grouping to control render order (zIndex)
     */
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64, 'empty', this.nextTile, this.gamestate);
        this.tiles.add(this.grid[i][j]);
      }
    }
  }


  update() {

    // Return if there are still matches/clicks being handled
    if (!this.gamestate.matchesHandled &&
        !this.gamestate.clickHandled) {
        return;
      }


    // Finds possible Matches on
    // every new hovered tile
    if (this.gamestate.matchesHandled) {
      this.findPossibleMatches();
    }

    // Handle Click
    if (!this.gamestate.clickHandled &&
         this.gamestate.lastClicked.x !== null) {
      this.handleClick();
    }

  }

  handleClick() {
    // console.log('Handle Click')
    let numMatches = this.possibleMatches.length;

    if (numMatches == 0) {
      this.gamestate.matchesHandled = true;
      this.gamestate.clickHandled   = true;
      return;
    }

    // Toggle control variables
    this.gamestate.clickHandled = false;
    this.gamestate.matchesHandled = false;


    // Loop through array and collapse all matching (surrounding tiles)
    while (numMatches > 0 && !this.gamestate.matchesHandled) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      (this.possibleMatches[numMatches-1]).collapse();
      this.possibleMatches.splice(numMatches-1, 1);
      numMatches--;
    }

    this.gamestate.clickHandled = true;
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
    // Check all possible matches on
    // the current hovered tile.
    if (this.gamestate.hovering.x === null) { return; }

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

    // CHeck to the right
    if (x < 6) {

      if (this.check(x+1, y)) {
        console.log('match to the left');
        // console.log((this.grid[x+1][y]).addWiggle);
        this.grid[x+1][y].direction = 'left';
        this.possibleMatches.push(this.grid[x+1][y]);


        if (y < 6) {
          if (this.check(x, y+1)) {
            console.log('match down');
            this.grid[x][y+1].direction = 'up';
            this.possibleMatches.push(this.grid[x][y+1]);
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

  check(x, y) {
    if (this.grid[x][y].type == this.nextTile) {
      return true;
    } else {
      return false;
    }
  }
}

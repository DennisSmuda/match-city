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

    if (numMatches <= 1) {
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

    // Check right
    if (x < 6) {
      if (this.check(x+1, y)) {
        this.possibleMatches.push(this.grid[x+1][y]);

        if (x < 5) {
          if (this.check(x+2, y)) {
            this.possibleMatches.push(this.grid[x+2][y]);
          }
        }

        // Right Top
        if (y > 0) {
          if (this.check(x+1, y-1)) {
            this.possibleMatches.push(this.grid[x+1][y-1]);
          }
        }
        // Right Bot
        if (y < 6) {
          if (this.check(x+1, y+1)) {
            this.possibleMatches.push(this.grid[x+1][y+1]);
          }
        }
      }
    }

    // Check left
    if (x > 0) {
      if (this.check(x-1, y)) {
        this.possibleMatches.push(this.grid[x-1][y]);

        if (x > 1) {
          if (this.check(x-2, y)) {
            this.possibleMatches.push(this.grid[x-2][y]);
          }
        }
        // Left Top
        if (y > 0) {
          if (this.check(x-1, y-1)) {
            this.possibleMatches.push(this.grid[x-1][y-1]);
          }
        }
        // Left Down
        if (y < 6) {
          if (this.check(x-1, y+1)) {
            this.possibleMatches.push(this.grid[x-1][y+1]);
          }
        }
      }
    }

    // Check down
    if (y < 6) {
      if (this.check(x, y+1)) {
        this.possibleMatches.push(this.grid[x][y+1]);
        // Double Down
        if (y < 5) {
          if (this.check(x, y+2)) {
            this.possibleMatches.push(this.grid[x][y+2]);
          }
        }
        // Down-Left
        if (x > 0) {
          if (this.check(x-1, y+1)) {
            this.possibleMatches.push(this.grid[x-1][y+1]);
          }
        }
        // Down-Right
        if (x < 6) {
          if (this.check(x+1, y+1)) {
            this.possibleMatches.push(this.grid[x+1][y+1]);
          }
        }
      }
    }

    // Check upwards
    if (y > 0) {
      if (this.check(x, y-1)) {
        this.possibleMatches.push(this.grid[x][y-1]);

        if (y > 1) {
          if (this.check(x, y-2)) {
            this.possibleMatches.push(this.grid[x][y-2]);
          }
        }
        // UP-Left
        if (x > 0) {
          if (this.check(x-1, y-1)) {
            this.possibleMatches.push(this.grid[x-1][y-1]);
          }
        }
        // Up-Right
        if (x < 6) {
          if (this.check(x+1, y-1)) {
            this.possibleMatches.push(this.grid[x+1][y-1]);
          }
        }
      }
    }

    // TODO: Replace with > 2 to have at least three matching tiles.
    if (this.possibleMatches.length >= 2) {
      for (let match of this.possibleMatches) {
        match.startWiggling();
      }
    }
  }

  check(x, y) {
    // console.log('checking: ' +);
    if (this.grid[x][y].type == this.nextTile) {
      return true;
    } else {
      return false;
    }
  }
}

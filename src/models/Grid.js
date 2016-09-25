import Tile from './Tile';

export default class Grid {
  constructor(game, gamestate) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid = new Array(this.rows);
    this.nextTile = gamestate.nextTile;
    this.gamestate = gamestate;

    this.initGrid();

  }

  initGrid() {
    // Initialize 2D Grid Array
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64+4, 'empty', this.nextTile, this.gamestate);
      }
    }
  }


  update() {
    // console.log('Update');
    this.findMatches();

  }

  findMatches() {
    // Loop through grid array
    // check matches, and collapse
    // into last clicked/set tile.
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        // Check for last clicked tile

        // console.log(this.grid[i][j].tilestate.level);
        if (this.grid[i][j].tilestate.level > 0) {
          let currentType = this.grid[i][j].tilestate.type;
          // console.log(currentType);

          if (this.grid[i][j+1] && this.grid[i][j+1].tilestate.type == currentType) {
            console.log('down match');

            // console.log(this.grid[i][j-1]);
            let toDelete = this.grid[i][j];
            toDelete.resetToEmpty();

          }


        }
      }
    }
  }


}

import Tile from './Tile';

export default class Grid {
  constructor(game, state) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid = new Array(this.rows);
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    console.log('Grid Construct');

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64+6, 'empty', state.nextTile);
      }
    }

  }


  update() {
    console.log('Update');
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        // Loop through grid array
        // check matches, and collapse
        // into last clicked/set tile.


        if (this.grid[i][j].tilestate.level > 0) {

        }


      }
    }

  }


}

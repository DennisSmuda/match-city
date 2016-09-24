
import Tile from '../models/Tile';
import Grid from '../models/Grid';


export default class Play extends Phaser.State {

  create() {
    this.state = {
      lastClicked: {
        x: null,
        y: null
      },
      nextTile: 'blue'
    }
    // let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.gameBackground = this.add.sprite(0, 0, 'game-background');

    // this.tile = new Tile(this.game, 4, 4, 'blue');
    this.grid = new Grid(this.game, this.state);

  }

  update() {

    this.grid.update();


  }
}

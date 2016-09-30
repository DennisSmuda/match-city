
import Tile from '../models/Tile';
import Grid from '../models/Grid';


export default class Play extends Phaser.State {

  create() {
    this.gamestate = {
      minimumConnecting: 2,
      connectingLevels: {
        1: 0,
        3: 0,
        6: 0,
        9: 0,
        12:0,
        15:0,
      },
      needLevelUp: false,
      nextLevel: 1,
      lastClicked: {
        x: null,
        y: null
      },
      hovering: {
        x: null,
        y: null
      },
      nextTile: 'blue',
      clickHandled: true,
      matchesHandled: true,
      tilesOnGrid: 0,
      nextTiles: [],
      nextRandoms: [],
      turns: 0,
      matches: 0,
      individualMatches: 0,
      numRand: 0,
      randomCounter: 10,
    }
    // let center = { x: this.game.world.centerX, y: this.game.world.centerY }
    this.gameBackground = this.add.sprite(0, 0, 'game-background');

    // this.tile = new Tile(this.game, 4, 4, 'blue');
    this.grid = new Grid(this.game, this.gamestate);
  }

  update() {
    this.grid.update();
  }
}

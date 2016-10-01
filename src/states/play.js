
import Tile from '../models/Tile';
import Grid from '../models/Grid';


export default class Play extends Phaser.State {

  create() {
    this.gamestate = {
      minimumConnecting: 2,
      // 33 * 3 = 99
      maxLevel: 6,
      connectingLevels: { },
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
      updateMatches: false,
      tilesOnGrid: 0,
      nextTiles: [],
      nextRandoms: [],
      turns: 0,
      matches: 0,
      individualMatches: 0,
      // Random Spawns
      numRand: 12,
      minNumRand: 3,
      maxNumRand: 5,
      minTurns:   2,
      maxTurns:   5,
      randomCounter: 3,

      score: 0,
      // Min: 1 - Max: 6 || boring under 4?
      numTiles:   1
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

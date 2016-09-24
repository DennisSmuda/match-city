
export default class Preload extends Phaser.State {

  constructor() {
    super();
    this.background = null;
    this.preloadBar = null;
    this.ready      = false;
  }

  preload() {
    this.stage.backgroundColor = '#C2C2C2';
    this.load.image('game-background', 'assets/images/game-background.png');

    this.load.image('blue', 'assets/images/blue-tile.png');
    this.load.image('red', 'assets/images/red-tile.png');
    this.load.image('empty', 'assets/images/empty-tile.png');
  }

  create() {

  }

  update() {
    if (this.ready == false) {
      this.ready = true;
      this.state.start('play');
    }
  }

}

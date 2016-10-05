
export default class Preload extends Phaser.State {

  constructor() {
    super();
    this.background = null;
    this.preloadBar = null;
    this.ready      = false;
  }

  preload() {
    this.stage.backgroundColor = '#1A0039';
    // this.load.image('game-background', 'assets/images/game-background.png');
    this.load.image('game-background', 'assets/images/game-bg.png');
    this.load.image('next-arrow', 'assets/images/next-arrow.png');
    this.load.image('particle', 'assets/images/particle.png');

    this.load.image('blue', 'assets/images/blue-tile.png');
    this.load.image('red', 'assets/images/red-tile.png');
    this.load.image('yellow', 'assets/images/yellow-tile.png');
    this.load.image('purple', 'assets/images/purple-tile.png');
    this.load.image('orange', 'assets/images/orange-tile.png');
    this.load.image('green', 'assets/images/green-tile.png');

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

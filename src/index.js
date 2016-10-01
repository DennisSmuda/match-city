
import play from './states/play';
import preload from './states/preload';
import gameover from './states/gameover';

class Game extends Phaser.Game {
// 563 - 736
  constructor() {

    super(460, 636, Phaser.CANVAS, 'content', null);
    this.state.add('preload', preload);
    this.state.add('gameover', gameover);
    this.state.add('play', play, false);
    this.state.start('preload');
  }

}

new Game();

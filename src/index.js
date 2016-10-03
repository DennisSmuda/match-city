
import play from './states/play';
import preload from './states/preload';
import gameover from './states/gameover';

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

class Game extends Phaser.Game {
  constructor() {
    super(460, 636, Phaser.CANVAS, 'content', null);
    console.log(this);
    this.state.add('preload', preload);
    this.state.add('gameover', gameover);
    this.state.add('play', play, false);
    this.state.start('preload');
  }
}

new Game();

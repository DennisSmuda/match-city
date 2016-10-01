
export default class Preload extends Phaser.State {

  constructor(game) {
    super();
    this.game = game;
  }

  preload() {

  }

  create() {
    this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
    this.label = this.game.add.text(width / 2 , height / 2, 'Score: '+score+'\nGAME OVER\nPress SPACE to restart',{ font: '22px Lucida Console', fill: '#fff', align: 'center'});
    this.label.anchor.setTo(0.5, 0.5);
  }

  update() {
    if (this.spacebar.isDown) game.state.start('Play');
  }

}

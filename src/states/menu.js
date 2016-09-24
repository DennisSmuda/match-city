export default class Menu extends Phaser.State {
  preload() {
    this.load.image('titlepage', './assets/titlepage.png');
  }

  create() {
    // console.log("Menu");
    this.titlepage = this.add.sprite(240, 240, 'titlepage');
    this.titlepage.anchor.setTo(0.5, 0.5);

    this.titleText   = this.add.text(240, 100, "Match City", {font: "32px Roboto Mono", fill: "#fff", align: 'center'}).anchor.setTo(0.5, 0.5);
    this.loadingText = this.add.text(240, 400, 'Space or Click to start\nQ to return to this screen', { font: '15px Roboto Mono', fill: '#fff', align: 'center'});
    this.loadingText.anchor.setTo(0.5, 0.5);
  }

  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.input.activePointer.isDown) {
      this.startGame();
    }
  }

  startGame() {
    this.state.start('Play');
  }
}

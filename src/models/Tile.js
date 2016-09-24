
export default class Tile extends Phaser.Sprite {

  constructor(game, x, y, frame, nextTile) {
    super(game, x, y, frame);
    this.game = game;
    this.isPlaced = false;
    this.enableBody = true;

    this.nextTile = nextTile;
    this.xPos = (x-6)/64;
    this.yPos = (y-6)/64;
    this.tilestate = {
      'level': 0,
      'type' : 'empty'
    }

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

    // Input & Events
    this.inputEnabled = true;
    this.events.onInputOver.add(this.onInputOver, this);
    this.events.onInputOut.add(this.onInputOut, this);
    this.events.onInputDown.add(() => { this.onClick(); }, this);

    // Points
    const style = { font: "20px Roboto Mono", fill: "#ffffff", textalign: "center" };
    this.label_score = this.game.add.text(32, 32, this.tilestate.level, style);
    this.label_score.anchor.setTo(0.5, 0.5);
    this.label_score.text = ' ';
    this.addChild(this.label_score);

    // Activate
    this.game.stage.addChild(this);

  }

  icon_click(url) { console.log(url); }


  onInputOver() {
    // console.log('hover: ' + this.xPos + ' ' + this.yPos);
    this.loadTexture(this.nextTile, 0, false);
    this.label_score.text = '1';

  }

  onInputOut() {
    if (this.tilestate.level == 0 && this.tilestate.type == 'empty') {
      this.loadTexture('empty', 0, false);
      this.label_score.text = ' ';
    }
  }

  update() {
    // this.handleInput();

  }



  onClick() {
    console.log('click: ' + this.xPos + ' ' + this.yPos);
    this.tilestate.level = 1;
    this.tilestate.type  = this.nextTile;
  }
}

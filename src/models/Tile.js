
export default class Tile extends Phaser.Sprite {

  constructor(game, x, y, frame, nextTile, gamestate) {
    super(game, x, y, frame);
    this.game = game;
    this.isPlaced = false;
    this.enableBody = true;
    this.wiggling   = false;
    this.direction  = null;

    this.nextTile = nextTile;
    this.originalX = x;
    this.originalY = y;
    this.xPos = (x-6)/64;
    this.yPos = (y)/64;
    this.tilestate = {
      'level': 0,
      'type' : 'empty'
    };

    this.wiggle = null;
    this.gamestate = gamestate;

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

  onInputOver() {
    // console.log('hover: ' + this.xPos + ' ' + this.yPos);
    this.loadTexture(this.nextTile, 0, false);
    this.label_score.text = '1';
    this.gamestate.hovering = {x: this.xPos, y: this.yPos};
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

  resetToEmpty() {
    console.log('reset');
    this.loadTexture('empty', 0, false);
    this.label_score.text = ' ';
    this.tilestate.type = 'empty';
    this.tilestate.level = 0;
    this.game.add.tween(this).to( { y: this.y-4 }, 0.1, Phaser.Easing.Bounce.Out, true);
    // this.y -= 8;
    console.log(this.y);
  }



  onClick() {
    // console.log('click: ' + this.xPos + ' ' + this.yPos);
    this.tilestate.level = 1;
    this.tilestate.type  = this.nextTile;
    this.gamestate.lastClicked.x = this.xPos;
    this.gamestate.lastClicked.y = this.yPos;
    this.gamestate.clickHandled  = false;
    
    this.game.add.tween(this).to( { y: this.y+4 }, 400, Phaser.Easing.Bounce.Out, true);
   }

   startWiggling() {

    switch(this.direction) {
      case 'left':
        this.wiggle = this.game.add.tween(this).to( { x: this.x-4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
        break;
      case 'right':
        this.wiggle = this.game.add.tween(this).to( { x: this.x+4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
        break;

      default:
        break;
     }

    this.wiggling = true;
   }

   stopWiggling() {

     console.log('Remove Wiggle: ' + this.xPos + ' ' + this.yPos);
     if (this.wiggle) {
       this.wiggle.pause();
     }
     this.x = this.originalX;
     this.Y = this.originalY;

   }
}

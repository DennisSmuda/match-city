
export default class Tile extends Phaser.Sprite {

  constructor(game, x, y, frame, nextTile, gamestate) {
    super(game, x, y, frame);
    this.game = game;
    this.isHovered = false;
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
    // Gets called once, when hover is first entered
    this.isHovered = true;

    // console.log('hover: ' + this.xPos + ' ' + this.yPos);
    this.loadTexture(this.nextTile, 0, false);
    this.label_score.text = '1';
    this.gamestate.hovering = {x: this.xPos, y: this.yPos};
  }

  onInputOut() {
    this.isHovered = false;
    if (this.tilestate.level == 0 && this.tilestate.type == 'empty') {
      this.loadTexture('empty', 0, false);
      this.label_score.text = ' ';
    }
  }

  update() {
    // this.handleInput();
    // console.log('Sprite update');
  }





  onClick() {
    // console.log('click: ' + this.xPos + ' ' + this.yPos);
    this.tilestate.level = 1;
    this.tilestate.type  = this.nextTile;
    this.gamestate.lastClicked.x = this.xPos;
    this.gamestate.lastClicked.y = this.yPos;
    this.gamestate.clickHandled  = false;
    this.gamestate.tilesOnGrid++;

    this.drop = this.game.add.tween(this).to( { y: this.y+4 }, 400, Phaser.Easing.Bounce.Out, true);
   }

   startWiggling() {
    //  console.log('Start Wiggling');

    switch(this.direction) {
      case 'left':
        // this.wiggle = this.game.add.tween(this).to( { x: this.x-4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
        this.wiggle = this.game.add.tween(this).to( { x: this.x-4 }, 500, Phaser.Easing.Bounce.InOut, true);
        break;
      case 'right':
        this.wiggle = this.game.add.tween(this).to( { x: this.x+4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
        break;

      default:
        break;
     }

    this.wiggling = true;
   }

   resetToEmpty() {
     // console.log('reset to empty');
     /*
      Load Empty Texture and reset tilelevel
      */
     this.loadTexture('empty', 0, false);
     this.label_score.text = ' ';
     this.tilestate.type = 'empty';
     this.tilestate.level = 0;
     this.y -= 4;

     // this.game.add.tween(this).to( { y: this.originalY, x: this.originalX }, 0.1, Phaser.Easing.Bounce.Out, true);
     this.stopWiggling();
   }

   stopWiggling() {

    //  console.log('Remove Wiggle: ' + this.xPos + ' ' + this.yPos);
     if (this.wiggle !== undefined) {
       this.wiggle.pause();
       console.log('WIGGLE RESET');
     }
    //  this.wiggle = null;
    //  this.game.tweens.remove(this.wiggle);
    //  console.log(this.wiggle);
    this.x = this.originalX;
    this.Y = this.originalY;
    // this.gamestate.matchesHandled = true;
    // this.gamestate.clickHandled = true;

     this.wiggling = false;

   }

   collapse(index) {
     this.index = index;
     console.log('COllapse');
     switch(this.direction) {
       case 'left':
         this.wiggle = this.game.add.tween(this).to( { x: this.x-60 }, 500, Phaser.Easing.Cubic.InOut, true, 0, 0, false);
         this.wiggle.onComplete.add(this.resetPosition, this);
         break;
       case 'right':
         this.wiggle = this.game.add.tween(this).to( { x: this.x+4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
         break;

       default:
         break;
      }

      // reset tile
      // this.wiggle = this.game.add.tween(this).to( { x: this.originalX, y: this.originalY }, 500, Phaser.Easing.Cubic.InOut, true, 0, -1, false);
   }

   resetPosition() {
      if (this.index == 0) {
      // console.log('MATCHES HANDLED');
        this.gamestate.matchesHandled = true;
        // this.gamestate.clickHandled = true;
      }
      // console.log('Reset position');
      this.resetToEmpty();
      // this.stopWiggling();
   }
}


export default class Tile extends Phaser.Sprite {

  constructor(game, x, y, frame, nextTile, gamestate) {
    super(game, x+32, y+32, frame);
    this.anchor.setTo(0.5, 0.5);
    // console.log(this.x, this.y);
    this.game = game;
    this.isHovered = false;
    this.isPlaced = false;
    this.enableBody = true;
    // this.anchor.setTo(0.5, 0.5);
	  // game.add.tween(this.scale).to( { x: 0.9, y: 0.9 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);


    this.direction  = null;

    this.nextTile = nextTile;
    this.originalX = x+32;
    this.originalY = y+32;
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
    this.label_score = this.game.add.text(0, 0, this.tilestate.level, style);
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

  }


  onClick() {
    if (!this.gamestate.clickHandled &&
        !this.gamestate.matchesHandled) {
      return;
    }

    if (this.tilestate.level == 0 && this.tilestate.type == 'empty') {
      this.tilestate.level = 1;
      this.tilestate.type  = this.nextTile;
      this.gamestate.lastClicked.x = this.xPos;
      this.gamestate.lastClicked.y = this.yPos;
      this.gamestate.clickHandled  = false;
      this.gamestate.tilesOnGrid++;

      this.drop = this.game.add.tween(this).to( { y: this.y+4 }, 400, Phaser.Easing.Bounce.Out, true);
    }
   }

   startWiggling() {
    this.wiggle = this.game.add.tween(this.scale).to( { x: 0.9, y: 0.9 }, 200, Phaser.Easing.Linear.None, true);
   }

   resetToEmpty() {
     console.log('Reste to empty');
     /*
      Load Empty Texture and reset tilelevel
      */
     this.loadTexture('empty', 0, false);
     this.label_score.text = ' ';
     this.tilestate.type = 'empty';
     this.tilestate.level = 0;
     // Offset y position because new element
     // will be slightly hovering above
     this.y = this.originalY;
     this.x = this.originalX;

     console.log(this.x, this.y);
     this.stopWiggling();
   }

   stopWiggling() {
     if (this.wiggle ) {
        this.wiggle = this.game.add.tween(this.scale).to( { x: 1, y: 1 }, 200, Phaser.Easing.Linear.None, true);
     }
   }

   collapse(index) {
     this.index = index;
     console.log('COllapse');
     switch(this.direction) {
       case 'left':
         this.collapse = this.game.add.tween(this).to( { x: this.x-60 }, 500, Phaser.Easing.Cubic.InOut, true, 0, 0, false);
         this.collapse.onComplete.add(this.resetPosition, this);
         break;
       case 'right':
         this.collapse = this.game.add.tween(this).to( { x: this.x+4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
         break;

       default:
         break;
      }
   }

   resetPosition() {
      if (this.index == 0) {
        this.gamestate.matchesHandled = true;
      }
      this.resetToEmpty();
      // this.stopWiggling();
   }
}

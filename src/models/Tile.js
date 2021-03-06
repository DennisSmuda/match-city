
export default class Tile extends Phaser.Sprite {

  constructor(game, x, y, frame, gamestate) {
    super(game, x+36, y+36, frame);
    this.anchor.setTo(0.5, 0.5);
    this.game           = game;
    this.enableBody     = true;

    this.gamestate      = gamestate;
    this.nextTile       = this.gamestate.nextTiles[0];

    this.collapseTween  = null;
    this.wiggle         = null;
    this.originalX      = x+36;
    this.originalY      = y+36;
    this.xPos           = (x-6)/64;
    this.yPos           = (y)/64;
    this.level          = 1;
    this.type           = 'empty';
    this.potentialLevel = 1;



    // Input & Events
    this.inputEnabled = true;
    this.events.onInputOut.add(()  => { this.onInputOut(); } , this);
    this.events.onInputOver.add(() => { this.onInputOver(); }, this);
    this.events.onInputDown.add(() => { this.onClick(); }    , this);

    // Points
    const style = { font: "20px Roboto Mono", fill: "#ffffff", textalign: "center" };
    this.label_score = this.game.add.text(0, 0, this.level, style);
    this.label_score.anchor.setTo(0.5, 0.5);
    this.label_score.text = ' ';
    this.addChild(this.label_score);

    // Activate
    this.game.stage.addChild(this);

  }

  onInputOver() {
    /**
     * Gets called once on initial Hover-Enter Event.
     * TODO: Check future level if collapsing...
     */

    if (this.type == 'empty') {
      this.loadTexture(this.gamestate.nextTiles[0], 0, false);
      this.gamestate.hovering = {x: this.xPos, y: this.yPos, state: this.type};
      this.gamestate.updateMatches = true;

      this.label_score.text = `${this.potentialLevel}`;
    }
  }

  onInputOut() {
    if (this.type == 'empty') {
      this.loadTexture('empty', 0, false);
      this.label_score.text = ' ';
    }
  }

  onClick() {
    if (!this.gamestate.clickHandled &&
        !this.gamestate.matchesHandled) {
      return;
    }

    if (this.type == 'empty') {
      this.bringToTop();
      // this.level = 1;

      this.type  = this.gamestate.nextTiles[0];
      this.gamestate.lastClicked.x = this.xPos;
      this.gamestate.lastClicked.y = this.yPos;
      this.gamestate.clickHandled  = false;
      this.gamestate.tilesOnGrid++;


      this.drop = this.game.add.tween(this).to( { y: this.y+4 }, 400, Phaser.Easing.Bounce.Out, true);

      this.gamestate.nextTiles.shift();

    }
   }

   spawn(index) {
      this.level = this.gamestate.averageLevel;
      this.type  = this.gamestate.nextRandoms[index];
      this.loadTexture(this.gamestate.nextRandoms[index], 0, false);
      this.gamestate.lastClicked.x = this.xPos;
      this.gamestate.lastClicked.y = this.yPos;
      this.gamestate.clickHandled  = false;
      this.gamestate.tilesOnGrid++;
      this.label_score.text = this.level;

      this.drop = this.game.add.tween(this).to( { y: this.y+4 }, 400, Phaser.Easing.Bounce.Out, true);
   }

   startWiggling() {
    this.wiggle = this.game.add.tween(this.scale).to( { x: 0.9, y: 0.9 }, 200, Phaser.Easing.Linear.None, true);
   }

   resetToEmpty() {
     /**
     * Load initial texture, reset position and level
     */
     this.loadTexture('empty', 0, false);
     this.label_score.text = ' ';
     this.type = 'empty';
    //  this.potentialLevel = 1;
     this.level = 1;
     this.y = this.originalY;
     this.x = this.originalX;
     this.gamestate.matchesHandled = true;
     this.wiggle = this.game.add.tween(this.scale).to( { x: 1, y: 1 }, 200, Phaser.Easing.Linear.None, true);

     this.gamestate.needLevelUp = true;
   }

   updateLevel() {
      this.level = this.potentialLevel;
      this.potentialLevel = 1;
      this.label_score.text = `${this.level}`;
      // TODO: Check if special effect should be done..
   }
   updatePotentialLevel(level) {
     this.potentialLevel = level;
     this.label_score.text = `${level}`;
   }

   stopWiggling() {
     if (this.wiggle ) {
        this.wiggle = this.game.add.tween(this.scale).to( { x: 1, y: 1 }, 200, Phaser.Easing.Linear.None, true);
     }
   }

   collapse() {
     /**
      * Self calculating collapse tween.
      * Values based on lasclicked tile, and current position
      */
     let xDistance = (this.gamestate.lastClicked.x - this.xPos)*64;
     let yDistance = (this.gamestate.lastClicked.y - this.yPos)*64;
     this.gamestate.tilesOnGrid--;
     this.gamestate.score += this.level;

     this.collapseTween = this.game.add.tween(this).to( {
       x: (this.x + xDistance),
       y: (this.y + yDistance)
     }, 150, Phaser.Easing.Cubic.Out, true, 0, 0, false);
      this.collapseTween.onComplete.add(this.resetToEmpty, this);
   }

}

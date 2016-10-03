
/**
 * UI Class
 *  - repsponsible for all Texts/Buttons/etc..
 */
export default class UI {
  constructor(game, gamestate) {
    this.game = game;
    this.gamestate = gamestate;

    this.graphics = game.add.graphics(0, 0);
    // set a fill and line style
    this.graphics.beginFill(0x6f6f6f);
    this.graphics.drawRect(20, 490, 82, 110);
    this.graphics.beginFill(0x3C3C3C);
    this.graphics.drawRect(112, 475, 165, 140);
    this.graphics.drawRect(288, 475, 154, 140);

    this.currentText     = this.game.add.text(28, 500, 'Current ', {
      font: '15px Roboto Mono',
      fill: '#3C3C3C',
      align: 'left'
    });

    this.nextText     = this.game.add.text(136, 485, 'Next Two Tiles ', {
      font: '14px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.scoreText     = this.game.add.text(176, 550, 'Score ', {
      font: '14px Roboto Mono',
      fill: '#C2C2C2',
      align: 'center'
    });
    this.score     = this.game.add.text(192, 578, `${this.gamestate.score}`, {
      font: '16px Roboto Mono',
      fill: '#ffcf00',
      align: 'right'
    });
    this.counterLabel = this.game.add.text(296, 485, 'Matches / Turns ', {
      font: '14px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.counter      = this.game.add.text(405, 515, `${this.gamestate.turns}`, {
      font: '14px Roboto Mono',
      fill: '#858585',
      align: 'center'
    });
    this.matchcounter = this.game.add.text(310, 515, `${this.gamestate.matches} (${this.gamestate.individualMatches})`, {
      font: '14px Roboto Mono',
      fill: '#858585',
      align: 'center'
    });

    this.randomCounter = this.game.add.text(310, 550, 'Rands / Count', {
      font: '14px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.nextRandsText = this.game.add.text(345, 575, `${this.gamestate.numRand} / ${this.gamestate.randomCounter}`, {
      font: '14px Roboto Mono',
      fill: '#858585',
      align: 'center'
    });

    this.nextTiles    = this.game.add.group();
    this.nextTiles.scale.set(0.5);

    this.nextTiles.create(375, 1035, 'next-arrow');
  }

  updateNextTiles() {
    for (let i = 0; i < this.gamestate.nextTiles.length; i++) {
      if (i == 0) {
        this.nextTiles.create(90, 1080, this.gamestate.nextTiles[i]);
      } else {
        this.nextTiles.create((195 + (i * 110)), 1020, this.gamestate.nextTiles[i]);
      }
    }
  }

  updateInfo() {
    this.matchcounter.setText(`${this.gamestate.matches} (${this.gamestate.individualMatches})`);
    this.counter.setText(`${this.gamestate.turns}`);
    this.score.setText(`${this.gamestate.score}`);

    if (this.gamestate.randomCounter == 1) {
      this.nextRandsText.fill = '#ffffff';
      this.nextRandsText.setText(`${this.gamestate.numRand} / ${this.gamestate.randomCounter}`);
    } else {
      this.nextRandsText.fill = '#858585';
      this.nextRandsText.fontWeight = 'normal';
      this.nextRandsText.setText(`${this.gamestate.numRand} / ${this.gamestate.randomCounter}`);
    }

    // console.log('Tiles on Grid: this.gamestate.tilesOnGrid: ' + this.gamestate.tilesOnGrid);

  }


}

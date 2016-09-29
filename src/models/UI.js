
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
    this.graphics.beginFill(0x3C3C3C);
    this.graphics.drawRect(18, 475, 80, 140);
    this.graphics.drawRect(120, 475, 165, 140);
    this.graphics.drawRect(294, 475, 150, 140);

    this.currentText     = this.game.add.text(22, 490, 'Current: ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });

    this.nextText     = this.game.add.text(138, 490, 'Next Two Tiles: ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.counterLabel = this.game.add.text(300, 490, 'Matches / Turns ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.counter      = this.game.add.text(320, 545, `${this.gamestate.matches} (${this.gamestate.individualMatches}) / ${this.gamestate.turns}`, {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'center'
    });

    this.nextTiles    = this.game.add.group();

    this.nextTiles.create(92, 545, 'next-arrow');
    this.nextTiles.create(26 + 160, 545, 'next-arrow');
  }

  updateNextTiles() {
    for (let i = 0; i < this.gamestate.nextTiles.length; i++) {
      this.nextTiles.create((26 + (i * 96)), 530, this.gamestate.nextTiles[i]);
    }
  }

  updateInfo() {
    this.counter.setText(`${this.gamestate.matches} (${this.gamestate.individualMatches}) / ${this.gamestate.turns}`);
  }


}

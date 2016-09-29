
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
    this.graphics.drawRect(20, 475, 82, 140);
    this.graphics.drawRect(112, 475, 165, 140);
    this.graphics.drawRect(288, 475, 154, 140);

    this.currentText     = this.game.add.text(26, 490, 'Current: ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });

    this.nextText     = this.game.add.text(128, 490, 'Next Two Tiles: ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.counterLabel = this.game.add.text(296, 490, 'Matches / Turns ', {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'left'
    });
    this.counter      = this.game.add.text(405, 545, `${this.gamestate.turns}`, {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'center'
    });
    this.matchcounter = this.game.add.text(310, 545, `${this.gamestate.matches} (${this.gamestate.individualMatches})`, {
      font: '15px Roboto Mono',
      fill: '#C2C2C2',
      align: 'center'
    });

    this.nextTiles    = this.game.add.group();
    this.nextTiles.scale.set(0.7);

    this.nextTiles.create(265, 772, 'next-arrow');
  }

  updateNextTiles() {
    for (let i = 0; i < this.gamestate.nextTiles.length; i++) {
      if (i == 0) {
        this.nextTiles.create(52, 760, this.gamestate.nextTiles[i]);
      } else {
        this.nextTiles.create((86 + (i * 110)), 760, this.gamestate.nextTiles[i]);
      }
    }
  }

  updateInfo() {
    this.matchcounter.setText(`${this.gamestate.matches} (${this.gamestate.individualMatches})`);
    this.counter.setText(`${this.gamestate.turns}`);
  }


}

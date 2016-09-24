
/**
 * UI Class
 *  - repsponsible for all Texts/Buttons/etc..
 */
export default class UI {
  constructor(game) {
    this.instructions = game.add.text(32, 390, 'Combine same tiles on the playing field', {
      font: '14px Roboto Mono',
      fill: '#fff',
      align: 'left'
    });
  }
}

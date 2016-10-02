import Tile from './Tile';
import UI from './UI';

import { newNextTiles, newRandomTiles, getRandomInt } from '../util/helper';


export default class Grid {
  constructor(game, gamestate) {
    this.game = game;
    this.rows = 7;
    this.cols = 7;
    this.grid       = new Array(this.rows);
    this.tileGroup  = this.game.add.group();
    this.nextTile   = gamestate.nextTile;
    this.gamestate  = gamestate;
    this.possibleMatches = [];
    this.lastHovered = {
      x: null,
      y: null
    };
    this.newLevel = 1;

    this.UI = new UI(this.game, this.gamestate);

    this.tilesOnGrid = 0;
    this.initGrid();
  }

  initGrid() {
    /**
     * Initialize 2D array for easier referencing '[][]' - style
     * Additional grouping to control render order (zIndex)
     */
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.cols)
    }

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Tile(this.game, i*64+6, j*64, 'empty', this.gamestate);
        this.tileGroup.add(this.grid[i][j]);
      }
    }
      newRandomTiles(this.gamestate);
      this.spawnRandomTiles();
  }

  resetPotentialLevels() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j].potentialLevel = 1;
      }
    }
  }


  generateNewLevel() {
    this.newLevel = 1;

    /**
    * Level check based on ( 1 + (i*3) ) | 1, 3, 6, 9, 12, etc..
    */
    let ones = this.gamestate.connectingLevels[1];
    for (let i = 0; i <= this.gamestate.maxLevel-1; i++) {

      if (i == 0) {
        if (ones < 2)  { this.newLevel += 0 ;}
        if (ones >= 2) { this.newLevel += 2 ;}
        if (ones >= 4) { this.newLevel += 3 ;}
        if (ones >= 6) { this.newLevel += 3 ;}
      } else {
        let amount = this.gamestate.connectingLevels[i*3];
        let level  = i*3;
        if (this.newLevel == 1) { this.newLevel += 2}

        if (amount >= 1) {
          this.newLevel += level;
        }

        if (amount >= 2 && amount < 4) { this.newLevel += level ;}
        if (amount >= 4) { this.newLevel += level ;}
      }
    }
        // if (this.possibleMatches.length == 2 && ones <= 2 && this.newLevel >= 6) this.newLevel -= 3;
    // if (this.possibleMatches.length <= 2 && this.newLevel >= 6) this.newLevel -= 3;
    // console.log('Possible Matches: ' + this.possibleMatches.length)

    this.grid[this.gamestate.hovering.x][this.gamestate.hovering.y].updatePotentialLevel(this.newLevel);
  }

  updateLevel() {
    this.generateNewLevel();

    this.grid[this.gamestate.lastClicked.x][this.gamestate.lastClicked.y].updateLevel(this.newLevel);

    this.gamestate.needLevelUp = false;
    this.resetConnecting();
    this.resetPotentialLevels();
    // this.gamestate.randomCounter += this.newLevel / 3;
  }

  resetConnecting() {
    this.gamestate.connectingLevels[1] = 0;
    for (let i = 1; i <= this.gamestate.maxLevel; i++) {
      this.gamestate.connectingLevels[(i*3)] = 0;
    }
  }

  update() {

    if (this.gamestate.needLevelUp) {
      this.updateLevel();
    }
    // Generate next tile randomly
    if (this.gamestate.nextTiles.length < 3) {
      newNextTiles(this.gamestate);
      this.UI.updateNextTiles();
    }

    // Spawn Random tiles
    if (this.gamestate.randomCounter == 0 &&
        this.gamestate.matchesHandled && this.gamestate.clickHandled) {
          if (newRandomTiles(this.gamestate)) {
            if (!this.gamestate.debug) {
              this.spawnRandomTiles();
            }
          }
    }

    // Handle Click
    if (!this.gamestate.clickHandled &&
        this.gamestate.lastClicked.x !== null) {
      this.handleClick();
    }
    // Return if there are still matches/clicks being handled
    if (!this.gamestate.matchesHandled &&
        !this.gamestate.clickHandled) {
        return;
    }

    // Finds possible Matches on
    // every new hovered tile
    if (this.gamestate.matchesHandled) {
      if (this.gamestate.updateMatches) {
        this.findPossibleMatches();
      }
    }


  }

  handleClick() {
    // Decrease counter each click
    this.gamestate.turns++;
    if (this.gamestate.tilesOnGrid >= (this.cols * this.rows)) {
      console.log('Loose');
      this.gameOver();
    }

    if (this.gamestate.randomCounter > 0) {
      this.gamestate.randomCounter--;
    }
    this.UI.updateInfo();

    let numMatches = this.possibleMatches.length;

    // Have at least 2 Matching tiles ready
    if (numMatches < this.gamestate.minimumConnecting) {
      this.gamestate.matchesHandled = true;
      this.gamestate.clickHandled   = true;
      return;
    }

    // Toggle control variables
    this.gamestate.clickHandled = false;
    this.gamestate.matchesHandled = false;
    this.gamestate.matches++;

    if (numMatches >= 2 && this.gamestate.randomCounter < 20) {
      this.gamestate.randomCounter++;
    }

    // Loop through array and collapse all matching (surrounding tiles)
    while (numMatches > 0 && !this.gamestate.matchesHandled) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      // Delay next random counter
      (this.possibleMatches[numMatches-1]).collapse();
      this.possibleMatches.splice(numMatches-1, 1);
      this.gamestate.individualMatches++;
      numMatches--;
    }

    this.UI.updateInfo();
    // console.log(this.gamestate.connectingLevels);

    this.gamestate.clickHandled = true;
  }


  clearPossibleMatches(level) {
    // console.log('Clear wiggles');
    let numMatches = this.possibleMatches.length;
    console.log('Delete Level: ' + level);
    while (numMatches > 0) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      console.log('Checking level: ' + this.possibleMatches[numMatches-1].level);
      if (level && this.possibleMatches[numMatches-1].level == level) {
      console.log('Deleting level: ' + this.possibleMatches[numMatches-1].level);
        this.possibleMatches[numMatches-1].stopWiggling();
        this.possibleMatches.splice(numMatches-1, 1);
      }
      else if (level == undefined) {
        this.possibleMatches[numMatches-1].stopWiggling();
        this.possibleMatches.splice(numMatches-1, 1);
      }
      numMatches--;
    }
    this.resetConnecting();
  }

  findPossibleMatches() {
    this.gamestate.updateMatches = false;
    // Check all possible matches on
    // the current hovered tile.
    if (this.gamestate.hovering.x === null) { return; }

    // Currently Hovering
    let x           = this.gamestate.hovering.x;
    let y           = this.gamestate.hovering.y;
    let currentType = this.gamestate.nextTiles[0];

    if (this.lastHovered.x === null) {
      this.lastHovered.x = x;
      this.lastHovered.y = y;
    }

    // Only check once per hover
    if (this.lastHovered.x == x && this.lastHovered.y == y) {
      return;
    } else {
      // New Hover position
      this.lastHovered.x = x;
      this.lastHovered.y = y;
      this.clearPossibleMatches();
    }

    this.checkMatches(x, y, currentType);



    // If at least than 2 Matching tiles
    if (this.possibleMatches.length >= 2) {
      this.generateNewLevel();
      for (let match of this.possibleMatches) {
        match.startWiggling();
      }
    }
  }

  checkType(x, y, currentType) {
    if (x < 0 || y < 0 || x > 6 || y > 6) {
      return false;
    } else if (this.grid[x][y].type == currentType) {
      return true;
    } else {
      return false;
    }
  }

  checkLevel(x, y) {
    // Check Levels
    let level = this.grid[x][y].level;
    this.gamestate.connectingLevels[level]++;
  }

  checkMatches(x, y, currentType) {
    /**
     * Check Matches from the currently hovered tile (at x, y) in all directions
     * - First all straight directions up to 5  tiles deep
     *              [4]
     *              [3]
     *              [2]
     *              [1]
     *  [4][3][2][1][0][1][2][3][4]
     *              [1]
     *              [2]
     *              [3]
     *              [4]
     * - Check for diagonals
     */

     // Check to the right
    if (this.checkType(x+1, y, currentType)) {
      this.checkLevel(x+1, y);
      this.possibleMatches.push(this.grid[x+1][y]);

      if (this.checkType(x+2, y, currentType)) {
        this.checkLevel(x+2, y);
        this.possibleMatches.push(this.grid[x+2][y]);

        if (this.checkType(x+3, y, currentType)) {
          this.possibleMatches.push(this.grid[x+3][y]);
          this.checkLevel(x+3, y);

          if (this.checkType(x+4, y, currentType)) {
            this.possibleMatches.push(this.grid[x+4][y]);
            this.checkLevel(x+4, y);
            console.log('Special Shit')
          }
        }
      }
    }
    // Check to the left
    if (this.checkType(x-1, y, currentType)) {
      this.checkLevel(x-1, y);
      this.possibleMatches.push(this.grid[x-1][y]);

      if (this.checkType(x-2, y, currentType)) {
        this.checkLevel(x-2, y);
        this.possibleMatches.push(this.grid[x-2][y]);

        if (this.checkType(x-3, y, currentType)) {
          this.checkLevel(x-3, y);
          this.possibleMatches.push(this.grid[x-3][y]);

          if (this.checkType(x-4, y, currentType)) {
            this.checkLevel(x-4, y);
            this.possibleMatches.push(this.grid[x-4][y]);
          }
        }
      }
    }
    // Check Upwards
    if (this.checkType(x, y-1, currentType)) {
      this.checkLevel(x, y-1);
      this.possibleMatches.push(this.grid[x][y-1]);

      if (this.checkType(x, y-2, currentType)) {
        this.checkLevel(x, y-2);
        this.possibleMatches.push(this.grid[x][y-2]);

        if (this.checkType(x, y-3, currentType)) {
          this.checkLevel(x, y-3);
          this.possibleMatches.push(this.grid[x][y-3]);

          if (this.checkType(x, y-4)) {
            this.checkLevel(x, y-4);
            this.possibleMatches.push(this.grid[x][y-4]);
            console.log('Special Shite');
          }
        }
      }
    }
    // Check Upwards
    if (this.checkType(x, y+1, currentType)) {
      this.checkLevel(x, y+1);
      this.possibleMatches.push(this.grid[x][y+1]);
      if (this.checkType(x, y+2, currentType)) {
        this.checkLevel(x, y+2);
        this.possibleMatches.push(this.grid[x][y+2]);
        if (this.checkType(x, y+3, currentType)) {
          this.checkLevel(x, y+3);
          this.possibleMatches.push(this.grid[x][y+3]);
          if (this.checkType(x, y+4)) {
            this.checkLevel(x, y+4);
            this.possibleMatches.push(this.grid[x][y+4]);
            console.log('Special Shite');
          }
        }
      }
    }

    /**
    * - Check Diagonally if one of the adjacent
    *   'cross pieces was a match'
    *      []--[]
    *      | [] |
    *      []--[]
    */
    // Check Up-Left
    if(x > 0 && y > 0) {
      if (this.checkType(x-1, y, currentType) || this.checkType(x, y-1, currentType)) {
        if (this.checkType(x-1, y-1, currentType)) {
          this.checkLevel(x-1, y-1);
          this.possibleMatches.push(this.grid[x-1][y-1]);
        }
      }
    }
    // Check Up-Right x+1 y-1
    if (x < 6 && y > 0) {
      if (this.checkType(x+1, y, currentType) || this.checkType(x, y-1, currentType)) {
        if (this.checkType(x+1, y-1, currentType)) {
          this.checkLevel(x+1, y-1);
          this.possibleMatches.push(this.grid[x+1][y-1]);
        }
      }
    }
    // Check Down-Right x+1 y+1
    if (x < 6 && y < 6) {
      if (this.checkType(x+1, y, currentType) || this.checkType(x, y+1, currentType)) {
        if (this.checkType(x+1, y+1, currentType)) {
          this.checkLevel(x+1, y+1);
          this.possibleMatches.push(this.grid[x+1][y+1]);
        }
      }
    }
    // Check Down-Left x-1 y+1
    // if (x > 0 && y < 6) {
    if (this.checkType(x-1, y, currentType) || this.checkType(x, y+1, currentType)) {
      if (this.checkType(x-1, y+1, currentType)) {
        this.checkLevel(x-1, y+1);
        this.possibleMatches.push(this.grid[x-1][y+1]);
      }
    }


    // }


    /**
    * - Check second tier x+2,y+1 || x+1,y+2
    */
    // Check left-left-up
    // if (x > 1 && y > 0) {
    //   if ((this.checkType(x-1, y, currentType) && (this.checkType(x-2, y, currentType)) ||
    //        this.checkType(x-1, y, currentType) && this.checkType(x-1, y-1) )) {
    //
    //     if (this.checkType(x-2, y-1, currentType)) {
    //       this.checkLevel(x-2, y-1);
    //       this.possibleMatches.push(this.grid[x-2][y-1]);
    //     }
    //   }


    // }


    /**
    * You can only match same level tiles,
    * and tiles one level below.
    *
    * So 9 can only match with 6, 6 with 3
    * all other possible matches need to be removed.
    *
    */

    // Highest matching level

    if (this.possibleMatches.length == 2) {
      let highest = 1;
      // Lower of Two
      let lower = 1;
      let justOnes = true;

      let first = this.possibleMatches[0].level;
      let second = this.possibleMatches[1].level;

      if (first > second) {
        highest = first;
        lower   = second;
        justOnes = false;
      } else {
        highest = second;
        lower   = first;
      }
      // console.log('Possible Match Difference : ' + (highest - lower));

      if ((highest - lower) !== 3
        // && (highest - lower) !== 2
        && (highest - lower) !== 0) {
        // console.log('Not Possible because difference ==' + (highest - lower));
          this.clearPossibleMatches();
      }
    }

    // Check 3 Matching tiles
    if (this.possibleMatches.length == 3) {
      let highest = 1;

      let levels = [];
      levels.push(this.possibleMatches[0].level);
      levels.push(this.possibleMatches[1].level);
      levels.push(this.possibleMatches[2].level);

      levels.sort((a, b) => {return a-b;})
      levels.reverse();
      console.log(levels);

      let max = levels[0];
      let mid = levels[1];
      let low = levels[2];

      if (max == mid == low == 1) { return; }
      if (max == mid) { return; }

      // One High with two Low-levels
      if (mid == low) {
        if ((max - mid) !== 2 &&
            (max - mid) !== 3) {
          this.clearPossibleMatches(max);
        }
      }
      // Three different Levels match.
      else {
        this.clearPossibleMatches();
      }
    }

    // Check for more than 4 Matches
    if (this.possibleMatches.length >= 4) {
      let highest = 1;

      let levels = [];

      for (let i = 0; i < this.possibleMatches.length; i++) {
        levels.push(this.possibleMatches[i].level);

      }

      levels.sort((a, b) => {return a-b;})
      levels.reverse();
      console.log(levels);

      let max = levels[0];
      let topmid = levels[1];
      let lowmid = levels[2];
      let low = levels[3];



      if (max == topmid == lowmid == low == 1) { return; }

    }


  }


  spawnRandomTiles() {
    let randX = getRandomInt(0, 6);
    let randY = getRandomInt(0, 6);
    let counter = this.gamestate.numRand;

    while (counter) {
      if (this.grid[randX][randY].type == 'empty') {
        // console.log('Spawning ' +  this.gamestate.nextRandoms[counter])
        this.grid[randX][randY].spawn(counter);
        counter--;
      } else {
        randX = getRandomInt(0, 6);
        randY = getRandomInt(0, 6);
      }
    }
  }


  gameOver() {
    console.log('Game Over');
    this.game.state.start('GameOver');
  }
}

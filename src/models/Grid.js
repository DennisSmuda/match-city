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


  generateNewLevel() {
    this.newLevel = 1;

    let ones    = this.gamestate.connectingLevels['1'];
    let threes  = this.gamestate.connectingLevels['3'];
    let sixes   = this.gamestate.connectingLevels['6'];
    let nines   = this.gamestate.connectingLevels['9'];

    console.log('ones: ' + ones)
    console.log('threes: ' + threes)
    console.log('sixes: ' + sixes)

    /**
    * Level check based on ( 1 + (i*3) ) | 1, 3, 6, 9, 12, etc..
    */
    // for (let i = 0; i < 10) {
    //
    // }

    // Check Ones
    if (ones >= 2) {
      this.newLevel = 3;
      if (ones >= 5) {
        this.newLevel = 6;
        if (ones >= 8) {
          this.newLevel = 9;
        }
      }
    }

    // Check Threes
    if (threes >= 1) {
      if (ones >= 4 && this.newLevel < 6) {
        this.newLevel = 6;
      }

      if (this.newLevel < 3) {
        this.newLevel = 3;
      }
      if (threes >= 2) {
        if (this.newLevel < 6) {
          this.newLevel = 6;
        }
        if (threes >= 5) {
          if (this.newLevel < 9) {
            this.newLevel = 9;
          }
        }
      }
    }
    // Check Sixes
    if (sixes >= 1) {

      if (ones >= 4 && this.newLevel < 6) {
        this.newLevel = 9;
      }

      if (threes >= 2 && this.newLevel < 12) {
        this.newLevel = 12;
      }

      if (this.newLevel < 6) {
        this.newLevel = 6;
      }

      if (sixes >= 2) {
        if (this.newLevel < 12) {
          this.newLevel = 12;
        }
      }
    }
    this.grid[this.gamestate.hovering.x][this.gamestate.hovering.y].updatePotentialLevel(this.newLevel);
    this.grid[this.gamestate.hovering.x][this.gamestate.hovering.y].newLevel = this.newLevel;


    console.log(this.gamestate.connectingLevels);
  }

  updateLevel() {
    // console.log(this.gamestate.lastClicked);
    // console.log(this.gamestate.connectingLevels);

    this.generateNewLevel();

    console.log(this.newLevel);
    this.grid[this.gamestate.lastClicked.x][this.gamestate.lastClicked.y].updateLevel(this.newLevel);

    this.gamestate.needLevelUp = false;
    this.resetConnecting();
  }

  resetConnecting() {
    this.gamestate.connectingLevels = {1:0,3:0,6:0,9:0,12:0,15:0};
  }

  update() {

    if (this.gamestate.needLevelUp) {
      this.updateLevel();
    }
    // Generate next tile randomly
    if (this.gamestate.nextTiles.length < 3) {
      newNextTiles(this.gamestate.nextTiles);
      this.UI.updateNextTiles();
    }

    // Spawn Random tiles
    if (this.gamestate.randomCounter == 0 &&
        this.gamestate.matchesHandled && this.gamestate.clickHandled) {
        console.log('spawn randoms')
        // newRandomTiles(this.gamestate);
        // this.spawnRandomTiles()
      //
      // this.gamestate.numRand = getRandomInt(3, 6);
      // this.gamestate.randomCounter = 3;
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
      this.findPossibleMatches();
    }


  }

  handleClick() {
    // Decrease counter each click
    this.gamestate.turns++;
    this.gamestate.randomCounter--;
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

    // Loop through array and collapse all matching (surrounding tiles)
    while (numMatches > 0 && !this.gamestate.matchesHandled) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      (this.possibleMatches[numMatches-1]).collapse();
      this.possibleMatches.splice(numMatches-1, 1);
      this.gamestate.individualMatches++;
      numMatches--;
    }

    this.UI.updateInfo();
    // console.log(this.gamestate.connectingLevels);

    this.gamestate.clickHandled = true;
  }


  clearPossibleMatches() {
    // console.log('Clear wiggles');
    let numMatches = this.possibleMatches.length;
    while (numMatches > 0) {
      // Go Backwards through possibleMatches
      // and empty the possible Matches
      this.possibleMatches[numMatches-1].stopWiggling();
      this.possibleMatches.splice(numMatches-1, 1);
      numMatches--;
    }
    this.resetConnecting();
  }

  findPossibleMatches() {
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
    if (this.grid[x][y].type == currentType) {
      // Add to possible Matches
      return true;
    } else {
      return false;
    }
  }

  checkLevel(x, y) {
    console.log( this.grid[x][y]);
    // Check Levels
    if (this.grid[x][y].level == 1) {
      this.gamestate.connectingLevels['1']++;
      console.log(this.gamestate.connectingLevels['1']);
    } else if (this.grid[x][y].level == 3) {
      this.gamestate.connectingLevels['3']++;
    } else if (this.grid[x][y].level == 6) {
      this.gamestate.connectingLevels['6']++;
    } else if (this.grid[x][y].level == 9) {
      this.gamestate.connectingLevels['9']++;
    }
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
     if (x < 6) {
      if (this.checkType(x+1, y, currentType)) {
        this.checkLevel(x+1, y);
      console.log('One right');
        this.possibleMatches.push(this.grid[x+1][y]);
        if (x < 5) {
          if (this.checkType(x+2, y, currentType)) {
            this.checkLevel(x+2, y);
      console.log('two right');

            this.possibleMatches.push(this.grid[x+2][y]);
            if (x < 4) {
              if (this.checkType(x+3, y, currentType)) {
                this.possibleMatches.push(this.grid[x+3][y]);
                this.checkLevel(x+3, y);
                if (x < 3) {
                  if (this.checkType(x+4, y, currentType)) {
                    this.possibleMatches.push(this.grid[x+4][y]);
                    this.checkLevel(x+4, y);
                    console.log('Special Shit')
                  }
                }
              }
            }
          }
        }
      }
    }
    // Check to the left
    if (x > 0) {
      if (this.checkType(x-1, y, currentType)) {
        this.checkLevel(x-1, y);
        this.possibleMatches.push(this.grid[x-1][y]);
        if (x > 1) {
          if (this.checkType(x-2, y, currentType)) {
            this.checkLevel(x-2, y);
            this.possibleMatches.push(this.grid[x-2][y]);
            if (x > 2) {
              if (this.checkType(x-3, y, currentType)) {
                this.checkLevel(x-3, y);
                this.possibleMatches.push(this.grid[x-3][y]);
                if (x > 3) {
                  if (this.checkType(x-4, y, currentType)) {
                    this.checkLevel(x-4, y);
                    this.possibleMatches.push(this.grid[x-4][y]);
                  }
                }
              }
            }
          }
        }
      }
    }
    // Check Upwards
    if (y > 0) {
      if (this.checkType(x, y-1, currentType)) {
        this.checkLevel(x, y-1);
        this.possibleMatches.push(this.grid[x][y-1]);
        if (y > 1) {
          if (this.checkType(x, y-2, currentType)) {
            this.checkLevel(x, y-2);
            this.possibleMatches.push(this.grid[x][y-2]);
            if (y > 2) {
              if (this.checkType(x, y-3, currentType)) {
                this.checkLevel(x, y-3);
                this.possibleMatches.push(this.grid[x][y-3]);
                if (y > 3) {
                  if (this.checkType(x, y-4)) {
                    this.checkLevel(x, y-4);
                    this.possibleMatches.push(this.grid[x][y-4]);
                    console.log('Special Shite');
                  }
                }
              }
            }
          }
        }
      }
    }
    // Check Upwards
    if (y < 6) {
      if (this.checkType(x, y+1, currentType)) {
        this.checkLevel(x, y+1);
        this.possibleMatches.push(this.grid[x][y+1]);
        if (y < 5) {
          if (this.checkType(x, y+2, currentType)) {
            this.checkLevel(x, y+2);
            this.possibleMatches.push(this.grid[x][y+2]);
            if (y < 4) {
              if (this.checkType(x, y+3, currentType)) {
                this.checkLevel(x, y+3);
                this.possibleMatches.push(this.grid[x][y+3]);
                if (y < 5) {
                  if (this.checkType(x, y+4)) {
                    this.checkLevel(x, y+4);
                    this.possibleMatches.push(this.grid[x][y+4]);
                    console.log('Special Shite');
                  }
                }
              }
            }
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
           this.possibleMatches.push(this.grid[x-1][y-1]);
         }
       }
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
}

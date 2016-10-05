/**
 * Tile Matcher Class
 *
 * Responsible to handle all the Logic
 * for matching tiles on the grid.
 */

export default class TileMatcher {
  constructor(game, gamestate, grid, possibleMatches) {
    this.gamestate = gamestate;
    this.possibleMatches = [];
    this.grid = grid;
    this.possibleMatches = possibleMatches;
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

    /**
    * - Check second tier x+2,y+1 || x+1,y+2
    */
    // Check left-left-up
    if ((this.checkType(x-1, y, currentType) && (this.checkType(x-2, y, currentType)) ||
         this.checkType(x-1, y, currentType) && this.checkType(x-1, y-1, currentType) &&
         this.checkType(x, y-1, currentType) && this.checkType(x-1, y-1, currentType) )) {
           if (this.checkType(x-2, y-1, currentType)) {
             this.checkLevel(x-2, y-1);
             this.possibleMatches.push(this.grid[x-2][y-1]);
           }
    }
    // Check up-up-left
    if ((this.checkType(x, y-1, currentType) && this.checkType(x, y-2, currentType) ||
         this.checkType(x, y-1, currentType) && this.checkType(x-1,y-1, currentType) ||
         this.checkType(x-1, y, currentType) && this.checkType(x-1, y-1, currentType) )) {
           if (this.checkType(x-1, y-2, currentType)) {
             this.checkLevel(x-1, y-2);
             this.possibleMatches.push(this.grid[x-1][y-2]);
           }
    }
    // Check up-up-right
    if ((this.checkType(x, y-1, currentType) && this.checkType(x, y-2, currentType) ||
         this.checkType(x, y-1, currentType) && this.checkType(x+1,y-1, currentType) ||
         this.checkType(x+1, y, currentType) && this.checkType(x+1, y-1, currentType) )) {
           if (this.checkType(x+1, y-2, currentType)) {
             this.checkLevel(x+1, y-2);
             this.possibleMatches.push(this.grid[x+1][y-2]);
           }
    }
    // Check right-right-up
    if ((this.checkType(x+1, y, currentType) && this.checkType(x+2, y, currentType) ||
         this.checkType(x+1, y, currentType) && this.checkType(x+1,y-1, currentType) ||
         this.checkType(x, y-1, currentType) && this.checkType(x+1, y-1, currentType) )) {
           if (this.checkType(x+2, y-1, currentType)) {
             this.checkLevel(x+2, y-1);
             this.possibleMatches.push(this.grid[x+2][y-1]);
           }
    }
    // Check right-right-down
    if ((this.checkType(x+1, y, currentType) && this.checkType(x+2, y, currentType) ||
         this.checkType(x+1, y, currentType) && this.checkType(x+1,y+1, currentType) ||
         this.checkType(x, y+1, currentType) && this.checkType(x+1, y+1, currentType) )) {
           if (this.checkType(x+2, y+1, currentType)) {
             this.checkLevel(x+2, y+1);
             this.possibleMatches.push(this.grid[x+2][y+1]);
           }
    }
    // Check down-down-right
    if ((this.checkType(x, y+1, currentType) && this.checkType(x, y+2, currentType) ||
         this.checkType(x+1, y, currentType) && this.checkType(x+1,y+1, currentType) ||
         this.checkType(x, y+1, currentType) && this.checkType(x+1, y+1, currentType) )) {
           if (this.checkType(x+1, y+2, currentType)) {
             this.checkLevel(x+1, y+2);
             this.possibleMatches.push(this.grid[x+1][y+2]);
           }
    }
    // Check down-down-left
    if ((this.checkType(x, y+1, currentType) && this.checkType(x, y+2, currentType) ||
         this.checkType(x-1, y, currentType) && this.checkType(x-1,y+1, currentType) ||
         this.checkType(x, y+1, currentType) && this.checkType(x-1, y+1, currentType) )) {
           if (this.checkType(x-1, y+2, currentType)) {
             this.checkLevel(x-1, y+2);
             this.possibleMatches.push(this.grid[x-1][y+2]);
           }
    }
    // Check left-left-down
    if ((this.checkType(x-1, y, currentType) && this.checkType(x-2, y, currentType) ||
         this.checkType(x-1, y, currentType) && this.checkType(x-1,y+1, currentType) ||
         this.checkType(x, y+1, currentType) && this.checkType(x-1, y+1, currentType) )) {
           if (this.checkType(x-2, y+1, currentType)) {
             this.checkLevel(x-2, y+1);
             this.possibleMatches.push(this.grid[x-2][y+1]);
           }
    }

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

      if (
        (highest !== 1) ||
        // && (highest - lower) !== 2
        (highest - lower) !== 0) {
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

      let max = levels[0];
      let mid = levels[1];
      let low = levels[2];

      if (max == mid && max == low) {
        return;
      } else if (mid == 1 && low == 1) {
        this.clearPossibleMatchesWithLevel(max);
      } else {
        this.clearPossibleMatches();
      }
    }

    // Check for more than 4 Matches
    if (this.possibleMatches.length >= 4) {
      let highestLevel = 0;
      let secondHighestLevel = 0;
      let highest = [];
      let lower   = [];

      let matches = [];

      for (let i = 0; i < this.possibleMatches.length; i++) {
        matches.push(this.possibleMatches[i].level);
      }

      matches.sort((a, b) => {return a-b;})
      matches.reverse();

      highestLevel = matches[0];
      let lastHandled = 0;

      // for (let level = highestLevel; level >= 3; level -= 3)
      for (let level of matches) {

        if (lastHandled == level) { continue; }

        let numConnecting = this.gamestate.connectingLevels[level];

        if (level !== 1) {
          if (numConnecting >= 3) {

            if (secondHighestLevel == 0 && level == highestLevel-3) {
              secondHighestLevel = level;
            }

          } else if (numConnecting < 3) {
            this.clearPossibleMatchesWithLevel(level);
          }
        } else {
          // Level == 1
          if (secondHighestLevel !== 3 || highestLevel !== 3) {
            if (highestLevel !== 0) {
              console.log('Clear Ones');
              // this.clearPossibleMatches(1);
            }
          }
        }
        lastHandled = level;
      }
    }
  }

  checkType(x, y, currentType) {
    // console.log(this.grid);
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

  clearPossibleMatches() {
    let numMatches = this.possibleMatches.length;
    // Go Backwards through possibleMatches
    // and empty the possible Matches

    while (numMatches > 0) {
      this.possibleMatches[numMatches-1].stopWiggling();
      this.possibleMatches.splice(numMatches-1, 1);
      this.resetConnecting();
      numMatches--;
    }
  }

  clearPossibleMatchesWithLevel(level) {
    let numMatches = this.possibleMatches.length;

    while (numMatches > 0) {
      if (this.possibleMatches[numMatches-1].level == level) {
        this.possibleMatches[numMatches-1].stopWiggling();
        this.possibleMatches.splice(numMatches-1, 1);
        this.gamestate.connectingLevels[level] = 0;
      }
      numMatches--;
    }
  }

  resetConnecting() {
    this.gamestate.connectingLevels[1] = 0;
    for (let i = 1; i <= this.gamestate.maxLevel; i++) {
      this.gamestate.connectingLevels[(i*3)] = 0;
    }
  }

}

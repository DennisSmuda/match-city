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

  updateLevel() {
    console.log(this.gamestate.lastClicked);
    console.log(this.gamestate.connectingLevels);
    let newLevel = 1;

    if (this.gamestate.connectingLevels['1'].length >= this.gamestate.minimumConnecting) {
      newLevel = 3;
    }
    if (this.gamestate.connectingLevels['3'].length >= this.gamestate.minimumConnecting) {
      newLevel = 6;
    }
    if (this.gamestate.connectingLevels['6'] >= this.gamestate.minimumConnecting-1) {
      newLevel = 9;
    }


    this.grid[this.gamestate.lastClicked.x][this.gamestate.lastClicked.y].updateLevel(newLevel);


    this.gamestate.needLevelUp = false;
    this.gamestate.connectingLevels = {1:[],3:[],6:[],9:[],12:[],15:[]};
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
    if (this.gamestate.counter == 0 &&
        this.gamestate.matchesHandled && this.gamestate.clickHandled) {

      // newRandomTiles(this.gamestate);
      // this.spawnRandomTiles();
      //
      // this.gamestate.numRand = getRandomInt(3, 6);
      // this.gamestate.counter = getRandomInt(2, 8);

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
    this.gamestate.connectingLevels = {1:[],3:[],6:[],9:[],12:[],15:[]};
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

    // Check right
    if (x < 6) {
      if (this.check(x+1, y, currentType)) {
        this.possibleMatches.push(this.grid[x+1][y]);
        // Check double right
        if (x < 5) {
          if (this.check(x+2, y, currentType)) {
            this.possibleMatches.push(this.grid[x+2][y]);
          }
        }

        // Right Top
        if (y > 0) {
          if (this.check(x+1, y-1, currentType)) {
            this.possibleMatches.push(this.grid[x+1][y-1]);
          }
        }
        // Right Bot
        if (y < 6) {
          if (this.check(x+1, y+1, currentType)) {
            this.possibleMatches.push(this.grid[x+1][y+1]);
          }
        }
      }
    }

    // Check left
    if (x > 0) {
      if (this.check(x-1, y, currentType)) {
        this.possibleMatches.push(this.grid[x-1][y]);

        // Check double Left
        if (x > 1) {
          if (this.check(x-2, y, currentType)) {
            this.possibleMatches.push(this.grid[x-2][y]);
          }
        }
        // Left Top
        if (y > 0) {
          if (this.check(x-1, y-1, currentType)) {
            this.possibleMatches.push(this.grid[x-1][y-1]);
          }
        }
        // Left Down
        if (y < 6) {
          if (this.check(x-1, y+1, currentType)) {
            this.possibleMatches.push(this.grid[x-1][y+1]);
          }
        }
      }
    }
    // Check upwards
    if (y > 0) {
      if (this.check(x, y-1, currentType)) {
        this.possibleMatches.push(this.grid[x][y-1]);

        // Double Up
        if (y > 1) {
          if (this.check(x, y-2, currentType)) {
            this.possibleMatches.push(this.grid[x][y-2]);
          }
        }
        // UP-Left
        if (x > 0) {
          if (this.check(x-1, y-1, currentType)) {
            this.possibleMatches.push(this.grid[x-1][y-1]);
          }
        }
        // Up-Right
        if (x < 6) {
          if (this.check(x+1, y-1, currentType)) {
            this.possibleMatches.push(this.grid[x+1][y-1]);
          }
        }
      }
    }

    if (y < 6) {
      if (this.check(x, y+1, currentType)) {
        this.possibleMatches.push(this.grid[x][y+1]);
         // Double Down
        if (y < 5) {
          if (this.check(x, y+2, currentType)) {
            this.possibleMatches.push(this.grid[x][y+2]);
          }
        }
        // Down-Left
        if (x > 0) {
          if (this.check(x-1, y+1, currentType)) {
            this.possibleMatches.push(this.grid[x-1][y+1]);
          }
        }
        // Down-Right
        if (x < 6) {
          if (this.check(x+1, y+1, currentType)) {
            this.possibleMatches.push(this.grid[x+1][y+1]);
          }
        }
      }
    }


    let ones = this.gamestate.connectingLevels['1'].length;
    let threes = this.gamestate.connectingLevels['3'].length;

    if (threes >= 2) {

      console.log('Double Threes')

      if (ones < 2) {
        // Delete Threes
        let numMatches = this.possibleMatches.length;
        while (numMatches > 0) {
          // Go Backwards through possibleMatches
          // and empty the possible Matches
          if (this.possibleMatches[numMatches-1].level == 3) {
            this.possibleMatches.splice(numMatches-1, 1);
          }
          numMatches--;
        }
      }

    } else if (threes > 0 && threes < 2) {
      console.log('three')
      // Delete Threes
      let numMatches = this.possibleMatches.length;
      while (numMatches > 0) {
        // Go Backwards through possibleMatches
        // and empty the possible Matches
        if (this.possibleMatches[numMatches-1].level == 3) {
          this.possibleMatches.splice(numMatches-1, 1);
        }
        numMatches--;
      }

      if (ones < 3) {


      }

    }
      // for (match of this.possibleMatches) {
        // console.

      // }





    console.log(this.gamestate.connectingLevels);



    // TODO: Replace with > 2 to have at least three matching tiles.
    if (this.possibleMatches.length >= this.gamestate.minimumConnecting) {
      for (let match of this.possibleMatches) {
        match.startWiggling();
      }
    }
  }

  check(x, y, currentType) {
    // console.log('checking: ' +);
    if (this.grid[x][y].type == currentType) {

      if (this.grid[x][y].level == 1) {
          this.gamestate.connectingLevels[1].push({x: x, y: y});
        return true;

      } else if (this.grid[x][y].level == 3) {
          this.gamestate.connectingLevels[3].push({x: x, y: y});
          return true;

      } else {
          return false;
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

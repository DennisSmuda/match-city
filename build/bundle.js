/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _play = __webpack_require__(1);
	
	var _play2 = _interopRequireDefault(_play);
	
	var _preload = __webpack_require__(4);
	
	var _preload2 = _interopRequireDefault(_preload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);
	
	  // 563 - 736
	  function Game() {
	    _classCallCheck(this, Game);
	
	    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 460, 636, Phaser.CANVAS, 'content', null));
	
	    _this.state.add('preload', _preload2.default);
	    _this.state.add('play', _play2.default, false);
	    _this.state.start('preload');
	    return _this;
	  }
	
	  return Game;
	}(Phaser.Game);
	
	new Game();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tile = __webpack_require__(2);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	var _Grid = __webpack_require__(3);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Play = function (_Phaser$State) {
	  _inherits(Play, _Phaser$State);
	
	  function Play() {
	    _classCallCheck(this, Play);
	
	    return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
	  }
	
	  _createClass(Play, [{
	    key: 'create',
	    value: function create() {
	      this.gamestate = {
	        lastClicked: {
	          x: null,
	          y: null
	        },
	        hovering: {
	          x: null,
	          y: null
	        },
	        nextTile: 'blue'
	      };
	      // let center = { x: this.game.world.centerX, y: this.game.world.centerY }
	      this.gameBackground = this.add.sprite(0, 0, 'game-background');
	
	      // this.tile = new Tile(this.game, 4, 4, 'blue');
	      this.grid = new _Grid2.default(this.game, this.gamestate);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	
	      this.grid.update();
	    }
	  }]);
	
	  return Play;
	}(Phaser.State);
	
	exports.default = Play;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tile = function (_Phaser$Sprite) {
	  _inherits(Tile, _Phaser$Sprite);
	
	  function Tile(game, x, y, frame, nextTile, gamestate) {
	    _classCallCheck(this, Tile);
	
	    var _this = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, game, x, y, frame));
	
	    _this.game = game;
	    _this.isPlaced = false;
	    _this.enableBody = true;
	    _this.wiggling = false;
	
	    _this.nextTile = nextTile;
	    _this.xPos = (x - 6) / 64;
	    _this.yPos = y / 64;
	    _this.tilestate = {
	      'level': 0,
	      'type': 'empty'
	    };
	
	    _this.gamestate = gamestate;
	
	    _this.game.physics.enable(_this, Phaser.Physics.ARCADE);
	    _this.body.collideWorldBounds = true;
	
	    // Input & Events
	    _this.inputEnabled = true;
	    _this.events.onInputOver.add(_this.onInputOver, _this);
	    _this.events.onInputOut.add(_this.onInputOut, _this);
	    _this.events.onInputDown.add(function () {
	      _this.onClick();
	    }, _this);
	
	    // Points
	    var style = { font: "20px Roboto Mono", fill: "#ffffff", textalign: "center" };
	    _this.label_score = _this.game.add.text(32, 32, _this.tilestate.level, style);
	    _this.label_score.anchor.setTo(0.5, 0.5);
	    _this.label_score.text = ' ';
	    _this.addChild(_this.label_score);
	
	    // Activate
	    _this.game.stage.addChild(_this);
	
	    return _this;
	  }
	
	  _createClass(Tile, [{
	    key: 'onInputOver',
	    value: function onInputOver() {
	      // console.log('hover: ' + this.xPos + ' ' + this.yPos);
	      this.loadTexture(this.nextTile, 0, false);
	      this.label_score.text = '1';
	      this.gamestate.hovering = { x: this.xPos, y: this.yPos };
	    }
	  }, {
	    key: 'onInputOut',
	    value: function onInputOut() {
	      if (this.tilestate.level == 0 && this.tilestate.type == 'empty') {
	        this.loadTexture('empty', 0, false);
	        this.label_score.text = ' ';
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      // this.handleInput();
	    }
	  }, {
	    key: 'resetToEmpty',
	    value: function resetToEmpty() {
	      console.log('reset');
	      this.loadTexture('empty', 0, false);
	      this.label_score.text = ' ';
	      this.tilestate.type = 'empty';
	      this.tilestate.level = 0;
	      this.game.add.tween(this).to({ y: this.y - 4 }, 0.1, Phaser.Easing.Bounce.Out, true);
	      // this.y -= 8;
	      console.log(this.y);
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      // console.log('click: ' + this.xPos + ' ' + this.yPos);
	      this.tilestate.level = 1;
	      this.tilestate.type = this.nextTile;
	      this.gamestate.lastClicked.x = this.xPos;
	      this.gamestate.lastClicked.y = this.yPos;
	      this.game.add.tween(this).to({ y: this.y + 4 }, 400, Phaser.Easing.Bounce.Out, true);
	    }
	  }, {
	    key: 'wiggle',
	    value: function wiggle(dir) {
	      var wiggle = void 0;
	      switch (dir) {
	        case 'left':
	          wiggle = this.game.add.tween(this).to({ x: this.x - 4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
	          break;
	        case 'right':
	          wiggle = this.game.add.tween(this).to({ x: this.x + 4 }, 500, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
	          break;
	
	        default:
	          break;
	      }
	
	      this.wiggling = true;
	    }
	  }, {
	    key: 'stopWiggle',
	    value: function stopWiggle() {
	      wiggle = null;
	    }
	  }]);
	
	  return Tile;
	}(Phaser.Sprite);
	
	exports.default = Tile;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Tile = __webpack_require__(2);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Grid = function () {
	  function Grid(game, gamestate) {
	    _classCallCheck(this, Grid);
	
	    this.game = game;
	    this.rows = 7;
	    this.cols = 7;
	    this.grid = new Array(this.rows);
	    this.nextTile = gamestate.nextTile;
	    this.gamestate = gamestate;
	    this.possibleMatches = [];
	    this.lastHovered = {
	      x: null,
	      y: null
	    };
	
	    this.initGrid();
	  }
	
	  _createClass(Grid, [{
	    key: 'initGrid',
	    value: function initGrid() {
	      // Initialize 2D Grid Array
	      for (var i = 0; i < this.cols; i++) {
	        this.grid[i] = new Array(this.cols);
	      }
	
	      for (var _i = 0; _i < this.cols; _i++) {
	        for (var j = 0; j < this.rows; j++) {
	          this.grid[_i][j] = new _Tile2.default(this.game, _i * 64 + 6, j * 64, 'empty', this.nextTile, this.gamestate);
	        }
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      // console.log('Update');
	      this.findPossibleMatches();
	      // console.log(this.possibleMatches);
	    }
	  }, {
	    key: 'check',
	    value: function check(x, y) {
	      if (this.grid[x][y].tilestate.type == this.nextTile) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: 'clearWiggles',
	    value: function clearWiggles() {
	      for (var i = 0; i <= this.possibleMatches.length; i++) {
	        console.log('Stop wiggling');
	        var current = this.possibleMatches[i];
	        if (current !== undefined) {
	
	          current.stopWiggle();
	        }
	        // this.possibleMatches[i].stopWiggle();
	        // console.log(this.possibleMatches);
	      }
	    }
	  }, {
	    key: 'findPossibleMatches',
	    value: function findPossibleMatches() {
	      // Check all possible matches on
	      // the current hovered tile.
	      if (this.gamestate.hovering.x === null) {
	        return;
	      }
	
	      // Currently Hovering
	      var x = this.gamestate.hovering.x;
	      var y = this.gamestate.hovering.y;
	      var currentType = this.nextTile;
	
	      if (this.lastHovered.x === null) {
	        this.lastHovered.x = x;
	        this.lastHovered.y = y;
	      }
	
	      if (this.lastHovered.x == x && this.lastHovered.y == y) {
	        // Only do the checks once
	        return;
	      } else {
	        // New Hover position
	        this.lastHovered.x = x;
	        this.lastHovered.y = y;
	        this.clearWiggles();
	      }
	
	      if (x < 6) {
	
	        if (this.check(x + 1, y)) {
	          console.log('match to the left');
	          this.grid[x + 1][y].wiggle('left');
	          this.possibleMatches.push(this.grid[x + 1][y]);
	
	          if (y < 6) {
	            if (this.check(x, y + 1)) {
	              console.log('match down');
	            }
	
	            if (y < 5) {
	              if (this.check(x, y + 2)) {
	                console.log('double match down');
	              }
	            }
	          }
	
	          // if (this.grid[i][j+1].tilestate.type == currentType) {
	          //   if (this.grid[i][j+2].tilestate.type == currentType) {
	          //     this.tripleDownMatch(i, j);
	          //   } else {
	          //     this.doubleDownMatch(i, j);
	          //   }
	          //
	          //   // console.log(this.grid[i][j-1]);
	          //   let toDelete = this.grid[i][j];
	          //   toDelete.resetToEmpty();
	          //
	        }
	      }
	    }
	  }, {
	    key: 'doubleDownMatch',
	    value: function doubleDownMatch(i, j) {
	      console.log(this.gamestate.lastClicked);
	    }
	  }, {
	    key: 'tripleDownMatch',
	    value: function tripleDownMatch(i, j) {}
	  }]);
	
	  return Grid;
	}();
	
	exports.default = Grid;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);
	
	  function Preload() {
	    _classCallCheck(this, Preload);
	
	    var _this = _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).call(this));
	
	    _this.background = null;
	    _this.preloadBar = null;
	    _this.ready = false;
	    return _this;
	  }
	
	  _createClass(Preload, [{
	    key: 'preload',
	    value: function preload() {
	      this.stage.backgroundColor = '#C2C2C2';
	      this.load.image('game-background', 'assets/images/game-background.png');
	
	      this.load.image('blue', 'assets/images/blue-tile.png');
	      this.load.image('red', 'assets/images/red-tile.png');
	      this.load.image('empty', 'assets/images/empty-tile.png');
	    }
	  }, {
	    key: 'create',
	    value: function create() {}
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.ready == false) {
	        this.ready = true;
	        this.state.start('play');
	      }
	    }
	  }]);
	
	  return Preload;
	}(Phaser.State);
	
	exports.default = Preload;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTQxNTViN2U1NzgyM2I1MTkzNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiUGhhc2VyIiwiQ0FOVkFTIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsIlBsYXkiLCJnYW1lc3RhdGUiLCJsYXN0Q2xpY2tlZCIsIngiLCJ5IiwiaG92ZXJpbmciLCJuZXh0VGlsZSIsImdhbWVCYWNrZ3JvdW5kIiwic3ByaXRlIiwiZ3JpZCIsImdhbWUiLCJ1cGRhdGUiLCJTdGF0ZSIsIlRpbGUiLCJmcmFtZSIsImlzUGxhY2VkIiwiZW5hYmxlQm9keSIsIndpZ2dsaW5nIiwieFBvcyIsInlQb3MiLCJ0aWxlc3RhdGUiLCJwaHlzaWNzIiwiZW5hYmxlIiwiUGh5c2ljcyIsIkFSQ0FERSIsImJvZHkiLCJjb2xsaWRlV29ybGRCb3VuZHMiLCJpbnB1dEVuYWJsZWQiLCJldmVudHMiLCJvbklucHV0T3ZlciIsIm9uSW5wdXRPdXQiLCJvbklucHV0RG93biIsIm9uQ2xpY2siLCJzdHlsZSIsImZvbnQiLCJmaWxsIiwidGV4dGFsaWduIiwibGFiZWxfc2NvcmUiLCJ0ZXh0IiwibGV2ZWwiLCJhbmNob3IiLCJzZXRUbyIsImFkZENoaWxkIiwic3RhZ2UiLCJsb2FkVGV4dHVyZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwidHdlZW4iLCJ0byIsIkVhc2luZyIsIkJvdW5jZSIsIk91dCIsImRpciIsIndpZ2dsZSIsIkluT3V0IiwiU3ByaXRlIiwiR3JpZCIsInJvd3MiLCJjb2xzIiwiQXJyYXkiLCJwb3NzaWJsZU1hdGNoZXMiLCJsYXN0SG92ZXJlZCIsImluaXRHcmlkIiwiaSIsImoiLCJmaW5kUG9zc2libGVNYXRjaGVzIiwibGVuZ3RoIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInN0b3BXaWdnbGUiLCJjdXJyZW50VHlwZSIsImNsZWFyV2lnZ2xlcyIsImNoZWNrIiwicHVzaCIsIlByZWxvYWQiLCJiYWNrZ3JvdW5kIiwicHJlbG9hZEJhciIsInJlYWR5IiwiYmFja2dyb3VuZENvbG9yIiwibG9hZCIsImltYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTjtBQUNFLG1CQUFjO0FBQUE7O0FBQUEsNkdBRU4sR0FGTSxFQUVELEdBRkMsRUFFSUMsT0FBT0MsTUFGWCxFQUVtQixTQUZuQixFQUU4QixJQUY5Qjs7QUFHWixXQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFmO0FBQ0EsV0FBS0QsS0FBTCxDQUFXQyxHQUFYLENBQWUsTUFBZixrQkFBNkIsS0FBN0I7QUFDQSxXQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsU0FBakI7QUFMWTtBQU1iOzs7R0FSZ0JKLE9BQU9ELEk7O0FBWTFCLEtBQUlBLElBQUosRzs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHcUJNLEk7Ozs7Ozs7Ozs7OzhCQUVWO0FBQ1AsWUFBS0MsU0FBTCxHQUFpQjtBQUNmQyxzQkFBYTtBQUNYQyxjQUFHLElBRFE7QUFFWEMsY0FBRztBQUZRLFVBREU7QUFLZkMsbUJBQVU7QUFDUkYsY0FBRyxJQURLO0FBRVJDLGNBQUc7QUFGSyxVQUxLO0FBU2ZFLG1CQUFVO0FBVEssUUFBakI7QUFXQTtBQUNB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U0FBN0I7QUFDQSxZQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQW1DLG1DQUFuQzs7QUFFQSxZQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsNkJBQXhCO0FBQ0EsWUFBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCLEtBQWhCLEVBQXVCLDRCQUF2QjtBQUNBLFlBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF5Qiw4QkFBekI7QUFDRDs7OzhCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLFdBQUksS0FBS0gsS0FBTCxJQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCLGNBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsY0FBS2pGLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQixNQUFqQjtBQUNEO0FBQ0Y7Ozs7R0EzQmtDSixPQUFPaUIsSzs7bUJBQXZCK0QsTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDU0MTU1YjdlNTc4MjNiNTE5Mzc4XG4gKiovIiwiXG5pbXBvcnQgcGxheSBmcm9tICcuL3N0YXRlcy9wbGF5JztcbmltcG9ydCBwcmVsb2FkIGZyb20gJy4vc3RhdGVzL3ByZWxvYWQnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gNTYzIC0gNzM2XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoNDYwLCA2MzYsIFBoYXNlci5DQU5WQVMsICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ3ByZWxvYWQnLCBwcmVsb2FkKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgncGxheScsIHBsYXksIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gIH1cblxufVxuXG5uZXcgR2FtZSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJcbmltcG9ydCBUaWxlIGZyb20gJy4uL21vZGVscy9UaWxlJztcbmltcG9ydCBHcmlkIGZyb20gJy4uL21vZGVscy9HcmlkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lc3RhdGUgPSB7XG4gICAgICBsYXN0Q2xpY2tlZDoge1xuICAgICAgICB4OiBudWxsLFxuICAgICAgICB5OiBudWxsXG4gICAgICB9LFxuICAgICAgaG92ZXJpbmc6IHtcbiAgICAgICAgeDogbnVsbCxcbiAgICAgICAgeTogbnVsbFxuICAgICAgfSxcbiAgICAgIG5leHRUaWxlOiAnYmx1ZSdcbiAgICB9XG4gICAgLy8gbGV0IGNlbnRlciA9IHsgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIH1cbiAgICB0aGlzLmdhbWVCYWNrZ3JvdW5kID0gdGhpcy5hZGQuc3ByaXRlKDAsIDAsICdnYW1lLWJhY2tncm91bmQnKTtcblxuICAgIC8vIHRoaXMudGlsZSA9IG5ldyBUaWxlKHRoaXMuZ2FtZSwgNCwgNCwgJ2JsdWUnKTtcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLmdhbWUsIHRoaXMuZ2FtZXN0YXRlKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5ncmlkLnVwZGF0ZSgpO1xuXG5cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL3BsYXkuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgbmV4dFRpbGUsIGdhbWVzdGF0ZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksIGZyYW1lKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuaXNQbGFjZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVuYWJsZUJvZHkgPSB0cnVlO1xuICAgIHRoaXMud2lnZ2xpbmcgICA9IGZhbHNlO1xuXG4gICAgdGhpcy5uZXh0VGlsZSA9IG5leHRUaWxlO1xuICAgIHRoaXMueFBvcyA9ICh4LTYpLzY0O1xuICAgIHRoaXMueVBvcyA9ICh5KS82NDtcbiAgICB0aGlzLnRpbGVzdGF0ZSA9IHtcbiAgICAgICdsZXZlbCc6IDAsXG4gICAgICAndHlwZScgOiAnZW1wdHknXG4gICAgfVxuXG4gICAgdGhpcy5nYW1lc3RhdGUgPSBnYW1lc3RhdGU7XG5cbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcywgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgIC8vIElucHV0ICYgRXZlbnRzXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm9uSW5wdXRPdmVyLCB0aGlzKTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3V0LmFkZCh0aGlzLm9uSW5wdXRPdXQsIHRoaXMpO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCgoKSA9PiB7IHRoaXMub25DbGljaygpOyB9LCB0aGlzKTtcblxuICAgIC8vIFBvaW50c1xuICAgIGNvbnN0IHN0eWxlID0geyBmb250OiBcIjIwcHggUm9ib3RvIE1vbm9cIiwgZmlsbDogXCIjZmZmZmZmXCIsIHRleHRhbGlnbjogXCJjZW50ZXJcIiB9O1xuICAgIHRoaXMubGFiZWxfc2NvcmUgPSB0aGlzLmdhbWUuYWRkLnRleHQoMzIsIDMyLCB0aGlzLnRpbGVzdGF0ZS5sZXZlbCwgc3R5bGUpO1xuICAgIHRoaXMubGFiZWxfc2NvcmUuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmxhYmVsX3Njb3JlKTtcblxuICAgIC8vIEFjdGl2YXRlXG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuXG4gIH1cblxuICBvbklucHV0T3ZlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaG92ZXI6ICcgKyB0aGlzLnhQb3MgKyAnICcgKyB0aGlzLnlQb3MpO1xuICAgIHRoaXMubG9hZFRleHR1cmUodGhpcy5uZXh0VGlsZSwgMCwgZmFsc2UpO1xuICAgIHRoaXMubGFiZWxfc2NvcmUudGV4dCA9ICcxJztcbiAgICB0aGlzLmdhbWVzdGF0ZS5ob3ZlcmluZyA9IHt4OiB0aGlzLnhQb3MsIHk6IHRoaXMueVBvc307XG4gIH1cblxuICBvbklucHV0T3V0KCkge1xuICAgIGlmICh0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9PSAwICYmIHRoaXMudGlsZXN0YXRlLnR5cGUgPT0gJ2VtcHR5Jykge1xuICAgICAgdGhpcy5sb2FkVGV4dHVyZSgnZW1wdHknLCAwLCBmYWxzZSk7XG4gICAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgfVxuXG4gIHJlc2V0VG9FbXB0eSgpIHtcbiAgICBjb25zb2xlLmxvZygncmVzZXQnKTtcbiAgICB0aGlzLmxvYWRUZXh0dXJlKCdlbXB0eScsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgdGhpcy50aWxlc3RhdGUudHlwZSA9ICdlbXB0eSc7XG4gICAgdGhpcy50aWxlc3RhdGUubGV2ZWwgPSAwO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHsgeTogdGhpcy55LTQgfSwgMC4xLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQsIHRydWUpO1xuICAgIC8vIHRoaXMueSAtPSA4O1xuICAgIGNvbnNvbGUubG9nKHRoaXMueSk7XG4gIH1cblxuXG5cbiAgb25DbGljaygpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2xpY2s6ICcgKyB0aGlzLnhQb3MgKyAnICcgKyB0aGlzLnlQb3MpO1xuICAgIHRoaXMudGlsZXN0YXRlLmxldmVsID0gMTtcbiAgICB0aGlzLnRpbGVzdGF0ZS50eXBlICA9IHRoaXMubmV4dFRpbGU7XG4gICAgdGhpcy5nYW1lc3RhdGUubGFzdENsaWNrZWQueCA9IHRoaXMueFBvcztcbiAgICB0aGlzLmdhbWVzdGF0ZS5sYXN0Q2xpY2tlZC55ID0gdGhpcy55UG9zO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHsgeTogdGhpcy55KzQgfSwgNDAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQsIHRydWUpO1xuXG4gICB9XG5cbiAgIHdpZ2dsZShkaXIpIHtcbiAgICAgbGV0IHdpZ2dsZTtcbiAgICBzd2l0Y2goZGlyKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgd2lnZ2xlID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byggeyB4OiB0aGlzLngtNCB9LCA1MDAsIFBoYXNlci5FYXNpbmcuQm91bmNlLkluT3V0LCB0cnVlLCAwLCAtMSwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB3aWdnbGUgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7IHg6IHRoaXMueCs0IH0sIDUwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuSW5PdXQsIHRydWUsIDAsIC0xLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgICB9XG5cbiAgICB0aGlzLndpZ2dsaW5nID0gdHJ1ZTtcbiAgIH1cblxuICAgc3RvcFdpZ2dsZSgpIHtcbiAgICAgd2lnZ2xlID0gbnVsbDtcbiAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9UaWxlLmpzXG4gKiovIiwiaW1wb3J0IFRpbGUgZnJvbSAnLi9UaWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIGdhbWVzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5yb3dzID0gNztcbiAgICB0aGlzLmNvbHMgPSA3O1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBBcnJheSh0aGlzLnJvd3MpO1xuICAgIHRoaXMubmV4dFRpbGUgPSBnYW1lc3RhdGUubmV4dFRpbGU7XG4gICAgdGhpcy5nYW1lc3RhdGUgPSBnYW1lc3RhdGU7XG4gICAgdGhpcy5wb3NzaWJsZU1hdGNoZXMgPSBbXTtcbiAgICB0aGlzLmxhc3RIb3ZlcmVkID0ge1xuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0R3JpZCgpO1xuXG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICAvLyBJbml0aWFsaXplIDJEIEdyaWQgQXJyYXlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sczsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbaV0gPSBuZXcgQXJyYXkodGhpcy5jb2xzKVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yb3dzOyBqKyspIHtcbiAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gbmV3IFRpbGUodGhpcy5nYW1lLCBpKjY0KzYsIGoqNjQsICdlbXB0eScsIHRoaXMubmV4dFRpbGUsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnVXBkYXRlJyk7XG4gICAgdGhpcy5maW5kUG9zc2libGVNYXRjaGVzKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb3NzaWJsZU1hdGNoZXMpO1xuXG4gIH1cblxuICBjaGVjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ3JpZFt4XVt5XS50aWxlc3RhdGUudHlwZSA9PSB0aGlzLm5leHRUaWxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyV2lnZ2xlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnBvc3NpYmxlTWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coJ1N0b3Agd2lnZ2xpbmcnKVxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnBvc3NpYmxlTWF0Y2hlc1tpXTtcbiAgICAgIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgY3VycmVudC5zdG9wV2lnZ2xlKCk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLnBvc3NpYmxlTWF0Y2hlc1tpXS5zdG9wV2lnZ2xlKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvc3NpYmxlTWF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgZmluZFBvc3NpYmxlTWF0Y2hlcygpIHtcbiAgICAvLyBDaGVjayBhbGwgcG9zc2libGUgbWF0Y2hlcyBvblxuICAgIC8vIHRoZSBjdXJyZW50IGhvdmVyZWQgdGlsZS5cbiAgICBpZiAodGhpcy5nYW1lc3RhdGUuaG92ZXJpbmcueCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEN1cnJlbnRseSBIb3ZlcmluZ1xuICAgIGxldCB4ICAgICAgICAgICA9IHRoaXMuZ2FtZXN0YXRlLmhvdmVyaW5nLng7XG4gICAgbGV0IHkgICAgICAgICAgID0gdGhpcy5nYW1lc3RhdGUuaG92ZXJpbmcueTtcbiAgICBsZXQgY3VycmVudFR5cGUgPSB0aGlzLm5leHRUaWxlO1xuXG4gICAgaWYgKHRoaXMubGFzdEhvdmVyZWQueCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5sYXN0SG92ZXJlZC54ID0geDtcbiAgICAgIHRoaXMubGFzdEhvdmVyZWQueSA9IHk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdEhvdmVyZWQueCA9PSB4ICYmIHRoaXMubGFzdEhvdmVyZWQueSA9PSB5KSB7XG4gICAgICAvLyBPbmx5IGRvIHRoZSBjaGVja3Mgb25jZVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXcgSG92ZXIgcG9zaXRpb25cbiAgICAgIHRoaXMubGFzdEhvdmVyZWQueCA9IHg7XG4gICAgICB0aGlzLmxhc3RIb3ZlcmVkLnkgPSB5O1xuICAgICAgdGhpcy5jbGVhcldpZ2dsZXMoKTtcbiAgICB9XG5cblxuICAgIGlmICh4IDwgNikge1xuXG4gICAgICBpZiAodGhpcy5jaGVjayh4KzEsIHkpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaCB0byB0aGUgbGVmdCcpO1xuICAgICAgICB0aGlzLmdyaWRbeCsxXVt5XS53aWdnbGUoJ2xlZnQnKTtcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1hdGNoZXMucHVzaCh0aGlzLmdyaWRbeCsxXVt5XSk7XG5cbiAgICAgICAgaWYgKHkgPCA2KSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2soeCwgeSsxKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoIGRvd24nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoeSA8IDUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKHgsIHkrMikpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvdWJsZSBtYXRjaCBkb3duJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG4gICAgICAvLyBpZiAodGhpcy5ncmlkW2ldW2orMV0udGlsZXN0YXRlLnR5cGUgPT0gY3VycmVudFR5cGUpIHtcbiAgICAgIC8vICAgaWYgKHRoaXMuZ3JpZFtpXVtqKzJdLnRpbGVzdGF0ZS50eXBlID09IGN1cnJlbnRUeXBlKSB7XG4gICAgICAvLyAgICAgdGhpcy50cmlwbGVEb3duTWF0Y2goaSwgaik7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgdGhpcy5kb3VibGVEb3duTWF0Y2goaSwgaik7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vXG4gICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JpZFtpXVtqLTFdKTtcbiAgICAgIC8vICAgbGV0IHRvRGVsZXRlID0gdGhpcy5ncmlkW2ldW2pdO1xuICAgICAgLy8gICB0b0RlbGV0ZS5yZXNldFRvRW1wdHkoKTtcbiAgICAgIC8vXG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxuXG4gIGRvdWJsZURvd25NYXRjaChpLCBqKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5nYW1lc3RhdGUubGFzdENsaWNrZWQpO1xuXG4gIH1cblxuICB0cmlwbGVEb3duTWF0Y2goaSwgaikge1xuXG4gIH1cblxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvR3JpZC5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xuICAgIHRoaXMucHJlbG9hZEJhciA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSAgICAgID0gZmFsc2U7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNDMkMyQzInO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWFnZXMvZ2FtZS1iYWNrZ3JvdW5kLnBuZycpO1xuXG4gICAgdGhpcy5sb2FkLmltYWdlKCdibHVlJywgJ2Fzc2V0cy9pbWFnZXMvYmx1ZS10aWxlLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgncmVkJywgJ2Fzc2V0cy9pbWFnZXMvcmVkLXRpbGUucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbXB0eScsICdhc3NldHMvaW1hZ2VzL2VtcHR5LXRpbGUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwbGF5Jyk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9wcmVsb2FkLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
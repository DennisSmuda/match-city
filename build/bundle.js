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
	      this.y -= 8;
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
	      this.findMatches();
	    }
	  }, {
	    key: 'findMatches',
	    value: function findMatches() {
	      // Loop through grid array
	      // check matches, and collapse
	      // into last clicked/set tile.
	      for (var i = 0; i < this.cols - 2; i++) {
	        for (var j = 0; j < this.rows; j++) {
	          // Check for last clicked tile
	
	          // console.log(this.grid[i][j].tilestate.level);
	          if (this.grid[i][j].tilestate.level > 0) {
	            var currentType = this.grid[i][j].tilestate.type;
	
	            if (this.grid[i][j + 1].tilestate.type == currentType) {
	              if (this.grid[i][j + 2].tilestate.type == currentType) {
	                this.tripleDownMatch(i, j);
	              } else {
	                this.doubleDownMatch(i, j);
	              }
	
	              // console.log(this.grid[i][j-1]);
	              var toDelete = this.grid[i][j];
	              toDelete.resetToEmpty();
	            }
	          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGEyNWU0MDZhZjE4NjhhYzgwY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiUGhhc2VyIiwiQ0FOVkFTIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsIlBsYXkiLCJnYW1lc3RhdGUiLCJsYXN0Q2xpY2tlZCIsIngiLCJ5IiwiaG92ZXJpbmciLCJuZXh0VGlsZSIsImdhbWVCYWNrZ3JvdW5kIiwic3ByaXRlIiwiZ3JpZCIsImdhbWUiLCJ1cGRhdGUiLCJTdGF0ZSIsIlRpbGUiLCJmcmFtZSIsImlzUGxhY2VkIiwiZW5hYmxlQm9keSIsInhQb3MiLCJ5UG9zIiwidGlsZXN0YXRlIiwicGh5c2ljcyIsImVuYWJsZSIsIlBoeXNpY3MiLCJBUkNBREUiLCJib2R5IiwiY29sbGlkZVdvcmxkQm91bmRzIiwiaW5wdXRFbmFibGVkIiwiZXZlbnRzIiwib25JbnB1dE92ZXIiLCJvbklucHV0T3V0Iiwib25JbnB1dERvd24iLCJvbkNsaWNrIiwic3R5bGUiLCJmb250IiwiZmlsbCIsInRleHRhbGlnbiIsImxhYmVsX3Njb3JlIiwidGV4dCIsImxldmVsIiwiYW5jaG9yIiwic2V0VG8iLCJhZGRDaGlsZCIsInN0YWdlIiwibG9hZFRleHR1cmUiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsInR3ZWVuIiwidG8iLCJFYXNpbmciLCJCb3VuY2UiLCJPdXQiLCJTcHJpdGUiLCJHcmlkIiwicm93cyIsImNvbHMiLCJBcnJheSIsImluaXRHcmlkIiwiaSIsImoiLCJmaW5kTWF0Y2hlcyIsImN1cnJlbnRUeXBlIiwidHJpcGxlRG93bk1hdGNoIiwiZG91YmxlRG93bk1hdGNoIiwidG9EZWxldGUiLCJyZXNldFRvRW1wdHkiLCJQcmVsb2FkIiwiYmFja2dyb3VuZCIsInByZWxvYWRCYXIiLCJyZWFkeSIsImJhY2tncm91bmRDb2xvciIsImxvYWQiLCJpbWFnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ047QUFDRSxtQkFBYztBQUFBOztBQUFBLDZHQUVOLEdBRk0sRUFFRCxHQUZDLEVBRUlDLE9BQU9DLE1BRlgsRUFFbUIsU0FGbkIsRUFFOEIsSUFGOUI7O0FBR1osV0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsU0FBZjtBQUNBLFdBQUtELEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE1BQWYsa0JBQTZCLEtBQTdCO0FBQ0EsV0FBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCLFNBQWpCO0FBTFk7QUFNYjs7O0dBUmdCSixPQUFPRCxJOztBQVkxQixLQUFJQSxJQUFKLEc7Ozs7Ozs7Ozs7Ozs7O0FDZkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBR3FCTSxJOzs7Ozs7Ozs7Ozs4QkFFVjtBQUNQLFlBQUtDLFNBQUwsR0FBaUI7QUFDZkMsc0JBQWE7QUFDWEMsY0FBRyxJQURRO0FBRVhDLGNBQUc7QUFGUSxVQURFO0FBS2ZDLG1CQUFVO0FBQ1JGLGNBQUcsSUFESztBQUVSQyxjQUFHO0FBRkssVUFMSztBQVNmRSxtQkFBVTtBQVRLLFFBQWpCO0FBV0E7QUFDQSxZQUFLQyxjQUFMLEdBQXNCLEtBQUtULEdBQUwsQ0FBU1UsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixpQkFBdEIsQ0FBdEI7O0FB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QUFWLENBQWdCLE1BQWhCLEVBQXdCLDZCQUF4QjtBQUNBLFlBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixLQUFoQixFQUF1Qiw0QkFBdkI7QUFDQSxZQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsT0FBaEIsRUFBeUIsOEJBQXpCO0FBQ0Q7Ozs4QkFFUSxDQUVSOzs7OEJBRVE7QUFDUCxXQUFJLEtBQUtILEtBQUwsSUFBYyxLQUFsQixFQUF5QjtBQUN2QixjQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBLGNBQUt4RSxLQUFMLENBQVdFLEtBQVgsQ0FBaUIsTUFBakI7QUFDRDtBQUNGOzs7O0dBM0JrQ0osT0FBT2lCLEs7O21CQUF2QnNELE8iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwYTI1ZTQwNmFmMTg2OGFjODBjY1xuICoqLyIsIlxuaW1wb3J0IHBsYXkgZnJvbSAnLi9zdGF0ZXMvcGxheSc7XG5pbXBvcnQgcHJlbG9hZCBmcm9tICcuL3N0YXRlcy9wcmVsb2FkJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbi8vIDU2MyAtIDczNlxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKDQ2MCwgNjM2LCBQaGFzZXIuQ0FOVkFTLCAnY29udGVudCcsIG51bGwpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdwcmVsb2FkJywgcHJlbG9hZCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ3BsYXknLCBwbGF5LCBmYWxzZSk7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgncHJlbG9hZCcpO1xuICB9XG5cbn1cblxubmV3IEdhbWUoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiXG5pbXBvcnQgVGlsZSBmcm9tICcuLi9tb2RlbHMvVGlsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuLi9tb2RlbHMvR3JpZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZXN0YXRlID0ge1xuICAgICAgbGFzdENsaWNrZWQ6IHtcbiAgICAgICAgeDogbnVsbCxcbiAgICAgICAgeTogbnVsbFxuICAgICAgfSxcbiAgICAgIGhvdmVyaW5nOiB7XG4gICAgICAgIHg6IG51bGwsXG4gICAgICAgIHk6IG51bGxcbiAgICAgIH0sXG4gICAgICBuZXh0VGlsZTogJ2JsdWUnXG4gICAgfVxuICAgIC8vIGxldCBjZW50ZXIgPSB7IHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSB9XG4gICAgdGhpcy5nYW1lQmFja2dyb3VuZCA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyB0aGlzLnRpbGUgPSBuZXcgVGlsZSh0aGlzLmdhbWUsIDQsIDQsICdibHVlJyk7XG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcy5nYW1lLCB0aGlzLmdhbWVzdGF0ZSk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMuZ3JpZC51cGRhdGUoKTtcblxuXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9wbGF5LmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIG5leHRUaWxlLCBnYW1lc3RhdGUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBmcmFtZSk7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmlzUGxhY2VkID0gZmFsc2U7XG4gICAgdGhpcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dFRpbGUgPSBuZXh0VGlsZTtcbiAgICB0aGlzLnhQb3MgPSAoeC02KS82NDtcbiAgICB0aGlzLnlQb3MgPSAoeSkvNjQ7XG4gICAgdGhpcy50aWxlc3RhdGUgPSB7XG4gICAgICAnbGV2ZWwnOiAwLFxuICAgICAgJ3R5cGUnIDogJ2VtcHR5J1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICAvLyBJbnB1dCAmIEV2ZW50c1xuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQodGhpcy5vbklucHV0T3ZlciwgdGhpcyk7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQodGhpcy5vbklucHV0T3V0LCB0aGlzKTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4geyB0aGlzLm9uQ2xpY2soKTsgfSwgdGhpcyk7XG5cbiAgICAvLyBQb2ludHNcbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udDogXCIyMHB4IFJvYm90byBNb25vXCIsIGZpbGw6IFwiI2ZmZmZmZlwiLCB0ZXh0YWxpZ246IFwiY2VudGVyXCIgfTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlID0gdGhpcy5nYW1lLmFkZC50ZXh0KDMyLCAzMiwgdGhpcy50aWxlc3RhdGUubGV2ZWwsIHN0eWxlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJyAnO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5sYWJlbF9zY29yZSk7XG5cbiAgICAvLyBBY3RpdmF0ZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICB9XG5cbiAgb25JbnB1dE92ZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hvdmVyOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMubmV4dFRpbGUsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnMSc7XG4gICAgdGhpcy5nYW1lc3RhdGUuaG92ZXJpbmcgPSB7eDogdGhpcy54UG9zLCB5OiB0aGlzLnlQb3N9O1xuICB9XG5cbiAgb25JbnB1dE91dCgpIHtcbiAgICBpZiAodGhpcy50aWxlc3RhdGUubGV2ZWwgPT0gMCAmJiB0aGlzLnRpbGVzdGF0ZS50eXBlID09ICdlbXB0eScpIHtcbiAgICAgIHRoaXMubG9hZFRleHR1cmUoJ2VtcHR5JywgMCwgZmFsc2UpO1xuICAgICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJyAnO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB0aGlzLmhhbmRsZUlucHV0KCk7XG4gIH1cblxuICByZXNldFRvRW1wdHkoKSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc2V0Jyk7XG4gICAgdGhpcy5sb2FkVGV4dHVyZSgnZW1wdHknLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJyAnO1xuICAgIHRoaXMudGlsZXN0YXRlLnR5cGUgPSAnZW1wdHknO1xuICAgIHRoaXMudGlsZXN0YXRlLmxldmVsID0gMDtcbiAgICB0aGlzLnkgLT0gODtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnkpO1xuICB9XG5cblxuXG4gIG9uQ2xpY2soKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NsaWNrOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9IDE7XG4gICAgdGhpcy50aWxlc3RhdGUudHlwZSAgPSB0aGlzLm5leHRUaWxlO1xuICAgIHRoaXMuZ2FtZXN0YXRlLmxhc3RDbGlja2VkLnggPSB0aGlzLnhQb3M7XG4gICAgdGhpcy5nYW1lc3RhdGUubGFzdENsaWNrZWQueSA9IHRoaXMueVBvcztcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7IHk6IHRoaXMueSs0IH0sIDQwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuT3V0LCB0cnVlKTtcblxuICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1RpbGUuanNcbiAqKi8iLCJpbXBvcnQgVGlsZSBmcm9tICcuL1RpbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnJvd3MgPSA3O1xuICAgIHRoaXMuY29scyA9IDc7XG4gICAgdGhpcy5ncmlkID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgdGhpcy5uZXh0VGlsZSA9IGdhbWVzdGF0ZS5uZXh0VGlsZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuICAgIHRoaXMuaW5pdEdyaWQoKTtcblxuICB9XG5cbiAgaW5pdEdyaWQoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSAyRCBHcmlkIEFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHRoaXMuY29scylcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sczsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucm93czsgaisrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IG5ldyBUaWxlKHRoaXMuZ2FtZSwgaSo2NCs2LCBqKjY0LCAnZW1wdHknLCB0aGlzLm5leHRUaWxlLCB0aGlzLmdhbWVzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1VwZGF0ZScpO1xuICAgIHRoaXMuZmluZE1hdGNoZXMoKTtcblxuICB9XG5cbiAgZmluZE1hdGNoZXMoKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGdyaWQgYXJyYXlcbiAgICAvLyBjaGVjayBtYXRjaGVzLCBhbmQgY29sbGFwc2VcbiAgICAvLyBpbnRvIGxhc3QgY2xpY2tlZC9zZXQgdGlsZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLmNvbHMtMik7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvd3M7IGorKykge1xuICAgICAgICAvLyBDaGVjayBmb3IgbGFzdCBjbGlja2VkIHRpbGVcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyaWRbaV1bal0udGlsZXN0YXRlLmxldmVsKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtqXS50aWxlc3RhdGUubGV2ZWwgPiAwKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRUeXBlID0gdGhpcy5ncmlkW2ldW2pdLnRpbGVzdGF0ZS50eXBlO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtqKzFdLnRpbGVzdGF0ZS50eXBlID09IGN1cnJlbnRUeXBlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2orMl0udGlsZXN0YXRlLnR5cGUgPT0gY3VycmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgdGhpcy50cmlwbGVEb3duTWF0Y2goaSwgaik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRvdWJsZURvd25NYXRjaChpLCBqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncmlkW2ldW2otMV0pO1xuICAgICAgICAgICAgbGV0IHRvRGVsZXRlID0gdGhpcy5ncmlkW2ldW2pdO1xuICAgICAgICAgICAgdG9EZWxldGUucmVzZXRUb0VtcHR5KCk7XG5cbiAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG91YmxlRG93bk1hdGNoKGksIGopIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVzdGF0ZS5sYXN0Q2xpY2tlZCk7XG5cbiAgfVxuXG4gIHRyaXBsZURvd25NYXRjaChpLCBqKSB7XG5cbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9HcmlkLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG4gICAgdGhpcy5wcmVsb2FkQmFyID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ICAgICAgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MyQzJDMic7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JsdWUnLCAnYXNzZXRzL2ltYWdlcy9ibHVlLXRpbGUucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL2ltYWdlcy9yZWQtdGlsZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VtcHR5JywgJ2Fzc2V0cy9pbWFnZXMvZW1wdHktdGlsZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ3BsYXknKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL3ByZWxvYWQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
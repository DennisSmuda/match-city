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
	    _this.yPos = (y - 4) / 64;
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
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      console.log('click: ' + this.xPos + ' ' + this.yPos);
	      this.tilestate.level = 1;
	      this.tilestate.type = this.nextTile;
	      this.gamestate.lastClicked.x = this.xPos;
	      this.gamestate.lastClicked.y = this.yPos;
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
	          this.grid[_i][j] = new _Tile2.default(this.game, _i * 64 + 6, j * 64 + 4, 'empty', this.nextTile, this.gamestate);
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
	      for (var i = 0; i < this.cols; i++) {
	        for (var j = 0; j < this.rows; j++) {
	          // Check for last clicked tile
	
	          // console.log(this.grid[i][j].tilestate.level);
	          if (this.grid[i][j].tilestate.level > 0) {
	            var currentType = this.grid[i][j].tilestate.type;
	            // console.log(currentType);
	
	            if (this.grid[i][j + 1] && this.grid[i][j + 1].tilestate.type == currentType) {
	              console.log('down match');
	
	              // console.log(this.grid[i][j-1]);
	              var toDelete = this.grid[i][j];
	              toDelete.resetToEmpty();
	            }
	          }
	        }
	      }
	    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjc1ODVjYTJiNjE4NjE4Zjk4ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiUGhhc2VyIiwiQ0FOVkFTIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsIlBsYXkiLCJnYW1lc3RhdGUiLCJsYXN0Q2xpY2tlZCIsIngiLCJ5IiwibmV4dFRpbGUiLCJnYW1lQmFja2dyb3VuZCIsInNwcml0ZSIsImdyaWQiLCJnYW1lIiwidXBkYXRlIiwiU3RhdGUiLCJUaWxlIiwiZnJhbWUiLCJpc1BsYWNlZCIsImVuYWJsZUJvZHkiLCJ4UG9zIiwieVBvcyIsInRpbGVzdGF0ZSIsInBoeXNpY3MiLCJlbmFibGUiLCJQaHlzaWNzIiwiQVJDQURFIiwiYm9keSIsImNvbGxpZGVXb3JsZEJvdW5kcyIsImlucHV0RW5hYmxlZCIsImV2ZW50cyIsIm9uSW5wdXRPdmVyIiwib25JbnB1dE91dCIsIm9uSW5wdXREb3duIiwib25DbGljayIsInN0eWxlIiwiZm9udCIsImZpbGwiLCJ0ZXh0YWxpZ24iLCJsYWJlbF9zY29yZSIsInRleHQiLCJsZXZlbCIsImFuY2hvciIsInNldFRvIiwiYWRkQ2hpbGQiLCJzdGFnZSIsImxvYWRUZXh0dXJlIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJTcHJpdGUiLCJHcmlkIiwicm93cyIsImNvbHMiLCJBcnJheSIsImluaXRHcmlkIiwiaSIsImoiLCJmaW5kTWF0Y2hlcyIsImN1cnJlbnRUeXBlIiwidG9EZWxldGUiLCJyZXNldFRvRW1wdHkiLCJQcmVsb2FkIiwiYmFja2dyb3VuZCIsInByZWxvYWRCYXIiLCJy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RGtCVixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0RBVyxPOzs7QUFFbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtDLEtBQUwsR0FBa0IsS0FBbEI7QUFKWTtBQUtiOzs7OytCQUVTO0FBQ1IsWUFBS3BCLEtBQUwsQ0FBV3FCLGVBQVgsR0FBNkIsU0FBN0I7QUFDQSxZQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQW1DLG1DQUFuQzs7QUFFQSxZQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsNkJBQXhCO0FBQ0EsWUFBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCLEtBQWhCLEVBQXVCLDRCQUF2QjtBQUNBLFlBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQixPQUFoQixFQUF5Qiw4QkFBekI7QUFDRDs7OzhCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLFdBQUksS0FBS0gsS0FBTCxJQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCLGNBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0EsY0FBS2hFLEtBQUwsQ0FBV0UsS0FBWCxDQUFpQixNQUFqQjtBQUNEO0FBQ0Y7Ozs7R0EzQmtDSixPQUFPZ0IsSzs7bUJBQXZCK0MsTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI3NTg1Y2EyYjYxODYxOGY5OGUwXG4gKiovIiwiXG5pbXBvcnQgcGxheSBmcm9tICcuL3N0YXRlcy9wbGF5JztcbmltcG9ydCBwcmVsb2FkIGZyb20gJy4vc3RhdGVzL3ByZWxvYWQnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gNTYzIC0gNzM2XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoNDYwLCA2MzYsIFBoYXNlci5DQU5WQVMsICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ3ByZWxvYWQnLCBwcmVsb2FkKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgncGxheScsIHBsYXksIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gIH1cblxufVxuXG5uZXcgR2FtZSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJcbmltcG9ydCBUaWxlIGZyb20gJy4uL21vZGVscy9UaWxlJztcbmltcG9ydCBHcmlkIGZyb20gJy4uL21vZGVscy9HcmlkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lc3RhdGUgPSB7XG4gICAgICBsYXN0Q2xpY2tlZDoge1xuICAgICAgICB4OiBudWxsLFxuICAgICAgICB5OiBudWxsXG4gICAgICB9LFxuICAgICAgbmV4dFRpbGU6ICdibHVlJ1xuICAgIH1cbiAgICAvLyBsZXQgY2VudGVyID0geyB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgfVxuICAgIHRoaXMuZ2FtZUJhY2tncm91bmQgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuXG4gICAgLy8gdGhpcy50aWxlID0gbmV3IFRpbGUodGhpcy5nYW1lLCA0LCA0LCAnYmx1ZScpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuZ2FtZSwgdGhpcy5nYW1lc3RhdGUpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLmdyaWQudXBkYXRlKCk7XG5cblxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvcGxheS5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCBuZXh0VGlsZSwgZ2FtZXN0YXRlKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgZnJhbWUpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5pc1BsYWNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRUaWxlID0gbmV4dFRpbGU7XG4gICAgdGhpcy54UG9zID0gKHgtNikvNjQ7XG4gICAgdGhpcy55UG9zID0gKHktNCkvNjQ7XG4gICAgdGhpcy50aWxlc3RhdGUgPSB7XG4gICAgICAnbGV2ZWwnOiAwLFxuICAgICAgJ3R5cGUnIDogJ2VtcHR5J1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZXN0YXRlID0gZ2FtZXN0YXRlO1xuXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICAvLyBJbnB1dCAmIEV2ZW50c1xuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQodGhpcy5vbklucHV0T3ZlciwgdGhpcyk7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQodGhpcy5vbklucHV0T3V0LCB0aGlzKTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4geyB0aGlzLm9uQ2xpY2soKTsgfSwgdGhpcyk7XG5cbiAgICAvLyBQb2ludHNcbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udDogXCIyMHB4IFJvYm90byBNb25vXCIsIGZpbGw6IFwiI2ZmZmZmZlwiLCB0ZXh0YWxpZ246IFwiY2VudGVyXCIgfTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlID0gdGhpcy5nYW1lLmFkZC50ZXh0KDMyLCAzMiwgdGhpcy50aWxlc3RhdGUubGV2ZWwsIHN0eWxlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJyAnO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5sYWJlbF9zY29yZSk7XG5cbiAgICAvLyBBY3RpdmF0ZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICB9XG5cbiAgb25JbnB1dE92ZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hvdmVyOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMubmV4dFRpbGUsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnMSc7XG4gIH1cblxuICBvbklucHV0T3V0KCkge1xuICAgIGlmICh0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9PSAwICYmIHRoaXMudGlsZXN0YXRlLnR5cGUgPT0gJ2VtcHR5Jykge1xuICAgICAgdGhpcy5sb2FkVGV4dHVyZSgnZW1wdHknLCAwLCBmYWxzZSk7XG4gICAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgfVxuXG4gIHJlc2V0VG9FbXB0eSgpIHtcbiAgICBjb25zb2xlLmxvZygncmVzZXQnKTtcbiAgICB0aGlzLmxvYWRUZXh0dXJlKCdlbXB0eScsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgdGhpcy50aWxlc3RhdGUudHlwZSA9ICdlbXB0eSc7XG4gICAgdGhpcy50aWxlc3RhdGUubGV2ZWwgPSAwO1xuICB9XG5cblxuXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9IDE7XG4gICAgdGhpcy50aWxlc3RhdGUudHlwZSAgPSB0aGlzLm5leHRUaWxlO1xuICAgIHRoaXMuZ2FtZXN0YXRlLmxhc3RDbGlja2VkLnggPSB0aGlzLnhQb3M7XG4gICAgdGhpcy5nYW1lc3RhdGUubGFzdENsaWNrZWQueSA9IHRoaXMueVBvcztcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbW9kZWxzL1RpbGUuanNcbiAqKi8iLCJpbXBvcnQgVGlsZSBmcm9tICcuL1RpbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgY29uc3RydWN0b3IoZ2FtZSwgZ2FtZXN0YXRlKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnJvd3MgPSA3O1xuICAgIHRoaXMuY29scyA9IDc7XG4gICAgdGhpcy5ncmlkID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgdGhpcy5uZXh0VGlsZSA9IGdhbWVzdGF0ZS5uZXh0VGlsZTtcbiAgICB0aGlzLmdhbWVzdGF0ZSA9IGdhbWVzdGF0ZTtcblxuICAgIHRoaXMuaW5pdEdyaWQoKTtcblxuICB9XG5cbiAgaW5pdEdyaWQoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSAyRCBHcmlkIEFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHRoaXMuY29scylcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sczsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucm93czsgaisrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IG5ldyBUaWxlKHRoaXMuZ2FtZSwgaSo2NCs2LCBqKjY0KzQsICdlbXB0eScsIHRoaXMubmV4dFRpbGUsIHRoaXMuZ2FtZXN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnVXBkYXRlJyk7XG4gICAgdGhpcy5maW5kTWF0Y2hlcygpO1xuXG4gIH1cblxuICBmaW5kTWF0Y2hlcygpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggZ3JpZCBhcnJheVxuICAgIC8vIGNoZWNrIG1hdGNoZXMsIGFuZCBjb2xsYXBzZVxuICAgIC8vIGludG8gbGFzdCBjbGlja2VkL3NldCB0aWxlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yb3dzOyBqKyspIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGxhc3QgY2xpY2tlZCB0aWxlXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncmlkW2ldW2pdLnRpbGVzdGF0ZS5sZXZlbCk7XG4gICAgICAgIGlmICh0aGlzLmdyaWRbaV1bal0udGlsZXN0YXRlLmxldmVsID4gMCkge1xuICAgICAgICAgIGxldCBjdXJyZW50VHlwZSA9IHRoaXMuZ3JpZFtpXVtqXS50aWxlc3RhdGUudHlwZTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VHlwZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2orMV0gJiYgdGhpcy5ncmlkW2ldW2orMV0udGlsZXN0YXRlLnR5cGUgPT0gY3VycmVudFR5cGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3duIG1hdGNoJyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JpZFtpXVtqLTFdKTtcbiAgICAgICAgICAgIGxldCB0b0RlbGV0ZSA9IHRoaXMuZ3JpZFtpXVtqXTtcbiAgICAgICAgICAgIHRvRGVsZXRlLnJlc2V0VG9FbXB0eSgpO1xuXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9HcmlkLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG4gICAgdGhpcy5wcmVsb2FkQmFyID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ICAgICAgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MyQzJDMic7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JsdWUnLCAnYXNzZXRzL2ltYWdlcy9ibHVlLXRpbGUucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL2ltYWdlcy9yZWQtdGlsZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VtcHR5JywgJ2Fzc2V0cy9pbWFnZXMvZW1wdHktdGlsZS5wbmcnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWR5ID09IGZhbHNlKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ3BsYXknKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL3ByZWxvYWQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
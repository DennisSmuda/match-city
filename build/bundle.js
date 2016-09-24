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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 460, 636, Phaser.CANVAS, 'content', null));
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
	  }
	
	  _createClass(Play, [{
	    key: 'create',
	    value: function create() {
	      this.state = {
	        lastClicked: {
	          x: null,
	          y: null
	        },
	        nextTile: 'blue'
	      };
	      // let center = { x: this.game.world.centerX, y: this.game.world.centerY }
	      this.gameBackground = this.add.sprite(0, 0, 'game-background');
	
	      // this.tile = new Tile(this.game, 4, 4, 'blue');
	      this.grid = new _Grid2.default(this.game, this.state);
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tile = function (_Phaser$Sprite) {
	  _inherits(Tile, _Phaser$Sprite);
	
	  function Tile(game, x, y, frame, nextTile) {
	    _classCallCheck(this, Tile);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).call(this, game, x, y, frame));
	
	    _this.game = game;
	    _this.isPlaced = false;
	    _this.enableBody = true;
	
	    _this.nextTile = nextTile;
	    _this.xPos = (x - 6) / 64;
	    _this.yPos = (y - 6) / 64;
	    _this.tilestate = {
	      'level': 0,
	      'type': 'empty'
	    };
	
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
	    key: 'icon_click',
	    value: function icon_click(url) {
	      console.log(url);
	    }
	  }, {
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
	    key: 'onClick',
	    value: function onClick() {
	      console.log('click: ' + this.xPos + ' ' + this.yPos);
	      this.tilestate.level = 1;
	      this.tilestate.type = this.nextTile;
	    }
	  }]);
	
	  return Tile;
	}(Phaser.Sprite);
	
	exports.default = Tile;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tile = __webpack_require__(2);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Grid = function () {
	  function Grid(game, state) {
	    _classCallCheck(this, Grid);
	
	    this.game = game;
	    this.rows = 7;
	    this.cols = 7;
	    this.grid = new Array(this.rows);
	    for (var i = 0; i < this.cols; i++) {
	      this.grid[i] = new Array(this.cols);
	    }
	
	    console.log('Grid Construct');
	
	    for (var i = 0; i < this.cols; i++) {
	      for (var j = 0; j < this.rows; j++) {
	        this.grid[i][j] = new _Tile2.default(this.game, i * 64 + 6, j * 64 + 6, 'empty', state.nextTile);
	        console.log(this.grid[i][j]);
	      }
	    }
	  }
	
	  _createClass(Grid, [{
	    key: 'update',
	    value: function update() {
	      console.log('Update');
	      for (var i = 0; i < this.cols; i++) {
	        for (var j = 0; j < this.rows; j++) {
	          // console.log(this.grid[i, j]);
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = function (_Phaser$State) {
	  _inherits(Preload, _Phaser$State);
	
	  function Preload() {
	    _classCallCheck(this, Preload);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).call(this));
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUyMzIyYzZlNTk0YWZmOGZmNGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ2xDTSxJQUFJO2FBQUosSUFBSTs7OztBQUVSLFlBRkksSUFBSSxHQUVNOzJCQUZWLElBQUk7O3dFQUFKLElBQUksYUFJQSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUk7O0FBQzlDLFdBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLG9CQUFVLENBQUM7QUFDbkMsV0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sa0JBQVEsS0FBSyxDQUFDLENBQUM7QUFDcEMsV0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUM3Qjs7VUFSRyxJQUFJO0dBQVMsTUFBTSxDQUFDLElBQUk7O0FBWTlCLEtBQUksSUFBSSxFQUFFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ1hXLElBQUk7YUFBSixJQUFJOztZQUFKLElBQUk7MkJBQUosSUFBSTs7bUVBQUosSUFBSTs7O2dCQUFKLElBQUk7OzhCQUVkO0FBQ1AsV0FB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SSxDQUFDO0FBQ3ZCLFdBQUssVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixXQUFLLEtBQUssR0FBUSxLQUFLLENBQUM7O0lBQ3pCOztnQkFQa0IsT0FBTzs7K0JBU2hCO0FBQ1IsV0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ3ZDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLG1DQUFtQyxDQUFDLENBQUM7O0FBRXhFLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3ZELFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO01BQzFEOzs7OEJBRVEsRUFFUjs7OzhCQUVRO0FBQ1AsV0FBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtBQUN2QixhQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixhQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQjtNQUNGOzs7VUExQmtCLE9BQU87R0FBUyxNQUFNLENBQUMsS0FBSzs7bUJBQTVCLE9BQU8sQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDU1MjMyMmM2ZTU5NGFmZjhmZjRmXG4gKiovIiwiXG5pbXBvcnQgcGxheSBmcm9tICcuL3N0YXRlcy9wbGF5JztcbmltcG9ydCBwcmVsb2FkIGZyb20gJy4vc3RhdGVzL3ByZWxvYWQnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gNTYzIC0gNzM2XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoNDYwLCA2MzYsIFBoYXNlci5DQU5WQVMsICdjb250ZW50JywgbnVsbCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ3ByZWxvYWQnLCBwcmVsb2FkKTtcbiAgICB0aGlzLnN0YXRlLmFkZCgncGxheScsIHBsYXksIGZhbHNlKTtcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gIH1cblxufVxuXG5uZXcgR2FtZSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJcbmltcG9ydCBUaWxlIGZyb20gJy4uL21vZGVscy9UaWxlJztcbmltcG9ydCBHcmlkIGZyb20gJy4uL21vZGVscy9HcmlkJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxhc3RDbGlja2VkOiB7XG4gICAgICAgIHg6IG51bGwsXG4gICAgICAgIHk6IG51bGxcbiAgICAgIH0sXG4gICAgICBuZXh0VGlsZTogJ2JsdWUnXG4gICAgfVxuICAgIC8vIGxldCBjZW50ZXIgPSB7IHg6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB5OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWSB9XG4gICAgdGhpcy5nYW1lQmFja2dyb3VuZCA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCAnZ2FtZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICAvLyB0aGlzLnRpbGUgPSBuZXcgVGlsZSh0aGlzLmdhbWUsIDQsIDQsICdibHVlJyk7XG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcy5nYW1lLCB0aGlzLnN0YXRlKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5ncmlkLnVwZGF0ZSgpO1xuXG5cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGVzL3BsYXkuanNcbiAqKi8iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgbmV4dFRpbGUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBmcmFtZSk7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmlzUGxhY2VkID0gZmFsc2U7XG4gICAgdGhpcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dFRpbGUgPSBuZXh0VGlsZTtcbiAgICB0aGlzLnhQb3MgPSAoeC02KS82NDtcbiAgICB0aGlzLnlQb3MgPSAoeS02KS82NDtcbiAgICB0aGlzLnRpbGVzdGF0ZSA9IHtcbiAgICAgICdsZXZlbCc6IDAsXG4gICAgICAndHlwZScgOiAnZW1wdHknXG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICAvLyBJbnB1dCAmIEV2ZW50c1xuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0T3Zlci5hZGQodGhpcy5vbklucHV0T3ZlciwgdGhpcyk7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dE91dC5hZGQodGhpcy5vbklucHV0T3V0LCB0aGlzKTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQoKCkgPT4geyB0aGlzLm9uQ2xpY2soKTsgfSwgdGhpcyk7XG5cbiAgICAvLyBQb2ludHNcbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udDogXCIyMHB4IFJvYm90byBNb25vXCIsIGZpbGw6IFwiI2ZmZmZmZlwiLCB0ZXh0YWxpZ246IFwiY2VudGVyXCIgfTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlID0gdGhpcy5nYW1lLmFkZC50ZXh0KDMyLCAzMiwgdGhpcy50aWxlc3RhdGUubGV2ZWwsIHN0eWxlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJyAnO1xuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5sYWJlbF9zY29yZSk7XG5cbiAgICAvLyBBY3RpdmF0ZVxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcblxuICB9XG5cbiAgaWNvbl9jbGljayh1cmwpIHsgY29uc29sZS5sb2codXJsKTsgfVxuXG5cbiAgb25JbnB1dE92ZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hvdmVyOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMubmV4dFRpbGUsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnMSc7XG5cbiAgfVxuXG4gIG9uSW5wdXRPdXQoKSB7XG4gICAgaWYgKHRoaXMudGlsZXN0YXRlLmxldmVsID09IDAgJiYgdGhpcy50aWxlc3RhdGUudHlwZSA9PSAnZW1wdHknKSB7XG4gICAgICB0aGlzLmxvYWRUZXh0dXJlKCdlbXB0eScsIDAsIGZhbHNlKTtcbiAgICAgIHRoaXMubGFiZWxfc2NvcmUudGV4dCA9ICcgJztcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gdGhpcy5oYW5kbGVJbnB1dCgpO1xuXG4gIH1cblxuXG5cbiAgb25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2s6ICcgKyB0aGlzLnhQb3MgKyAnICcgKyB0aGlzLnlQb3MpO1xuICAgIHRoaXMudGlsZXN0YXRlLmxldmVsID0gMTtcbiAgICB0aGlzLnRpbGVzdGF0ZS50eXBlICA9IHRoaXMubmV4dFRpbGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9UaWxlLmpzXG4gKiovIiwiaW1wb3J0IFRpbGUgZnJvbSAnLi9UaWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIHN0YXRlKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnJvd3MgPSA3O1xuICAgIHRoaXMuY29scyA9IDc7XG4gICAgdGhpcy5ncmlkID0gbmV3IEFycmF5KHRoaXMucm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IEFycmF5KHRoaXMuY29scylcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnR3JpZCBDb25zdHJ1Y3QnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yb3dzOyBqKyspIHtcbiAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gbmV3IFRpbGUodGhpcy5nYW1lLCBpKjY0KzYsIGoqNjQrNiwgJ2VtcHR5Jywgc3RhdGUubmV4dFRpbGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRbaV1bal0pO1xuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvd3M7IGorKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyaWRbaSwgal0pO1xuXG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21vZGVscy9HcmlkLmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IG51bGw7XG4gICAgdGhpcy5wcmVsb2FkQmFyID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ICAgICAgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MyQzJDMic7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdnYW1lLWJhY2tncm91bmQnLCAnYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JsdWUnLCAnYXNzZXRzL2ltYWdlcy9ibHVlLXRpbGUucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdlbXB0eScsICdhc3NldHMvaW1hZ2VzL2VtcHR5LXRpbGUucG5nJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFkeSA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwbGF5Jyk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9wcmVsb2FkLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tile = function (_Phaser$Sprite) {
	  _inherits(Tile, _Phaser$Sprite);
	
	  function Tile(game, x, y, frame, nextTile) {
	    _classCallCheck(this, Tile);
	
	    var _this = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, game, x, y, frame));
	
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	
	    for (var _i = 0; _i < this.cols; _i++) {
	      for (var j = 0; j < this.rows; j++) {
	        this.grid[_i][j] = new _Tile2.default(this.game, _i * 64 + 6, j * 64 + 6, 'empty', state.nextTile);
	        console.log(this.grid[_i][j]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGEwODUyN2U1YTZjMGI4MTc3M2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvcHJlbG9hZC5qcyJdLCJuYW1lcyI6WyJHYW1lIiwiUGhhc2VyIiwiQ0FOVkFTIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsIlBsYXkiLCJsYXN0Q2xpY2tlZCIsIngiLCJ5IiwibmV4dFRpbGUiLCJnYW1lQmFja2dyb3VuZCIsInNwcml0ZSIsImdyaWQiLCJnYW1lIiwidXBkYXRlIiwiU3RhdGUiLCJUaWxlIiwiZnJhbWUiLCJpc1BsYWNlZCIsImVuYWJsZUJvZHkiLCJ4UG9zIiwieVBvcyIsInRpbGVzdGF0ZSIsInBoeXNpY3MiLCJlbmFibGUiLCJQaHlzaWNzIiwiQVJDQURFIiwiYm9keSIsImNvbGxpZGVXb3JsZEJvdW5kcyIsImlucHV0RW5hYmxlZCIsImV2ZW50cyIsIm9uSW5wdXRPdmVyIiwib25JbnB1dE91dCIsIm9uSW5wdXREb3duIiwib25DbGljayIsInN0eWxlIiwiZm9udCIsImZpbGwiLCJ0ZXh0YWxpZ24iLCJsYWJlbF9zY29yZSIsInRleHQiLCJsZXZlbCIsImFuY2hvciIsInNldFRvIiwiYWRkQ2hpbGQiLCJzdGFnZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkVGV4dHVyZSIsInR5cGUiLCJTcHJpdGUiLCJHcmlkIiwicm93cyIsImNvbHMiLCJBcnJheSIsImkiLCJqIiwiUHJlbG9hZCIsImJhY2tncm91bmQiLCJwcmVsb2FkQmFyIiwicmVhZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2FkIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FB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OzttQkFqQ2tCTCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0RBTSxPOzs7QUFFbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtDLEtBQUwsR0FBa0IsS0FBbEI7QUFKWTtBQUtiOzs7OytCQUVTO0FBQ1IsWUFBS2hCLEtBQUwsQ0FBV2lCLGVBQVgsR0FBNkIsU0FBN0I7QUFDQSxZQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsaUJBQWhCLEVBQW1DLG1DQUFuQzs7QUFFQSxZQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBZ0IsTUFBaEIsRUFBd0IsNkJBQXhCO0FBQ0EsWUFBS0QsSUFBTCxDQUFVQyxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLDhCQUF6QjtBQUNEOzs7OEJBRVEsQ0FFUjs7OzhCQUVRO0FBQ1AsV0FBSSxLQUFLSCxLQUFMLElBQWMsS0FBbEIsRUFBeUI7QUFDdkIsY0FBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxjQUFLM0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCLE1BQWpCO0FBQ0Q7QUFDRjs7OztHQTFCa0NKLE9BQU9lLEs7O21CQUF2QjJDLE8iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkYTA4NTI3ZTVhNmMwYjgxNzczZFxuICoqLyIsIlxuaW1wb3J0IHBsYXkgZnJvbSAnLi9zdGF0ZXMvcGxheSc7XG5pbXBvcnQgcHJlbG9hZCBmcm9tICcuL3N0YXRlcy9wcmVsb2FkJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbi8vIDU2MyAtIDczNlxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKDQ2MCwgNjM2LCBQaGFzZXIuQ0FOVkFTLCAnY29udGVudCcsIG51bGwpO1xuICAgIHRoaXMuc3RhdGUuYWRkKCdwcmVsb2FkJywgcHJlbG9hZCk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoJ3BsYXknLCBwbGF5LCBmYWxzZSk7XG4gICAgdGhpcy5zdGF0ZS5zdGFydCgncHJlbG9hZCcpO1xuICB9XG5cbn1cblxubmV3IEdhbWUoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiXG5pbXBvcnQgVGlsZSBmcm9tICcuLi9tb2RlbHMvVGlsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuLi9tb2RlbHMvR3JpZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsYXN0Q2xpY2tlZDoge1xuICAgICAgICB4OiBudWxsLFxuICAgICAgICB5OiBudWxsXG4gICAgICB9LFxuICAgICAgbmV4dFRpbGU6ICdibHVlJ1xuICAgIH1cbiAgICAvLyBsZXQgY2VudGVyID0geyB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgeTogdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgfVxuICAgIHRoaXMuZ2FtZUJhY2tncm91bmQgPSB0aGlzLmFkZC5zcHJpdGUoMCwgMCwgJ2dhbWUtYmFja2dyb3VuZCcpO1xuXG4gICAgLy8gdGhpcy50aWxlID0gbmV3IFRpbGUodGhpcy5nYW1lLCA0LCA0LCAnYmx1ZScpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuZ2FtZSwgdGhpcy5zdGF0ZSk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMuZ3JpZC51cGRhdGUoKTtcblxuXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N0YXRlcy9wbGF5LmpzXG4gKiovIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIG5leHRUaWxlKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgZnJhbWUpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5pc1BsYWNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRUaWxlID0gbmV4dFRpbGU7XG4gICAgdGhpcy54UG9zID0gKHgtNikvNjQ7XG4gICAgdGhpcy55UG9zID0gKHktNikvNjQ7XG4gICAgdGhpcy50aWxlc3RhdGUgPSB7XG4gICAgICAnbGV2ZWwnOiAwLFxuICAgICAgJ3R5cGUnIDogJ2VtcHR5J1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgLy8gSW5wdXQgJiBFdmVudHNcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dE92ZXIuYWRkKHRoaXMub25JbnB1dE92ZXIsIHRoaXMpO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKHRoaXMub25JbnB1dE91dCwgdGhpcyk7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKCgpID0+IHsgdGhpcy5vbkNsaWNrKCk7IH0sIHRoaXMpO1xuXG4gICAgLy8gUG9pbnRzXG4gICAgY29uc3Qgc3R5bGUgPSB7IGZvbnQ6IFwiMjBweCBSb2JvdG8gTW9ub1wiLCBmaWxsOiBcIiNmZmZmZmZcIiwgdGV4dGFsaWduOiBcImNlbnRlclwiIH07XG4gICAgdGhpcy5sYWJlbF9zY29yZSA9IHRoaXMuZ2FtZS5hZGQudGV4dCgzMiwgMzIsIHRoaXMudGlsZXN0YXRlLmxldmVsLCBzdHlsZSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMubGFiZWxfc2NvcmUudGV4dCA9ICcgJztcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMubGFiZWxfc2NvcmUpO1xuXG4gICAgLy8gQWN0aXZhdGVcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG5cbiAgfVxuXG4gIGljb25fY2xpY2sodXJsKSB7IGNvbnNvbGUubG9nKHVybCk7IH1cblxuXG4gIG9uSW5wdXRPdmVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdob3ZlcjogJyArIHRoaXMueFBvcyArICcgJyArIHRoaXMueVBvcyk7XG4gICAgdGhpcy5sb2FkVGV4dHVyZSh0aGlzLm5leHRUaWxlLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5sYWJlbF9zY29yZS50ZXh0ID0gJzEnO1xuXG4gIH1cblxuICBvbklucHV0T3V0KCkge1xuICAgIGlmICh0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9PSAwICYmIHRoaXMudGlsZXN0YXRlLnR5cGUgPT0gJ2VtcHR5Jykge1xuICAgICAgdGhpcy5sb2FkVGV4dHVyZSgnZW1wdHknLCAwLCBmYWxzZSk7XG4gICAgICB0aGlzLmxhYmVsX3Njb3JlLnRleHQgPSAnICc7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHRoaXMuaGFuZGxlSW5wdXQoKTtcblxuICB9XG5cblxuXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrOiAnICsgdGhpcy54UG9zICsgJyAnICsgdGhpcy55UG9zKTtcbiAgICB0aGlzLnRpbGVzdGF0ZS5sZXZlbCA9IDE7XG4gICAgdGhpcy50aWxlc3RhdGUudHlwZSAgPSB0aGlzLm5leHRUaWxlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvVGlsZS5qc1xuICoqLyIsImltcG9ydCBUaWxlIGZyb20gJy4vVGlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICBjb25zdHJ1Y3RvcihnYW1lLCBzdGF0ZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5yb3dzID0gNztcbiAgICB0aGlzLmNvbHMgPSA3O1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBBcnJheSh0aGlzLnJvd3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xzOyBpKyspIHtcbiAgICAgIHRoaXMuZ3JpZFtpXSA9IG5ldyBBcnJheSh0aGlzLmNvbHMpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0dyaWQgQ29uc3RydWN0Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sczsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucm93czsgaisrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtpXVtqXSA9IG5ldyBUaWxlKHRoaXMuZ2FtZSwgaSo2NCs2LCBqKjY0KzYsICdlbXB0eScsIHN0YXRlLm5leHRUaWxlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkW2ldW2pdKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0ZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5yb3dzOyBqKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncmlkW2ksIGpdKTtcblxuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2RlbHMvR3JpZC5qc1xuICoqLyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBudWxsO1xuICAgIHRoaXMucHJlbG9hZEJhciA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSAgICAgID0gZmFsc2U7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNDMkMyQzInO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZ2FtZS1iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9pbWFnZXMvZ2FtZS1iYWNrZ3JvdW5kLnBuZycpO1xuXG4gICAgdGhpcy5sb2FkLmltYWdlKCdibHVlJywgJ2Fzc2V0cy9pbWFnZXMvYmx1ZS10aWxlLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnZW1wdHknLCAnYXNzZXRzL2ltYWdlcy9lbXB0eS10aWxlLnBuZycpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucmVhZHkgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZS5zdGFydCgncGxheScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdGF0ZXMvcHJlbG9hZC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=
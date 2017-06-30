/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ball;
// Ball

function Ball(x, y, dx, dy, radius, mass, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.mass = mass;
  this.color = color;

  this.update = function () {
    if (this.x + this.dx + this.radius > _config2.default.canvas.width || this.x + this.dx - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy + this.radius > _config2.default.canvas.height || this.y + this.dy - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };

  this.draw = function () {
    _config2.default.c.beginPath();
    _config2.default.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    _config2.default.c.fillStyle = this.color;
    _config2.default.c.fill();
    _config2.default.c.closePath();
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomIntFromRange = randomIntFromRange;
exports.randomColor = randomColor;
exports.getDistance = getDistance;
// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvasUtil = __webpack_require__(1);

var util = _interopRequireWildcard(_canvasUtil);

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

var _ball = __webpack_require__(0);

var _ball2 = _interopRequireDefault(_ball);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Initial Setup
_config2.default.canvas = document.querySelector('canvas');
_config2.default.c = _config2.default.canvas.getContext('2d');

_config2.default.canvas.width = innerWidth;
_config2.default.canvas.height = innerHeight;

// Variables
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

// Event Listeners
addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", function () {
  _config2.default.canvas.width = innerWidth;
  _config2.default.canvas.height = innerHeight;

  init();
});

// Implementation
var balls = [];

function init() {
  balls = [];

  for (var i = 0; i < 10; i++) {
    var radius = util.randomIntFromRange(15, 20);
    var x = util.randomIntFromRange(radius, _config2.default.canvas.width - radius);
    var y = util.randomIntFromRange(radius, _config2.default.canvas.height - radius);
    var dx = util.randomIntFromRange(-10, 10);
    var dy = util.randomIntFromRange(-10, 10);
    var mass = radius;
    var color = util.randomColor(_config2.default.colors);

    balls.push(new _ball2.default(x, y, dx, dy, radius, mass, color));
  }
}

function update() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = balls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ball = _step.value;

      ball.update();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  _config2.default.c.clearRect(0, 0, _config2.default.canvas.width, _config2.default.canvas.height);

  update();
}

init();
animate();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // Initial Setup
  canvas: null,
  c: null,

  //Game variables
  colors: ['black', 'red', 'blue', 'grey']
};

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map
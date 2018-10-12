'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tank = function Tank(name) {
	_classCallCheck(this, Tank);

	var _name = name;
	var _enemiesCoords = [];

	this.setRadar = function (enemiesCoords) {
		console.log('Tank', _name, 'sees enemies at', JSON.stringify(enemiesCoords));
		_enemiesCoords = enemiesCoords;
	};

	this.shoot = function () {
		console.log('Tank', _name, 'fires');
	};

	this.move = function () {
		var movement = { x: 1, y: -1 };
		console.log('Tank', _name, 'moves', movement);
		return movement;
	};

	this.rotate = function () {
		console.log('Tank', _name, 'rotates');
		return { x: 1, y: 1 };
	};

	this.getName = function () {
		return _name;
	};
};

exports.default = Tank;
//# sourceMappingURL=Tank.js.map
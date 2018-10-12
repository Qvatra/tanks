'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BattleField = function BattleField() {
	_classCallCheck(this, BattleField);

	var _tanks = [];

	this.addTank = function (tank, coords) {
		var extendedTank = _lodash2.default.extend(tank, { coords: coords });
		console.log('Tank', extendedTank.getName(), 'has been added to', extendedTank.coords);
		_tanks.push(extendedTank);
	};

	this.removeTank = function (tank) {
		_lodash2.default.remove(_tanks, function (t) {
			return t === tank;
		});
	};

	this.getTanks = function () {
		return _tanks;
	};

	this.moreThanOneTank = function () {
		return _tanks.length > 1;
	};
};

exports.default = BattleField;
//# sourceMappingURL=BattleField.js.map
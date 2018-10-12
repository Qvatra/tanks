'use strict';

require('./index.scss');

var _BattleField = require('./BattleField');

var _BattleField2 = _interopRequireDefault(_BattleField);

var _Tank = require('./Tank');

var _Tank2 = _interopRequireDefault(_Tank);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var battleField = new _BattleField2.default();
battleField.addTank(new _Tank2.default('A'), { x: 0, y: 0 });
battleField.addTank(new _Tank2.default('B'), { x: 50, y: 50 });

var removeAllDeadTanks = function removeAllDeadTanks() {
	console.log('cleaning the battlefield');
};

var updateRadars = function updateRadars() {
	var allTanks = battleField.getTanks();

	_lodash2.default.forEach(allTanks, function (tank) {
		var enemyTanks = _lodash2.default.filter(allTanks, function (t) {
			return t.getName() !== tank.getName();
		});
		var enemyCoords = _lodash2.default.map(enemyTanks, function (t) {
			return t.coords;
		});
		tank.setRadar(enemyCoords);
	});
};

var rotateAll = function rotateAll() {
	_lodash2.default.forEach(battleField.getTanks(), function (tank) {
		tank.rotate();
	});
};

var shootAll = function shootAll() {
	_lodash2.default.forEach(battleField.getTanks(), function (tank) {
		tank.shoot();
	});
	removeAllDeadTanks();
};

var moveAll = function moveAll() {
	_lodash2.default.forEach(battleField.getTanks(), function (tank) {
		var movement = tank.move();
		tank.coords.x += movement.x;
		tank.coords.y += movement.y;
	});
};

var i = 0;
while (battleField.moreThanOneTank()) {
	updateRadars();
	rotateAll();
	shootAll();
	moveAll();

	if (i++ === 3) {
		battleField.removeTank(battleField.getTanks()[1]);
	}
}

document.getElementById('test').innerHTML = 'Tank ' + _lodash2.default.first(battleField.getTanks()).getName() + ' won the game!';
//# sourceMappingURL=index.js.map
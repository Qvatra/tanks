import './index.scss'
import BattleField from './BattleField';
import Tank from './Tank';
import _ from 'lodash';

const battleField = new BattleField();
battleField.addTank(new Tank('A'), {x:0, y:0});
battleField.addTank(new Tank('B'), {x:50, y:50});

const removeAllDeadTanks = () => {
	console.log('cleaning the battlefield');
	
};

const updateRadars = () => {
	const allTanks = battleField.getTanks();
	
	_.forEach(allTanks, tank => {
		const enemyTanks = _.filter(allTanks, t => t.getName() !== tank.getName());
		const enemyCoords = _.map(enemyTanks, t => t.coords);
		tank.setRadar(enemyCoords);
	});
};

const rotateAll = () => {
	_.forEach(battleField.getTanks(), tank => {
		tank.rotate();
	});
};

const shootAll = () => {
	_.forEach(battleField.getTanks(), tank => {
		tank.shoot();
	});
	removeAllDeadTanks();
};

const moveAll = () => {
	_.forEach(battleField.getTanks(), tank => {
		const movement = tank.move();
		tank.coords.x += movement.x;
		tank.coords.y += movement.y;
	});
};

let i = 0;
while (battleField.moreThanOneTank()) {
	updateRadars();
	rotateAll();
	shootAll();
	moveAll();
	
	if (i++ === 3) {
		battleField.removeTank(battleField.getTanks()[1]);
	}
}

document.getElementById('test').innerHTML = `Tank ${_.first(battleField.getTanks()).getName()} won the game!`;

import './index.scss'
import BattleField from './BattleField';
import Tank from './Tank';
import _ from 'lodash';

const battleField = new BattleField();
battleField.addTank(new Tank('A', {x:0, y:0}, 90));
battleField.addTank(new Tank('B', {x:50, y:50}, -90));

const removeAllDeadTanks = () => {
	console.log('removeAllDeadTanks');
};

const updateRadars = () => {
	const allTanks = battleField.getTanks();
	
	_.forEach(allTanks, tank => {
		const enemyTanks = _.filter(allTanks, t => t.getName() !== tank.getName());
		const enemyCoords = _.map(enemyTanks, t => t.getCoords());
		tank.updateRadar(enemyCoords);
	});
};

const applyTanksAi = () => {
	_.forEach(battleField.getTanks(), (tank, idx) => {
		if (idx === 0) {
			tank.setAngle(30);
		} else { 
			tank.setAngle(-tank.getAngle());
		}
	});
};

const shootAll = () => {
	_.forEach(battleField.getTanks(), tank => {
		tank.shoot();
	});
};

const moveAll = () => {
	_.forEach(battleField.getTanks(), tank => {
		tank.move();
	});
};

let i = 0;
while (battleField.isMoreThanOneTank()) {
	updateRadars();
	applyTanksAi();
	shootAll();
	removeAllDeadTanks();
	moveAll();
	
	if (i++ === 3) {
		battleField.removeTank(battleField.getTanks()[1]);
	}
}

document.getElementById('test').innerHTML = `Tank ${_.first(battleField.getTanks()).getName()} won the game!`;

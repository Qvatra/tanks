import './index.scss'
import BattleField from './BattleField';
import Tank from './Tank';
import Bullet from './Bullet';
import _ from 'lodash';

const battleField = new BattleField();
battleField.addTank(new Tank('A', {x:1, y:1}, 90));
battleField.addTank(new Tank('B', {x:10, y:10}, -90));

const removeObjects = () => {
	console.log('removeObjects');
	const bullets = battleField.getBullets();

	_.forEach(bullets, bullet => {
		if (bullet && !battleField.isInsideBoundaries(bullet.getCoords())) {
			battleField.removeBullet(bullet);
		}
	});
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
		battleField.addBullet(new Bullet(tank.getCoords(), tank.getVector()));
	});
};

const moveObjects = () => {
	_.forEach(battleField.getTanks(), tank => {
		tank.move();
	});

	_.forEach(battleField.getBullets(), bullet => {
		bullet.move();
	});
};

let i = 0;
while (battleField.isMoreThanOneTank()) {
	updateRadars();
	applyTanksAi();
	shootAll();
	removeObjects();
	moveObjects();
	
	if (i++ === 3) {
		battleField.removeTank(battleField.getTanks()[1]);
	}
}

document.getElementById('test').innerHTML = `Tank ${_.first(battleField.getTanks()).getName()} won the game!`;

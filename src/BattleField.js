import _ from 'lodash';

export default class BattleField {
	constructor() {
		const _tanks = [];
		const _bullets = [];
		const _fieldSize = { x: 20, y: 20 };
		
		this.addTank = tank => {
			_tanks.push(tank);
		};

		this.addBullet = bullet => {
			_bullets.push(bullet);
		};
		
		this.removeTank = tank => {
			_.remove(_tanks, t => t === tank);
		};

		this.removeBullet = bullet => {
			_.remove(_bullets, b => b === bullet);
		};
		
		this.getTanks = () => _tanks;

		this.getBullets = () => _bullets;

		this.isInsideBoundaries = coords => coords.x > 0 && coords.y > 0 && coords.x < _fieldSize.x && coords.y < _fieldSize.y;
		
		this.isMoreThanOneTank = () => _tanks.length > 1;
	}
}

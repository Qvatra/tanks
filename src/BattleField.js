import _ from 'lodash';

class BattleField {
	constructor() {
		const _tanks = [];
		
		this.addTank = tank => {
			_tanks.push(tank);
		};
		
		this.removeTank = tank => {
			_.remove(_tanks, t => t === tank);
		};
		
		this.getTanks = () => _tanks;
		
		this.isMoreThanOneTank = () => _tanks.length > 1;
	}
}

export default BattleField;

import _ from 'lodash';

class BattleField {
	constructor() {
		const _tanks = [];
		
		this.addTank = (tank, coords) => {
			const extendedTank = _.extend(tank, {coords});
			console.log('Tank', extendedTank.getName(), 'has been added to', extendedTank.coords);
			_tanks.push(extendedTank);
		};
		
		this.removeTank = (tank) => {
			_.remove(_tanks, t => t === tank);
		};
		
		this.getTanks = () => {
				return _tanks;
		};
		
		this.moreThanOneTank = () => {
			return _tanks.length > 1;
		};
	}
}

export default BattleField;
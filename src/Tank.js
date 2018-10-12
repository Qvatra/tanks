import _ from 'lodash';

class Tank {
	constructor(name) {
		const _name = name;
		let _enemiesCoords = [];
		
		this.setRadar = (enemiesCoords) => {
			console.log('Tank', _name, 'sees enemies at', JSON.stringify(enemiesCoords));
			_enemiesCoords = enemiesCoords;
		};
		
		this.shoot = () => {
			console.log('Tank', _name, 'fires');
		};
		
		this.move = () => {
			const movement = {x: 1, y: -1}
			console.log('Tank', _name, 'moves', movement);
			return movement;
		};
		
		this.rotate = () => {
			console.log('Tank', _name, 'rotates');
			return {x: 1, y: 1};
		};
		
		this.getName = () => {
			return _name;
		};
	}
}

export default Tank;
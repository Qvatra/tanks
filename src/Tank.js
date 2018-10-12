import _ from 'lodash';

class Tank {
	constructor(name, { x, y }, angle) {
		const _name = name;
		let _enemyCoords = [];
		let _angle = angle;
		const _speed = 1;
		let _tankCoords = { x, y };
		
		this.updateRadar = enemyCoords => {
			console.log('Tank', _name, 'sees enemies at', JSON.stringify(enemyCoords));
			_enemyCoords = enemyCoords;
		};
		
		this.shoot = () => {
			console.log('Tank', _name, 'fires');
		};
		
		this.move = () => {
			_tankCoords = {
				x: _tankCoords.x + this.getVector().x,
				y: _tankCoords.y + this.getVector().y				
			};
			console.log('Tank', _name, 'moves to', JSON.stringify(_tankCoords));
		};
		
		this.setAngle = angle => {
			console.log('Tank', _name, 'rotates', angle, 'degrees');
			_angle = angle;
		};
		
		this.getName = () => _name;

		this.getCoords = () => _tankCoords;

		this.getVector = () => { 
			return {
				x: Math.cos(_angle),
				y: Math.sin(_angle)
			}
		};

		this.getAngle = () => _angle;
	}
}

export default Tank;
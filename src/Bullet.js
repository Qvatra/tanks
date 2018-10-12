export default class Bullet {
    constructor(coords, vector) {
		const _vector = vector;
        let _coords = coords;
        const _speed = 5;
		
		this.move = () => {
			_coords = {
				x: _coords.x + _speed*_vector.x,
				y: _coords.y + _speed*_vector.y				
			};
			console.log('a bullet moves to', JSON.stringify(_coords));
		};

		this.getCoords = () => _coords;
	}
}

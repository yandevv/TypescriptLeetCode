// First Approach - Mapping obstacles by row and columns and step simulating consulting the map for obstacles. (126ms - Beats 42.37%)
function robotSim(commands: number[], obstacles: number[][]): number {
	const obstacleByRow: Map<number, number[]> = new Map();
	const obstacleByColumn: Map<number, number[]> = new Map();

	obstacles.forEach(obstacle => {
		const updatedRow = obstacleByRow.get(obstacle[1]) ?? [];
		updatedRow.push(obstacle[0]);
		obstacleByRow.set(obstacle[1], updatedRow);
		
		const updatedColumn = obstacleByColumn.get(obstacle[0]) ?? [];
		updatedColumn.push(obstacle[1]);
		obstacleByColumn.set(obstacle[0], updatedColumn);
	});

	const actualPoint: [number, number] = [0, 0];

	// 0: North
	// 1: East
	// 2: South
	// 3: West
	let actualDirection: 0 | 1 | 2 | 3 = 0;

	let res = 0;
	for(let i = 0; i < commands.length; i++) {
		if(commands[i] === -2) {
			if(actualDirection === 0) {
				actualDirection = 3;
			} else if(actualDirection === 1) {
				actualDirection = 0;
			} else if(actualDirection === 2) {
				actualDirection = 1;
			} else if (actualDirection === 3) {
				actualDirection = 2;
			}

			continue;
		}

		if(commands[i] === -1) {
			if(actualDirection === 0) {
				actualDirection = 1;
			} else if(actualDirection === 1) {
				actualDirection = 2;
			} else if(actualDirection === 2) {
				actualDirection = 3;
			} else if (actualDirection === 3) {
				actualDirection = 0;
			}

			continue;
		}

		if(actualDirection === 0) {
			let newY = actualPoint[1] + commands[i];

			const columnObstacles = obstacleByColumn.get(actualPoint[0]);
			if(columnObstacles) {
				columnObstacles.forEach(obstacle => {
					if(obstacle > actualPoint[1] && obstacle <= newY)
						newY = obstacle - 1;
				});
			}

			actualPoint[1] = newY;
		} else if(actualDirection === 1) {
			let newX = actualPoint[0] + commands[i];

			const rowObstacles = obstacleByRow.get(actualPoint[1]);
			if(rowObstacles) {
				rowObstacles.forEach(obstacle => {
					if(obstacle > actualPoint[0] && obstacle <= newX)
						newX = obstacle - 1;
				});
			}

			actualPoint[0] = newX;
		} else if(actualDirection === 2) {
			let newY = actualPoint[1] - commands[i];

			const columnObstacles = obstacleByColumn.get(actualPoint[0]);
			if(columnObstacles) {
				columnObstacles.forEach(obstacle => {
					if(obstacle < actualPoint[1] && obstacle >= newY)
						newY = obstacle + 1;
				});
			}

			actualPoint[1] = newY;
		} else if(actualDirection === 3) {
			let newX = actualPoint[0] - commands[i];

			const rowObstacles = obstacleByRow.get(actualPoint[1]);
			if(rowObstacles) {
				rowObstacles.forEach(obstacle => {
					if(obstacle < actualPoint[0] && obstacle >= newX)
						newX = obstacle + 1;
				});
			}

			actualPoint[0] = newX;
		}

		res = Math.max(res, actualPoint[0] ** 2 + actualPoint[1] ** 2);
	}

	return res;
};
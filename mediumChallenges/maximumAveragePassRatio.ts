// First Try - Iterate all over classes and add the extra students on just one class, summed up and divided by classes length on the end. (Wrong Answer)
// function maxAverageRatio(classes: number[][], extraStudents: number): number {
// 	let totalRatio = (classes[0][0] + extraStudents) / (classes[0][1] + extraStudents);

// 	let biggestRatio = totalRatio;
// 	let biggestOriginalRatio = classes[0][0] / classes[0][1];

// 	for(let i = 1; i < classes.length; i++) {
// 		if(classes[i][0] === classes[i][1]) {
// 			totalRatio += 1;
// 			continue;
// 		}

// 		let actualIncrementedRatio = (classes[i][0] + extraStudents) / (classes[i][1] + extraStudents);
// 		let actualOriginalRatio = classes[i][0] / classes[i][1];

// 		if(biggestRatio - biggestOriginalRatio < actualIncrementedRatio - actualOriginalRatio) {
// 			totalRatio -= biggestRatio;
// 			totalRatio += biggestOriginalRatio;
			
// 			totalRatio += actualIncrementedRatio;

// 			biggestRatio += actualIncrementedRatio;
// 			biggestOriginalRatio = classes[i][0] / classes[i][1];
// 		} else
// 			totalRatio += classes[i][0] / classes[i][1];
// 	}

// 	return totalRatio / classes.length;
// };

// First Approach - Max Priority Queue approach with priority being the difference between the increased ratio with original one and incrementing each class with a student one by one. (https://leetcode.com/problems/maximum-average-pass-ratio/solutions/6147785/simple-approach-maxpriorityqueue/?envType=daily-question&envId=2024-12-15)
function getDiff(a: number, b: number) {
	return (a + 1) / (b + 1) - a / b;
}

function maxAverageRatio(classes: number[][], extraStudents: number): number {
	const queue = new MaxPriorityQueue();
	for(let [pass, total] of classes) {
		queue.enqueue([pass, total], getDiff(pass, total));
	}

	while(extraStudents > 0) {
		const [pass, total] = queue.dequeue().element;

		queue.enqueue([pass + 1, total + 1], getDiff(pass + 1, total + 1));

		extraStudents--;
	}

	let sum = 0;

	while(queue.size()) {
		const [pass, total] = queue.dequeue().element;
		sum += pass / total;
	}

	return sum / classes.length;
};

const case1 = maxAverageRatio([[1,2],[3,5],[2,2]], 2);
const case2 = maxAverageRatio([[2,4],[3,9],[4,5],[2,10]], 4);

console.log(`case1: ${case1} // ${case1 === 0.78333}`);
console.log(`case2: ${case2} // ${case2 === 0.53485}`);
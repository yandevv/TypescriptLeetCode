// First Approach - Reducing intervals into two arrays of start and end times, sorting them and iterating through both, comparing the actual smallest one is an start or and end, and if it's an end increment the total and check if the maxTotal is the max value, otherwise decrement the total. (https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901263/37ms-nlogn-beats-100-two-sorted-vecs-for-start-and-end-of-interval-count-up-and-down-and-track/?envType=daily-question&envId=2024-10-12)
function minGroups(intervals: number[][]): number {
	const accumulator: number[][] = [[], []];

	const [starts, ends] = intervals.reduce((a, inter) => {
		a[0].push(inter[0]);
		a[1].push(inter[1]);

		return a;
	}, accumulator);

	starts.sort((a, b) => a - b);
	ends.sort((a, b) => a - b);

	let total = 0;
	let maxTotal = 0;

	let si = 0;
	let ei = 0;

	while(si < intervals.length) {
		if(starts[si] <= ends[ei]) {
			total += 1;
			si += 1;
			maxTotal = Math.max(maxTotal, total);
		} else {
			total -= 1;
			ei += 1;
		}
	}

	return maxTotal;
};

const case1 = minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]]);
const case2 = minGroups([[1,3],[5,6],[8,10],[11,13]]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
// First Approach - DP method tracking the cost of one, seven and thirty days pass of travel days in a queue,
// popping up whenever the actual travel day passes the front queue day.
// (https://leetcode.com/problems/minimum-cost-for-tickets/solutions/226659/two-dp-solutions-with-pictures/?envType=daily-question&envId=2024-12-31)
function mincostTickets(days: number[], costs: number[], cost = 0): number {
	const last7: [number, number][] = [], last30: [number, number][] = [];
	for(let d of days) {
		while(last7.length > 0 && last7[0][0] + 7 <= d)
			last7.shift();

		while(last30.length > 0 && last30[0][0] + 30 <= d)
			last30.shift();

		last7.push([d, cost + costs[1]]);
		last30.push([d, cost + costs[2]]);

		cost = Math.min(cost + costs[0], last7[0][1], last30[0][1]);
	}

	return cost;
};

const case1 = mincostTickets([1,4,6,7,8,20], [2,7,15]);
const case2 = mincostTickets([1,2,3,4,5,6,7,8,9,10,30,31], [2,7,15]);

console.log(`case1: ${case1} // ${case1 === 11}`);
console.log(`case2: ${case2} // ${case2 === 17}`);
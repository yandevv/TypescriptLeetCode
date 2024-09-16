// First Approach - Calculating minutes from each timePoint and sorting it, iterating over like a cycle. (65ms - Beats 97.22% - Approach by: https://leetcode.com/problems/minimum-time-difference/solutions/5792274/1440-mins-in-1-day-explained-with-video-c-java-python-js-count-total-minutes-explained/?envType=daily-question&envId=2024-09-16)
function findMinDifference(timePoints: string[]): number {
	const timePointsInMin: number[] = timePoints.map(timePoint => (parseInt(timePoint.substring(0, 2)) * 60) + parseInt(timePoint.substring(3, 5)));

	timePointsInMin.sort((a, b) => a - b);

	let ans = Math.abs(timePointsInMin[0] + (timePointsInMin[timePointsInMin.length - 1] - 1440));
	for(let i = 0; i < timePointsInMin.length; i++) {
		ans = Math.min(Math.abs(timePointsInMin[i - 1] - timePointsInMin[i]), ans);
	}

	return ans;
};

const case1 = findMinDifference(["23:59","00:00"]);
const case2 = findMinDifference(["00:00","23:59","00:00"]);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
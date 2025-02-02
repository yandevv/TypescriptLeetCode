// First Approach - Checking if array has disconnected edges comparing the first and last indexes and
// checking if there's more than one non-decreasing array. (0ms - Beats 100.00%)
function check(nums: number[]): boolean {
	let hasDisconnectedEdges = false;
	if(nums[0] < nums[nums.length - 1])
		hasDisconnectedEdges = true;

	let foundRotation = false;
	for(let i = 1; i < nums.length; i++) {
		if(nums[i - 1] > nums[i]) {
			if(foundRotation || hasDisconnectedEdges) {
				return false;
			} else
				foundRotation = true;
		}
	}
	return true;
};

const case1 = check([3,4,5,1,2]);
const case2 = check([2,1,3,4]);
const case3 = check([1,2,3]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
console.log(`case3: ${case3} // ${case3}`);
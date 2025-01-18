// First Approach - Two-pass iteration LTR and RTL counting up the accumulative count
// from moving the boxes from each side, tracking and registering in a ans array.
// (https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/6236466/recursive-left-and-right-pass-using-arrays-optimised-version-of-code/?envType=daily-question&envId=2025-01-06)
function minOperations(boxes: string): number[] {
	const n = boxes.length;
	const ans = new Array(n).fill(0);
	for (let i = 1, count = 0; i < n; i++) {
			if (boxes[i - 1] === '1') {
					count++;
			}
			ans[i] = ans[i - 1] + count;
	}
	for (let i = n - 2, count = 0, sum = 0; i >= 0; i--) {
			if (boxes[i + 1] === '1') {
					count++;
			}
			sum += count;
			ans[i] += sum;
	}
	return ans;
}

const case1 = minOperations("110");
const case2 = minOperations("001011");

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
// First Try - Prefix OR operating all nums and sliding windowing all combinations. (Wrong Answer - 527 / 718 testcases passed)
// function minimumSubarrayLength(nums: number[], k: number): number {
// 	let prefixSum: number[] = [0], hasSingleNumber = false;
// 	nums.forEach(num => {
// 		if(num > k)
// 			hasSingleNumber = true;
// 		prefixSum.push(prefixSum[prefixSum.length - 1] | num);
// 	});
	
// 	if(hasSingleNumber)
// 		return 1;

// 	for(let winLen = 0; winLen < nums.length; winLen++) {
// 		let leftPointer = 0;
// 		for(let rightPointer = winLen; rightPointer < nums.length; rightPointer++) {
// 			if((prefixSum[leftPointer] ^ prefixSum[rightPointer + 1]) >= k)
// 				return winLen + 1;
// 			leftPointer++;
// 		}
// 	}

// 	return -1;
// };

// First Approach - Two pointer with sliding window approach tracking 32bit set bits of each OR operating number,
// and whenever it finds a operation that results a number greater or equals to k it reduces it's window length
// attributing the smallest to ans. (https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/4947374/explained-two-pointer-approach-very-simple/?envType=daily-question&envId=2024-11-10)
function performOrOperation(bitCount: number[], orVal: number, n: number): number {
	orVal |= n;

	for(let t = 0; t < 32; ++t)
		bitCount[t] += (n & (1 << t)) ? 1 : 0;

	return orVal;
}

function nullifyOrOperation(bitCount: number[], orVal: number, n: number): number {
	for(let t = 0; t < 32; ++t) {
		bitCount[t] += (n & (1 << t)) ? -1 : 0;
		if(bitCount[t] == 0)
			orVal &= ~(1 << t);
	}

	return orVal;
}

function minimumSubarrayLength(nums: number[], k: number): number {
	let orVal = 0, ans = Number.MAX_SAFE_INTEGER;
	let bitCount: number[] = new Array(32).fill(0);

	for(let i = 0, j = 0; i < nums.length; ++i) {
		orVal = performOrOperation(bitCount, orVal, nums[i]);

		if(orVal < k)
			continue;

		for( ; j <= i && orVal >= k; j++) {
			orVal = nullifyOrOperation(bitCount, orVal, nums[j]);
			ans = Math.min(ans, i - j + 1);
		}
	}

	return (ans === Number.MAX_SAFE_INTEGER) ? -1 : ans;
};

const case1 = minimumSubarrayLength([1,2,3], 2);
console.log('===')
const case2 = minimumSubarrayLength([2,1,8], 10);
console.log('===')
const case3 = minimumSubarrayLength([1,2], 0);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
// First Try - Pair counting and storing based in their product in a hashmap to calculate factoring
// possible matchings, wrong by index duplicating. (Wrong Answer - 17 / 37 testcases passed)
// const cache: number[] = [0, 1];
// let lastNumber = 1;
// function factorialCalc(num: number) {
// 	if(cache[num])
// 		return cache[num];

// 	for(let n = lastNumber + 1; n <= num; n++) {
// 		cache[n] = cache[n - 1] * n;
// 	}

// 	lastNumber = num;

// 	return cache[num];
// }

// function tupleSameProduct(nums: number[]): number {
// 	const n = nums.length;

// 	const resultCount: Map<number, number> = new Map();
// 	for(let i = 0; i < n; i++) {
// 		for(let j = i + 1; j < n; j++) {
// 			resultCount.set(nums[i] * nums[j], (resultCount.get(nums[i] * nums[j]) ?? 0) + 1)
// 		}
// 	}

// 	let possibilities = 0;
// 	for(let count of resultCount.entries()) {
// 		if(count[1] > 1) {
// 			possibilities += factorialCalc(count[1]) * 4;
// 		}
// 	}

// 	return possibilities;
// };

// First Approach - Map counting the indices (products) of every possible product from
// two nums's indices, summing up to answer variable the number of pairs * 8
// (possibilities of rearranging pairs and forming combinations).
// (https://leetcode.com/problems/tuple-with-same-product/submissions/1534140543/)
function tupleSameProduct(nums: number[]): number {
	const productMap: Map<number, number> = new Map(), n = nums.length;

	let ans = 0;
	for(let i = 0; i < n; i++) {
		for(let j = i + 1; j < n; j++) {
			const product = nums[i] * nums[j];
			const productCount = productMap.get(product) ?? 0;
			
			ans += 8 * productCount;
			productMap.set(product, productCount + 1);
		}
	}

	return ans;
};

const case1 = tupleSameProduct([2,3,4,6]);
const case2 = tupleSameProduct([1,2,4,5,10]);
const case3 = tupleSameProduct([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192]);

console.log(`case1: ${case1} // ${case1 === 8}`);
console.log(`case2: ${case2} // ${case2 === 16}`);
console.log(`case3: ${case3} // ${case3 === 1288}`);
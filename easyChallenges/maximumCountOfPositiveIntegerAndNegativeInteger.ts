// First Approach - Brute force iteration through nums counting negative and positive numbers,
// returning the Math.max of them. (0ms - Beats 100.00%)
function maximumCount(nums: number[]): number {
  let negCount = 0, posCount = 0;
  for(const num of nums) {
    if(num < 0) {
      negCount++;
      continue;
    }

    if(num > 0)
      posCount++;
  }

  return Math.max(negCount, posCount);
};

// Second Approach - Same brute force method as first approach but optimized to stop whenever it finds
// a positive number, calculating the remaining positive numbers based on negative and zeros count. (0ms - Beats 100.00%)
function maximumCount(nums: number[]): number {
  let negCount = 0, zeroCount = 0;
  for(const num of nums) {
    if(num < 0) {
      negCount++;
      continue;
    }

    if(num === 0) {
      zeroCount++;
      continue;
    }

    break;
  }

  return Math.max(negCount, nums.length - (zeroCount + negCount));
};

// Third Approach - Binary Search method to find the first 0 and the first 1 to calculate
// the positive and negative count. (0ms - Beats 100.00%)
function maximumCount(nums: number[]): number {
  let negCount = binarySearch(nums, 0);
  let posCount = nums.length - binarySearch(nums, 1);
  return Math.max(negCount, posCount);
};

function binarySearch(nums: number[], target: number) {
  let left = 0, right = nums.length - 1, result = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(nums[mid] < target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result;
};

const case1 = maximumCount([-2,-1,-1,1,2,3]);
const case2 = maximumCount([-3,-2,-1,0,0,1,2]);
const case3 = maximumCount([5,20,66,1314]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
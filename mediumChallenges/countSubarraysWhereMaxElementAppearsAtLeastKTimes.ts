// First Approach - Sliding Window method identifying the biggest number in the array and track the number
// of times it appears in the current window. (171ms - Beats 10.00%)
function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  let biggestNum = 0;
  for(const num of nums)
    biggestNum = Math.max(biggestNum, num);

  const numCount: number[] = [];
  let ans = 0;
  for(let left = 0, right = 0; right < n; right++) {
    numCount[nums[right]] = (numCount[nums[right]] || 0) + 1;
    while(numCount[biggestNum] >= k) {
      ans += n - right;
      numCount[nums[left++]]--;
    }
  }

  return ans;
};

// Second Approach - Exactly same as the first one but using a Map instead of an array to track the number
// of times the biggest number appears in the current window. (84ms - Beats 10.00%)
function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  let biggestNum = 0;
  for(const num of nums)
    biggestNum = Math.max(biggestNum, num);

  const numCount = new Map<number, number>();
  let ans = 0;
  for(let left = 0, right = 0; right < n; right++) {
    numCount.set(nums[right], (numCount.get(nums[right]) ?? 0) + 1);
    while((numCount.get(biggestNum) ?? 0) >= k) {
      ans += n - right;
      numCount.set(nums[left], (numCount.get(nums[left]) ?? 0) - 1);
      left++;
    }
  }

  return ans;
};

// Third Approach - Exactly same as the second one but using a primitive number variable to
// track the biggest count number. (20ms - Beats 20.00%)
function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  let biggestNum = 0;
  for(const num of nums)
    biggestNum = Math.max(biggestNum, num);

  let ans = 0, biggestCount = 0;
  for(let left = 0, right = 0; right < n; right++) {
    if(nums[right] === biggestNum)
      biggestCount++;

    while(biggestCount >= k) {
      ans += n - right;

      if(nums[left] === biggestNum)
        biggestCount--;

      left++;
    }
  }

  return ans;
};

// Fourth Approach - Exactly approach as third one but using built-in Math.max with a
// iterator (nums array) to find the maximum number. (9ms - Beats 100.00%)
function countSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  const biggestNum = Math.max(...nums);

  let ans = 0, biggestCount = 0;
  for(let left = 0, right = 0; right < n; right++) {
    if(nums[right] === biggestNum)
      biggestCount++;

    while(biggestCount >= k) {
      ans += n - right;

      if(nums[left] === biggestNum)
        biggestCount--;

      left++;
    }
  }

  return ans;
};

const case1 = countSubarrays([1,3,2,3,3], 2);
const case2 = countSubarrays([1,4,2,1], 4);

console.log(`case1: ${case1} // ${case1 === 6}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
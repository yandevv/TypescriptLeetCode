// First Try - Sliding Window through all nums, moduling sum with k value (94 / 99 testcases passed)
function checkSubarraySum(nums: number[], k: number): boolean {
    if(nums.length < 2) return false;
    for(let i: number = 0; i < nums.length; i++) {
        let sum: number = nums[i];
        for(let j: number = i + 1; j < nums.length; j++) {
            if(i === 0 && j === 0) return true;
            sum += nums[j];
            if(sum % k === 0) return true;
        }
    }
    return false;
};

// Second Try - O(n) solution calculating module sum of all nums, moduling the sum every iteration with k (82 / 99 testcases passed)
function checkSubarraySum(nums: number[], k: number): boolean {
    if(nums.length < 2) return false;
    let moduleSum: number = nums[0] % k;
    for(let i = 1; i < nums.length; i++) {
        moduleSum += nums[i] % k;
        if(moduleSum % k === 0) return true;
    }
    return false;
};

// First Approach - Prefix summing all values and using hashmap to save remainders indexes (https://leetcode.com/problems/continuous-subarray-sum/solutions/5276981/prefix-sum-hashmap-patterns-7-problems/?source=submission-ac)
function checkSubarraySum(nums: number[], k: number): boolean {
    let prefixSum: number = 0;
    const moduleMap: Map<number, number> = new Map([[0, 0]]);
    for(let i: number = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const remainder = prefixSum % k;
        if(!moduleMap.has(remainder)) {
            moduleMap.set(remainder, i + 1);
        } else if(i - moduleMap.get(remainder)!) return true;
    }
    return false;
};
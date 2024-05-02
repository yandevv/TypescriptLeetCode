// My First Try (brute force two-pointer)
function twoSum(nums: number[], target: number): number[] {
    for(let l = 0; l < nums.length; l++) {
        for(let r = l + 1; r < nums.length; r++) {
            if(nums[l] + nums[r] === target) return [l, r];
        }
    }
};
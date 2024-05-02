// My First Try (brute force two-pointer)
function twoSum(nums: number[], target: number): number[] {
    for(let l = 0; l < nums.length; l++) {
        for(let r = l + 1; r < nums.length; r++) {
            if(nums[l] + nums[r] === target) return [l, r];
        }
    }
};

// My Second Try (hashmap complement)
function twoSum(nums: number[], target: number): number[] {
    const numsMap: Map<number, number> = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        const complementIndex = numsMap.get(target - nums[i])
        if(complementIndex !== undefined) return [complementIndex, i];
        numsMap.set(nums[i], i);
    }
};
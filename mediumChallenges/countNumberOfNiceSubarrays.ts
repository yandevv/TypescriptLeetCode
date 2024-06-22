// First Approach - Bruteforce slide window comparing each subarray odd numbers counter with k (18 / 38 testcases passed)
function numberOfSubarrays(nums: number[], k: number): number {
    let oddSubarrays: number = 0;
    for(let i: number = 0; i < nums.length; i++) {
        let left: number = 0, right: number = i;
        let oddCounter: number = 0;
        for(let j: number = 0; j <= right; j++) if(nums[j] % 2 === 1) oddCounter++;
        while(right <= nums.length - 1) {
            if(oddCounter === k) oddSubarrays++;
            if(nums[left] % 2 === 1) oddCounter--;
            left++;
            right++;
            if(nums[right] % 2 === 1) oddCounter++;
        }
    }
    return oddSubarrays;
};

// Second Approach - Prefix summing nums array and comparing sums ()
function numberOfSubarrays(nums, k): number {
    let n: number = nums.length;
    let cnt: number[] = new Array(n + 1).fill(0);
    cnt[0] = 1;
    let ans: number = 0, t: number = 0;
    for (let v of nums) {
        t += v & 1;
        if (t - k >= 0) {
            ans += cnt[t - k];
        }
        cnt[t]++;
    }
    return ans;
};
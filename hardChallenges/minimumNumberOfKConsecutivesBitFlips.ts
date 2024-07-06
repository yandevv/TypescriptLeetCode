// First Approach - Sliding Window Bitwise solution tracking flipped bits through a new array (https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359610/beats-100-explained-with-video-c-java-python-js-sliding-window-interview-solution/?envType=daily-question&envId=2024-06-24)
function minKBitFlips(nums: number[], k: number): number {
    const n: number = nums.length;
    let flipped: number = 0;
    let ans: number = 0;
    const isFlipped: number[] = new Array(n).fill(0);
    for(let i: number = 0; i < n; i++) {
        if(i >= k) flipped ^= isFlipped[i - k];
        if(flipped == nums[i]) {
            if(i + k > k) return -1;
            isFlipped[i] = 1;
            flipped ^= 1;
            ans++;
        }
    }
    return ans;
};
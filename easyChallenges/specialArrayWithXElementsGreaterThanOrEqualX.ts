function specialArray(nums: number[]): number {
    let res: number = -1;
    nums.sort((a, b) => a - b);
    let optimizedIndex: number = 0;
    for(let x: number = 1; x <= nums.length; x++) {
        let count: number = 0;
        for(let i: number = optimizedIndex; i < nums.length; i++) {
            if(nums[i] < x) {
                optimizedIndex++;
                continue;
            }
            if(nums[i] >= x) count++;
            if(count > x) break;
        }
        if(count === x) return x;
    }
    return res;
};
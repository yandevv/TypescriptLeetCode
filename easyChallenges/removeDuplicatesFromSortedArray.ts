function removeDuplicates(nums: number[]): number {
    let k: number = 0;
    let l: number = 1;
    let hasChanged = false;
    while(k < nums.length) {
        if(nums[k] === nums[l]) {
            l++;
            hasChanged = true;
            continue;
        }
        if(hasChanged) {
            nums.splice(k + 1, l - k - 1);
            l = k + 1;
            hasChanged = false;
        }
        k++;
    }
    return k;
};
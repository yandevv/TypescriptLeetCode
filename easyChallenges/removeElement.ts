function removeElement(nums: number[], val: number): number {
    let k: number = 0;
    while(k < nums.length) {
        if(nums[k] === val) {
            nums.splice(k, 1);
            continue;
        }
        k++;
    }
    return k;
};
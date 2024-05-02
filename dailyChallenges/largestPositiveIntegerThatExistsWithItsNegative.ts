function findMaxK(nums: number[]): number {
    const numsMap: Map<number, boolean> = new Map<number, boolean>();
    let k = -1;
    while(nums.length) {
        const num = nums.pop();
        numsMap.set(num!, true);
        if(numsMap.get(num! * -1) && Math.abs(num!) > k) k = Math.abs(num!);
    }
    return k;
};
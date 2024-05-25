function beautifulSubsets(nums: number[], k: number): number {
    function backtrack(index: number, path: number[] = []): number {
        let count = 0;
        if(path.length) {
            let isBeautiful: boolean = true;
            path.forEach((val) => {
                if(Math.abs(val - path[path.length - 1]) === k) isBeautiful = false;
            });
            if(isBeautiful) {
                count++;
            } else {
                return count;
            }
        }
        for(let i: number = index; i < nums.length; i++) {
            path.push(nums[i]);
            count += backtrack(i + 1, path);
            path.pop();
        }
        return count;
    }
    return backtrack(0);
};
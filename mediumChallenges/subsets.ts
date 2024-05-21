// First Approach (DFS Recursive with backtracking, choosing what to include and exclude)
function subsets(nums: number[]): number[][] {
    function dfs(index: number, currSubarray: number[] = [], subArrays: number[][] = [[]]): number[][] {
        if(index === nums.length) return subArrays;
        currSubarray = [...currSubarray];
        dfs(index + 1, currSubarray, subArrays)
        currSubarray.push(nums[index])
        subArrays.push(currSubarray);
        const include: number[][] =  dfs(index + 1, currSubarray, subArrays);
        return include;
    }
    return dfs(0);
};
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, m+n+1);

    for(let i = 0; i < m + (2 * n); i++) {
        if(nums1[i] <= nums2[0]) continue;
        if(nums2[0] === undefined) break;

        nums1.splice(i, 0, nums2.shift()!);
    }
};
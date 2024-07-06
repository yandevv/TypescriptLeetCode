// First Approach - Sorting and two-pointer solution increasing pointers by the nums arrays values (O(n log n + m log m))
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let pointer1: number = 0, pointer2: number = 0;
    let result: number[] = [];
    while(pointer1 < nums1.length && pointer2 < nums2.length) {
        if(nums1[pointer1] === nums2[pointer2]) {
            result.push(nums1[pointer1])
            pointer1++;
            pointer2++;
        };
        while(nums1[pointer1] < nums2[pointer2]) pointer1++;
        while(nums2[pointer2] < nums1[pointer1]) pointer2++;
    }
    return result;
};

// Second Approach - Hashing first array into a map and comparing second array with that map, decreasing each number iterated (O(n + m))
function intersect(nums1: number[], nums2: number[]): number[] {
    let map: Map<number, number> = new Map();
    nums1.forEach((num) => map.set(num, (map.get(num) ?? 0) + 1));
    let answer: number[] = []
    nums2.forEach((num) => {
        if((map.get(num) ?? 0) > 0) {
            answer.push(num);
            map.set(num, map.get(num)! - 1);
        }
    })
    return answer;
};
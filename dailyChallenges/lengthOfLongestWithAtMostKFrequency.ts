//! 872 / 992 testcases passed
// function maxSubarrayLength(nums: number[], k: number): number {
//     let biggestLength: number = 1;

//     const actualCount = new Map<number, number>();
//     for(let leftPointer: number = 0; leftPointer < nums.length; leftPointer++) {
//         let count = 0;
//         actualCount.clear();
//         if(biggestLength === nums.length) break;
//         for(let rightPointer: number = leftPointer; rightPointer < nums.length; rightPointer++) {
//             let pointerNum = actualCount.get(nums[rightPointer]);
//             if(!pointerNum) {
//                 actualCount.set(nums[rightPointer], 1);
//                 count++;
//                 if(count > biggestLength) biggestLength = count;
//                 continue;
//             };

//             if(pointerNum < k) {
//                 actualCount.set(nums[rightPointer], ++pointerNum);
//                 count++;
//                 if(count > biggestLength) biggestLength = count;
//                 continue;
//             }

//             break;
//         }
//     }

//     return biggestLength;
// };

// My Second Try after seeing discussions (optimized)
function maxSubarrayLength(nums: number[], k: number): number {
    let biggestLength: number = 1;

    const actualCount = new Map<number, number>();
    let leftPointer = 0;
    
    actualCount.clear();
    for(let rightPointer: number = 0; rightPointer < nums.length; rightPointer++) {
        actualCount.set(nums[rightPointer], (actualCount.get(nums[rightPointer]) || 0) + 1);

        if(actualCount.get(nums[rightPointer])! > k) {
            while(nums[leftPointer] !== nums[rightPointer]) {
                actualCount.set(nums[leftPointer], actualCount.get(nums[leftPointer])! - 1);
                leftPointer++;
            }

            actualCount.set(nums[leftPointer], actualCount.get(nums[leftPointer])! - 1);
            leftPointer++;
        }
        biggestLength = Math.max(biggestLength, rightPointer - leftPointer + 1);
    }

    return biggestLength;
};
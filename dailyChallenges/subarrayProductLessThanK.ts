function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let lessThanKProducts = 0;

    if(nums.length > 1) {
        for(let leftPointer = 0; leftPointer < nums.length; leftPointer++) {
            let actualWindowProduct: number = 1;
            for(let rightPointer = leftPointer; rightPointer < nums.length; rightPointer++) {
                actualWindowProduct *= nums[rightPointer];
                if(actualWindowProduct > k) break;
                actualWindowProduct < k && lessThanKProducts++;
            }
        }
    }

    return lessThanKProducts;
};
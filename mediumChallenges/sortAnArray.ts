// First Approach - Merge Sort (https://www.geeksforgeeks.org/merge-sort/) - (210 ms - Beats 64.37%)
function sortArray(nums: number[]): number[] {
    function merge(arr: number[], l: number, m: number, r: number): void {
        let n1 = m - l + 1;
        let n2 = r - m;
        let leftArray = new Array(n1);
        let rightArray = new Array(n2);
        for(let i = 0; i < n1; i++) {
            leftArray[i] = arr[l + i];
        }
        for(let i = 0; i < n2; i++) {
            rightArray[i] = arr[m + i + 1];
        }
        let i = 0;
        let j = 0;
        let k = l;
        while(i < n1 && j < n2) {
            if(leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }
        while(i < n1) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }
        while(j < n2) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
    }
    
    function mergeSort(arr: number[], l: number, r: number) {
        if(l >= r) {
            return;
        }
        let m = l + Math.floor((r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }

    mergeSort(nums, 0, nums.length - 1);

    return nums;
};
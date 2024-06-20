// First Approach - Binary Search approach, iterating over halfs and checking if certain distance is possible (https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339212/beats-100-explained-with-video-c-java-python-js-binary-search-interview-solution/?envType=daily-question&envId=2024-06-20)
function maxDistance(position: number[], m: number): number {
    position.sort((a, b) => a - b);
    let lo: number = 1;
    let hi: number = Math.floor((position[position.length - 1] - position[0]) / (m - 1));
    let ans: number = 1;
    while(lo <= hi) {
        let mid: number = lo + Math.floor((hi - lo) / 2);
        if(isPossibleToPlace(position, mid, m)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
};

function isPossibleToPlace(arr: number[], dist: number, balls: number) {
    let countBalls: number = 1;
    let lastPlaced: number = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] - lastPlaced >= dist) {
            countBalls++;
            lastPlaced = arr[i];
        }
        if(countBalls >= balls) {
            return true;
        }
    }
    return false;
}
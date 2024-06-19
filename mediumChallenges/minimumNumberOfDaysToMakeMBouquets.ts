// First Approach - Binary Search approach, calculation half by half bloomDay's array and getting the minimum possible days to complete the task
function minDays(bloomDay: number[], m: number, k: number): number {
    if(m * k > bloomDay.length) return -1;
    let low: number = 1, high: number = Math.max(...bloomDay);
    while(low < high) {
        const mid: number = Math.floor((low + high) / 2);
        if(isPossibleBouquets(bloomDay, m, k, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

function isPossibleBouquets(bloomDay: number[], m: number, k: number, day: number): boolean {
    let total: number = 0;
    let flowers: number = 0;
    for(let b of bloomDay) {
        if(b <= day) {
            flowers++;
            if(flowers === k) {
                total++;
                flowers = 0;
            }
        } else flowers = 0;
        if(total >=  m) return true;
    }
    return false;
}
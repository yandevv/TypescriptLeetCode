// First Try - Sorting profitsByCapital by its smaller capitalValue and, if its equal, by its pure profit minus its capital value
// function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
//     let n: number = profits.length;
//     let profitsByCapital: number[][] = [];
//     capital.forEach((capitalValue, index) => profitsByCapital.push([profits[index] - capitalValue, capitalValue]));
//     profitsByCapital.sort((a, b) => {
//         if(a[1] !== b[1]) {
//             return a[1] - b[1];
//         }
//         return b[0] - a[0];
//     });
//     let i: number = 0;
//     while(k > 0 && i < n && profitsByCapital[i][1] <= w) {
//         w += profitsByCapital[i][0] + profitsByCapital[i][1];
//         k--;
//         i++;
//     }
//     return w;
// };

// Second try - Sorting profitsByCapital by its profits and, if equals, sorting by the smaller capitalValue, iterating on this list until the number of projects ends
// function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
//     let n: number = profits.length;
//     let profitsByCapital: number[][] = [];
//     capital.forEach((capitalValue, index) => profitsByCapital.push([profits[index], capitalValue]));
//     profitsByCapital.sort((a, b) => {
//         if(b[0] !== a[0]) {
//             return b[0] - a[0];
//         }
//         return a[1] - b[1];
//     });
//     let i: number = 0;
//     while(k > 0 && i < n) {
//         if(profitsByCapital[i][1] <= w) {
//             w += profitsByCapital[i][0];
//             profitsByCapital[i][1] = Infinity;
//             k--;
//             i = -1;
//         }
//         i++;
//     }
//     return w;
// };

// First Approach - Iterating projects and maxQueueing the values based in the profit, and while k is bigger than zero, maxQueue pop the best value
function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    let queue: MaxPriorityQueue = new MaxPriorityQueue();
    let projects: [number, number][] = capital.map((item, idx) => [item, profits[idx]]);
    projects.sort((a, b) => a[0] - b[0]);
    let currentCapital: number = w;
    let currentIdx: number = 0;
    while(k > 0) {
        while(currentIdx < projects.length && projects[currentIdx][0] <= currentCapital){
            const [capital, profit] = projects[currentIdx];
            queue.enqueue(profit);
            currentIdx += 1;
        }
        if(queue.size() === 0){
            return currentCapital;
        }
        const {element} = queue.dequeue();
        currentCapital += element;
        k-=1;
    }
    return currentCapital;
};
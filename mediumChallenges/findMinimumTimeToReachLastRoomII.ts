import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// First Approach - Djikstra's Algorithm method using priority queue to manage BFS callstack, used to find the shortest path
// based on the time taken to reach each cell, adding the coefficient based in a boolean value. (755ms - Beats 45.12%)
function minTimeToReach(moveTime: number[][]): number {
  const n = moveTime.length, m = moveTime[0].length;

  const bfsStack = new MinPriorityQueue<[number, number, number, boolean]>((arr) => arr[2]), visited = Array.from({ length: n }, () => Array(m).fill(false));
  bfsStack.enqueue([0, 0, 0, false]);

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  while(bfsStack.size() > 0) {
    const [x, y, time, increaseCoeff] = bfsStack.dequeue()!;

    if(x === n - 1 && y === m - 1)
      return time;

    for(const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if(newX < n && newY < m && newX >= 0 && newY >= 0 && visited[newX][newY] === false) {
        const newTime = Math.max(time, moveTime[newX][newY]) + +increaseCoeff + 1;
        visited[newX][newY] = true;
        bfsStack.enqueue([newX, newY, newTime, !increaseCoeff]);
      }
    }
  }

  return -1;
};

const case1 = minTimeToReach([[0,4],[4,4]]);
const case2 = minTimeToReach([[0,0,0,0],[0,0,0,0]]);
const case3 = minTimeToReach([[0,1],[1,2]]);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === 6}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
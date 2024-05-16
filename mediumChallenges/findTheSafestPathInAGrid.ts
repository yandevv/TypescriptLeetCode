class QueueElement {
    element: number[];
    priority: number;
    constructor(element: number[], priority: number) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueueImplementation {
    items: QueueElement[];
    constructor() {
        this.items = [];
    }
    enqueue(element: number[], priority: number): void {
        const qElement: QueueElement = new QueueElement(element, priority);
        for(let i: number = 0; i < this.items.length; i++) {
            if(this.items[i].priority < qElement.priority) {
                this.items.splice(i, 0, qElement);
                return;
            }
        }
        this.items.push(qElement);
    }
    dequeue(): number[] {
        if(this.isEmpty()) throw new Error("Empty PriorityQueue!");
        return this.items.shift()!.element;
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    print(): string {
        let str: string = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + " ";
        }
        return str;
    }
}

const roww: number[] = [0, 0, -1, 1];
const coll: number[] = [-1, 1, 0, 0];
function bfs(grid: number[][], score: number[][], n: number) {
    const queue: number[][] = [];
    for(let i: number = 0; i < n; i++) {
        for(let j: number = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                score[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
    while(queue.length) {
        const queueShift: number[] = queue.shift()!;
        const x: number = queueShift[0], y: number = queueShift[1];
        const s: number = score[x][y];
        for(let i: number = 0; i < 4; i++) {
            const newX = x + roww[i];
            const newY = y + coll[i];
            if(newX >= 0 && newX < n && newY >= 0 && newY < n && score[newX][newY] > 1 + s) {
                score[newX][newY] = 1 + s;
                queue.push([newX, newY]);
            }
        }
    }
}

function maximumSafenessFactor(grid: number[][]): number {
    const n: number = grid.length;
    if(grid[0][0] === 1 || grid[n - 1][n - 1]) return 0;
    const score: number[][] = [];
    for(let i: number = 0; i < n; i++) {
        const newArray: number[] = [];
        for(let j: number = 0; j < n; j++) {
            newArray.push(Number.POSITIVE_INFINITY);
        }
        score.push(newArray);
    }
    bfs(grid, score, n);
    const visited: boolean[][] = [];
    for(let i: number = 0; i < n; i++) {
        const newArray: boolean[] = [];
        for(let j: number = 0; j < n; j++) {
            newArray.push(false);
        }
        visited.push(newArray);
    }
    const priorityQueue: PriorityQueueImplementation = new PriorityQueueImplementation();
    priorityQueue.enqueue([score[0][0], 0, 0], score[0][0]);
    while(!priorityQueue.isEmpty()) {
        const pqDequeue: number[] = priorityQueue.dequeue();
        const safe: number = pqDequeue[0];
        const i: number = pqDequeue[1], j: number = pqDequeue[2];
        if(i === n - 1 && j === n - 1) return safe;
        visited[i][j] = true;
        for(let k: number = 0; k < 4; k++) {
            let newX: number = i + roww[k];
            let newY: number = j + coll[k];
            if(newX >= 0 && newX < n && newY >= 0 && newY < n && !visited[newX][newY]) {
                const s: number = Math.min(safe, score[newX][newY]);
                priorityQueue.enqueue([s, newX, newY], s);
                visited[newX][newY] = true;
            }
        }
    }

    return -1;
};
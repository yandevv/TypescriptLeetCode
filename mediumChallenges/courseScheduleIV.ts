import { Queue } from "@datastructures-js/queue";

// First Try - Iterating over prerequisites storing their direct prerequisites with Sets indexed by course's numbers,
// iterating over queries and BFSing prerequisites. (28/69 testcases passed)
// function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
// 	const directPrerequisites: Set<number>[] = Array.from(new Array(numCourses), () => new Set());
// 	for(let prerequisite of prerequisites) {
// 		directPrerequisites[prerequisite[1]].add(prerequisite[0]);
// 	}

// 	const ans: boolean[] = [];
// 	for(let i = 0; i < queries.length; i++) {
// 		const query = queries[i], coursePrerequisite = directPrerequisites[query[1]];

// 		let isPrerequisite = false;

// 		const bfsQueue: Queue<number> = Queue.fromArray(Array.from(coursePrerequisite.values()));
// 		while(bfsQueue.size()) {
// 			const dequeuedCourse = bfsQueue.dequeue();

// 			if(dequeuedCourse === query[0]) {
// 				isPrerequisite = true;
// 				break;
// 			}

// 			for(let course of directPrerequisites[dequeuedCourse].values()) {
// 				bfsQueue.enqueue(course);
// 			}
// 		}

// 		ans.push(isPrerequisite);
// 	}

// 	return ans;
// };

// Second Try - DFS through every course and storing each direct and indirect course, consulting while in queries's
// for loop. (28/69 testcases passed)
// function dfs(originalCourseNum: number, directPrerequisites: Set<number>[], courseNum: number) {
// 	for(let newCourseNum of directPrerequisites[courseNum]) {
// 		directPrerequisites[originalCourseNum].add(newCourseNum);
// 		dfs(originalCourseNum, directPrerequisites, newCourseNum);
// 	}
// }

// function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
// 	const coursePrerequisites: Set<number>[] = Array.from(new Array(numCourses), () => new Set());
// 	for(let prerequisite of prerequisites) {
// 		coursePrerequisites[prerequisite[1]].add(prerequisite[0]);
// 	}

// 	for(let i = 0; i < numCourses; i++) {
// 		dfs(i, coursePrerequisites, i);
// 	}

// 	const ans: boolean[] = [];
// 	for(let query of queries) {
// 		if(coursePrerequisites[query[1]].has(query[0])) {
// 			ans.push(true);
// 		} else
// 			ans.push(false);
// 	}

// 	return ans;
// };

// First Approach - Graph and DFS method storing every course edge in a number matrix and iterating over it with DFS,
// storing in a reachable Set variable the reachable nodes of it's neighbors.
//  (https://leetcode.com/problems/course-schedule-iv/solutions/6335709/solution-with-explanation-beats-100-in-time-61-54-100-in-space-dfs-graph/?envType=daily-question&envId=2025-01-27)
function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
	const graph: number[][] = Array.from({ length: numCourses }, () => []);

	for(const [u, v] of prerequisites) {
		graph[u].push(v);
	}

	const reachable = Array.from({ length: numCourses }, () => new Set<number>());

	function dfs(node: number) {
		for(const neighbor of graph[node]) {
			if(reachable[node].has(neighbor)) {
				continue;
			}

			reachable[node].add(neighbor);

			dfs(neighbor);

			for(const n of reachable[neighbor]) {
				reachable[node].add(n);
			}
		}
	};

	for(let i = 0; i < numCourses; i++) {
		dfs(i);
	}

	return queries.map(([u, v]) => reachable[u].has(v));
}

const case1 = checkIfPrerequisite(2, [[1,0]], [[0,1],[1,0]]);
console.log('===');
const case2 = checkIfPrerequisite(2, [], [[1,0],[0,1]]);
console.log('===');
const case3 = checkIfPrerequisite(3, [[1,2],[1,0],[2,0]], [[1,0],[1,2]]);

console.log(`case1: ${case1} - Should Be: [false, true]`);
console.log(`case2: ${case2} - Should Be: [false, false]`);
console.log(`case3: ${case3} - Should Be: [true, true]`);
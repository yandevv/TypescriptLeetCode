// First Try - Sorting by arrivalTime and iterating over only counting to the chair count the times that arrival time are lower than target arrival time and leaving time are greater or equals to target arrival time. (Wrong Answer - 49 / 65 testcases passed)
// function smallestChair(times: number[][], targetFriend: number): number {
// 	let targetFriendTime = times[targetFriend];

// 	times.sort((a, b) => a[0] - b[0]);

// 	let chairCount = 0;
// 	for(let i = 0; i < times.length; i++) {
// 		if(times[i][0] < targetFriendTime[0]) {
// 			if(times[i][1] >= targetFriendTime[0]) {
// 				chairCount++;
// 			}
// 			continue;
// 		}
// 		break;
// 	}

// 	return chairCount;
// };

// First Approach - Min Priority Queueing free seats approach iterating sorted arrivals and leaving times seating and unseating guests by their arrival and leaving times. (https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/?envType=daily-question&envId=2024-10-11)
function smallestChair(times: number[][], targetFriend: number): number {
	const arrivals = [...Array(times.length).keys()].sort((a, b) => times[a][0] - times[b][0]);
	const departures = [...Array(times.length).keys()].sort((a, b) => times[a][1] - times[b][1]);

	const seats = new Map<number, number>();

	const freeSeats = new MinPriorityQueue();

	let nextSeat = 0;

	let arriveIndex = 0;
	let departIndex = 0;

	while(true) {
			const s = arrivals[arriveIndex];
			const e = departures[departIndex];

			if(times[s][0] < times[e][1]) { // Seat guest
					const seat = freeSeats.isEmpty() ? nextSeat++ : freeSeats.dequeue().element;

					if(s === targetFriend)
						return seat;

					seats.set(s, seat);

					++arriveIndex;
			} else { // Unseat guest
					freeSeats.enqueue(seats.get(e));

					++departIndex;
			}
	}
}

const case1 = smallestChair([[1,4],[2,3],[4,6]], 1);
const case2 = smallestChair([[3,10],[1,5],[2,6]], 0);
const case3 = smallestChair([[33889,98676],[80071,89737],[44118,52565],[52992,84310],[78492,88209],[21695,67063],[84622,95452],[98048,98856],[98411,99433],[55333,56548],[65375,88566],[55011,62821],[48548,48656],[87396,94825],[55273,81868],[75629,91467]], 6);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 2}`);
// First Try - Difference Array method to track meeting days based on increasing start day and decreasing
// a day ahead of end day. (Memory Exceeded - 563 / 578 testcases passed)
// function countDays(days: number, meetings: number[][]): number {
//   const meetingDaysTrack: number[] = new Array(days).fill(0);

//   for(const meetingSchedule of meetings) {
//     const [startDay, endDay] = meetingSchedule;

//     meetingDaysTrack[startDay - 1]++;
//     if(endDay < days)
//       meetingDaysTrack[endDay]--;
//   }

//   let ans = 0, carry = 0;
//   for(const meetingDay of meetingDaysTrack) {
//     carry += meetingDay;
//     if(carry === 0)
//       ans++;
//   }

//   return ans;
// };

// First Approach - Line sweep method iterating over meetings as would be to a difference array
// approach but storing the difference in a map (to maximize storage efficiency), iterating
// over the map with a track of previous day and prefix sum of meetings, summing up to answer
// variable whenever prefix sum is equal zero. (https://leetcode.com/problems/count-days-without-meetings/editorial/?envType=daily-question&envId=2025-03-24)
function countDays(days: number, meetings: number[][]): number {
  const daysMap: Map<number, number> = new Map();

  let previousDay = days;
  for(const meeting of meetings) {
    const [startDay, endDay] = meeting;

    daysMap.set(startDay, (daysMap.get(startDay) ?? 0) + 1);
    daysMap.set(endDay + 1, (daysMap.get(endDay + 1) ?? 0) - 1);

    previousDay = Math.min(previousDay, startDay);
  }

  const daysMapArray = Array.from(daysMap.entries()).sort((a, b) => a[0] - b[0]);

  let freeDays = previousDay - 1, prefixSum = 0;
  for(const day of daysMapArray) {
    const [currentDay, count] = day;

    if(prefixSum === 0)
      freeDays += currentDay - previousDay;

    prefixSum += count;
    previousDay = currentDay;
  }

  freeDays += days - previousDay + 1;

  return freeDays;
};

const case1 = countDays(10, [[5,7],[1,3],[9,10]]);
const case2 = countDays(5, [[2,4],[1,3]]);
const case3 = countDays(6, [[1,6]]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
// First Try - Bruteforcing with three pointer checking through rating's array - TLE (71 / 72 testcases passed)
// function numTeams(rating: number[]): number {
//     let ans = 0;
//     for(let i = 0; i < rating.length; i++) {
//         for(let j = i + 1; j < rating.length; j++) {
//             for(let k = j + 1; k < rating.length; k++) {
//                 const validTeam1 = rating[i] > rating[j] && rating[j] > rating[k];
//                 const validTeam2 = rating[i] < rating[j] && rating[j] < rating[k];
//                 if(validTeam1 || validTeam2) ans++;
//             }
//         }
//     }
//     return ans;
// };

// First Approach - Counting frequency of bigger and smaller nums from middle soldiers, summing up the count of (left bigger nums x right smaller nums) and (left smaller nums times right bigger nums) with ans. (https://leetcode.com/problems/count-number-of-teams/solutions/5551007/count-left-right-less-or-bigger-fenwick-tree-segment-tree-2ms-beats-99-79/?envType=daily-question&envId=2024-07-29)
function numTeams(rating: number[]): number {
    let ans = 0;
    for(let i = 1; i < rating.length - 1; i++) {
        const leftDP: [number, number] = [0, 0], rightDP: [number, number] = [0, 0];
        for(let j = i - 1; j >= 0; j--) {
            leftDP[rating[j] < rating[i] ? 1 : 0]++;
        }
        for(let j = i + 1; j < rating.length; j++) {
            rightDP[rating[j] < rating[i] ? 1 : 0]++;
        }
        ans += leftDP[0] * rightDP[1] + leftDP[1] * rightDP[0];
    }
    return ans;
};
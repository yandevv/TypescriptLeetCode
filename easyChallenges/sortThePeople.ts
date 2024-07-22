// First Approach - Bubble Sort through heights, maintaining the lastHeight and lastName and swapping when necessary (103ms - Beats 11.23%)
function sortPeople(names: string[], heights: number[]): string[] {
    let hasChanged = true;
    while(hasChanged) {
        hasChanged = false;
        let lastHeight = heights[0];
        let lastName = names[0];
        for(let i = 1; i < heights.length; i++) {
            const diff = lastHeight - heights[i];
            if(diff < 0) {
                heights[i - 1] = heights[i];
                heights[i] = lastHeight;
                names[i - 1] = names[i];
                names[i] = lastName;
                hasChanged = true;
                continue;
            }
            lastHeight = heights[i];
            lastName = names[i];
        }
    }
    return names;
};

// Second Approach - Mapping names and heights into a single array and sorting that array, and mapping into a ans array with just names (72ms - Beats 81.69%)
function sortPeople(names: string[], heights: number[]): string[] {
    let nh: [string, number][] = [];
    heights.forEach((height, index) => nh.push([names[index], height]));
    nh!.sort((a, b) => b[1] - a[1]);
    let ans: string[] = [];
    nh!.forEach((val) => ans.push(val[0]));
    return ans;
};
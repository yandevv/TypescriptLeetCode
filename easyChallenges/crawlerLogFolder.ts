// First Approach - Creating a variable level and iterate through logs, increasing the level number as it's accessing folders and decreasing as it's returning
function minOperations(logs: string[]): number {
    let level: number = 0;
    logs.forEach((log) => {
        if(log === "../") {
            level = Math.max(level - 1, 0);
        } else if(log !== "./") {
            level++;
        }
    })
    return level;
};
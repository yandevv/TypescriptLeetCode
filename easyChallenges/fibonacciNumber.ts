// Dynamic Programming Approach (top-down memoization)
function fib(n: number, memo: number[] = [0, 1, 1]): number {
    if(memo[n] === undefined) {
        return fib(n - 1, memo) + fib(n - 2, memo)
    };
    return memo[n];
};
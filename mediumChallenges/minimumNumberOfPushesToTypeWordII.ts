// First Approach - Greedy approach getting most appeared letters in order, and summing up it with ans multiplied to your numpad key position coefficient - (170ms - Beats 72.73%)
function minimumPushes(word: string): number {
	const letterMap: Map<string, number> = new Map();
	for(let i = 0; i < word.length; i++) {
		const letter = word.charAt(i);
		letterMap.set(letter, (letterMap.get(letter) ?? 0) + 1);
	}

	const entries = Array.from(letterMap.entries());
	entries.sort((a, b) => b[1] - a[1]);

	let ans = 0;
	for(let i = 0; i < entries.length; i++)
		ans += entries[i][1] * Math.ceil((i + 1) / 8);

	return ans;
};
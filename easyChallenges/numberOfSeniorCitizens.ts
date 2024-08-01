// First Approach - Details iteration getting every age by their indexes from strings and concatenating into a full string, parsing it and increasing ans if age is more than 60 years - (53ms - Beats 92.59%)
function countSeniors(details: string[]): number {
	let ans = 0;
	details.forEach((detail) => {
		let personAge = parseInt(detail.charAt(11) + detail.charAt(12));
		if(personAge > 60) ans++;
	})
	return ans;
};
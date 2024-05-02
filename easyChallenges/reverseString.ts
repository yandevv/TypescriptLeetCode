function reverseString(s: string[]): void {
    let l = 0, r = s.length - 1;
    while(r > l) {
        const aux = s[l];
        s[l] = s[r];
        s[r] = aux;
        l++;
        r--;
    }
};
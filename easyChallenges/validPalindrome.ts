// First try with regex filtering
function isPalindrome(s: string): boolean {
    const sSplitted: string[] = s.toLowerCase().replace(/[^a-z\d]/g, "").split("");
    let l = 0, r = sSplitted.length - 1;
    while(l < r) {
        if(sSplitted[l] !== sSplitted[r]) return false;
        l++;
        r--;
    }
    return true;
};

// Second try (more performant and language programming flexible)
function isPalindrome(s: string): boolean {
    const sSplitted = s.toLowerCase().split("");
    let l = 0, r = sSplitted.length - 1;
    while(l < r) {
        if(/[^a-z\d]/gi.test(sSplitted[l])) {
            l++;
            continue
        };
        if(/[^a-z\d]/gi.test(sSplitted[r])) {
            r--;
            continue;
        }
        if(sSplitted[l] !== sSplitted[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
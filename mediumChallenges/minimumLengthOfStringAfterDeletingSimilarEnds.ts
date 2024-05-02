function minimumLength(s: string): number {
    const splittedString: string[] = s.split("");

    let left: number = 0;
    let right: number = splittedString.length - 1;
    while(left < right && splittedString[left] === splittedString[right]) {
        let actualChar: string = splittedString[left];
        while(splittedString[left] === actualChar && left <= right) left++;
        while(splittedString[right] === actualChar && left <= right) right--;
    }

    return right - left + 1;
}
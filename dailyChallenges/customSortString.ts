function customSortString(order: string, s: string): string {
    const splittedOrder: string[] = order.split("");
    let splittedS: string[] = s.split("");

    let orderDict: {[key: string]: number} = {};
    for(let i: number = 0; i < splittedOrder.length; i++) {
        orderDict[splittedOrder[i]] = i+1;
    }
    
    let control: boolean = true;
    while(control) {
        control = false;
        for(let i: number = 0; i < splittedS.length; i++) {
            let actualChar = orderDict[splittedS[i]] ? orderDict[splittedS[i]] : splittedOrder.length + 1;
            let forwardChar = orderDict[splittedS[i+1]] ? orderDict[splittedS[i+1]] : splittedOrder.length + 1;
            if(forwardChar && forwardChar < actualChar) {
                let previousChar = splittedS[i];
                splittedS[i] = splittedS[i+1];
                splittedS[i+1] = previousChar;
                control = true;
            }
        }
    }

    return splittedS.join("");
};
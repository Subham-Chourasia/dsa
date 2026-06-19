function secondSmallest(arr) {
    let Small = -Infinity;
    let secSmall = -Infinity;
    for(let i=0; i< arr.length; i++) {
        if (arr[i] > Small) {
            secSmall = Small;
            Small = arr[i];
        } else if (arr[i] > secSmall) {
            secSmall = arr[i];
        }
    }
    return secSmall;
}

let a = [2,333,22,111,3];
console.log(secondSmallest(a));
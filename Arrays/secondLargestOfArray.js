function secondLargest(arr) {
    let lar = arr[0];
    let secLar = 0;
    for(i=1; i< arr.length; i++) {
        if (arr[i] > lar) {
            secLar = lar;
            lar = arr[i];
        } else if (arr[i] > secLar) {
            secLar = arr[i];
        }
    }
    return secLar;
}

let a = [222,33,22,111,3];
console.log(secondLargest(a));



// optimal claude

function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let lar = -Infinity;
    let secLar = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            secLar = lar;
            lar = arr[i];
        } else if (arr[i] > secLar && arr[i] < lar) {
            // strictly less than lar — skips duplicates of the largest
            secLar = arr[i];
        }
    }

    return secLar === -Infinity ? null : secLar;
}
function smallestAndSecondSmall(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let smallest = Infinity;
    let secSmall = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secSmall = smallest;
            smallest = arr[i];
        } else if (arr[i] < secSmall && arr[i] > smallest) {
            secSmall = arr[i];
        }
    }

    return secSmall === Infinity ? null : secSmall;
}
smallestAndSecondSmall([23,4,3,-3,0,4]);
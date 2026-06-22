function leftRotaeOnePlace(arr){
    let firstElem = arr[0];
    let lastElem = arr[arr.length -1];
    arr.shift();
    arr.push(firstElem);
    return arr;

}
console.log(leftRotaeOnePlace([1,2,3,4,5]));


// --optimal--
function leftRotateOne(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
console.log(leftRotateOne([1,2,3,4,5]));

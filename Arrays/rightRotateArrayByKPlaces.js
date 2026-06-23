function rotate(arr, k){
    let tempArr = [];
    k = k % arr.length;
    for(let i = arr.length -k; i< arr.length ; i++) {
        tempArr.push(arr[i]);
    }
    for(let i = arr.length - k - 1; i >= 0; i--){
        arr[i + k] = arr[i];
    }
    arr.splice(0 ,k);

    for(let i = tempArr.length - 1; i>= 0; i--){
        arr.unshift(tempArr[i]);
    }
    return arr;
}
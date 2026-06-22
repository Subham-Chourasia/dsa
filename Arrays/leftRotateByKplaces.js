//brute-force
function leftRotateByKplaces(arr, k){
    let tempArr = [];
    for(let i = 0; i< k ; i++) {
        tempArr.push(arr[i]);
    }
    for(let i = k; i <= arr.length; i++){
        arr[i-k] = arr[i];
    }
    arr.splice(arr.length - k ,k)

    for(let i = 0; i<tempArr.length; i++){
        arr.push(tempArr[i]);
    }
    return arr;
}
console.log(leftRotateByKplaces([2,3,4,5,6,9,77,7], 3));
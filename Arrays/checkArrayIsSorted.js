function checkSortedArray(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    }
    if(arr.length === 1) {
        return -1;
    }

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkSortedArray([1,2,3,4]));
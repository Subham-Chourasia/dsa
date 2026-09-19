function binarySearch(arr, target){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    }
    if(arr.length === 1 && arr[0] === target) {
        return 0;
    }

    let i = 0;
    let j = arr.length - 1;

    while(i <= j){
        
    let midIndex =  Math.floor((i + j ) / 2);
    let midval = arr[midIndex];
        if(target === midval) {
            return midIndex;
        } else if (midval > target){
            j = midIndex - 1;
        } else{
            i = midIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8], 4));
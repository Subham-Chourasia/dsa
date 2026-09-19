function test(arr, n){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    }
    if(arr.length === 1) {
        return -1;
    }

    reverse(arr, 0, n-1);
    reverse(arr, n, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    return arr;

}

function reverse(arr, start, end){
    let temp = [];
    for(let i = end; i >=start; i--){
        temp.push(arr[i]);
    }
    console.log(temp, "temppp");
    arr = temp;

    return arr;
}

console.log(test([2,3,4,4,5,6,7], 3));




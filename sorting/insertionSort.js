function insertionSort(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    }
    if(arr.length === 1){
        return arr;
    }
     for(let i = 1; i < arr.length; i++){
        let curr = arr[i];
        let prev = i - 1;
        while(arr[prev] > curr && arr[prev] >= 0){
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
     }
     return arr;
}

console.log(insertionSort([22,3,4,-9,234,2,1]));
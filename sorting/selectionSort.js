function selectionSort(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    }
    if(arr.length === 1){
        return arr;
    }

    for(let i = 0; i < arr.length - 1; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        } 
    }
    return arr;
}

let arr = [1,22,3,44,-9,3,21,0];
console.log(selectionSort(arr));
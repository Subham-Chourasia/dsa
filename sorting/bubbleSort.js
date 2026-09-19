function bubbleSort(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return -1;
    } else if( arr.length === 1 ){
        return arr;
    } else{
        for(let i = 0; i < arr.length-1; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                if(arr[j] > arr[j+1]){
                    let temp =  arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
}
let num = [33,2,4,6,4,-77,5,1];
console.log(bubbleSort(num))



//more optimized
function bubbleSort(arr) {
    if (!Array.isArray(arr)) return -1;
    if (arr.some(x => typeof x !== 'number' || Number.isNaN(x))) {
        throw new Error('Array must contain only valid numbers');
    }
    if (arr.length <= 1) return arr;

    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}
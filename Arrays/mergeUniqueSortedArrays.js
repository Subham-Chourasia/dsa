function mergeUniqueSortedArrays(arr1, arr2){
    let i =0;
    let j = 0;
    let union = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            if(union.length === 0 || union[union.length - 1] !== arr1[i]){
                union.push(arr1[i]);
            }
            i++;
        } else {
            if(union.length === 0 || union[union.length - 1] !== arr2[j]){
                union.push(arr2[j]);
            }
            j++;
        }
    }
    while (i < arr1.length) {
        if(union.length === 0 || union[union.length - 1] !== arr1[i]){
            union.push(arr1[i]);
        }
        i++;
    }
    while(j < arr2.length) {
        if(union.length === 0 || union[union.length - 1] !== arr2[j]){
            union.push(arr2[j]);
        }
        j++;
    }
    return union;
}

console.log(mergeUniqueSortedArrays([1,2,2,3,3,4,5,6], [0,3,3,4,5,6]));
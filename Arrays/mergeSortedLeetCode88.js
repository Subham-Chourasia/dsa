function mergeSortedLeetCode88(arr1, arr2, m ,n){
    let j = 0;
    let validLength = arr1.length > 0 && arr2.length > 0;
    while(validLength && m < arr1.length && j < n){
        if(arr1[i] === 0 && arr2[j] !== 0){
            arr1[i] = arr2[j];
            i++;
            j++;
        }
    }
}

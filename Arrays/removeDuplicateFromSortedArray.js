function removeDuplicateFromSortedArray(arr){
    for(let i =0; i< arr.length;i++){
        for(let j = i + 1; j< arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

console.log(removeDuplicateFromSortedArray([1,2,2,3,3,3,3,3,3,3,3,4,4]));


//Two pointers --best solution---
function removeDuplicateTwoPointer(arr){
    if(arr.length === 0) return arr;
    let i = 0;
    for(let j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            arr[i + 1] = arr[j];
            i++; 
        }
    }
    console.log(i);
    arr.length = i+1; //when we do this it sets the length of array and the other elenets gets removed
    return arr;
}
console.log(removeDuplicateTwoPointer([1,2,2,3,3,3,3,3,3,3,3,4,4]));

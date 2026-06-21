function checkArrayIsSorted(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > arr[i+1] && i + 1 < arr.length){
            return false
        }
    }
        return true;

}

console.log(checkArrayIsSorted([1, 2, 3, 0]));


//better approach
// function checkArrayIsSorted(arr){
//     for(let i = 0; i < arr.length - 1; i++){    // ⬅️ bounds in the loop itself
//         if(arr[i] > arr[i+1]) return false;       // ⬅️ no extra check needed inside
//     }
//     return true;
// }

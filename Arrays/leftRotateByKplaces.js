
//brute-force
function leftRotateByKplaces(arr, k){
    k = k % arr.length;

    let tempArr = [];
    for(let i = 0; i< k ; i++) {
        tempArr.push(arr[i]);
    }
    for(let i = k; i <= arr.length; i++){
        arr[i-k] = arr[i];
    }
    // -----either this block-----
    let j =0;
    for(let i = arr.length - k; i < arr.length; i++){
        arr[i] = tempArr[j];
        j++;
    }
    // ------or this block------
    // arr.splice(arr.length - k ,k)

    // for(let i = 0; i<tempArr.length; i++){
    //     arr.push(tempArr[i]);
    // }
    // -----------------------------
    return arr;
}
// console.log(leftRotateByKplaces([1,2,3,4,5,6,7], 30));


//optimal
function moveElementsLeft(arr, k){
    // k = k % arr.length;
    const n = arr.length;
    // Normalize k to always be a valid positive left-rotation
    k = ((k % n) + n) % n;  // ✅ handles negative, zero, and k > n
    reverse(0, k-1, arr);
    reverse(k,  arr.length - 1, arr);
    reverse(0 ,  arr.length -1, arr);
    return arr;
}

function reverse(start, end, arr) {
    while (start < end) {  // ✅ correct termination
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
//for reversing we can use the built in method of array reverse of js
console.log(moveElementsLeft([1,2,3,4,5,6,7,8], 3));

// Case 1: k = 3 (normal positive)
// k % n       →   3 % 8  =  3
// (k % n) + n →   3 + 8  =  11
// ((k%n)+n)%n →   11 % 8 =  3  ✅

// Case 2: k = -2 (negative)
// k % n       →  -2 % 8  = -2   ⚠️ JS keeps negative sign
// (k % n) + n →  -2 + 8  =  6   ✅ shifted to positive
// ((k%n)+n)%n →   6 % 8  =  6   ✅
// So rotate left by -2 becomes rotate left by 6
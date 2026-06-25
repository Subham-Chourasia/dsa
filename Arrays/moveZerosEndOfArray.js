//brute force
function moveZerosEndOfArray(arr){
    let tempArr = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 0){
            tempArr.push(0);
            arr.splice(i,1);
            i--;
        }
    }
    // console.log(arr);
    for(let i = 0; i<tempArr.length; i++){
        arr.push(tempArr[i]);
    }
    return arr;
}
// console.log(moveZerosEndOfArray([1,0,2,3,0,0,0,0,0,3,2,0,0,4,5,1,0]));


//optimal
var moveZeroes = function(arr) {
    let i = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== 0) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
    return arr;
};
console.log(moveZeroes([1,0,2,3,2,0,0,3,2,1])); //
// console.log(moveZerosEndOfArrayOptimal([1,0,2,3,0,0,0,0,0,3,2,0,0,4,5,1,0]));

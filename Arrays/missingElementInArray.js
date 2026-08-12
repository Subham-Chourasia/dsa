// // brute-force
// function missingElementInArray(arr, n){
//     for(let i = 1; i <= n; i++){
//         let isPresent = false;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] === i){
//                 isPresent = true;
//                 break;
//             }
//         }
//         if(isPresent === false) {
//             return i;
//         }
//     }
//     return "not missing";
// }
// console.log(missingElementInArray([2,3,4,5,6,7,8,9], 9));

//better
function missingElementInArray(arr, N){
    let hash = new Array(N).fill(0);
    for(let i = 0; i< N-1; i++){
        hash[arr[i]] = 1;
    }
    for(let i = 0; i <= N-1; i++){
        if(hash[i] === 0){
            return i;
        }
    }
}

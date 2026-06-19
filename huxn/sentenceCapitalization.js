// function senCap(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         if(i == 0) {
//             arr[0] = arr[0].toUpperCase();
//         }

//         if(arr[i] === " " && arr[i+1] <= arr.length) {
//             arr[i+1] = arr[i+1].toUpperCase();
//         }
//     }
//     return arr;
// }
// console.log(senCap("kkelo kjk"));
// the reason for above function not working is  Strings are immutable in JavaScript (the main problem)

// -----solution-----


function capStr(str) {
    let sent = str.split(" ").map((i) => i.charAt(0).toUpperCase() + i.slice(1));
    return sent.join(" ");
}

console.log(capStr("hello all how Are you"));
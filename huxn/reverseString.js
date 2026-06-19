//optimal solution
function reverse (str) {
    let data = [];
    for(let i = str.length-1; i>= 0 ; i--) {
        data.push(str[i]);
    }
    return console.log(data.join(""));
}

reverse("hello");
// Strings in JS are immutable. You cannot swap characters inside a string directly. So any reversal must allocate a new 
// array or string of size n. That means O(n) space is the floor here, and your solution hits it.


// built in method
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("apple"));
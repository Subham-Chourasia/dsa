// function revInt(num) {
//     let arr = [];
//     while(num > 0) {
//         arr.push(num % 10);
//         num = Math.floor(num/10);
//     }
//     return arr.join("");
// }
// const x = revInt(363777);
// console.log(x);


// ----best opyimized--
function revInt(num) {
    const sign = Math.sign(num);
    num = Math.abs(num);
    let result = 0;
    while (num > 0) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    result *= sign;
    if (result > 2**31 - 1 || result < -(2**31)) return 0;
    return result;
}

// Math.sign(num) -- Returns the sign of a number: 1 for positive, -1 for negative, 0 for zero.
// Math.abs(num) -- Returns the absolute value — drops the negative sign if present.


// Overflow (the classic LeetCode "Reverse Integer" problem) — if reversed result exceeds 32-bit signed int range (±2³¹), return 0:
// result > 2**31 - 1
// This checks for 32-bit signed integer overflow.
// First, ** is the exponent operator: 2**31 means 2³¹ = 2147483648. So 2**31 - 1 = 2147483647.
// Why that specific number? In many languages (C, C++, Java, etc.), an int is stored in 32 bits. One bit goes to the sign (+/–), leaving 31 bits for the value. That gives a range of:
// Max: 2³¹ - 1 = 2,147,483,647
// Min: -2³¹ = -2,147,483,648
// So the check result > 2**31 - 1 || result < -(2**31) is asking: did the reversed number escape the 32-bit int range?
// Example: reversing 1534236469 gives 9646324351 — that's bigger than 2147483647, so it overflows. The LeetCode problem says return 0 in that case.
// Side note: JavaScript itself doesn't actually have 32-bit ints — all numbers are 64-bit floats, so JS can hold 9646324351 just fine. The check exists only because the problem asks you to simulate the 32-bit constraint that other languages have.



// The loop runs once per digit. So the real question is: how do digits grow as the number grows?
// Digits grow logarithmically
// To add one more digit, you need to multiply by 10, not 2.
// NumberDigitsIterations7117022700337,000,000777,000,000,0001010
// Going from 7 to 7 billion (a billion-fold increase in value) only takes you from 1 to 10 iterations. That's the whole point of O(log n) — the work grows extremely slowly.
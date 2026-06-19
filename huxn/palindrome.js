function checkPalindrome(str) {
    let data = [];
    for(let i = str.length - 1;  i >= 0 ; i--) {
        data.push(str[i]);
    }
    return data.join("") === str;
}

const chek = checkPalindrome("tat");
console.log(chek);


// In real interviews, ask: "Should I ignore case, spaces, and punctuation?" Whether "A man, a plan, a canal: Panama" counts as a palindrome changes the problem. If yes, you'd normalize first:
// javascriptstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
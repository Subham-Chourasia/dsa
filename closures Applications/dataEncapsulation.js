function dataEncapsultaion(){
    let balance = 100;
    return {
        deposit(amt) {
            balance += amt;
            return balance;
        },
        withdraw(amt) {
            if(amt > balance) return "Insufficient balance"
            balance -= amt;
            return balance;
        },
        currBalance() {
            return balance;
        }
    }
}
const x = dataEncapsultaion();
console.log(x.deposit(11));
console.log(x.deposit(11));
console.log(x.withdraw(1119));

/// using closures

function closureEncapsulation() {
    
}
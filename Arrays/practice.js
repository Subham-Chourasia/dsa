// Write a createCounter() function using closures that supports .increment(), .decrement(), and .getValue().
function createCounter(){
    let count = 0;
    return function(){ 
        return{
            increment() {
            count++;
            return count;
            },
            decrement() {
                count--;
                return count;
            },
            getValue() {
                return count;
            }
        }
        
    }
}

const y = createCounter();
let x = y();
console.log(x.increment());
console.log(x.getValue());
console.log(x.increment());
console.log(x.decrement());
console.log(x.increment());
console.log(x.increment());
console.log(x.getValue());
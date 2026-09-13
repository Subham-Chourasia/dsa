function counter(initial) {
    let count = initial;
    return{
        increment(){
            return ++count;
        },
        decrement(){
            if(count < 0){
                return "Already zero";
            }
            return --count;
        },
        getCount(){
            return count;
        },
        reset(){
            count = initial;
            return count;
        }
    }
}

let c = counter(10);
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.increment());
console.log(c.getCount());
console.log(c.reset());
console.log(c.decrement());





////////////////////////////----Vanila JS-----------------///////////////////////////











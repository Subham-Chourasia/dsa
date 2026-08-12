const Calculator = function(){
    let history = [];
    function record(op, res, time){
        history.push({op, res, at: new Date()});
    }
    return {
        add(a,b){
            record("add", a+b);
            return a + b;
        },
        subtract(a,b) {
            record("subtract", a+b);

            return a - b;
        },
        multiply(a,b) {
            record("multiply", a+b);
            return a*b;
        },
        getHistory(){
            return[...history];
        }
    }
}();
console.log(Calculator.add(2,3));
console.log(Calculator.getHistory);
console.log(Calculator.subtract(2,3));
console.log(Calculator.multiply(2,3));
console.log(Calculator.getHistory());
Calculator.history;             // undefined


// How the closure works: the IIFE runs immediately, exactly once. Its environment holds history, log, and the three public functions. 
// Because the IIFE is invoked only once, Calculator is a singleton — one shared history, no matter how many places reference Calculator.

// Key detail interviewers probe: getHistory returns [...history], a copy — not history itself. If it returned the live array, 
// callers could do Calculator.getHistory().push(fakeEntry) and corrupt internal state from outside. Defensive copying of anything you expose 
// is the rule, not the exception.


// const Singleton = (function () { ... })();     // called once → one shared environment
// function makeInstance() { ... return {...}; }  // called per-use → fresh environment each time
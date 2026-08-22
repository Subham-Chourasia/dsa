function memoize(fn){
    let cache = new Map();
    return function (...args){
        let key = JSON.stringify(args);
        if(cache.has(key)){
            console.log("already has key-value")
            return cache.get(key);
        }

        let result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }

}

function square(x){
    return x*x;
}

const x = memoize(square);
console.log(x(2));
console.log(x(2));
console.log(x(2));
console.log(x(2));
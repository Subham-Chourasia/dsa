function curried(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
console.log(curried(1)(2)(3)(5));



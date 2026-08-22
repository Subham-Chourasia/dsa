function typeOf(elem){
    let objType = Object.prototype.toString.call(elem);
    return objType.slice(8,-1).toLowerCase();
}

console.log(typeOf(new Date()));
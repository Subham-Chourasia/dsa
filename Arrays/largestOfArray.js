function test(arr){
    if(!Array.isArray(arr) || arr.length === 0)
        return{
            lar: null,
            secLar: null
        };
    if(arr.length === 1){
        return{
            lar: arr[0],
            secLar: null
        }
    }
    let lar = arr[0];
    let secLar = null;

    for(let i = 1; i< arr.length; i++){
        if(arr[i] > lar) {
            secLar = lar;
            lar = arr[i];
        } else if(arr[i] < lar && (arr[i] > secLar || secLar === null)){
            secLar = arr[i];
        }
    }
    return {
        lar : lar,
        secLar: secLar
    }
}

console.log(test([1,2,33,33,3,4]));
function largest(arr) {
    let lar = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > lar) {
            lar = arr[i];
        }
    }
    return lar;
}
let b = [22,2,11,23,3];

console.log(largest(b));


// optimal claude

function largest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null; // or throw an Error, depending on your needs
    }

    let lar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > lar) {
            lar = arr[i];
        }
    }
    return lar;
}
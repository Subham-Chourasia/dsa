function intersectionOfArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    let tempInter = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            j++;
        } else if(arr1[i] < arr2[j]){
            i++;
        } else {
            tempInter.push(arr1[i]);
            i++;
            j++;
        }
    }
    return tempInter;
}

const x = intersectionOfArrays([2,2,3,3,4,5,5,6,6], [1,1,2,2,3,3,4,5]);
console.log(x);
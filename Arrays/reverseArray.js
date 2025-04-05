const arr = [5,3,89,53,3,2,5,8,6,3,9];
console.log(Math.ceil(arr.length/2));
    for(i=0; i< Math.floor(arr.length/2); i++){
      let temp1 = arr[i];
      arr[i] = arr[arr.length -1-i];
      arr[arr.length -1 -i] = temp1;
    }
console.log(arr);
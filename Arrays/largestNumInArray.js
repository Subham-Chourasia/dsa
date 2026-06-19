const arr = [5,3,89,53,2,5,8,6,399,9];
let max = arr[0];

for(i = 0; i< arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  }
}

console.log(max)
let before_date = new Date();

let before_date_inSec = before_date.getTime();
let sum = 0;
for (i = 0 ; i< 1000000000; i++){
    sum +=i;
}
let after_date = new Date();

let after_date_inSec = after_date.getTime();

console.log("Time taken in ms by func to execute", after_date_inSec - before_date_inSec);

// let fs = require('fs');
// fs.readFile('./file.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString()); // if not do .toString it will return it in Buffer like <Buffer 48 65 6c 6c 6f 20 41 6c 6c 20 49 20 61 6d 20 53 75 62 68 61 6d>
// })



//Alternative you can define utf-8 and then no need of .toString
let fs = require('fs');
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

let sum=0;
for (i = 0; i< 1000000000; i++){
    sum+= i;
}
console.log("sum: ", sum);



//The callback function for fs.readFile receives two parameters: callback(err, data)
//data – a Buffer (or string if you specify encoding) containing the contents of the file.
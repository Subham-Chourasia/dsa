let fs = require('fs');

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);

    for (let i = 0; i < data.length - 1; i++) {
        if (data.charAt(i) === ' ' && data.charAt(i + 1) === ' ') {
          data = data.slice(0, i) + data.slice(i + 1); // remove one space
          i--; // step back to recheck this position after removal
        }
      }

    fs.writeFile('./file.txt', data, (err)=>{
        if(err) throw err;
        console.log("written successfully");
    })
})
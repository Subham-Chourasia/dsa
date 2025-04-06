let fs = require('fs');
fs.writeFile('./file.txt', "I am Subham", (err) => {
    if(err) {
        console.log("Error occured");
    } else {
        console.log("File Written Successfully");
    }
})


//In the case of fs.writeFile, the callback function only receives one parameter, which is the error
// fs.writeFile(path, data, callback)

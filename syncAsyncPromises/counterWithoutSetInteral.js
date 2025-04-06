let a = 1;
function counter() {
    a+=1;
    let date = new Date();
    let dateInTime  = date.toLocaleTimeString();
    console.log(dateInTime);
    setTimeout(counter,1000) //calling it recursively after every one second
}
counter();

//recursive setTimeout
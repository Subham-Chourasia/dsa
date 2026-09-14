function star4(n){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 1; j <= i ; j++){
            row = row + i
        }
        console.log(row);
    }
}
star4(4);
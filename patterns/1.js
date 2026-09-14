function star1(n){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 1; j <= n ; j++){
            row = row + "*"
        }
        console.log(row);
    }
}
star1(4);
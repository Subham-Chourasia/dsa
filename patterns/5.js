function star5(n){
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = n-i; j >= 1 ; j--){
            row = row + "*";
        }
        console.log(row);
    }
}
star5(6);
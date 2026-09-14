function star7(n){
    for(let i = 1; i <= n; i++){
        let row = "";
        for(let j = 1; j <= 2*n- 1; j++){
            if( j <= n -i || j>= n + i){
                row +=" ";
            } else{
                row+="*"
            }
        }
        console.log(row);
    }
}
star7(5);
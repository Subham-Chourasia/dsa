let n = 20;
function fun(x){
    if( x > n){
        return;
    }
    console.log(x);
    fun(++x);
}
fun(1);
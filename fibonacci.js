let fib = (n, memo ={}) => {
    if(n in memo){
        return memo[n];
    }
    if (n < 2) {
        return n;
    } 
    memo[n] =  (fib(n - 1, memo) + fib(n - 2, memo));
    console.log("after ----> " + n + "  " + memo[n]);
    return memo[n];
}

console.log(fib(5));

// Fibonacci seriese - 1 , 1, 2, 3, 5, 8, 13, 21, 34
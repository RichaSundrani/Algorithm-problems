

function sumN(num, memo = {}) {
    if (num === 1) {
        return 1;
    }; 
    if(num in memo) {
        return memo[num];
    }
    // console.log(num);
    memo[num] = sumN(num - 1, memo) + num;
    return memo[num]; 
}


// function sumN(num) {
//     if (num === 1) {
//         return 1;
//     }; 

//     return sumN(num - 1) + num;
// }

console.log(sumN(5000));
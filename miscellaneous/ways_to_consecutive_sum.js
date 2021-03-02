/*
Count ways to express a number as sum of consecutive numbers
Difficulty Level : Medium
 Last Updated : 06 Sep, 2019
Given a number N, find the number of ways to represent this number as a sum of 2 or more consecutive natural numbers.

Examples:
Input :15 
Output :3
15 can be represented as:
1+2+3+4+5
4+5+6
7+8

Input :10
Output :1
10 can only be represented as:
1+2+3+4
*/

// const consecutiveSum = (num) => {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         let index = i;
//         let temp = [];
//         let sum = 0;
//         while (index <= num) {
//             sum = sum + index;
//             if (sum > 0 && sum <= num && index > 0) {
//                 temp.push(index);
//             }
//             if (sum === num) {
//                 result.push(temp);
//                 console.log(temp);
//                 temp = [];
//             }
//             if (sum > num) {
//                 temp = [];
//             }
//             index++;
//         }
//     }
//     return result.length; 
// };

var consecutiveNumbersSum = function (N) {
    var result = 0;
    var sq = Math.sqrt(N);
    var i = 1;
    while (true) {
        var eq = N - i * (i - 1) / 2;
        if (eq <= 0) break;
        if (eq % i == 0) {
            result++;
        }
        i++;
    }
    return result;
};

console.log(consecutiveNumbersSum(10));

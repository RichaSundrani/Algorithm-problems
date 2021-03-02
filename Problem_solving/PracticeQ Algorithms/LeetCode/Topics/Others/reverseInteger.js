
/*
Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:
Input: x = 123
Output: 321
Example 2:
Input: x = -123
Output: -321
Example 3:
Input: x = 120
Output: 21
Example 4:
Input: x = 0
Output: 0
Constraints:

-2^31 <= x <= 2^31 - 1

   -2147483648 <= x <= 2147483647
*/



let input = -1234;


/*  #####  Good one - works fine  ######  */

const reverse = function (x) {
    let revNum = 0, lastDigit = 0;
    while (x !== 0) {
        lastDigit = x % 10;
        x = parseInt(x / 10);
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) { return 0 }
    }
    return revNum
}

/*  #####  works fine  ######  */

// var reverse = function (x) {
//     let reversed = x.toString().split("").reverse().join("");
//     return parseInt(reversed) * Math.sign(x);
// }


console.log(reverse(input));



/*  #####  to be tested not good   ######  */
// var reverse = function (x) {
//     if (x >= -2147483648 || x <= 2147483647) {
//         x = x.toString();
//         let result = '';
//         let count = 0;
//         var sign = x.substring(0, 1);
//         if (sign == '-' || sign == '+') {
//             result = result + sign;
//             count = 1;
//         } else {
//             sign = '';
//         }
//         for (let i = x.length - 1; i >= count; i--) {
//             result = result + x[i];
//         }
//         return parseInt(result);

//     } else {
//         return 0;
//     }
// };
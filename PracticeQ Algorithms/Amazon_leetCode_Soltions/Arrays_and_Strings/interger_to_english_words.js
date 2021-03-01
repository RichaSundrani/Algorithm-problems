/*
Integer to English Words
Convert a non-negative integer num to its English words representation.

Example 1:
Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:
Input: num = 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

Constraints:

0 <= num <= 231 - 1
*/

// ____________ Working Solution _______________

const thousands = ['', 'Thousand', 'Million', 'Billion'];
const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const digits = [
    '',
    ...['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
    ...['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
];

const threeDigitsToWord = ([third, second, first]) => {
    let word = '';

    if (third !== '0') word += `${digits[third]} Hundred `;

    let next = parseInt(`${second}${first}`);
    if (next < 20) word += `${digits[next]} `;
    else word += `${tens[second]} ${digits[first]} `;

    return word.trim();
};

const numberToWords = num => {
    if (num === 0) return 'Zero';
    if (num === '') return '';

    num = '' + num; // guard against number vs string input

    let word = '', counter = 0;
    while (num.length > 0) {

        let partial = threeDigitsToWord(`00${num}`.substr(-3));

        if (partial !== '') word = `${partial} ${thousands[counter]} ${word}`;

        counter++;
        num = num.substr(0, num.length - 3);
    }
    return word.trim();
};

//___________ Alternative Working Solution _________________

let firstTwenty = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
let nums = [1000000000, 1000000, 1000, 100, 90, 80, 70, 60, 50, 40, 30, 20];
let words = ['Billion', 'Million', 'Thousand', 'Hundred', 'Ninety', 'Eighty', 'Seventy', 'Sixty', 'Fifty', 'Forty', 'Thirty', 'Twenty'];
var numberToWords = function (num) {
    if (num < 20) {
        return firstTwenty[num];
    }
    let data = '';
    for (let i = 0; i < 12; i++) {
        let counter = Math.floor(num / nums[i]);
        if (counter > 0) {
            num -= nums[i] * counter;
        }
        // ten, twenty ... ninety can be returned as it is when num is 0
        if (num === 0 && i > 3) {
            return words[i];
        }
        if (counter > 0) {
            let counterWord = i <= 3 ? numberToWords(counter) + ' ' : '';
            if (num === 0) {
                return counterWord + words[i];
            } else {
                return counterWord + words[i] + ' ' + numberToWords(num);
            }
        }
    }
    return data;
};

//_______ My Solution - Not passing all tests ________


// var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
//     'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
//     'Seventeen', 'Eighteen', 'Nineteen'];
// var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
// var bignums = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion']

// var input = 20;



// var numberToWords = function (num) {
//     if (num == 0) {
//         return ones[0];
//     }
//     let newNum = numChunks(num);
//     let numToChar = [];
//     let finalResult = '';
//     for (let i = 0; i < newNum.length; i++) {
//         let word = getWords(newNum[i], newNum[i].toString().length, '');
//         numToChar.push(word);
//     }
//     for (let i in numToChar) {
//         finalResult = (numToChar[i] + " " + bignums[i] + " " + finalResult).trim();
//     }
//     return finalResult;
// };


// var getWords = (num, digits, result) => {
//     let divident = num;
//     let quotient = 0;
//     let remainder = 0;
//     if (digits >= 1) {
//         if (digits === 3) {
//             quotient = Math.floor(divident / 100);
//             remainder = Math.floor(divident % 100);
//             result = result + ones[quotient] + ' ' + 'Hundred';
//             return getWords(remainder, digits - 1, result);
//         }
//         if (digits === 2) {
//             quotient = Math.floor(divident / 10);
//             remainder = Math.floor(divident % 10);
//             if (quotient == 1) {
//                 result = result + ' ' + ones[num];
//                 return result;
//             } else {
//                 result = result + ' ' + tens[quotient];
//                 return getWords(remainder, digits - 1, result);
//             }
//         }
//         if (digits === 1) {
//             result = result + ' ' + ones[divident];
//             return result;
//         }
//     }
// };

// var numChunks = (number) => {
//     let numChunks = [];
//     while (number > 0) {
//         let remainder = number % 1000;
//         number = Math.floor(number / 1000);
//         numChunks.push(remainder);
//     }
//     return numChunks;
// }

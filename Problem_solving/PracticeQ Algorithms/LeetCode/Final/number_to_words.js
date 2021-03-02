/*
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
*/

var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'];
var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var bignums = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion']

var input = 20;



var numberToWords = function (num) {
    if (num == 0) {
        return ones[0];
    }
    let newNum = numChunks(num);
    let numToChar = [];
    let finalResult = '';
    for (let i = 0; i < newNum.length; i++) {
        let word = getWords(newNum[i], newNum[i].toString().length, '');
        numToChar.push(word);
    }
    for (let i in numToChar) {
        finalResult = (numToChar[i] + " " + bignums[i] + " " + finalResult).trim();
    }
    return finalResult;
};


var getWords = (num, digits, result) => {
    let divident = num;
    let quotient = 0;
    let remainder = 0;
    if (digits >= 1) {
        if (digits === 3) {
            quotient = Math.floor(divident / 100);
            remainder = Math.floor(divident % 100);
            result = result + ones[quotient] + ' ' + 'Hundred';
            return getWords(remainder, digits - 1, result);
        }
        if (digits === 2) {
            quotient = Math.floor(divident / 10);
            remainder = Math.floor(divident % 10);
            if (quotient == 1) {
                result = result + ' ' + ones[num];
                return result;
            } else {
                result = result + ' ' + tens[quotient];
                return getWords(remainder, digits - 1, result);
            }
        }
        if (digits === 1) {
            result = result + ' ' + ones[divident];
            return result;
        }
    }
};

var numChunks = (number) => {
    let numChunks = [];
    while (number > 0) {
        let remainder = number % 1000;
        number = Math.floor(number / 1000);
        numChunks.push(remainder);
    }
    return numChunks;
}

// numChunks(1234567899876541);

numberToWords(input);
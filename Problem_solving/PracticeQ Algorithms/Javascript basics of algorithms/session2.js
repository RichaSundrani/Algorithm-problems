
/* ________________________________________return a string in reverse _______________________________________ */
// let getReverse = (str) => {
//     return str.split('').reverse().join('');
// }

// OR 
// let reverseStr = (str) => {
//     let revStr = '';
//     for (let char of str) {
//         revStr = char + revStr;
//     }
//     return revStr;
// }

//OR 
// let reverseStr = (str) => {
//     return str.split('').reduce((revStr, char) => {
//         return char + revStr;
//     }, '')
// }


// console.log(reverseStr("Richard"));

/* ________________________________________Validate palindrome_______________________________________ */

// let validatePalindrome = (str) => {
//     let revStr = str.split('').reverse().join('');
//     return revStr === str;
// }

// console.log(validatePalindrome("richa"));

/* ________________________________________Reverse int_______________________________________ */

// let reverseInt = (num) => {
//     const revInt = num.toString().split('').reverse().join('');
//     return parseInt(revInt) * Math.sign(num);
// };
// console.log(reverseInt(-123456));

/* ________________________________________Capitalize first char of each word_______________________________________ */

// let capitalWords = (str) => {
//     let strArr = str.toLowerCase().split(' ');
//     for (let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//     }
//     return strArr.join(' ');
// }
// console.log(capitalWords("richard parkar is awesome"));

//OR 
// let capitalWords = (str) => {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map((word) => {
//             return word[0].toUpperCase() + word.substr(1);
//         })
//         .join(' ')
// };
// console.log(capitalWords("richard parkar is awesome"));

// let capitalWords = (str) => {
//     return str.replace(/\b[a-z]/gi, (char) => {
//         return char.toUpperCase();
//     })
// };
// console.log(capitalWords("richard parkar is awesome"));

/* ________________________________________max character_______________________________________ */
// return the letter that most frequently appears in the string

// let maxCharacter = (str) => {
//     const charMap = {};
//     let max = 0;
//     let maxChar = '';
//     str.toLowerCase().split('').forEach(char => {
//         if (charMap[char]) {
//             charMap[char]++;
//         } else {
//             charMap[char] = 1;
//         }
//     });
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }
//     console.log(maxChar);
//     return maxChar;
// };
// maxCharacter("javascript");

/* ________________________________________FizBuzz_______________________________________ */

let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            // if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz: " + i);
        } else if (i % 3 === 0) {
            console.log("Fizz : " + i);
        } else if (i % 5 === 0) {
            console.log("Buzz : " + i);
        }
    }
}

fizzBuzz(50);
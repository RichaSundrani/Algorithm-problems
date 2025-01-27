/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

Example 1:
Input: num = 3
Output: "III"
Example 2:
Input: num = 4
Output: "IV"
Example 3:
Input: num = 9
Output: "IX"
Example 4:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:
1 <= num <= 3999
*/

var input = 1994;
var intToRoman = function (num) {
  let roman = '';
  // let baseNum = [1000, 500, 100, 50, 10, 5, 1];
  // let baseRoman = ["M", "D", "C", "L", "X", "V", "I"];
  let arrObject = [{
    roman: "M",
    num: 1000
  },
  {
    roman: "CM",
    num: 900
  },
  {
    roman: "D",
    num: 500
  },
  {
    roman: "CD",
    num: 400
  },
  {
    roman: "C",
    num: 100
  },
  {
    roman: "XC",
    num: 90
  },
  {
    roman: "L",
    num: 50
  },
  {
    roman: "XL",
    num: 40
  },
  {
    roman: "X",
    num: 10
  },
  {
    roman: "IX",
    num: 9
  },
  {
    roman: "V",
    num: 5
  },
  {
    roman: "IV",
    num: 4
  },
  {
    roman: "I",
    num: 1
  }
  ];
  let temp = num;
  for (let i = 0; i < arrObject.length; i++) {
    let { quetient: q, mod: m } = getModQuetient(temp, arrObject[i].num);
    console.log('baseNum : ' + arrObject[i].roman + '  quetient : ' + q + '  mod : ' + m);
    for (let j = 0; j < q; j++) {
      roman += arrObject[i].roman;
    }
    temp = m;
  }
  return roman;
}

var getModQuetient = function (divident, divisor) {
  let quetient = Math.floor(divident / divisor);
  let mod = divident % divisor;
  return { quetient, mod };
}

// console.log(intToRoman(input));


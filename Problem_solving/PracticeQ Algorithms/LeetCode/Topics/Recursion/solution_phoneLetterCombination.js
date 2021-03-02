/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number 
could represent. Return the answer in any order.A mapping of digit to letters (just like on the telephone buttons)
is given below. Note that 1 does not map to any letters.
Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:
Input: digits = ""
Output: []
Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 
Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

let ans = [];
const digitMap = new Map([
  ['1', ''],
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz']
]);
var backtrack = function(combo, digits) {
    if (digits.length === 0) {
        ans.push(combo)
    } else {
        digitMap.get(digits[0]).split("").forEach(letter => {
            backtrack(`${combo}${letter}`, digits.slice(1))
        })
    }
}
var letterCombinations = function(digits) {
    ans = [];

    if (digits.length === 1) {
        return digitMap.get(digits[0]).split("");
    }
    
    if (!digits) {
        return [];
    }

    backtrack("", digits);
    return ans;
};

console.log(letterCombinations('234'));
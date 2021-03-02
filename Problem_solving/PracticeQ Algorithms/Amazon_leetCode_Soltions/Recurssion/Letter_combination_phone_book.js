/*
Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
Return the answer in any order.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
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
//_______________ Working Solution __________________
var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }
    var len = digits.length;
    var map = new Map();
    map.set('2', 'abc'); map.set('3', 'def'); map.set('4', 'ghi'); map.set('5', 'jkl'); map.set('6', 'mno'); map.set('7', 'pqrs'); map.set('8', 'tuv'); map.set('9', 'wxyz');
    var res = [];

    function _generate(i, str) {
        // terminator
        if (i == len) {
            res.push(str);
            return;
        }
        // process
        // drill down
        var tmp = map.get(digits[i]);
        for (var r = 0; r < tmp.length; r++) {
            _generate(i + 1, str + tmp[r]);
        }
    }
    _generate(0, '');
    return res;
};

//_______________ Working Solution __________________
var letterCombinations = function (digits) {
    if (digits === '') { return []; }

    const strDigits = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    const combine = (cur, n) => cur.length === digits.length
        ? cur
        : [...strDigits[digits[n]]].flatMap(x => combine(cur + x, n + 1));

    return combine('', 0);
};
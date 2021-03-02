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

// var mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

const phoneKeys = [
    {
        num: 0,
        letters: []
    },
    {
        num: 1,
        letters: []
    },
    {
        num: 2,
        letters: ['a', 'b', 'c']
    },
    {
        num: 3,
        letters: ['d', 'e', 'f']
    },
    {
        num: 4,
        letters: ['g', 'h', 'i']
    },
    {
        num: 5,
        letters: ['j', 'k', 'l']
    },
    {
        num: 6,
        letters: ['m', 'n', 'o']
    },
    {
        num: 7,
        letters: ['p', 'q', 'r', 's']
    },
    {
        num: 8,
        letters: ['t', 'u', 'v']
    },
    {
        num: 9,
        letters: ['w', 'x', 'y', 'z']
    }
];

let input = "234";

let combinations = function (arr, idx, str) {
    if (idx < arr.length) {
        for(let i=0; i<arr[idx].length; i++){
            combinations(arr , idx+1, str+arr[idx][i]); 
        }
    } else {
        console.log(str);
    }
    // all combinations
    // console.log(str);
};

let letterCombinations = function (nums) {
    let lettersArray = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = getLetters(parseInt(nums[i]));
        if (temp.length > 0) {
            lettersArray.push(temp);
        }
    }
    return lettersArray;
}

function getLetters(num) {
    for (let i in phoneKeys) {
        if (phoneKeys[i].num === num) {
            return phoneKeys[i].letters;
        }
    }
    return [];
}

let fullArray = letterCombinations(input);
combinations(fullArray, 0, '');

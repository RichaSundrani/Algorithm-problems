/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
Examples:
s = "leetcode"
return 0.
s = "loveleetcode"
return 2.
Note: You may assume the string contains only lowercase English letters.
*/

var input = "loveleetcode";
var firstUniqChar = function (str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        let {current, ...rem} = str;
              console.log(rem.includes('l'));
    }
};

console.log(firstUniqChar(input));
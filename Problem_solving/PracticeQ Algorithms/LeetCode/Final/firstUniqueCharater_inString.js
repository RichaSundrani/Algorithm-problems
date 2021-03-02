/*
First Unique Character in a String
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
Examples:
s = "leetcode"
return 0.
s = "loveleetcode"
return 2.

Note: You may assume the string contains only lowercase English letters.
*/

var input = "leetcolde";

var firstUniqChar = function (str) {
    for (i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return i;
        }
    }
    return -1
};

console.log(firstUniqChar(input));

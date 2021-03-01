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



// ________ Working Solution __________

//loop the string, then add each char to hash map
//set each key's value as a counter
//if char already in hash map, increment counter by 1
//otherwise just set counter to 1

//loop the string again
//if current char count in hash map is less than 2, return its index
//if all counters are more than 1, return -1

var firstUniqChar = function (str) {
    if (str.length === 0) return -1

    if (str.length === 1) return 0;

    let hash = {};

    for (let char of str) {
        if (char in hash) {
            hash[char] += 1;
        } else {
            hash[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] in hash && hash[str[i]] === 1) {
            return i
        }
    }
    return -1
};

// ________ Working Solution __________

var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 0;
        }
        map[s[i]]++;
    }
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};
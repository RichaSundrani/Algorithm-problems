/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:
Input: haystack = "", needle = ""
Output: 0

Constraints:
0 <= haystack.length, needle.length <= 5 * 10^4
haystack and needle consist of only lower-case English characters.
*/

// ___________ Working Solution _________

var strStr = function (haystack, needle) {
    var nl = needle.length, hl = haystack.length;
    if (nl === 0) return 0
    for (var i = 0; i < hl; i++) {
        //console.log(h);
        if (haystack.substr(i, nl) === needle) return i
    }
    return -1
};

// __________ Faster - Working Solution _________

// var strStr = function(haystack, needle) {
//     for (var i = 0; ; i++) {
//       for (var j = 0; ; j++) {
//         if (j == needle.length) return i;
//         if (i + j == haystack.length) return -1;
//         if (needle.charAt(j) != haystack.charAt(i + j)) break;
//       }
//     }
//   };

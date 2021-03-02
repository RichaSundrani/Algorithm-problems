// Given a string s, find the length of the longest substring without repeating characters.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


inputStr = "abcabcddddbbbb";

function longestSubStr(Str){
    let inputArr = Str.split("");
    console.log(inputArr[1]);
}

longestSubStr(inputStr);
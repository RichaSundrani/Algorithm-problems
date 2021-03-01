/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.
*/

// __________ Working Solution ____________

var groupAnagrams = function (strs) {
    let hash = {}, anagrams = [];

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort();
        hash[word] = hash[word] || [];
        hash[word].push(strs[i]);
    }
    return Object.values(hash);
};

/* ############  My solution -- Working ######### */
var groupAnagrams = (strs) => {
    let anagramHash = {};
    for (let term of strs) {
        let key = term.split("").sort().join("");
        if (anagramHash[key]) {
            anagramHash[key].push(term);
        } else {
            anagramHash[key] = [term];
        }
    }
    return Object.values(anagramHash);
};
console.log(groupAnagrams(input));


/* ############ Time consuming solution ######### */
// var groupAnagrams = (strs) => {
//     let anagramHash = {};
//     let anagrams = [];
//     strs.forEach(element => {
//         let key = element.split('').sort().join();
//         if (!(key in anagramHash)) {
//             anagramHash[key] = [];
//             for (let i = 0; i < strs.length; i++) {
//                 if ((strs[i].split('').sort().join()) === key) {
//                     anagramHash[key].push(strs[i]);
//                 }
//             }
//         }
//     });
//     anagrams = Object.values(anagramHash)
//     return anagrams;
// };
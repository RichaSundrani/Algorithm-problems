/*
Partition Labels
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible
so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:
S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
*/


var input = "ababcbacadefegdehijhklij";
var partitionLabels = function (S) {
    let letterAt = {};
    let idx = 0;
    for (let i = 0; i < S.length; i++) {
        letterAt[S[i]] = i;
    }
    while (idx < S.length) {

        idx++;
    }
    return letterAt;
}


console.log(partitionLabels(input));

/* ####    Working Solution    #### */
// var partitionLabels = function (S) {
//     let result = [];
//     let index = 0;
//     let currentMax = 0;
//     let charMap = {};
//     let lastIndex = -1;

//     for (let i = 0; i < S.length; i++) {
//         charMap[S[i]] = i;
//     }
//     console.log(charMap);
//     while (index < S.length) {
//         if (currentMax < charMap[S[index]]) {
//             currentMax = charMap[S[index]];
//         }
//         if (currentMax === index) {
//             result.push(index - lastIndex);
//             lastIndex = index;
//         }
//         index++;
//     }
//     return result;
// };


/* ###  Solution 2  #### */

// var partitionLabels = function (S) {
//     let result = [];
//     let ind = 0;
//     for (let i = 1; i < S.length; i++) {
//         if (S.slice(ind, i).includes(S[i])) {
//             continue;
//         } else {
//             let isGood = true;
//             for (let y = 0; y < result.length; y++) {
//                 if (result[y].includes(S[i])) {
//                     result.splice(y);
//                     ind = result.join('').length;
//                     isGood = false;
//                 }
//             }
//             if (isGood) {
//                 result.push(S.slice(ind, i));
//                 ind = i;
//             }
//         }
//     }
//     result.push(S.slice(ind));
//     return result.map(x => x.length);
// };


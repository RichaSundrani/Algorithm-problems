/*
Positions of Large Groups
In a string s of lowercase letters, these letters form consecutive groups of the same character.
For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
A group is identified by an interval [start, end], where start and end denote the start and end 
indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
A group is considered large if it has 3 or more characters.
Return the intervals of every large group sorted in increasing order by start index.
Example 1:
Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.
Example 2:
Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.
Example 3:
Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
Example 4:
Input: s = "aba"
Output: []
 
Constraints:

1 <= s.length <= 1000
s contains lower-case English letters only.
*/

/**
 * @param {string} s
 * @return {number[][]}
 */
let input = "abbxxxxzzy";


var largeGroupPositions = function(s) {
    const result = []
    let count = 0
    let array = []
    
    for(let i=0; i<s.length; i++) {
        const current = s[i]
        const next = s[i+1]
        
        if(current !== next && count >= 2) {
            array.push(i)
            result.push(array)
            count = 0
            array = []
        }
        
        if(current !== next && count < 2) {
            count = 0
        }
        
        if(current === next) {
            count++
        }
        
        if(count === 2) {
          array.push(i-1)
        }
    }
    
    return result
  };


console.log(largeGroupPositions(input));

// OR 
// let largeGroupPositions = function (str) {
//     let i = 0, j = 1, count = 0, results = [];

//     if (str.length < 3) {
//         return results;
//     }

//     while (j <= str.length) {
//         if (str[i] === str[j]) {
//             console.log(`${str[i]}  === ${str[j]}`); 
//             count++;
//             j++;
//         } else {
//             console.log(count, i, j);
//             if (count >= 2) results.push([i, j - 1])
//             count = 0;
//             if ((j - i) <= 1) j++;
//             i = j - 1;
//         }
//     }
//     return results;
// };
// Given a list of words and two words word1 and word2, 
// return the shortest distance between these two words in the list.
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
// Input: word1 = “coding”, word2 = “practice”
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1
// Note: You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

// var words = ["hello", "hi", "richard", "parker", "richa", "everest", "richard", "alaska"]
var words = ["a", "c", "b", "a"]

var shortestDistance = function(words, word1, word2) {
    let distance;
    let index1 = [];
    for (i in words) {
        if (words[i] === word1) {
            index1.push(Math.abs(i - words.indexOf(word2)));
        }
    }
    return Math.min.apply(Math, index1);
};

// console.log(shortestDistance(words, "richard", "everest"));

console.log(shortestDistance(words, "b", "a"));


// if (words.indexOf(word1) != -1) {
//     let index1 = words.indexOf(word1);
//     let index2 = words.indexOf(word2);
//     let distance = index2 - index1;
//     if (words.indexOf(word1, index1) != -1) {
//         if (index2 - words.indexOf(word1, index1) < distance) {
//             distance = index2 - words.indexOf(word1, index1);
//         }
//     }
//     return distance;
// }
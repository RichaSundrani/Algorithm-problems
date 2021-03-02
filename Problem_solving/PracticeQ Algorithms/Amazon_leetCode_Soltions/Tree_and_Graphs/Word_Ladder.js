/*
Word Ladder
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words such that:
The first word in the sequence is beginWord.
The last word in the sequence is endWord.
Only one letter is different between each adjacent pair of words in the sequence.
Every word in the sequence is in wordList.
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with 5 words.
Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no possible transformation.

Constraints:
1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the strings in wordList are unique.
*/

// ______________ Working Solution ______________
var ladderLength = function (beginWord, endWord, wordList) {
    let dic = new Set(wordList);
    if (!dic.has(endWord)) return 0;
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let visited = new Set();
    visited.add(beginWord);
    let bfs = [beginWord, null];
    let res = 0;

    while (bfs.length) {
        let n = bfs.shift();
        if (n === endWord) {
            return res + 1;
        }
        if (n === null) {
            if (!bfs.length) return 0;
            bfs.push(null);
            res++;
        } else {
            for (let i = 0; i < n.length; i++) {
                for (let j = 0; j < alphabets.length; j++) {
                    let temp = n.substring(0, i) + alphabets[j] + n.substring(i + 1, n.length);
                    if (dic.has(temp) && !visited.has(temp)) {
                        bfs.push(temp);
                        visited.add(temp);
                    }
                }
            }
        }
    }
    return 0;
};
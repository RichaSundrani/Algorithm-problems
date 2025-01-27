/*
Word Ladder II
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
Example 2:
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

// ___________ Working Solution _______________
var findLadders = function (beginWord, endWord, wordList) {
    var wordSet = new Set(wordList);
    var wordNext = {};
    var distance = {};
    var result = [];

    bfs(beginWord, endWord, wordSet, wordNext, distance);
    dfs(beginWord, endWord, result, wordNext, distance, []);

    return result;
};

var dfs = function (word, endWord, result, wordNext, distance, path) {
    var neighbors = wordNext[word] || [];

    path.push(word);

    if (word === endWord) {
        result.push(Array.from(path));
    } else {
        for (var i = 0; i < neighbors.length; i++) {
            if (distance[word] + 1 === distance[neighbors[i]]) {
                dfs(neighbors[i], endWord, result, wordNext, distance, path);
            }
        }
    }

    path.pop();
};

var bfs = function (beginWord, endWord, wordSet, wordNext, distance) {
    var queue = [];
    var findLast = false;
    var neighbors = [];
    var dis = 0;
    var word = '';
    var len = 0;
    var i = 0;

    queue.push(beginWord);
    distance[beginWord] = 0;

    while (len = queue.length) {
        findLast = false;

        for (i = 0; i < len; i++) {
            word = queue.shift();
            dis = distance[word];
            neighbors = getNeighbors(word, wordSet);
            if (!wordNext[word]) wordNext[word] = [];

            for (var j = 0; j < neighbors.length; j++) {
                wordNext[word].push(neighbors[j]);

                if (distance[neighbors[j]] === undefined) {
                    distance[neighbors[j]] = dis + 1;

                    if (neighbors[j] === endWord) {
                        findLast = true;
                    } else {
                        queue.push(neighbors[j]);
                    }
                }
            }
        }
        if (findLast) break;
    }
};

var getNeighbors = function (word, wordSet) {
    var start = 'a'.charCodeAt(0);
    var len = word.length;
    var str = '';
    var res = [];

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < 26; j++) {
            str = word.substr(0, i) + String.fromCharCode(j + start) + word.substr(i + 1);
            if (wordSet.has(str)) res.push(str);
        }
    }

    return res;
};
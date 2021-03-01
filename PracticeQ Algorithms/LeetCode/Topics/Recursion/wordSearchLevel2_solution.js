/*
Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.
Each word must be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/

let board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
let words = ["oath", "pea", "eat", "rain"]
var findWords = function (board, words) {
    var root = buildTrie(words);
    var result = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            searchWord(result, root, board, i, j);
        }
    }
    return result;
};

function searchWord(result, root, board, i, j) {
    if (root.word) {
        result.push(root.word);
        root.word = null;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return;
    }
    if (board[i][j] === '#' || !root.children[board[i][j]]) {
        return;
    }
    var ch = board[i][j];
    board[i][j] = '#';
    searchWord(result, root.children[ch], board, i + 1, j);
    searchWord(result, root.children[ch], board, i - 1, j);
    searchWord(result, root.children[ch], board, i, j + 1);
    searchWord(result, root.children[ch], board, i, j - 1)
    board[i][j] = ch;
}


function buildTrie(words) {
    var root = new TrieNode();
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var node = root;
        for (var j = 0; j < word.length; j++) {
            var ch = word[j];
            node.children[ch] = node.children[ch] || new TrieNode();
            node = node.children[ch];
        }
        node.word = word;
    }
    return root;
}
class TrieNode {
    constructor() {
        this.word = null;
        this.children = {};
    }
}

console.log(findWords(board, words));
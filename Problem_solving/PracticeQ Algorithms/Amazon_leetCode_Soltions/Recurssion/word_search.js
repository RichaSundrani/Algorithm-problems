/*
Word Search
Given an m x n board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 200
1 <= word.length <= 103
board and word consists only of lowercase and uppercase English letters.
*/

// ______________ Working Solution ________________
var exist = function (board, word) {
    var hash = {};

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (dfs(board, word, 0, i, j)) {
                return true;
            }
        }
    }

    function dfs(board, word, w, i, j) {
        var key = i + ',' + j;
        if (hash[key]) {
            return false;
        }

        if (w === word.length) {
            return true;
        }

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        }

        var result = false;

        if (word[w] === board[i][j]) {
            hash[key] = true;

            result = dfs(board, word, w + 1, i + 1, j) || dfs(board, word, w + 1, i - 1, j) || dfs(board, word, w + 1, i, j + 1) || dfs(board, word, w + 1, i, j - 1);

            hash[key] = false;
        }

        return result
    }

    return false;
};
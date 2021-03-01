/*
Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.
Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
Example 1:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:
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

// ________________ Working Solution ____________
var findWords = function (board, words) {

    if (words.length <= 0) return [];
    var result = [];

    recurse(board, words, 0, result);
    return result;
};


var recurse = function (board, words, index, result) {
    if (index < words.length) {
        var temp = duplicate(board);
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == words[index].charAt(0)) {
                    var exists = helper(board, i, j, 0, words[index])
                    if (exists) {
                        if (!result.includes(words[index])) {
                            result.push(words[index]);
                        }
                    }
                }
            }
        }

        recurse(temp, words, index + 1, result);
    }
}

var duplicate = function (board) {
    var temp = [];

    for (let i = 0; i < board.length; i++) {
        var t = []
        for (let j = 0; j < board[0].length; j++) {
            t.push(board[i][j]);
        }
        temp.push(t);
    }
    return temp;
}

var helper = function (board, i, j, index, word) {
    if (index >= word.length) return true;

    if (i < 0 ||
        j < 0 ||
        i >= board.length ||
        j >= board[0].length ||
        board[i][j] == 'X' ||
        word.charAt(index) != board[i][j]
    ) return false;

    var temp = board[i][j]

    board[i][j] = 'X';

    if (helper(board, i + 1, j, index + 1, word) ||
        helper(board, i - 1, j, index + 1, word) ||
        helper(board, i, j - 1, index + 1, word) ||
        helper(board, i, j + 1, index + 1, word)) {
        return true;
    }

    board[i][j] = temp;
    return false;

}


// ______________ Working Solution ________________
var findWords = function (board, words) {
    const filteredWords = words.filter(word => {
        let result = false;
        for (let row = 0; row < board.length; row++) {
            let found = false;
            for (let col = 0; col < board[0].length; col++) {
                found = findWord(board, word, 0, row, col);
                if (found) {
                    result = true;
                    break;
                }
            }
            if (found) {
                break;
            }
        }
        return result;
    });

    return filteredWords;
};

const findWord = (board, word, pos, row, col) => {
    if (row < 0 ||
        row >= board.length ||
        col < 0 ||
        col >= board[0].length ||
        board[row][col] !== word[pos] ||
        board[row][col] === '#'
    ) {
        return false;
    }

    if (pos === word.length - 1) {
        return true;
    }

    const value = board[row][col];
    board[row][col] = '#';

    const result = findWord(board, word, pos + 1, row + 1, col) ||
        findWord(board, word, pos + 1, row - 1, col) ||
        findWord(board, word, pos + 1, row, col + 1) ||
        findWord(board, word, pos + 1, row, col - 1);

    board[row][col] = value;


    return result;

}
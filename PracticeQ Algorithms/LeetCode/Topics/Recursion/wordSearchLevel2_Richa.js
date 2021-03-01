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

let board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]];
let words = ["oath", "pea", "eat", "rain"];

var findWords = function (wordBoard, words) {
    let result = [];
    for (let i in words) {
        if (wordSearch(wordBoard, words[i])) {
            result.push(words[i]);
            console.log(`Found : ${words[i]}`);
        } else {
            console.log(`Not Found : ${words[i]}`);
        }
    }
    return result;
};
// console.log(findWords(board, words));

var wordSearch = function (letterBord, searchTerm) {
    for (let i = 0; i < letterBord.length; i++) {
        if (letterBord[i].includes(searchTerm[0][0])) {
            console.log(`First Letter found at x = ${i} and y = ${letterBord[i].indexOf(searchTerm[0][0])}`);
            if (searchTerm.length > 1) {
                if (findAdjacent(i, letterBord[i].indexOf(searchTerm[0][0]), letterBoard, searchTerm, 1)) {
                    console.log("Stack " + searchTerm[0] + " at " + i + " " + j);
                    return true;
                }
            } else {
                console.log("Stack " + searchTerm[0] + " at " + i + " " + j);
                return true;
            }
        }
    }
    return false;
}


function findAdjacent(x, y, cw, sw, n) {
    let temp = [];
    if ((x - 1) >= 0) {
        temp.push({ x: x - 1, y: y });
    }
    if ((y - 1) >= 0) {
        temp.push({ x: x, y: y - 1 });
    }
    if ((x + 1) < cw.length) {
        temp.push({ x: x + 1, y: y })
    }
    if ((y + 1) < cw[x].length) {
        temp.push({ x: x, y: y + 1 })
    }
    for (e in temp) {
        let xp = temp[e].x;
        let yp = temp[e].y;
        if (cw[xp][yp] == sw[n]) {
            if (n + 1 < sw.length) {
                if (findAdjacent(xp, yp, cw, sw, n + 1)) {
                    console.log("Stack " + sw[n] + " at " + xp + " " + yp);
                    return true;
                }
            } else {
                console.log("Stack " + sw[n] + " at " + xp + " " + yp);
                return true;
            }
        }
    };
}
/*
Word Search
Given an m x n board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

*/

var input = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];
var word = "Richa";

var wordSearch = function (letterBoard, searchTerm, counter) {
    let match = '';
    let firstLetter = searchTerm[0];
    for (let i = counter; i < letterBoard.length; i++) {
        // check if first letter is in the sub array 
        if ((letterBoard[i].includes(firstLetter.toLowerCase())) || (letterBoard[i].includes(firstLetter.toUpperCase()))) {
            for (let j = 0; j < letterBoard[i].length; j++) {
                if (letterBoard[i][j] === firstLetter) {
                    match = letterBoard[i][j];
                    console.log(firstLetter + " Coords : " + i + " " + j);
                    let k  = findAdjacent(i, j, searchTerm, letterBoard, match, 1);
                    if (k == searchTerm) {
                        return k;
                    }
                }
            }
            return match;
        }
    }
};

function findAdjacent(x, y, searchTerm, letterBoard, matchWord, counter) {
    if ((x - 1) > 0 && (letterBoard[x - 1][y] === searchTerm[counter])) {
        matchWord = matchWord.concat(letterBoard[x - 1][y]);
        if ((counter + 1) < searchTerm.length) {
            return findAdjacent(x - 1, y, searchTerm, letterBoard, matchWord, counter + 1);
        } else {
            return matchWord;
        }
    }
    if ((y - 1) > 0 && (letterBoard[x][y - 1] === searchTerm[counter])) {
        matchWord = matchWord.concat(letterBoard[x][y - 1]);
        if ((counter + 1) < searchTerm.length) {
            return findAdjacent(x, y - 1, searchTerm, letterBoard, matchWord, counter + 1);
        } else {
            return matchWord;
        }
    }
    if ((x + 1) < letterBoard.length && (letterBoard[x + 1][y] === searchTerm[counter])) {
        matchWord = matchWord.concat(letterBoard[x + 1][y]);
        if ((counter + 1) < searchTerm.length) {
            return findAdjacent(x + 1, y, searchTerm, letterBoard, matchWord, counter + 1);
        } else {
            return matchWord;
        }
    }
    if ((y + 1) < letterBoard[x].length && (letterBoard[x][y + 1] === searchTerm[counter])) {
        matchWord = matchWord.concat(letterBoard[x][y + 1]);
        if ((counter + 1) < searchTerm.length) {
            return findAdjacent(x, y + 1, searchTerm, letterBoard, matchWord, counter + 1);
        } else {
            return matchWord;
        }
    }
    console.log("foo");
}

console.log(wordSearch(input, word, 0));




;
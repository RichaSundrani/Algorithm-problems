/*
Word Search
Given an m x n board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

*/

var input = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
var word = "ABCCED"; 

var wordSearch = function (letterBoard, searchTerm, counter){
    let firstLetter = searchTerm[0];
    for(let i=counter; i<letterBoard.length; i++){
        console.log((letterBoard[i].includes(firstLetter)));
        // check if first letter is in the sub array 
        if((letterBoard[i].includes(firstLetter.toLowerCase())) || (letterBoard[i].includes(firstLetter.toUpperCase()))){
            console.log("found " + firstLetter + " Some logic");
        } else {
            wordSearch(letterBoard, word, counter+1);
        }
    }
};

console.log(wordSearch(input, word, 0))
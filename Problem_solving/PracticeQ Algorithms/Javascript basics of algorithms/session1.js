/* ________________________________________Longest word in sentence _______________________________________ */


let longestWord = (sen) => {
    // create a filtered array first 
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+ /g);
    // sort the words by length 
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    // If multiple long words, put them into array 
    const longestWordArr = sorted.filter((word) => sorted[0].length == word.length);
    // check if there is only one word in the array then return the word itself 
    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
};

let sent1 = "Hello everyone This is Richard Parkar, I hope everybody is okay!"
// console.log(longestWord(sent1));

/* ________________________________________Array to chunks_______________________________________ */

// Solution 1
// let chunkArray = (nums, len) => {
//     const chunkedArray = [];
//     // while (index < nums.length) {
//     //     // slice out from the index and index + chunk length
//     //     chunkedArray.push(nums.slice(index, index + len));
//     //     index = index + len;
//     // }
//     // OR 
//     while (nums.length > 0) {
//         chunkedArray.push(nums.splice(0, len));
//     }
//     return chunkedArray;
// }

// Solution 2 - incomplete
// let chunkArray = (nums, len) => {
//     const chunkedArray = [];
//     // loop through the array 
//     nums.forEach(element => {
//         element
//     });
// }
// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(chunkArray(input, 2));

/* ________________________________________chunked array to flat Array _______________________________________ */

let flatArray = (chunkArr) => {
    // Solution 1
    // return chunkArr.reduce((a, b) => a.concat(b));

    // Solution 2
    // return [].concat.apply([], chunkArr);

    // Solution 3
    return [].concat(...chunkArr);

};
let input = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]];
// console.log(flatArray(input));

/* ________________________________________chunked array to flat Array _______________________________________ */

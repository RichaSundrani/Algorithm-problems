let sent1 = "Hello everyone This is Richardan Parkar, I hope everybody is okay!";

let longestWord = (sen) => {
    let newArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    let sorted = newArr.sort((a, b) => b.length - a.length);
    let results = sorted.filter((word) => sorted[0].length == word.length);
    if (results.length === 1) {
        return results[0];
    } else {
        return results;
    }
};

console.log(longestWord(sent1));

// _____________ Working Solution _____________
var reorderLogFiles = function (logs) {
    var digarr = [];
    var letarr = [];

    const removeIdentifier = (log) => log.slice(log.indexOf(" ") + 1);

    for (log of logs) {
        (/\d/.test(removeIdentifier(log))) ? digarr.push(log) : letarr.push(log);
    }
    compare = (a, b) => {
        var n = removeIdentifier(a).localeCompare(removeIdentifier(b));
        return (n === 0) ? a.localeCompare(b) : n;
    }
    return [...letarr.sort(compare), ...digarr];
};




// _______________ 2. Alternate - Working Solution _____________
var reorderLogFiles = function (logs) {
    const alphaLogs = [];
    const digiLogs = [];
    const sortedLogs = [];

    for (let i = 0; i < logs.length; i++) {

        let logArray = logs[i].split(" ");

        if (/[a-z]/.test(logArray[1])) {
            alphaLogs.push(logArray);

        } else {
            digiLogs.push(logArray.join(" "));

        }

    };
    alphaLogs.sort(function (a, b) {

        let tailOfA = a.slice(1).join(" ");
        let tailOfB = b.slice(1).join(" ");
        let combinedA = [a[0], tailOfA];
        let combinedB = [b[0], tailOfB];

        if (combinedA[1] == combinedB[1]) {

            return combinedA[0].localeCompare(combinedB[0])

        } else {

            return combinedA[1].localeCompare(combinedB[1])
        }

    });

    for (let log of alphaLogs) {
        sortedLogs.push(log.join(" "));
    }

    return sortedLogs.concat(digiLogs)

};



/*
Reorder Log Files
You are given an array of logs.
Each log is a space-delimited string of words, where the first word is the identifier.
There are two types of logs:
Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:
The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.
Example 1:
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
Example 2:
Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
Constraints:

1 <= logs.length <= 100
3 <= logs[i].length <= 100
All the tokens of logs[i] are separated by a single space.
logs[i] is guaranteed to have an identifier and at least one word after the identifier.
*/
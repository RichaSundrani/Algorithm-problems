/*
Given two strings ‘X’ and ‘Y’, find the length of the longest common substring. 
Examples : 
Input : X = “GeeksforGeeks”, y = “GeeksQuiz” 
Output : 5 
Explanation:
The longest common substring is “Geeks” and is of length 5.
Input : X = “abcdxyz”, y = “xyzabcd” 
Output : 4 
Explanation:
The longest common substring is “abcd” and is of length 4.
Input : X = “zxabcdezy”, y = “yzabcdezx” 
Output : 6 
Explanation:
The longest common substring is “abcdez” and is of length 6
*/

let input1 = 'tomandjerry';
let input2 = 'likecheesejerry';

let longestSubstr = (str1, str2) => {
    let result = '';
    let str = '';
    let maxlength = 0;
    for (let i = 0; i < str1.length; i++) {
        str = str + str1[i];
        if (str2.includes(str)) {
            result = str;
            if (maxlength < result.length) {
                maxlength = result.length;
               // console.log(result);
            }
        } else {
                str = '';
        }
    }
    return maxlength;
};

console.log(longestSubstr(input1, input2));

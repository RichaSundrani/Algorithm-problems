/*
Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "()[]{}"
Output: true
Example 3:
Input: s = "(]"
Output: false
Example 4:
Input: s = "([)]"
Output: false
Example 5:
Input: s = "{[]}"
Output: true
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'
*/


var input = "{[]}";
var validParantheses = function (parantheses) {
    parantheses = parantheses.split('');
    let left, right;
    let balanced = true;
    if ((parantheses.length) % 2 == 0) {
        for (let i = 0; i < (parantheses.length) / 2; i++) {
            left = parantheses[i];
            right = parantheses[(parantheses.length - 1) - i];
            if ((left == '{') && (right != '}')) {
                console.log("Invalid - " + "Opening : " + left + " Closing : " + right);
            } else if((left == '[') && (right != ']')){
                console.log("Invalid - " + "Opening : " + left + " Closing : " + right);
            } else if((left == '(') && (right != ')')){
                console.log("Invalid - " + "Opening : " + left + " Closing : " + right);
            } else {
                console.log("Matching - " + "Opening : " + left + " Closing : " + right);
            }
        }
    } else {
        console.log("Invalid! -- odd no of brackets!")
    }
};

console.log(validParantheses(input));
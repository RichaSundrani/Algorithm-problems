
// _____________ Working Solution _________

var isValid = function (s) {
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    const stack = [];
    for (const paran of s) {
        if (obj.hasOwnProperty(paran)) {
            stack.push(paran)
        } else {
            const closeParan = stack.pop();
            if (paran !== obj[closeParan]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// _________ Alternate Solution ____________

var map = {
    "(": ")",
    "[": "]",
    "{": "}"
}
var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var el = s[i];

        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

/*
Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
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
1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/
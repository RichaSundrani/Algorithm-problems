/*
Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
Input: n = 1
Output: ["()"]
Constraints:

1 <= n <= 8
*/

// _____________ Working Solution _______________
var generateParenthesis = function (n) {
    var res = [];
    if (n < 1) return res;
    generate(res, '', n, n);
    return res;
};

var generate = function (res, str, ll, rr) {
    if (ll || rr) {
        if (rr > ll) generate(res, str + ')', ll, rr - 1);
        if (ll) generate(res, str + '(', ll - 1, rr);
    } else {
        res.push(str);
    }
};



// _____________ Working Solution _______________
function parens(left, right, str, result) {
    if (left === 0 && right === 0) {
        result.push(str);
    }
    if (left > 0) {
        parens(left - 1, right + 1, str + "(", result);
    }
    if (right > 0) {
        parens(left, right - 1, str + ")", result);
    }
}
var generateParenthesis = function (n) {
    var result = [];
    var str = "";
    parens(n, 0, "", result);
    return result;
};
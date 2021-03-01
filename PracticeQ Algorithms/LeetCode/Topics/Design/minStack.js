/*
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

var tasks = ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"];
var inputs = [[], [-2], [0], [-3], [], [], [], []];


var MinStack = function () {
    this.minstack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.minstack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.minstack[this.minstack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(...this.minstack);
};


let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
let foo1 = minStack.getMin(); // return -3
minStack.pop();
let foo2 = minStack.top();    // return 0
let foo3 = minStack.getMin(); // return -2


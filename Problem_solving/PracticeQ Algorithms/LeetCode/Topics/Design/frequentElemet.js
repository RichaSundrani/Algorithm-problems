/*
Input: 
["FreqStack","push","push","push","push","push","push","pop","push","pop","push","pop","push","pop","push","pop","pop","pop","pop","pop","pop"]
[[],[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]
*/
var FreqStack = function () {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let freqStatck = [];

    for (let i = 0; i < this.stack.length; i++) {
        let elementFound = false;
        if (freqStatck[this.stack[i]]) {
            freqStatck[this.stack[i]].count += 1;
            freqStatck[this.stack[i]].index = i;
        } else {
            let temp = { 'stackEle': this.stack[i], 'count': 1, 'index': i };
            freqStatck[this.stack[i]] = temp;
        }
    }

    freqStatck = freqStatck.sort((a, b) => {
        if (a.count == b.count) {
            return a.index - b.index;
        } else {
            return a.count - b.count;
        }
    });

    freqStatck = freqStatck.filter((e) => {
        return e != undefined;
    });

    itemToRemove = freqStatck[freqStatck.length - 1];
    this.stack.splice(itemToRemove.index, 1);
    return itemToRemove.stackEle;

};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * 
 * ["FreqStack","push","push","push","push","push","push","pop","push","pop","push","pop","push","pop","push","pop","pop","pop","pop","pop","pop"]
[[],[4],[0],[9],[3],[4],[2],[],[6],[],[1],[],[1],[],[4],[],[],[],[],[],[]]
*/

var obj = new FreqStack();
obj.push(4);
obj.push(0);
obj.push(9);
obj.push(3);
obj.push(4);
obj.push(2);
let foo = obj.pop();
obj.push(6);
foo = obj.pop();
obj.push(1);
foo = obj.pop();
obj.push(1);
foo = obj.pop();
obj.push(4);
foo = obj.pop();
foo = obj.pop();
foo = obj.pop();
foo = obj.pop();
foo = obj.pop();
foo = obj.pop();

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

// var input = [1, 2, 2, 3, 4, 4, 3, null, 6, 7, 8, 8, 7, 6, null];
var input = [1, 2, 2, null, 3, null, 3];
var isSymmetric = function (root) {
    let isMirror = (arr) => {
        let i = 0;
        while (i < arr.length - (i + 1)) {
            if (arr[i] != arr[arr.length - (i + 1)]) {
                return false;
            }
            i++;
        }
        return true;
    }
    let level = 0;
    while (root.length > 0) {
        let temp = root.splice(0, Math.pow(2, level));
        if (!isMirror(temp)) {
            return false;
        }
        level++;
    }
    return true;

};

let isMirror = (arr) => {
    let i = 0;
    while (i < arr.length - (i + 1)) {
        if (arr[i] != arr[arr.length - (i + 1)]) {
            return false;
        }
        i++;
    }
    return true;
};

console.log(isSymmetric(input));
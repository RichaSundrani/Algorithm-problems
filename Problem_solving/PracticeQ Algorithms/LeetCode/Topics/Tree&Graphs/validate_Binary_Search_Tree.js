/*
Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Input: root = [2,1,3]
Output: true
*/
var input = [5, 1, 4, null, null, 3, 6];


// ######### Solution ########## 
var isValidBST = function (root, min = -Infinity, max = Infinity) {
    console.log("root.val " + root.val + "  root.left  " + root.left + " root.right " + root.right);
    if (root === null)
        return true;
    if (root.val <= min || root.val >= max)
        return false;
    return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val)
};


isValidBST(input, min = -Infinity, max = Infinity);


// var isValidBST = function (root) {
//     let leftChild = 0;
//     let rightChild = 0;
//     let flag = true;
//     for (let i = 0; i < root.length; i++) {
//         if (i === 0) {
//             leftChild = leftChild + 1;
//             rightChild = rightChild + 2;
//         } else {
//             leftChild = leftChild + 2;
//             rightChild = rightChild + 2;
//         }
//         if ((root[i] < root[leftChild]) || (root[i] > root[rightChild])) {
//             flag = false;
//             return flag;
//         }
//     }
//     return flag;
// };
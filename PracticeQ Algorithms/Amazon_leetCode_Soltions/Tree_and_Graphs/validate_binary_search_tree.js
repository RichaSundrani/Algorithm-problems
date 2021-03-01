/*
Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
Input: root = [2,1,3]
Output: true
Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:
The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/

// __________ Working Solution ___________

var isValidBST = function (root) {
    return validateBst(root, -Infinity, Infinity)
};

function validateBst(root, minValue, maxValue) {
    if (root == null) return true;
    if (root.val >= maxValue || root.val <= minValue) return false;
    return validateBst(root.right, root.val, maxValue) &&
        validateBst(root.left, minValue, root.val)
}

//_________ Working Solution ________
var isValidBST = function (root) {
    if (!root) return true;
    return validate(root, null, null);
};

function validate(node, min, max) {
    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;

    // everything from the left should be less than current node,
    // we do not check min here
    if (node.left && !validate(node.left, min, node.val)) return false;
    // everything from the right should be greater than current node,
    // we do not check max here
    if (node.right && !validate(node.right, node.val, max)) return false;

    return true;
}
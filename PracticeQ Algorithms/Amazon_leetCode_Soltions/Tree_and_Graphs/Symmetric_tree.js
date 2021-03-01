/*
Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Follow up: Solve it both recursively and iteratively.
*/

// ____________ Working Solution _____________
var isSymmetric = function (root) {
    if (!root) return true;
    return helper(root.left, root.right);
};

var helper = function (p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
    if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
    return true;
};

// __________ Working Solution __________________
var isSymmetric = function (root) {
    if (root === null)
        return true;
    return isSymetricAux(root.left, root.right);
};

var isSymetricAux = function (root1, root2) {
    if (root1 === null)
        return root2 === null;

    if (root2 === null || root1.val !== root2.val) {
        return false;
    }

    return isSymetricAux(root1.left, root2.right) && isSymetricAux(root1.right, root2.left);
}
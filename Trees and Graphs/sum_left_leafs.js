


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root, sum = 0) {
    if(!root) {
        return sum;
    }
    
    if(root.left && root.left.left === null && root.left.right === null ) {
        sum = sum + root.left.val;
    }  
    console.log(sum, root.left);
    sum = sumOfLeftLeaves(root.left , sum);
    console.log(sum, root.right);
    return sumOfLeftLeaves(root.right , sum);   
};
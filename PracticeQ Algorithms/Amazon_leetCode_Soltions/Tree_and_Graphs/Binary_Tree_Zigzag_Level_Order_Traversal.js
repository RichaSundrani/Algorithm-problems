/*
Binary Tree Zigzag Level Order Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values.
(ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
 */

// ________ Working Solution _____________
var zigzagLevelOrder = function (root) {
    if (!root) return []
    const queue = [[root, 0]]
    const result = []
    while (queue.length) {
        let [node, depth] = queue.shift()
        result[depth] ? result[depth].push(node.val) : result[depth] = [node.val]
        if (node.left) queue.push([node.left, depth + 1])
        if (node.right) queue.push([node.right, depth + 1])
    }
    return result.map((row, idx) => idx % 2 ? row.reverse() : row)
};

// _____________ Working Solution ______________
var zigzagLevelOrder = function (root) {
    let results = [];
    const lot = (root, level) => {
        if (!root) return;

        if (results[level]) results[level].push(root.val);
        else results[level] = [root.val];

        lot(root.left, level + 1);
        lot(root.right, level + 1);
    }
    lot(root, 0);
    return results.map((b, i) => (i % 2) ? b.reverse() : b);
};
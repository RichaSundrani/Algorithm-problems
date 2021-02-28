const BinaryTree = require('./binary_search_tree');

const tree1 = new BinaryTree();
tree1.insert(15);
tree1.insert(10);
tree1.insert(20);
tree1.insert(8);
tree1.insert(12);
tree1.insert(25);
tree1.insert(18);
// tree1.breadthFirstTraversal();
// tree1.depthFirstTraveralPreOrder();
// tree1.depthFirstTraveralPreOrder();
// console.log(tree1.breadthFirstSearch(12));

let findSumPairNodes = (targetSum, tree) => {
    let queue = [tree.root];
    while (queue.length != 0) {
        let currentNode = queue.shift();
        if(currentNode.value > targetSum) {
            return null;
        }
        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }
        const foundNode = tree.breadthFirstSearch(targetSum - currentNode.value);
        if(foundNode !== null && (foundNode.value !== currentNode.value)){
            return [currentNode.value, foundNode.value];
        }
    }
    return null;
}
console.log(findSumPairNodes(30, tree1));
console.log(findSumPairNodes(55, tree1));
// Given BST, find the pairs whose sum is equal to given number; 
const BinaryTree = require('./binary_search_tree');

let tree = new BinaryTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(16);
tree.insert(25);

// console.log(tree.bfs(25));
// console.log(tree.bfs(8));
// console.log(tree.bfs(12));
// console.log(tree);
/*
                    15
                  /     \
                10      20
               / \     /  \
              8  12   16  25    */


// console.log(tree.findSumNodes(26));
tree.printDFSPreOrder();
tree.printDFSPostOrder();
console.log("break");
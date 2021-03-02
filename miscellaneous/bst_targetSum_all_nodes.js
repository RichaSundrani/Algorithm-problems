const BinaryTree = require('./binary_search_tree');

const tree1 = new BinaryTree();
tree1.insert(15);
tree1.insert(10);
tree1.insert(20);
tree1.insert(8);
tree1.insert(12);
tree1.insert(25);
tree1.insert(18);

// let targetSumNodes = (targetSum, startNode, memo = {}) => {
//     if (targetSum in memorize) {
//         memorize[targetSum];
//     }
//     if (targetSum === 0) {
//         return [];
//     }
//     if (targetSum < 0) {
//         return;
//     }
// }
console.log(targetSumNodes(30, tree1.root));
// console.log(targetSumNodes(55, tree1.root));
console.log("tree1");

// const howSum = (targetSum, numbers, memorize = {}) => {
//     if (targetSum in memorize) {
//         memorize[targetSum];
//     }
//     if (targetSum === 0) {
//         return [];
//     }
//     if (targetSum < 0) {
//         return null;
//     }
//     for (let num of numbers) {
//         const remainderResult = howSum(targetSum - num, numbers);
//         // console.log(`remainderResult -- ${remainderResult}`);
//         if (remainderResult !== null) {
//             memorize[targetSum] = [...remainderResult, num];
//             // console.log(memorize[targetSum]);
//             return memorize[targetSum];
//         }
//     }
//     memorize[targetSum] = null;
//     return memorize[targetSum];
// };

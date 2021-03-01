/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:
Input: lists = []
Output: []
Example 3:
Input: lists = [[]]
Output: []
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return [];
    }
    let finalList = lists[0]; // [1,4,5]
    for (let i = 1; i < lists.length; i++) {  // i=1 => [1,3,4]
        let currentNode = lists[i];  // 1
        while (currentNode) {
            insertNode(currentNode, finalList);
            currentNode = currentNode.next;
        }
    }
    return finalList;
};

const insertNode = (node, list) => {
    let currentNode = list;
    let previousNode = null;
    while (currentNode) {
        if (node.val > currentNode.val) {
            if (currentNode.next === null) {
                currentNode.next = node;
                node.next = null;
                return;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        if (node.val <= currentNode.val) {
            if (previousNode !== null) {
                previousNode.next = node;
            }
            node.next = currentNode;
            return;
        }
    }
}; 

console.log(mergeLists(input));


//  Other Solution
// var mergeKLists = function(lists) {
//  let numsArr = [];
//  lists.forEach(item => {
//    while(item && item.val !== null) {
//      numsArr.push(item.val);
//      item = item.next;
//    }
//  });
//  numsArr = numsArr.sort((a, b) => b - a);
//  let resultNode = null;
//  numsArr.forEach(item => {
//    let tempNode = new ListNode(item);
//    tempNode.next = resultNode;
//    resultNode = tempNode;
//  })
//  return resultNode;
// };

/*
Merge Two Sorted Lists
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: l1 = [], l2 = []
Output: []
Example 3:
Input: l1 = [], l2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

// _____________ Working Solution _____________ // https://dev.to/urfan/leetcode-merge-two-sorted-lists-with-javascript-3lnl
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }
        currentNode = currentNode.next
    }
    if (l1 !== null) {
        currentNode.next = l1;
    } else if (l2 !== null) {
        currentNode.next = l2
    }
    return dummyHead.next
}

// ________________ Woking Solution ____________ // https://codereview.stackexchange.com/questions/221845/merge-two-sorted-lists-in-javascript
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};
// ________ Working Solution ___________   // https://github.com/BaffinLee/leetcode-javascript/blob/master/001-100/25.%20Reverse%20Nodes%20in%20k-Group.md
var reverseKGroup = function (head, k) {
    if (!head || k < 2) return head;
    var count = 0;
    var now = head;
    var last = head;
    var tmp = null;
    while (now && count < k) {
        now = now.next;
        count++;
    }
    if (count === k) {
        now = reverseKGroup(now, k);
        while (count-- > 0) {
            tmp = last.next;
            last.next = now;
            now = last;
            last = tmp;
        }
        last = now;
    }
    return last;
};

// ___________ Working Solution _______________
var reverseKGroup = function (head, k) {
    // Count the number of ListNodes
    let n = 0;
    for (let i = head; i != null; n++, i = i.next);

    // Create a dummy LinkedList
    let dummy = new ListNode(0);
    dummy.next = head;

    // Loop through the nodes until we no longer have k or more remaining
    for (let prev = dummy, tail = head; n >= k; n -= k) {
        // Loop through this batch of nodes being reversed
        for (let i = 1; i < k; i++) {
            // Flip the nodes to point in the opposite direction (reverse them)
            let next = tail.next.next;
            tail.next.next = prev.next;
            prev.next = tail.next;
            tail.next = next;
        }

        // Swap the current head for the reversed one
        prev = tail;
        tail = tail.next;
    }
    return dummy.next;
};

/*
Reverse Nodes in k-Group
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
Follow up:
Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.
Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
Example 3:
Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]
Example 4:
Input: head = [1], k = 1
Output: [1]
Constraints:
The number of nodes in the list is in the range sz.
1 <= sz <= 5000
0 <= Node.val <= 1000
1 <= k <= sz
*/
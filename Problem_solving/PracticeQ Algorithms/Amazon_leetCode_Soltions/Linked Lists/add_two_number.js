/*
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

// __________ Working Solution ______________ // https://leetcode.com/problems/add-two-numbers/discuss/1020/javascript-solution/1592

var addTwoNumbers = function (l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
};

// ___________________ Working Solution _______________ // https://baffinlee.com/leetcode-javascript/problem/add-two-numbers.html
var addTwoNumbers = function (l1, l2) {
    var carry = 0;
    var sum = 0;
    var head = new ListNode(0);
    var now = head;
    var a = l1;
    var b = l2;
    while (a !== null || b !== null) {
        sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
        carry = Math.floor(sum / 10);
        now.next = new ListNode(sum % 10);
        now = now.next;
        a = a ? a.next : null;
        b = b ? b.next : null;
    }
    if (carry) now.next = new ListNode(carry);
    return head.next;
};
/*
Reverse Linked List
Reverse a singly linked list.
Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// ___________ Working Solution _____________
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head
    }
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

// ___________ Working Solution ___________
var reverseList = function (head) {
    var pre = null;
    var next = null;
    while (head != null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};





// __________ Cheking Palindrome _____________
var isPalindrome = function (head) {
    if (head == null || head.next == null) return true;
    var slow = head;
    var fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while (slow != null) {
        if (head.val != slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};
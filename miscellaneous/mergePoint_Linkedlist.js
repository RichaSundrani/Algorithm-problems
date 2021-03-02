// Problem https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

function findMergeNode(headA, headB) {
    if(headA.data === null || headB.data === null) {
        return null; 
    }
    const cache = []
    while (headA) {
        cache.push(headA)
        headA = headA.next
    }
    while (headB) {
        if (cache.includes(headB)) {
            return headB.data;
        }
        headB = headB.next
    }
    return null;

}
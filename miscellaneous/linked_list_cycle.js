
/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }; 
    let listMap = {};
    while(head){
        if(head.val in listMap){
            return true;
        } else {
            listMap[head.val] = head.val;
        }
        head = head.next;
    }
    return false;
};

console.log(hasCycle());


// var hasCycle = function(head) {
//     let r1 = head, r2 = head;
//     while (r1 && r1.next) {
//         r1 = r1.next.next;
//         r2 = r2.next;
//         if (r1 == r2) {
//             return true;
//         }
//     } 
//     return false;
// };
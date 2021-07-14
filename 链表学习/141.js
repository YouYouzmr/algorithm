/**
 * leetcode: 141. 环形链表
 * 给定一个链表，判断链表中是否有环。
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 解题方法：设置一个快指针和一个慢指针；
 *         如果有环则快慢指针定会相遇
 */
 var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head;
    let fast = head.next
    while(slow !== fast && slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if(fast && fast.next) {
        return true
    }
    return false
};

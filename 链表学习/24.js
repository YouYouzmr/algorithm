
/**
 * leetcode: 24. 两两交换链表中的节点
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(head==null || head.next==null) return head
    let pre = head.next
    head.next = swapPairs(pre.next)
    pre.next = head
    return pre
};
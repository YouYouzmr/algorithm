/**
 * leetcode: 83.删除排序链表中的重复元素
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head==null || head.next==null) return head
    let cur = head
    while(cur && cur.next) {
        // 校验是否相等，
        // 相等删除下一个节点
        // 不等则指针指向下一节点
        if(cur.val==cur.next.val) {
            cur.next = cur.next.next? cur.next.next: null
        } else {
            cur = cur.next
        }
    }
    return head
};

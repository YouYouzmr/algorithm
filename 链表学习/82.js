/**
 * leetcode: 82. 删除排序链表中的重复元素 II
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head==null || head.next==null) return head
    let cur = new ListNode(0, head)
    let q = cur
    while(cur.next) {
        if(cur.next.next && cur.next.val==cur.next.next.val) {
            let tail = cur.next.next
            while(tail && tail.val==cur.next.val) tail = tail.next
            cur.next = tail
        } else {
            cur = cur.next
        }
    }
    return q.next
};

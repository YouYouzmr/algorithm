
/**
 * leetcode: 61. 旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(head==null || head.next == null) return head
    let total = 1
    let p = head
    // 获取当前链表长度
    while(p.next) {
        total += 1
        p = p.next
    }
    // 组成一个闭合链表
    p.next = head
    // 移动至可能大于链表长度，考虑循环链表
    k %= total
    total -= k
    while(total--) {
        p = p.next
    }
    head = p.next
    p.next = null
    return head
};

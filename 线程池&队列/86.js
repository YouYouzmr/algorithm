/**
 * leetcode: 86.分割链表
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 解题方法：
 * 创建两个链表，一个大于x，一个小于x。循环链表
 * 
 * https://leetcode-cn.com/problems/partition-list/
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head==null) return head
    let s = new ListNode(0)
    let b = new ListNode(0)
    let p = s
    let q = b
    while(head) {
        if(head.val<x) {
            p.next = head
            p = p.next
        } else {
            q.next = head
            q = q.next
        }
        head = head.next
    }
    q.next = head
    p.next = b.next
    return s.next
};
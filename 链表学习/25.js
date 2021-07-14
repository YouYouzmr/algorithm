
/**
 * leetcode: 25 K个一组反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if(!head || !head.next) return head
    let ret = new ListNode(0, head), p = ret, q = p.next
    while((p.next=reverseN(q, k)) != q) {
        p = q
        q = p.next
    }
    return ret.next
};
// 判断剩余链表是否可以反转n个节点
function reverseN(head, n) {
    let p = head, cnt = n
    while(--n && p) p = p.next
    if(!p) return head
    return __reverseN(head, cnt)
}

// 每次只反转一位，循环n次
function __reverseN(head, n) {
    if(n==1) return head
    let tail = head.next, p = __reverseN(head.next, n-1)
    head.next = tail.next
    tail.next = head
    return p
}

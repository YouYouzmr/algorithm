/**
 * leetcode: 138. 复制带随机指针的链表
 * 
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 解题思路：
 * 原链表：1->2->3->4
 * 复制链表：1->1'->2->2'->3->3'->4->4'
 * 处理random 指针域
 * 最后：拆分链表
 *      1->2->3->4 & 1'->2'->3'->4'
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head===null) return head
    let newList = new Node(0)
    let q = head
    // 复制链表中的每一个节点
    while(q) {
        q.next = new Node(q.val, q.next, q.random)
        q = q.next.next
    }
    
    // 设置random的指针
    q = head.next
    while(q) {
        if(q.random) q.random = q.random.next
        if(q.next) {
            q = q.next.next
        } 
        // 如果q.next 没有值，需手动设置q=null, 否则q一直指向上一个节点
        else {
            q = null
        }
    }
    // 重置p 为开始节点
    let p = newList
    q = head
    // 拆链表
    while(q) {
        p.next = q.next
        if(p.next) {
            q.next = p.next.next
            p = p.next
        }
        q = q.next
    }
    p.next = null
    return newList.next
};
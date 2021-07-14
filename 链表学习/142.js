
/**
 * leetcode: 142. 环形链表 II
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 解题思路：先判断是否是闭环，不是闭环返回null
 *         是闭环，循环slow指针，同时遍历start，相遇则是入环第一个节点
 */
 var detectCycle = function(head) {
    if(head===null || head.next===null) return null
    // 定义快慢指针
    let slow = head
    let fast = head
    // 定义起始
    let start = headß
    do {
        slow = slow.next
        fast = fast.next.next
    } while(slow!=fast && slow && fast && fast.next)

    // 表示是闭环
    if(fast && fast.next) {
        while(slow !=  start) {
            slow = slow.next
            start = start.next
        }

        return start
    } 
    // 非闭环
    else {
        return null
    }
}

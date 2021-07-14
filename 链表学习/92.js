
/**
 * leetcode: 92. 反转链表II
 * 给定2个整数left&right，left<right，反转left到right的链表节点，返回该链表
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(head==null || head.next==null) return head
    let tail = new ListNode(0, head)
    let cycleNum = right-left+1
    let start = tail
    // 找到反转开始节点
    while(--left) {
        start = start.next
    }
    start.next = reverseList3(start.next, cycleNum)
    return tail.next
};

/**
 * @param {ListNode} head 
 * @param {number} cycleNum 反转长度
 */
function reverseList3(head, cycleNum) {
    // head为反转起点
    if(head==null || head.next==null) return head
    let pre = null
    let cur = head
    // let next = head.next
    // 循环反转cycleNum位的链表
    while(cycleNum--) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
        // cur.next = pre
        // pre = cur
        // (cur = next) && (next = cur.next)
    }
    head.next = cur 
    return pre
}


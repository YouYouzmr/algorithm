/**
 * leetcode: 19. 删除链表的倒数第 N 个结点
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 1 2 3 4
var removeNthFromEnd = function(head, n) {
    if(head==null) return head
    // 1、获取链表长度，并删除第N个节点
    // 考虑删除第一个节点，重新创建一个手节点为空的链表
    let tail = new ListNode(0, head)
    let total = 0
    let cur = tail
    // 计算链表长度
    while(cur && cur.next) {
        cur = cur.next
        total += 1
    }
    // 获取删除位置前一位
    let start = total - n + 1
    let pre = tail
    while(--start) {
        pre = pre.next
    }
    // 判断删除节点后是否有节点
    if(pre && pre.next && pre.next.next) {
        pre.next = pre.next.next
    } else {
        pre.next = null
    }
    return tail.next
};

// 快慢指针
var removeNthNode = function(head, n){
    if(!head) return head
    // 2、双指针，快指针比慢指针快n个节点
    let temp = new ListNode(0, head), slow = temp, fast = temp
    for(let i=0; i<n; i++) {
        fast = fast.next
    }
    // 表示链表长度小于N
    if(!fast) return head.next
    while(fast.next) fast = fast.next, slow= slow.next
    slow.next = slow.next.next
    return temp.next
}

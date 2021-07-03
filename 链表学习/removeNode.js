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

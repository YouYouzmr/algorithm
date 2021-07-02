/**
 * leetcode: 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */

// 第一种方法： 迭代反转：使用虚拟头节点进行头插入
var reverseList1 = function(head) {
    if(head == null) return head
    let pre = null
    let cur = head
    let net = head.next
    while(cur) {
        // 解构赋值
        [cur.next, pre, cur] = [pre, cur, net]
        cur.next = pre;
        pre = cur;
        (cur = net) && (net = net.next)
    }
    return pre
};

// 第二种：递归反转
var reverseList2 = function(head) {
    //  递归方法
    if(head==null || head.next==null) return head
    let tail = head.next
    let p = reverseList(head.next)
    head.next = tail.next
    tail.next = head
    // console.log("p", p)
    // console.log('tail', tail)
    return p
};

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

/**
 * leetcode: 24. 两两交换链表中的节点
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null || head.next==null) return head
    let pre = head.next
    head.next = swapPairs(pre.next)
    pre.next = head
    return pre
};
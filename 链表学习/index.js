/**
 * leetcode: 141. 环形链表
 * 给定一个链表，判断链表中是否有环。
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 解题方法：设置一个快指针和一个慢指针；
 *         如果有环则快慢指针定会相遇
 */
 var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head;
    let fast = head.next
    while(slow !== fast && slow && fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    if(fast && fast.next) {
        return true
    }
    return false
};

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

/**
 * leetcode: 202. 快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：
 *   对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 *   然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 *   如果 可以变为  1，那么这个数就是快乐数。
 *   如果 n 是快乐数就返回 true ；不是，则返回 false 。
 */

/**
 * @param {number} n
 * @return {boolean}
 * 解题思路：最开始没有什么解题思路，了解链表后，发现可以通过链表数据模式解决问题
 *         及判断是否是有环链表即可
 */
function square(x) {
    let total = 0
    while(x>0) {
        let m = x%10
        total += m*m
        x = parseInt(x/10)
    }
    return total
}
var isHappy = function(n) {
    let p=n , q=n
    do{
       p = square(p)
       q = square(square(q))
    } while(p != q)

    return q == 1
};
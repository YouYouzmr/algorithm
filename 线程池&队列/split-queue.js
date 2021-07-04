/**
 * leetcode: 621. 任务调度器
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    let contJSON = {}
    // _.countBy(tasks)
    for(let i=0; i<tasks.length; i++) {
        let val = tasks[i]
        if(contJSON[val]) {
            contJSON[val] += 1
        } else {
            contJSON[val] = 1
        }
    }
    // 获取执行次数最多的任务
    const maxTask = Math.max(...Object.values(contJSON))
    // 获取出现等于最多次，一共有几个任务的数量
    let max = 0
    Object.values(contJSON).forEach(v=> {
        if(v===maxTask) {
            max++
        }
    })
    // 计算面积法求出最短时间
    return Math.max((maxTask-1) * (n+1) + max, tasks.length)
};

/**
 * leetcode: 83.分割链表
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 解题方法：
 * 创建两个链表，一个大于x，一个小于x。循环链表
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

/**
 * leetcode: 138. 复制带随机指针的链表
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

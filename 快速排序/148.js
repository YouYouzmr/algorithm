/**
 * leetcode: 148. 排序链表
 * 
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 
 * 提示：
 * 链表中节点的数目在范围 [0, 5 * 104] 内
 * -105 <= Node.val <= 105
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
 * @return {ListNode}
 */
// 快排思想
var sortList = function(head) {
    if(head === null) return head;
    let l = head.val, r = head.val, mid;
    let p = head, q, h1 = null, h2 = null;
    // 查找最大值和最小值
    while(p) {
        l = Math.min(p.val, l)
        r = Math.max(p.val, r)
        p = p.next
    }
    if(l === r) return head;
    // 获取中间基准值
    mid = (l + r) / 2

    // 重新指向头指针
    p = head;
    // partition操作，h1放置小于mid的链表；h2放置大于mid链表
    while(p) {
        // 临时存储p.next
        q = p.next;
        if(p.val <= mid) {
            p.next = h1;
            h1 = p;
        } else {
            p.next = h2;
            h2 = p;
        }
        // p指向下一位
        p = q;
    }
    // 递归左右链表
    h1 = sortList(h1);
    h2 = sortList(h2);
    
    // 查找到h1最后一位
    p = h1;
    while(p.next) p = p.next;
    // 将h1和h2合并
    p.next = h2;
    return h1;
};
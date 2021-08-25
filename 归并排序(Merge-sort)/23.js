/**
 * leetcode: 23. 合并K个升序链表
 * 
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var merge_sort = function(lists, l, r) {
    if(l > r) return null;
    if(l == r) return lists[l];

    let mid = (l + r) >> 1;
    let leftList = merge_sort(lists, l, mid);
    let rightList = merge_sort(lists, mid + 1, r);

    let temp = new ListNode(0, null), p1 = leftList, p2 = rightList;
    let head = temp;
    while(p1 || p2) {
        if((!p2) || (p2 && p1 && p1.val < p2.val)) {
            head.next = p1
            p1 = p1.next
        } else {
            head.next = p2
            p2 = p2.next
        }
        head = head.next
    }
    
    return temp.next
}
var mergeKLists = function(lists) {
    return merge_sort(lists, 0, lists.length-1)
};
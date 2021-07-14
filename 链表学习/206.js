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

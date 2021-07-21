'use strict'
/**
 * @param 
 *  preOrder： 1，2，3，5，4，6
 *  inOrder ： 3，5，2，1，4，6
 *             1，2，4，3，6，5
 *  获取后续遍历结果： 5，3，2，6，4，1
 *                  1  2  3  4  5  6
 *  每个数字*编号相加 - 编号从1开始
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function getOrder(preOrder, inOrder) {
    let result = reverseOrder(preOrder, inOrder)
    let ans = []
    afterOrder(result, ans)
    let total = 0
    ans.forEach((val, index)=> {
        total += val*(index+1)
    })
    console.log('total:', total)
}
function reverseOrder(preOrder, inOrder) {
    if(preOrder.length==0) return
    // 获取根节点
    let node = preOrder[0]
    // 获取中序遍历根节点索引值
    let index = inOrder.indexOf(node)
    let root = new TreeNode(node, null, null)
    // 遍历左子树
    root.left = reverseOrder(preOrder.slice(1,index+1), inOrder.slice(0, index))
    root.right = reverseOrder(preOrder.slice(index+1), inOrder.slice(index+1))
    return root
}

function afterOrder(order, ans) {
    if(order==undefined) return;
    afterOrder(order.left, ans)
    afterOrder(order.right, ans)
    ans.push(order.val)
}

getOrder(preOrder, inOrder)
// total: – 6756418380
/**
 * 剑指 Offer 32 - I. 从上到下打印二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 第一种： 递归遍历
var levelOrder = function(root) {
    let ans = []
    getResult(root, 0, ans)
    return ans.flat()
};
/**
 * 使用二维数组存储
 * @param {*} root 当前节点
 * @param {*} k    当前存储行
 * @param {*} ans  结果数组
 * @returns 
 */
function getResult(root, k, ans) {
    if(root==null) return;
    if(k==ans.length) {
        ans[k] = []
    }
    ans[k].push(root.val)
    getResult(root.left, k+1, ans)
    getResult(root.right, k+1, ans)
}

// 第二种队列
var levelOrder = function(root) {
    let ans = []
    if(root==null) return ans
    let queue = []
    queue.push(root)
    while(!queue.length) {
        let head = queue[0]
        ans.push(head.val)
        head.left && queue.push(head.left)
        head.right && queue.push(head.right)
        queue.shift()
    }
    return ans
}
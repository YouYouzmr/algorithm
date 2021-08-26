/**
 * leetcode: 1302. 层数最深叶子节点的和
 * 
 * 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let ans = 0;
    let maxDeep = -1;
    const dfs = (root, dep, cal) => {
        if(root === null) return;
        dfs(root.left, dep+1, cal)
        dfs(root.right, dep+1, cal)

        if(cal === 'cal') {
            (dep == maxDeep) && (ans += root.val)
        } else {
            maxDeep = Math.max(maxDeep, dep)
        }
    }
    // 递归获取当前数得level
    dfs(root, 0)
    // 计算最底层数据和
    dfs(root, 0, 'cal')
    return ans
};
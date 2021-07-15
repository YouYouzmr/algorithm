/**
 * leetcode: 112. 路径总和
 * 
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(root.left==null && root.right==null) {
        return root.val == targetSum
    }
    if(root.left && hasPathSum(root.left, targetSum-root.val)) {
        return true
    }
    if(root.right && hasPathSum(root.right, targetSum-root.val)) {
        return true
    }
    return false
};
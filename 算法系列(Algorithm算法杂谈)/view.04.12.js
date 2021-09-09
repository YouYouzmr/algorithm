/**
 * leetcode: 面试题 04.12. 求和路径
 * 
 * 给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。
 * 设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。
 * 注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，
 * 但是其方向必须向下(只能从父节点指向子节点方向)。
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
 * @param {number} sum
 * @return {number}
 */
var getPathSum = function(root, sum) {
    if(root == null) return 0;
    let val = sum - root.val
    return (root.val == sum) + getPathSum(root.right, val) + getPathSum(root.left, val)
}
var pathSum = function(root, sum) {
    if(root == null) return 0;
    let a = getPathSum(root, sum);
    
    return a + PathSum(root.left, sum) + pathSum(root.right, sum);
};
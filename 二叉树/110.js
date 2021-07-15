/**
 * leetcode: 110. 平衡二叉树
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为:
 *  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root)>=0
};
/**
 * 获取树高，判断不平衡返回-1
 * @param {*} root 
 * @returns 
 */
function getHeight(root) {
    if(root==null) return 0
    let l = getHeight(root.left)
    let r = getHeight(root.right)

    // 判断左右子树是否平衡
    if(l<0 || r<0) return -1;
    // 如果相等判断树高
    if(Math.abs(l-r)>1) return -1;

    return Math.max(l, r) + 1
}
/**
 * leetcode: 144. 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let ans = []
    preorder(root, ans)
    return ans
};

function preorder(root, ans) {
    if(root==null) return;
    ans.push(root.val)
    preorder(root.left, ans)
    preorder(root.right, ans)
}
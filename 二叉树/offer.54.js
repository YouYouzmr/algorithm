/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 * 
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 *  二叉搜索树：左小右大
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let count = getCount(root.right)
    if(k<=count) return kthLargest(root.right, k)
    if(k==count+1) return root.val;
    if(k>count+1) return kthLargest(root.left, k-count-1)
};

function getCount(root) {
    if(!root) return 0;
    return getCount(root.left) + getCount(root.right) + 1
}

// 使用假中序遍历查询
function kthLargest(root, k) {
    let ans = []
    inorder(root, ans)
    return ans[k-1]
}

function inorder(root, ans) {
    if(root==null) return;
    inorder(root.right, ans)
    ans.push(root.val)
    inorder(root.left, ans)
}
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
    let maxDeep = 0;
    const dfs = (root, k) => {
        if(root === null) return;
        
        if(k == maxDeep) ans += root.val;
        if(k > maxDeep) {
            maxDeep = k;
            ans = root.val
        }
        
        dfs(root.left, k+1)
        dfs(root.right, k+1)

        return
    }
    
    dfs(root, 1)
    return ans
};
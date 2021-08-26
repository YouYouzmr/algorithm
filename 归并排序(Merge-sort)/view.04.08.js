/**
 * leetcode: 面试题 04.08. 首个共同祖先
 * 
 * 设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。
 * 不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。
 * 
 * 
 * 提示
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉树中。
 * 最近公共祖先节点可以为节点本身。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if(root === null) return false;
        
        let left = dfs(root.left, p, q);
        let right = dfs(root.right, p, q);

        if((left && right) || ((root.val == p.val || root.val == q.val) && (left || right))) {
            ans = root
        }
        
        return left || right || root.val === p.val || root.val === q.val
    }
    dfs(root, p, q)
    return ans;
};

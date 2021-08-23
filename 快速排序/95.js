/**
 * leetcode: 95. 不同的二叉搜索树 II
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。
 * 可以按 任意顺序 返回答案。
 * 
 * 二叉搜索树： 做小右大
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let ans = [null];
    if(n == 0) return ans;
    return dfs(1, n)
};

function dfs(l, r) {
    let ans = [];
    if(l > r) {
        ans.push(null)
        return ans
    }
    for(let i = l; i <= r; i++) {
        let left_tree = dfs(l, i - 1)
        let right_tree = dfs(i + 1, r)

        // eg: i = 3;
        // 遍历left_tree: {1, null, 2} {2, 1, null}
        for(let left of left_tree) {
            // 遍历right_tree: {4}
            for(let right of right_tree) {
                let t = new TreeNode(i, left, right);
                ans.push(t)
            }
        }
    }

    return ans;
}
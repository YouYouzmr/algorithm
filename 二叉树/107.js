/**
 * leetcode: 107. 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let ans = []
    getResult(root, 0, ans)
    // 使用两个指针互换位置
    for(let i=0, j=ans.length-1; i<j; i++, j--) {
        [ans[i], ans[j]] = [ans[j], ans[i]]
    }
    return ans
};

var getResult = function(root, k, ans) {
    if(!root) return ;
    if(k==ans.length) ans.push([])
    ans[k].push(root.val)
    getResult(root.left, k+1, ans)
    getResult(root.right, k+1, ans)
    return ;
}
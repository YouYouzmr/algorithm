/**
 * 589. N 叉树的前序遍历
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = []
    __preorder(root, ans)
    return ans
};

function __preorder(root, ans) {
    if(root==null) return;
    ans.push(root.val)
    for(let key of root.children) {
        traverse(key, ans)
    }
    return ans
}
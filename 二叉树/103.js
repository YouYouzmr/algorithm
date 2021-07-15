/**
 * 103. 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    let ans = []
    getResult(root, 0, ans)
    for(let i=1; i<ans.length;i+=2) {
        reverse(ans[i])
    }

    return ans
};

function getResult(root, k, ans) {
    if(root==null) return;
    if(k==ans.length) ans.push([])
    ans[k].push(root.val)
    getResult(root.left, k+1, ans)
    getResult(root.right, k+1, ans)
    return
}

function reverse(arr) {
    for(let i=0, j=arr.length-1; i<j; i++,j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
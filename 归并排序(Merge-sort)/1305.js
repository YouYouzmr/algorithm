/**
 * leetcode: 1305. 两棵二叉搜索树中的所有元素
 * 
 * 给你 root1 和 root2 这两棵二叉搜索树。
 * 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var recursion = function(root, arr) {
    if(root == null) return;
    if(root.left) {
        recursion(root.left, arr)
    }
    arr.push(root.val)
    if(root.right) {
        recursion(root.right, arr)
    }
}
var merge_sort = function(arr1, arr2) {
    let res = []
    let l = 0, r = 0, l1 = arr1.length - 1, l2 = arr2.length - 1;
    while(l <= l1 || r <= l2) {
        if((r > l2) || (r <= l2 && arr1[l] < arr2[r])) {
            res.push(arr1[l])
            l++
        } else {
            res.push(arr2[r])
            r++
        }
    }
    return res
}
var getAllElements = function(root1, root2) {
    let arr1 = [], arr2 = []
    recursion(root1, arr1)
    recursion(root2, arr2)
    return merge_sort(arr1, arr2)
};
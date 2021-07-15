/**
 * leetcode: 剑指 Offer 26. 树的子结构
 * 
 * 输入两棵二叉树A和B，判断B是不是A的子结构。
 * (约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!B) return false
    if(!A) return false

    if(A.val==B.val && isMatch(A, B)) {
        return true
    }

    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isMatch = function(A, B){
    if(B==null) return true;
    if(A==null) return false
    if(A.val != B.val) return false
    return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}
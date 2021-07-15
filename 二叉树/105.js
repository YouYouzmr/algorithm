/**
 * leetcode: 105. 从前序与中序遍历序列构造二叉树
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 找根节点位置
// 递归建立左子树
// 递归建立右子树
var buildTree = function(preorder, inorder) {
    if(preorder.length==0) return null; 

    let index = 0;
    // 找到中序遍历根节点位置
    while(inorder[index]!=preorder[0]) ++index

    let l_pre=[], l_in=[], r_pre=[], r_in=[];
    for(let i=0; i<index; i++) {
        l_pre.push(preorder[i+1])
        l_in.push(inorder[i])
    }

    for(let i=index+1; i<preorder.length; i++) {
        r_pre.push(preorder[i])
        r_in.push(inorder[i])
    }

    return root;
};


var buildTree = function(preorder, inorder) {
    const map = new Map();
    // 循环遍历中序遍历结果，使用map记录对应索引值
    for(let i=0; i< inorder.length; i++) {
        map.set(inorder[i], i)
    }
    
    const helper = (pStart, pEnd, isStart, iEnd) => {
        if(pStart > pEnd) return null;
        let rootVal = preorder[pStart];
        let root = new TreeNode(rootVal);
        let mid = map.get(rootVal);
        let leftNum = mid - isStart;
        root.left  = helper(pStart + 1, pStart + leftNum, isStart, mid - 1);
        root.right = helper(pStart + leftNum + 1, pEnd, mid + 1, iEnd)
        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1)
};
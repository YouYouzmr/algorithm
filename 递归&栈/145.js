/**
 * leetcode: 145. 二叉树的后序遍历
 * 左右根
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = []
    if(root===null) return result
    let stack1 = [] // 记录正在处理的节点
    let stack2 = [] // 程序状态
    stack1.push(root)
    stack2.push(0)
    // 0
    while(stack1.length) {
        let status = stack2.pop();
        switch(status) {
            case 0:
                stack2.push(1)
                if(stack1[stack1.length-1].left!=null) {
                    stack1.push(stack1[stack1.length-1].left)
                    stack2.push(0)
                }
                break
            case 1:
                stack2.push(2)
                if(stack1[stack1.length-1].right!=null) {
                    stack1.push(stack1[stack1.length-1].right)
                    stack2.push(0)
                }
                break
            case 2:
                result.push(stack1.pop().val)
                break
        }
    }

    return result;
};

var postorderTraversal = function(root) {
    let res = new Array();
    // 迭代 反向进行后续遍历--中右左， 将值加入到栈(先进后出)
    if(!root) return res;
    let stack = [root];
    while(stack.length) {
        root = stack.pop();
        res.unshift(root.val);
        if(root.left) stack.push(root.left);
        if(root.right) stack.push(root.right)
    }
    return res
    // return postorderTraversalNode(root, res)
};

// 递归方法
var postorderTraversalNode = function(node, res) {
    if(node) {
        postorderTraversalNode(node.left, res)
        postorderTraversalNode(node.right, res)

        res.push(node.val)
    }

    return res;
}
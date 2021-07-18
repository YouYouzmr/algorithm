/**
 * leetcode: 662. 二叉树最大宽度
 * 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。
 * 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/maximum-width-of-binary-tree
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
// 给每个节点加个编号
var widthOfBinaryTree = function(root) {
    if(root==null) return 0
    let queue = []
    let ans = 1n
    // 0n or 1n n-用于大数字显示的定义, 当超过JS精度值时用n 标识记录
    queue.push({node: root, index: 0n})
    while(queue.length) {
        let len = queue.length
        let l = queue[0].index, r = queue[len-1].index
        ans = r-l+1n> ans? r-l+1n: ans
        for(let i=0; i<len; i++) {
            let {node, index} = queue[i]
            node.left && queue.push({index: index*2n, node: node.left})
            node.right && queue.push({index: index*2n+1n, node: node.right})
        }
        while(len) {
            len--
            queue.shift()
        }
    }

    return ans
};

var widthOfBinaryTree = function(root) {
    if(root==null) return 0
    let queue = []
    let ans = 1
    queue.push({node: root, index: 0})
    while(queue.length) {
        let len = queue.length
        let l = queue[0].index, r = queue[len-1].index
        ans = Math.max(ans, r-l+1)
        for(let i=0; i<len; i++) {
            let {node, index} = queue[i]
            // 减上一行最小编号
            node.left && queue.push({index: (index-l)*2, node: node.left})
            node.right && queue.push({index: (index-l)*2+1, node: node.right})
        }
        while(len) {
            len--
            queue.shift()
        }
    }

    return ans
};
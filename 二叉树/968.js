/**
 * leetcode: 968. 监控二叉树
 * 给定一个二叉树，我们在树的节点上安装摄像头。
 * 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。
 * 计算监控树的所有节点所需的最小摄像头数量。
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
 * 0-放置相机；1-不放置
 * 第一个表示父节点放置状态
 * 第二个表示当前节点放置状态
 * 当前节点所在子树覆盖全部节点所需最小个数
 * a: [0][0] 
 *    lc+la | la+rc | lc+rc
 * b: [1][0] 
 *    
 * c: [0][1]
 * d: [1][1]
 */
var minCameraCover = function(root) {
    let dp=[[],[]]
    // 覆盖root子树需要最小数量
    getDP(root, dp)
    // 父节点不放当前节点放置放置 ｜ 不放置取最小值
    return Math.min(dp[0][1], dp[0][0])
};

var getDP = function(root, dp) {
    if(root==null) {
        dp[0][0] = 0;
        // 空节点不能放置，给个极大值
        dp[0][1] = 10000;
        dp[1][0] = 0
        dp[1][1] = 10000;
        return;
    }
    if(root.left==null && root.right==null) {
        dp[0][0] = 10000;
        dp[0][1] = 1;
        dp[1][0] = 0;
        dp[1][1] = 1
        return
    }

    let l = [[],[]], r = [[],[]]
    getDP(root.left, l)
    getDP(root.right, r)
    dp[0][0] = Math.min(Math.min(l[0][1]+r[0][0], l[0][0]+r[0][1]), l[0][1]+r[0][1])
    dp[1][0] = Math.min(dp[0][0], l[0][0] + r[0][0])
    dp[0][1] = Math.min(Math.min(l[1][0]+r[1][0], l[1][1]+r[1][1]), Math.min(l[1][0]+r[1][1], l[1][1]+r[1][0])) + 1
    dp[1][1] = dp[0][1]
    return
}
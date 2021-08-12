/**
 * leetcode: 684. 冗余连接
 * 
 * 树可以看成是一个连通且 无环 的 无向 图。
 * 
 * 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。
 * 添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。
 * 图的信息记录于长度为 n 的二维数组 edges ，
 * edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。
 * 
 * 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。
 * 如果有多个答案，则返回数组 edges 中最后出现的边。
 * 
 * 提示：
 * 1. n == edges.length
 * 2. 3 <= n <= 1000
 * 3. edges[i].length == 2
 * 4. 1 <= ai < bi <= edges.length
 * 5. ai != bi
 * 6. edges 中无重复元素
 * 7. 给定的图是连通的 
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let n = edges.length
    let union = new UnionSet(n)
    for(let i=0; i<n; i++) {
        // 如果两个元素没在一个集合中则merge
        if(union.get(edges[i][0]) !== union.get(edges[i][1])) union.merge(edges[i][0], edges[i][1])
        // 在一个集合中，表示当前两个元素在一个闭环中,是一条附加边
        else return edges[i]
    }
};

let edges = [[1,2], [1,3], [2,3]]

console.log(findRedundantConnection(edges))
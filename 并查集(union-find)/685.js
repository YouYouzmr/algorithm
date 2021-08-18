/**
 * leetcode: 685.冗余连接 II
 * 
 * 在本问题中，有根树指满足以下条件的 有向 图。
 * 该树只有一个根节点，所有其他节点都是该根节点的后继。
 * 该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。
 * 
 * 输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。
 * 附加的边包含在 1 到 n 中的两个不同顶点间，这条附加的边不属于树中已存在的边。
 * 
 * 结果图是一个以边组成的二维数组 edges 。 
 * 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，
 * 其中 ui 是 vi 的一个父节点。
 * 
 * 返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。
 * 若有多个答案，返回最后出现在给定二维数组的答案。
 * 
 * 提示： 
 * 1. n == edges.length
 * 2. 3 <= n <= 1000
 * 3. edges[i].length == 2
 * 4. 1 <= ui, vi <= n
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * 分析：
 * 1、节点指向根节点，形成闭环
 * 2、指向非根节点，该节点有两个父节点
 */
var findRedundantDirectedConnection = function(edges) {
    let n = edges.length
    let union = new UnionSet(n) 
    let parent = Array(n+1) // 记录节点的父节点
    for(let i=0; i<=n; i++) {
        parent[i] = i
    }

    // 记录冲突和环路的边
    let conflictIndex = -1
    let cycleIndex = -1
    for(let i=0; i<edges.length; i++) {
        let [f, c] = edges[i]
        // 两个父节点，冲突
        if(parent[c] != c) {
            conflictIndex = i
        } else {
            parent[c] = f
            // f、c父子节点在一个集合中，形成闭环
            if(union.get(f) === union.get(c)) {
                cycleIndex = i
            } else {
                union.merge(f, c)
            }
        }
    } 
    // 只有环路则返回最后一个导致环的数组值
    if(conflictIndex < 0) {
        return edges[cycleIndex]
    } 
    // 父节点冲突
    else {
        // 没有形成环路则返回最后一个导致冲突的数组即可
        if(cycleIndex < 0) {
            return edges[conflictIndex]
        } 
        // 形成环路且发生冲突
        else {
            // 找到发生冲突的线路
            let edge = edges[conflictIndex]
            // 第二个节点为父元素冲突的节点，
            return [parent[edge[1]], edge[1]]
        }
    }
};


class UnionSet {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        this.boss[this.get(a)] = this.get(b)
        return
    }
}

let edges = [[1,2],[1,3],[2,3]]

console.log(findRedundantDirectedConnection(edges))
/**
 * leetcode: 1319. 连通网络的操作次数
 * 
 * 用以太网线缆将 n 台计算机连接成一个网络，计算机的编号从 0 到 n-1。
 * 线缆用 connections 表示，其中 connections[i] = [a, b] 连接了计算机 a 和 b。
 * 
 * 网络中的任何一台计算机都可以通过网络直接或者间接访问同一个网络中其他任意一台计算机。
 * 给你这个计算机网络的初始布线 connections，你可以拔开任意两台直连计算机之间的线缆，
 * 并用它连接一对未直连的计算机。
 * 请你计算并返回使所有计算机都连通所需的最少操作次数。如果不可能，则返回 -1 。
 * 
 * 输入：n = 4, connections = [[0,1],[0,2],[1,2]] 
 * 输出：1
 * 解释：拔下计算机 1 和 2 之间的线缆，并将它插到计算机 1 和 3 上。
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    // 电缆线不足
    if(n > connections.length+1) return -1

    let union = new UnionSet(n-1)
    for(let i=0; i<connections.length; i++) {
        if(union.get(connections[i][0]) !== union.get(connections[i][1])) union.merge(connections[i][0], connections[i][1])
    }
    let res = 0
    // 计算有几个集合
    for(let i=0; i<n; i++) {
        if(union.get(i)===i) res += 1
    }
    return res - 1
};

let connections = [[1,5],[1,7],[1,2],[1,4],[3,7],[4,7],[3,5],[0,6],[0,1],[0,4],[2,6],[0,3],[0,2]]
let n = 12

console.log(makeConnected(n, connections))
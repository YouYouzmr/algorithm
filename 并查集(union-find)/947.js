/**
 * leetcode: 947.移除最多的同行或同列石头
 * 
 * n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。
 * 
 * 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。
 * 
 * 给你一个长度为 n 的数组 stones ，
 * 其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。
 * 
 * 提示：
 *  1. 1 <= stones.length <= 1000
 *  2. 0 <= xi, yi <= 104
 *  3. 不会有两块石头放在同一个坐标点上
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
/**
 * 最大移除数量等于：石头总数 - 集合数
 * 每个集合剩余一块即可
 * 
 * 剩余数量：至少等于集合数量
 */
var removeStones = function(stones) {
    let n = stones.length;
    // x轴上出现的石头
    let ind_x = new Map()
    // y轴上出现的石头
    let ind_y = new Map()
    let union = new UnionSet(n)
    for(let i=0; i<n; i++) {
        let x = stones[i][0]
        let y = stones[i][1]
        // x上出现过，连接
        if(ind_x.has(x)) union.merge(i, ind_x.get(x))
        // y上出现过，连接
        if(ind_x.has(y)) union.merge(i, ind_y.get(y))

        ind_x.set(x, i)
        ind_y.set(y, i)
    }
    let res = 0
    for(let i=0; i<n; i++) {
        if(union.get(i)===i) res += 1
    }

    return stones.length - res 
};

let stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
removeStones(stones)

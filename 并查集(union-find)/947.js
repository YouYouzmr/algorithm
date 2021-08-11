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
var removeStones = function(stones) {
    let n = stones.length;
    let union = new UnionSet(n)
    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            if(stones[i][0]===stones[j][0] || stones[i][1]===stones[j][1]) union.merge(i, j)
        }
    }
    console.log(union)
};


class UnionSet {
    constructor(n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
    }

    get(x) {
        return this.boss[x] = this.boss[x]===x? x: this.get(this.boss[x])
    }

    merge(i, j) {
        this.boss[this.get(i)] = this.get(j)
    }
}

let stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
removeStones(stones)

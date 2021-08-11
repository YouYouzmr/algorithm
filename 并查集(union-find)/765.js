/**
 * leetcode: 765. 情侣牵手
 * 
 * N 对情侣坐在连续排列的 2N 个座位上，想要牵到对方的手。 
 * 计算最少交换座位的次数，以便每对情侣可以并肩坐在一起。 
 * 一次交换可选择任意两人，让他们站起来交换座位。
 * 
 * 人和座位用 0 到 2N-1 的整数表示，情侣们按顺序编号，
 * 第一对是 (0, 1)，第二对是 (2, 3)，
 * 以此类推，最后一对是 (2N-2, 2N-1)。
 * 
 * 这些情侣的初始座位  row[i] 是由最初始坐在第 i 个座位上的人决定的。
 * 
 * 示例:
 * 输入: row = [0, 2, 1, 3]
 * 输出: 1
 */

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let n = row.length
    let union = new UnionSet(n/2)

    for(let i=0; i<n; i+=2) {
        const l = Math.floor(row[i]/2)
        const r = Math.floor(row[i+1]/2)
        union.merge(l, r)
    }

    const map = new Map()
    for(let i=0; i<n/2; i++) {
        const fx = union.get(i)
        if(map.has(fx)) {
            map.set(fx, map.get(fx) + 1)
        } else {
            map.set(fx, 1)
        }
    }

    let ret = 0
    for(const [f, sz] of map.entries()) {
        ret += sz -1
    }

    return ret
};
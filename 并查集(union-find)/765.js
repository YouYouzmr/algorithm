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
/**
 * 思路：
 * 正确的cp是一奇一偶；并且 奇数 = 偶数+1 && 奇数/2 == 偶数/2
 * 否则需要将两个编号除2后进行联通，进行交换
 * 当n-1对配对成功，最后一对也会配对成功
 * 只需要记录联通次数就可以得到调整的次数
 */
var minSwapsCouples = function(row) {
    let n = row.length
    let N = n >> 1; // 右移一位 ，相当于除2
    let union = new UnionSet(N)

    for(let i=0; i<n; i+=2) {
        union.merge(row[i]/2>>1, row[i+1]/2>>1)
    }

    const cpMap = new Map()
    // 统计每个集合的数量
    for(let i=0; i<N; i++) {
        const father = union.get(i)
        if(cpMap.has(father)) {
            cpMap.set(father, cpMap.get(father) + 1)
        } else {
            cpMap.set(father, 1)
        }
    }

    let ret = 0
    // 计算集合需要移动的次数
    for(const [father, size] of cpMap.entries()) {
        ret += size - 1
    }
    return ret
};
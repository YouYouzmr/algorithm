/**
 * 17.09. 第 k 个数
 * 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/get-kth-magic-number-lcci
 *  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    let queue = [1]
    let p3 = 0
    let p5 = 0
    let p7 = 0
    while (queue.length < k) {
        let ans = 3 * queue[p3]
        ans = Math.min(ans, 5 * queue[p5])
        ans = Math.min(ans, 7 * queue[p7])
        if (3 * queue[p3] === ans) p3++
        if (5 * queue[p5] === ans) p5++
        if (7 * queue[p7] === ans) p7++
        queue.push(ans)
    }
    return queue[k - 1]
};
/**
 * leetcode: 264. 丑数 II
 * 
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 * 丑数 就是只包含质因数 2、3、 5 的正整数。
 */

/**
 * 思路：
 *              1 
 *    2    ｜   3    ｜  5
 *  4 6 10 ｜ 9   15 ｜  25
 * ............................
 * 丑数 = 乘 大于 对应最大质因数的值（防重）
 */

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let heap = new Heap(2)
    let ans = 0
    heap.push(1)
    while(n) {
        ans = heap.pop()
        if(ans % 5 === 0) {
            heap.push(ans * 5)
        } else if(ans % 3 === 0) {
            heap.push(ans * 5)
            heap.push(ans * 3)
        } else {
            heap.push(ans * 5)
            heap.push(ans * 3)
            heap.push(ans * 2)
        }
        n--
    }
    return ans
};
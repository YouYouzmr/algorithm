/**
 * leetcode: 313. 超级丑数
 * 
 * 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
 * 
 * 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。
 * 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
 */

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */

/**
 * 思路：
 *   循环遍历 primes, 计算每一轮最小丑数值；
 *   使用指针p记录 primes中质数，对应的data中计算值位置；
 */
var nthSuperUglyNumber = function(n, primes) {
    let p = Array(primes.length).fill(0)
    let data = [1]
    let ans = 1
    while(data.length != n) {
        ans = primes[0] * data[p[0]]
        for(let i=1; i<primes.length; i++) {
            ans = Math.min(ans, primes[i] * data[p[i]])
        }
        for(let i=0; i<primes.length; i++) {
            if(primes[i] * data[p[i]] == ans) p[i]++
        }

        data.push(ans)
    }

    return ans
};
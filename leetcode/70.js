/**
 * leetcode: 70. 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
*/

/**
 * @param {number} n
 * @return {number}
 */

/**
 * 找规律：
 * n=1: 1种
 * n=2: 2种
 * n=3: 3种
 * n=4: 5种
 * n=5: 8种
 * ...
 * f(n) = f(n-1) + f(n-2)
 * 
 * 由上可知该数符合 斐波那契数列
 * 什么是【斐波那契数列】： https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145?fr=aladdin
 */
var climbStairs = function(n) {
    if(n===1) return 1
    if(n===2) return 2

    let a = 1; b = 2; c = 0
    while(n > 2) {
        c = a + b;
        [a, b] = [b, c];
        n--
    }

    return c
};
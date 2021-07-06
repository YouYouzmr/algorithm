/**
 * 338. 比特位计数
 * 
 *  给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，
 *  计算其二进制数中的 1 的数目并将它们作为数组返回
 * 
 *  https://leetcode-cn.com/problems/counting-bits/
 */

/**
 * 
 * @param {number} n
 * @return {number[]}
 */

/**
 * f(x) = f(x)&f(x-1)
 * 观察x和x-1对应二进制的关系
 * x&x-1 +1 = 等于x二进制1的总数
 * 0: 000              0  
 * 1: 001  1&0=000(0)  1
 * 2: 010  2&1=000(0)  1
 * 3: 011  3&2=010(2)  2
 * 4: 100  4&3=000(0)  1
 * 5: 101  5&4=100(4)  1
 */
var countBits = function(num) {
    let ret = [0]
    if(num==0) return ret
    for(let i=1; i<=num; i++) {
        ret[i] = ret[i & (i-1)] + 1
    }
    return ret
};

console.log(countBits(3))
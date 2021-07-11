/**
 * leetcode: 1124. 表现良好的最长时间段
 */

/**
 * 前缀和数组： 快速计算原序列区间和
 * @param {number[]} hours
 * @return {number}
 */

/**
 * 思路：
 *   9 9  6  0  6  6 9
 *   1 1 -1 -1 -1 -1 1
 * 0 1 2  1  0 -1 -2 -1
 * 找到前缀和大于0
 * f(n-1)
 * f(n) = f(n-1) + p(n) - p(n-1)
 */
var longestWPI = function(hours) {
    // 存储前序和
    let sum = Array(hours.length+1).fill(0)
    for(let i=0; i<hours.length; i++) {
        sum[i+1] = sum[i] + (hours[i]>8? 1 : -1)
    }

    let stack = [0]
    // 记录降序的索引
    for(let i=0; i<sum.length-1; i++) {
        if(sum[i]<sum[stack[stack.length-1]]) {
            stack.push(i)
        }
    }

    let max = 0;
    for(let i=sum.length-1; i>max; i--) {
        while(sum[stack[stack.length-1]] < sum[i] && stack.length) {

            max = Math.max(max, i-stack.pop())
        }
    }

    return max
};



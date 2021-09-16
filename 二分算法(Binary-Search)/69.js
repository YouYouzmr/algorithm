/**
 * leetcode: 69. x 的平方根
 * 给你一个非负整数 x ，计算并返回 x 的 平方根 
 * 
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 * 
 * 提示：0 <= x <= 2^31 - 1
 */
/**
 * @param {number} x
 * @return {number}
 */
// 找到  y * y 最后一个位置 小于等于 x 的位置
var mySqrt = function(x) {
    let head = 0, tail = x + 1, mid;
    // 调整100次，为什么可以
    // 二分查找，调整一次，说笑原来的一半，
    // 调整一百次 处理 1/2^100 ; head 和 tail 很接近
    for (let i = 0; i < 100; i++) {
        mid = (head + tail) / 2;
        if(mid * mid <= x) head = mid
        else tail = mid
    }

    return Math.floor(head)
};
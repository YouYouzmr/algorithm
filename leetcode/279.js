/**
 * leetcode: 279. 完全平方数
 * 
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）
 * 使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 完全平方数 是一个整数，其值等于另一个整数的平方；
 * 换句话说，其值等于一个整数自乘的积。
 * 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 */

/**
 * 四平方和定理：说明每个正整数均可表示为4个整数的平方和。它是费马多边形数定理和华林问题的特例。
 *              n = x1^2 + x2^2 + x3^2 + x4^2 
 * 
 * 仅当 n != 4^k * (8 * m + 7) 时， n 可以表示为至多三个正整数得平方和
 * 因此当 n = 4^k * (8 * m + 7) 时，你表示为4个正整数得平方和
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // 当前数时完全平方数，则返回1
    if(isSquare(n)) {
        return 1;
    }
    // 判断只能由4个平方数组成得状态
    if(isFourNumSum(n)) {
        return 4
    }
    
    // 判断是否能有2个平方数加和得到
    for(let i=1; i < Math.sqrt(n); i++) {
        let another = n - i * i;
        if(isSquare(another)) {
            return 2
        }
    }
    // 其他情况只能由3个平方数加和组成
    return 3
};

// 判断是否为完全平方数
function isSquare(x) {
    const y = Math.floor(Math.sqrt(x))
    return y * y === x
}

// 判断是否能表示为 4^k * (8 * m + 7)
function isFourNumSum(x) {
    while(x % 4 === 0) {
        x /= 4
    }

    return x % 8 === 7
}


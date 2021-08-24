/**
 * leetcode: 470. 用 Rand7() 实现 Rand10()
 * 
 * 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，
 * 试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。
 * 不要使用系统的 Math.random() 方法。
 */
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
/**
 *   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 
 *---------------------------------
 * 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
 * 2 | 8 | 9 | 10| 1 | 2 | 3 | 4 | 
 * 3 | 5 | 6 | 7 | 8 | 9 | 10| 1 | 
 * 4 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 
 * 5 | 9 | 10| 1 | 2 | 3 | 4 | 5 |  
 * 6 | 6 | 7 | 8 | 9 | 10| * | * |
 * 7 | * | * | * | * | * | * | * |
 * 
 * 
 * 每次有40/49 的概率不被拒绝
 * 
 * 因此调用期望: 
 * E() = 2.(9/49)^0 + 2.(9/49)^1 + 2.(9/49)^2 + ...
 * 
 *        n=0
 *     = 2∑   (9/49)^n
 *        ∞ 
 * 
 *     = 2(1/(1-9/49))
 * 
 *     = 2.45 
 * 
 */
var rand10 = function() {
    let row, col, ind;
    do {
        row = rand7();
        col = rand7();
        ind = col + (row - 1) * 7;
    } while(ind > 40)

    return 1 + (ind - 1) % 10
};
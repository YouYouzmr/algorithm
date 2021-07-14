
/**
 * leetcode: 202. 快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：
 *   对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 *   然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 *   如果 可以变为  1，那么这个数就是快乐数。
 *   如果 n 是快乐数就返回 true ；不是，则返回 false 。
 */

/**
 * @param {number} n
 * @return {boolean}
 * 解题思路：最开始没有什么解题思路，了解链表后，发现可以通过链表数据模式解决问题
 *         及判断是否是有环链表即可
 */
function square(x) {
    let total = 0
    while(x>0) {
        let m = x%10
        total += m*m
        x = parseInt(x/10)
    }
    return total
}
var isHappy = function(n) {
    let p=n , q=n
    do{
       p = square(p)
       q = square(square(q))
    } while(p != q)

    return q == 1
};
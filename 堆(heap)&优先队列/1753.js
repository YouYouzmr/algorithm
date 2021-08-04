/**
 * leetcode: 1753. 移除石子的最大得分
 * 
 * 你正在玩一个单人游戏，面前放置着大小分别为 a​​​​​​、b 和 c​​​​​​ 的 三堆 石子。
 * 每回合你都要从两个 不同的非空堆 中取出一颗石子，并在得分上加 1 分。当存在 两个或更多 的空堆时，游戏停止。
 * 给你三个整数 a 、b 和 c ，返回可以得到的 最大分数 。
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    // 重置a,b,c为： a < b < c
    if(a > b) [a, b] = [b, a]
    if(a > c) [a, c] = [c, a]
    if(b > c) [b, c] = [c, b]

    let ans = 0
    ans = Math.min(a, c-b)
    // while(a > 0 && c - b > 0) {
    //     a--
    //     c--
    //     ans++
    // }
    a -= ans
    b -= ans

    if(a > 1) {
        let reduce = a % 2 == 0 ? a/2 : (a-1)/2
        ans += reduce * 2
        c -= reduce
        b -= reduce
    }
    // while(a > 1) {
    //     c--
    //     b--
    //     a -= 2
    //     ans += 2
    // }

    and += b
    // while (c > 0 && b > 0) {
    //     ans++
    //     c--
    //     b--
    // }

    return ans
};
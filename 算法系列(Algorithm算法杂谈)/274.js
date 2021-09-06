/**
 * leetcode: 274. H 指数 (急转弯)
 * 
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。
 * 
 * h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）
 *              总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。
 * 
 * 例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。
 * 提示：如果 h 有多种可能的值，h 指数 是其中最大的那个。
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
/**
 * 0 1 3 5 6 i-- 对应索引位置
 *   4 3 2 1 h++ 
 * 对cataions进行升序，
 * 从后向前遍历，如果当前值小于h则终止遍历，此时h-1, 为最后结果值
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a-b);
    let h = 1, len = citations.length;
    while(h <= len && citations[len - h] >= h) h++;
    return h - 1;
};
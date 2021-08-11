/**
 * leetcode: 1202.交换字符串中的元素
 * 
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，
 * 其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
 * 
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。
 * 
 * 1 <= s.length <= 10^5
 * 0 <= pairs.length <= 10^5
 * 0 <= pairs[i][0], pairs[i][1] < s.length
 * s 中只含有小写英文字母
 * 
 */

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    let n = s.length;
    let union = new UnionSet(n)
};


class UnionSet {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        this.boss[this.get(a)] = this.get(b)
        return
    }
}
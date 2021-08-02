/**
 * leetcode: 692. 前K个高频单词
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    // 统计单词出现的频次
    const cnt = new Map();
    for (const word of words) {
        cnt.set(word, (cnt.get(word) || 0) + 1);
    }
    const rec = [];
    for (const entry of cnt.keys()) {
        rec.push(entry);
    }
    rec.sort((word1, word2) => {
        return cnt.get(word1) === cnt.get(word2) ? word1.localeCompare(word2) : cnt.get(word2) - cnt.get(word1);
    })
    return rec.slice(0, k);
};



let arr = ["i", "love", "leetcode", "i", "love", "coding"]

let k = 1
console.log(topKFrequent(arr, 3))
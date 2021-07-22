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
    let heap = new Heap(compare)
    let mapArr = {}
    for(let i=0; i<words.length; i++) {
        mapArr[words[i]] = mapArr[words[i]]? mapArr[words[i]]+1: 1
    }

    for(let key in mapArr) {
        heap.push({
            [key]: mapArr[key]
        })
        if(heap.size()>k) heap.pop()
    }
    mapArr = null
    let result = []
    for(let i=heap.cnt-1; i>=0; i--) {
        result.push(Object.keys(heap.data[i])[0])
    }
    return heap.output().map(val=> Object.keys(val)[0]).reverse()
};

function compare(parentData, childData) {
    let a = Object.keys(parentData)[0]
    let b = Object.keys(childData)[0]
    if(parentData[a]-childData[b]!==0) return parentData[a] > childData[b]
    // 如果相等按字母排序
    if(a < b) return 1;
    if(a > b) return -1
    return 0
}

let arr = ["i", "love", "leetcode", "i", "love", "coding"]

let k = 4
console.log(topKFrequent(arr, k))
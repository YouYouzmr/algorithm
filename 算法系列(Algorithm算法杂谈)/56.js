/**
 * leetcode: 56. 合并区间
 * 
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * 提示：
 *  1 <= intervals.length <= 104
 *  intervals[i].length == 2
 *  0 <= starti <= endi <= 104
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let buf = new Array(105).fill(0);

    for(let [start, end] of intervals) {
        for(let i = start; i <= end; i++) {
            buf[i] += 1
        }
    }

    let ret = [];
    let i = 0
    while(i < 105) {
        if(buf[i] === 0) {
            i++; 
            continue;
        }

        let end = i;
        while(buf[end]) end++;
        ret.push([i, end-1]);
        i = end
    }
    
    return ret
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
merge(intervals)
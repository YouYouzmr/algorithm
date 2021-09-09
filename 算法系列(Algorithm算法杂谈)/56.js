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
    let buf = [];
    // 左端点 +1； 右端点 -1；
    for(let [start, end] of intervals) {
        buf.push([start, 1])
        buf.push([end, -1])
    }

    // 左端点==右端点，第二位按升序排
    // 否则按左端点升序排列
    buf.sort((a, b) => {
        if(a[0] - b[0]) return a[0] - b[0];
        return b[1] - a[1]
    })

    // 前缀加和，遇到0则位单独的一个区间
    let pre = -1, sum = 0;
    let ret = []
    for(let i = 0; i < buf.length; i++) {
        if(pre == -1) pre = buf[i][0]
        sum += buf[i][1]

        if(sum == 0) {
            ret.push([pre, buf[i][0]])
            pre = -1
        }
    }
    
    return ret
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
merge(intervals)
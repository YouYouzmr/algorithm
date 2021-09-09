/**
 * leetcode: 1288. 删除被覆盖区间
 * 
 * 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
 * 
 * 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
 * 
 * 在完成所有删除操作后，请你返回列表中剩余区间的数目。
 * 
 * 提示：​​​​​​
 *  1 <= intervals.length <= 1000
 *  0 <= intervals[i][0] < intervals[i][1] <= 10^5
 *  对于所有的 i != j：intervals[i] != intervals[j]
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if(a[0] - b[0]) return a[0] - b[0];
        return b[1] - a[1]
    })

    let cnt = 0, pre = -1;
    for(let x of intervals) {
        if(pre >= x[1]) cnt += 1;
        pre = Math.max(x[1], pre)
    }

    return intervals.length - cnt;
};
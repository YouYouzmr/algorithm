/**
 * leetcode: 239. 滑动窗口最大值
 * 
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans = []
    if(k == 0) return ans
    // 队列 存储索引值
    let queue = []
    let i = 0
    while(i < nums.length) {
        // 弹出队列中存储索引值不在窗口中的值
        while(queue.length && queue[0] + k <= i) {
            queue.shift()
        }
        // 最后一个元素小于当前值弹出，确保queue[0]是当前窗口的最大值
        while(queue.length && nums[queue[queue.length-1]] < nums[i]) {
            queue.pop()
        }
        // 当前值入队列
        queue.push(i)
        i++
        if(i >= k) ans.push(nums[queue[0]])
    }
    return ans
};

let nums = [1,3,1,2,0,5]
let k = 3
maxSlidingWindow(nums, k)
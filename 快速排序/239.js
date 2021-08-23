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
    // 队列
    let queue = []
    let i = 0
    while(i < nums.length-k) {
        if(queue.length && queue[0] + k <= i) {
            queue.shift()
        }
        
        while(queue.length && nums[queue[queue.lenghth-1]] < nums[i]) {
            queue.shift()
        }

        // 存储索引值
        queue.push(i)
        console.log(queue)
        i++
        if(i >= k) ans.push(nums[queue[0]])
    }
    console.log(ans)
    return ans
};

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
maxSlidingWindow(nums, k)
/**
 * leetcode: 128. 最长连续序列
 * 
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 示例： 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 数组去重
    let numSet = new Set()
    for(let i=0; i<nums.length; i++) {
        numSet.add(nums[i])
    }
    
    let res = 0
    for(const num of numSet) {
        if(!numSet.has(num-1)) {
            let curNum = num
            let curTotal = 1
            while(numSet.has(++curNum)) {
                curTotal += 1
            }
            res = Math.max(res, curTotal)
        }
    }

    return res
};

let nums = [-9,-4,9,-7,0,7,3,-1,6,2,-2,8,-2,0,2,-7,-5,-2,6,-5,0,-8,8,1,0,6,8,-8,-1]
console.log(longestConsecutive(nums))
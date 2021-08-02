/**
 * leetcode: 53. 最大子序和
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），
 * 返回其最大和。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let total
    for(let i=0; i< nums.length; i++) {
        total = total>0? total +nums[i] : nums[i]
        max = Math.max(total, max)
    }
    return max
};
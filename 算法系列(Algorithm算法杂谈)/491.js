/**
 * leetcode: 491. 递增子序列(不下降子序列)
 * 
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 
 * 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 * 
 * 提示：
 * 1 <= nums.length <= 15
 * -100 <= nums[i] <= 100
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getResult = function(nums, k, buff, ret) {
    if(buff.length > 1) ret.push(buff);
    buff.push(0);
    // 去重
    let can = []
    for(let i = k; i < nums.length; i++) {
        
        if(buff.length == 1 || nums[i] >= buff[buff.length - 2]) {
            buff[buff.length - 1] = nums[i]
            getResult(nums, i + 1, buff, ret)
        }
    }
}

var findSubsequences = function(nums) {
    let ret = [];
    getResult(nums, 0, [], ret);
    return ret
};

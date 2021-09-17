/**
 * leetcode: 300. 最长递增子序列
 * 
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */

 /**
  * 
  * @param {*} nums 递增数组
  * @param {*} n 最长子序列数
  * @param {*} x 当前值
  * 
  * 返回当前值，下一位索引值
  */
var binary_search = function(nums, n, x) {
    let l = 1, r = n + 1, mid;
    while(l < r) {
        mid = (l + r) >> 1;
        if(nums[mid] >= x) r = mid
        else l = mid + 1
    }
    return l
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 用 len 记录目前最长上升子序列的长度
    let len = new Array(nums.length + 1).fill(0)
    // 起始位
    len[1] = nums[0];
    let ans = 1;
    for(let i = 1; i < nums.length; i++) {
        let l = binary_search(len, ans, nums[i])
        len[l] = nums[i];
        ans = Math.max(ans, l)
    }

    return ans
};
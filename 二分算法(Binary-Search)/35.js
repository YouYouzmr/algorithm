/**
 * leetcode: 35. 搜索插入位置
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 在数组区间内找不到比 target 大的值，返回数组的长度
var searchInsert = function(nums, target) {
    let head = 0, tail = nums.length - 1, mid;
    while(tail - head > 3) {
        mid = (tail + head) >> 1;
        if(nums[mid] >= target) tail = mid;
        else head = mid + 1;
    }

    for(let i = head; i <= tail; i++) {
        if(nums[i] >= target) return i;
    }

    return nums.length;
};
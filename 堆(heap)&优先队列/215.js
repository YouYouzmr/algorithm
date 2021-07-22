/**
 * leetcode: 215. 数组中的第K个最大元素
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heap = new Heap(2)
    for(let i=0; i<nums.length;i++) {
        heap.push(nums[i])
        if(heap.size()>k) heap.pop()
    }

    return heap.top()
};
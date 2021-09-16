/**
 * leetcode: 34. 在排序数组中查找元素的第一个和最后一个位置
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给
 * 定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 找到第一个大于target的位置； 
// 第一个大于等于x的位置
var binary_search = function(nums, target) {
    let head = 0, tail = nums.length -1, mid;
    while(tail - head > 3) {
        mid = (head + tail) >> 1;
        if(nums[mid] >= target) tail = mid;
        else head = mid + 1;
    }

    for(let i = head; i <= tail; i++) {
        if(nums[i] >= target) return i;
    }
    // 数组中没有大于target的数，假设数组后有个虚拟位大于target;
    return nums.length;
}

var searchRange = function(nums, target) {
    let ret = [-1, -1];
    ret[0] = binary_search(nums, target);
    // 判断不存在target
    if(ret[0] === nums.length || nums[ret[0]] != target) {
        ret = [-1, -1];
        return ret
    }
    
    ret[1] = binary_search(nums, target+1) - 1;

    return ret;
};
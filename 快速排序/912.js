/**
 * leetcode: 912. 排序数组
 * 
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * 
 * 提示：
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quick_sort(nums, 0, nums.length-1)
    return nums;
};

// 初始
function quick_sort(arr, l, r) {
    if(l >= r) return;
    let x = l, y = r, base = arr[l];
    while(x < y) {
        while(x < y && arr[y] >= base) y--;
        if(x < y) arr[x++] = arr[y];
        while(x < y && arr[x] < base) x++;
        if(x < y) arr[y--] = arr[x];
    }
    
    arr[x] = base;
    quick_sort(arr, l, x - 1);
    quick_sort(arr, x + 1, r);
    return;
}
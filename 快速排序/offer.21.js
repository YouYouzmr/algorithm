/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序
 * ，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if(nums.length==0) return nums;
    let x = 0, y = nums.length-1;
    do {
        while(x < nums.length && nums[x] % 2 == 1) x++;
        while(y >= 0 && nums[y] % 2 == 0) y--;
        if(x <= y) {
            [nums[x], nums[y]] = [nums[y], nums[x]]
            x++, y--;
        } 
    } while(x <= y)

    return nums;
};
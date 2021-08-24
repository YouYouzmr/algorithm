/**
 * leetcode: 剑指 Offer 51. 数组中的逆序对
 * 
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组，求出这个数组中的逆序对的总数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let temp = []
var countResult = function(nums, l, r) {
    if(l >= r) return 0;
    let ans = 0, mid = (l + r) >> 1;
    
    ans += countResult(nums, l, mid);
    ans += countResult(nums, mid + 1, r);

    let k = l, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if((p2 > r) || (p1 <= mid && nums[p1] <= nums[p2])) {
            temp[k++] = nums[p1++]
        } else {
            temp[k++] = nums[p2++]
            ans += (mid - p1 + 1)
        }
    }

    for(let i = l; i <= r; i++) nums[i] = temp[i]
    return ans
}

var reversePairs = function(nums) {
    while (temp.length < nums.length) temp.push(0);
    return countResult(nums, 0, nums.length - 1)
};
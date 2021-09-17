/**
 * leetcode: 81. 搜索旋转排序数组 II
 * 
 * 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。
 * 如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// 需要判断 mid 在后半段还是前半段 (前半段 > 后半段)
var search = function(nums, target) {
    // 判断左右两边的值为target
    if(nums[0] === target || nums[nums.length - 1] === target) return true;
    let l = 0, r = nums.length - 1, mid, head, tail;
    
    // 左边找到第一个大于 nums[0] 的位置
    while(l < nums.length && nums[l] == nums[0]) ++l;
    // 右边找到第一个小于 nums[0] 的位置
    while(r >=0 && nums[r] === nums[0]) --r;
    // 重置head、 tail 
    head = l, tail = r;

    // 二分
    while(r - l > 3) {
        mid = (l + r) >> 1;
        if(nums[mid] === target) return true;

        // 判断如果中间值小于 tail 对应的值，则说明mid 处于后半段
        if(nums[mid] <= nums[tail]) {
            // 判断 target 的区间位置
            if(target <= nums[tail] && target > nums[mid]) l = mid + 1;
            else r = mid;
        } 
        else {
            if(target <= nums[mid] && target >= nums[head]) r = mid;
            else l = mid + 1;
        }
    }

    for(let i = l; i <= r; i++) {
        if(nums[i] === target) return true
    }

    return false;
};

let nums = [1,0,1,1,1]
let target = 0

console.log(search(nums, target))
/**
 * leetcode: 1658. 将 x 减到 0 的最小操作数
 * 
 * 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，
 * 然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。
 * 
 * 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。
 * 
 * 示例 1：
 *  输入：nums = [1,1,4,2,3], x = 5
 *  输出：2
 *  解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var binary_search = function(nums, x) {
    let head = 0, tail = nums.length - 1, mid;

    while(head < tail) {
        mid = (head + tail) >> 1;
        if(nums[mid] == x) return mid;
        if(nums[mid] < x) head = mid + 1;
        else tail = mid;
    }

    return -1;
}

// 超时
var minOperations = function(nums, x) {
    let len = nums.length;
    // 计算从左边开始的前缀和，右边的前缀和
    let sum_left = new Array(len + 1).fill(0), sum_right = new Array(len + 1).fill(0);

    for(let i = 0; i < len; i++) {
        sum_left[i + 1] = nums[i] + sum_left[i]
    }
    for(let i = len -1 ; i >= 0; i--) {
        sum_right[len - i] = nums[i] + sum_right[len - i - 1]
    }
    
    let ans = -1;
    for(let i = 0; i < len + 1; i++) {
        let j = binary_search(sum_right, x - sum_left[i]);
        if(j === -1) continue;
        // 过滤交叉非法取值
        if(i + j > len) continue;
        // 第一次符合的， 最优解的处理
        if(ans == -1 || ans > i + j) ans = i + j;
    }
    
    return ans;
};

let nums = [1,1,4,2,3]
let target = 5

minOperations(nums, target)
/**
 * leetcode: 327. 区间和的个数 
 * (归并过程中解决问题)
 * 
 * 给你一个整数数组 nums 以及两个整数 lower 和 upper 。
 * 求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。
 * 
 * 区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。
*/
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countTwoPart = function(sum, l1, r1, l2, r2, lower, upper) {
    let ans = 0, k1 = l1, k2 = l1;
    for(let j = l2; j <= r2; j++) {
        let a = sum[j] - upper;
        let b = sum[j] - lower;
        // 左闭右开
        while(k1 <= r1 && sum[k1] < a) k1++;
        while(k2 <= r1 && sum[k2] <= b) k2++;
        ans += (k2 - k1)
    }

    return ans
}
var merge_sort = function(sum, lower, upper, l, r) {
    if(l >= r) return 0;
    const mid = (l + r) >> 1;
    let ret = 0;
    ret += merge_sort(sum, lower, upper, l, mid);
    ret += merge_sort(sum, lower, upper, mid + 1, r);
    ret += countTwoPart(sum, l, mid, mid + 1, r, lower, upper);

    // 合并排序数组
    let temp = []
    let k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if((p1 <= mid && sum[p1] < sum[p2]) || p2 > r) {
            temp[k++] = sum[p1++]
        } else {
            temp[k++] = sum[p2++]
        }
    }

    for(let i=l; i <= r; i++) sum[i] = temp[i-l]

    return ret
}
/**
 * 前缀和
 * lower <= sum[j] - sum[i] <=upper (i < j)
 * sum[i] >= sum[j] - upper
 * sum[i] <= sum[j] - lower         
 */
var countRangeSum = function(nums, lower, upper) {
    let sum = [0];
    // 前缀和
    for(let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }

    return merge_sort(sum, lower, upper, 0, sum.length-1)
};
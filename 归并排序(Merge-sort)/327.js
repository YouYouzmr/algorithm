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
var merge_sort = function(sums, lower, upper, l, r) {
    if(l >= r) return 0;
    const mid = (l + r) >> 1;
    const left = merge_sort(sums, lower, upper, l, mid);
    const right = merge_sort(sums, lower, upper, mid + 1, r);

    let ret = left + right;

    // 统计下表对应的数量
    let i = l;
    let m = mid + 1;
    let n = mid + 1;
    while(i <= mid) {
        while(m <= right && sums[m] - sums[i]  < lower) m++;
        while(n <= right && sums[n] - sums[i] <= upper) n++;
        ret += (n - m);
        i++;
    }

    // 合并排序数组
    let temp = []
    let k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if((p1 <= mid && sums[p1] < sums[p2]) || p2 > r) {
            temp[k++] = sums[p1++]
        } else {
            temp[k++] = sums[p2++]
        }
    }

    for(let i=l; i <= r; i++) sums[i] = temp[i-l]

    return ret
}
var countRangeSum = function(nums, lower, upper) {
    let sums = [];
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j]
            sums.push(sum)
        }
    }

    return merge_sort(sums, lower, upper, 0, sums.length-1)
};
/**
 * leetcode: 1508. 子数组和排序后的区间和
 * 
 * 给你一个数组 nums ，它包含 n 个正整数。你需要计算所有非空连续子数组的和，
 * 并将它们按升序排序，得到一个新的包含 n * (n + 1) / 2 个数字的数组。
 * 
 * 请你返回在新数组中下标为 left 到 right （下标从 1 开始）的所有数字和（包括左右端点）。
 * 由于答案可能很大，请你将它对 10^9 + 7 取模后返回。
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var merge_sort = function(arr, l, r) {
    if(l >= r) return;
    let mid = (l + r) >> 1;
    merge_sort(arr, l, mid)
    merge_sort(arr, mid + 1, r)

    let temp = []
    let k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if((p1 <= mid && arr[p1] < arr[p2]) || p2 > r) {
            temp[k++] = arr[p1++]
        } else {
            temp[k++] = arr[p2++]
        }
    }

    for(let i=l; i <= r; i++) arr[i] = temp[i-l]
    return;
}

var rangeSum = function(nums, n, left, right) {
    const MODULO = 1000000007;
    // 初始化加和数组
    let len = n * (n - 1) / 2;
    let arr = Array(len-1)
    let k = 0;
    for(let i=0; i<n; i++) {
        let sum = 0;
        for (j = i; j < n; j++) {
            sum += nums[j]
            arr[k++] = sum
        }
    }

    merge_sort(arr, 0, arr.length-1)
    // 遍历数组
    let ans = 0;
    for(let i = left-1; i<right; i++) {
        ans = (ans + arr[i]) % MODULO
    }
    return ans
};

let arr = [1,2,3,4]
rangeSum(arr, 4, 1, 5)
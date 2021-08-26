/**
 * leetcode: 315. 计算右侧小于当前元素的个数
 * (归并过程中解决问题)
 * 
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。
 * 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let res = []
var merge_sort = function(nums, l, r) {
    if(l >= r) return 0;
    let mid = (l + r) >> 1, ans = 0;
    ans += merge_sort(nums, l, mid)
    ans += merge_sort(nums, mid + 1, r)

    // 排序
    let temp = []
    let k = 0, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if(p2 > r || (p2 <= r && nums[p1] < nums[p2])) {
            temp[k++] = nums[p1++]
        } else {
            temp[k++] = nums[p2++]
            ans += (mid - p1 + 1)
        }
    }
    for(let i = l; l <= r; i++) nums[i] = temp[l-i]

    return ans
}
var countSmaller = function(nums) {
    
};
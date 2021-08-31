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
var temp = []
var merge_sort = function(arr, l, r) {
    if(l >= r) return 0;
    let mid = (l + r) >> 1, ans = 0;
    merge_sort(arr, l, mid)
    merge_sort(arr, mid + 1, r)
    
    // 处理左右两侧跨界的处理方法

    // 从大到小排序
    let k = l, p1 = l, p2 = mid + 1;
    while(p1 <= mid || p2 <= r) {
        if(p2 > r || (p2 <= r && arr[p1].val > arr[p2].val)) {
            arr[p1].cnt += (r - p2 + 1)
            temp[k++] = arr[p1++]
        } else {
            temp[k++] = arr[p2++]
        }
    }
    for(let i = l; l <= r; i++) arr[i] = temp[i]
    return ans
}
var countSmaller = function(nums) {
    var arr = []
    for(let i = 0; i < nums.length; i++) {
        arr.push({
            val: nums[i],
            index: i,
            cnt: 0
        })
    }
    
    merge_sort(arr, 0, arr.length);

    let res = []
    for(let x of arr) res[x.index] = x.cnt;
    return res
};
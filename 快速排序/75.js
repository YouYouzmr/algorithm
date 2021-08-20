/**
 * leetcode: 75. 颜色分类
 * 
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，
 * 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var three_partition = function(arr, l, r, mid) {
    if(l >= r) return l;
    // 分别记录0，1，2对应索引位置
    let x = -1, y = r + 1, i = l
    while(i < y) {
        if(arr[i] === mid) i++;
        else if(arr[i] < mid) {
            x++;
            [arr[x], arr[i]] = [arr[i], arr[x]]
            i++;
        } else if(arr[i] > mid) {
            y--;
            [arr[y], arr[i]] = [arr[i], arr[y]]
        }
    }
    return arr
}
var sortColors = function(nums) {
    three_partition(nums, 0, nums.length-1, 1)
};

let nums = [2,0,2,1,1,0]
console.log(sortColors(nums))
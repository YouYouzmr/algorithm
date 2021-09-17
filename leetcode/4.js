/**
 * leetcode: 4. 寻找两个正序数组的中位数
 * 
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的 中位数 .
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 进阶： O(log(m + n))
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// nums1[k/2] < nums2[k/2] 
// nums1[k/2] 最多比 k-2个元素大，排名 k-1；
// 二分算法： 二分的是问题规模

// 找到处于k位置的值
var findK = function(nums1, nums2, i, j, k) {
    if(i == nums1.length) return nums2[j + k - 1];
    if(j == nums2.length) return nums1[i + k - 1];
    if(k == 1) return nums1[i] < nums2[j]? nums1[i] : nums2[j];
    let a = Math.min(k >> 1, nums1.length);
    let b = Math.min(k - a, nums2.length);
    a = k - b;
    if(nums1[i + a - 1] <= nums2[j + b - 1]) {
        return findK(nums1, nums2, i + a, j, k - a);
    } else {
        return findK(nums1, nums2, i, j + b, k - b);
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length, mid = (n + m + 1) >> 1;
    let a = findK(nums1, nums2, 0, 0, mid);
    if((n + m) % 2 == 1) return a;
    let b = findK(nums1, nums2, 0, 0, mid + 1)
    return (a + b) >> 1;
}

console.log(findMedianSortedArrays(nums1, nums2))



// 第二种：归并排序
// 时间复杂度: O(k)
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let m = nums1.length, n = nums2.length;
    let mid = (m + n + 1) >> 1;
    let res = 0;
    while(i < m || j < n) {
        if((i < m && nums1[i] < nums2[j]) || j >= n) {
            res = nums1[i]
            i++; 
        }
        else {
            res = nums2[j]
            j++;
        };
        if(!--mid) {
            if((m + n) % 2 === 0) {
                let next1 = i < m ? nums1[i]: Infinity;
                let next2 = j < n ? nums2[j]: Infinity;
                res = (res + Math.min(next1, next2)) / 2;
            }
            break;
        }
    }
    
    return res;
}


// 第三种
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = nums1.concat(nums2).sort((a, b) => a - b)
    
    let len = newArr.length
    let median = 0
    switch (len % 2) {
        case 0:
            median = len == 0 ? 0 : (newArr[len / 2] + newArr[len / 2 - 1]) / 2
            break;
        case 1:
            median = newArr[parseInt(len / 2)]
    }
    return median
};
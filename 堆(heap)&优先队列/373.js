/**
 * leetcode: 373. 查找和最小的K对数字
 * 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。
 * 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。
 * 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 
 */

/**
 * nums1 & nums2 是有序递增数组
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // 维护大顶堆
    let heap = new Heap(1)
    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            let temp = []
            temp[0] = nums1[i]
            temp[1] = nums2[j]
            if(heap.size()<k || temp[0]+temp[1]<heap.currentTotal(0)) {
                heap.push(temp)
                if(heap.size()>k) heap.pop()
            } else {
                break
            }
        }
    }
    return heap.output()
};

let nums1 = [1, 1, 2];
let nums2 = [1, 2, 3]
let result = kSmallestPairs(nums1, nums2, 2)
console.log(result)
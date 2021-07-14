/**
 * leetcode: 969. 煎饼排序
 * 给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。
 * 一次煎饼翻转的执行过程如下：
 *  选择一个整数 k ，1 <= k <= arr.length
 *  反转子数组 arr[0...k-1]（下标从 0 开始）
 * 
 * 例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。
 * 以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。

 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/pancake-sorting
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    // 记录每一项对应的索引值
    let indexArr = Array(0)
    let ret = []
    for (let i = 0; i < arr.length; i++) indexArr[arr[i]] = i

    // 反转数组
    for (let i = arr.length; i > 0; i--) {
        // 如果最大值所在位置正确则不需要反转
        if(indexArr[i]+1 === i) continue;
        
        // 最大值在对应位置则不需要旋转
        // 当最大值在首位也不需要旋转
        // indexArr[i]是arr索引值，i是value
        if(indexArr[i] + 1 !== i && indexArr[i]!=0) {
            ret.push(indexArr[i] + 1)
            // 将每轮的最大值，反转到首位
            reverse(arr, indexArr[i], indexArr)
        }
        
        // 首位是和i-1位值对应则会旋转到对应位置
        // 如果首尾位置正确则不需要旋转
        if(arr[0] === i && i!=1) {
            // 将每轮的最大值反转到对应位置
            ret.push(i)
            reverse(arr, i - 1, indexArr)
        }
    }
    return ret
};
/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * @param {*} index 
 */
var reverse = function(arr, n, index) {
    for(let i=0, j=n; i<=j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        index[arr[i]] = i
        index[arr[j]] = j
    }
    return ;
}

let arr = [2,4,1,3,5]
console.log(pancakeSort(arr))
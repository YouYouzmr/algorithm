/**
 * leetcode: 面试题 17.14. 最小K个数
 * 
 * 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
 * 
 * 示例：
 * 输入： arr = [1,3,5,7,2,4,6,8], k = 4
 * 输出： [1,2,3,4]
 * 
 * 提示：
 * 0 <= len(arr) <= 100000
 * 0 <= k <= min(100000, len(arr))
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 获取中间值
var getmid = function(a, b, c) {
    console.log(a, b, c)
    if(a > b) [a, b] = [b, a]
    if(a > c) [a, c] = [c, a]
    if(b > c) [b, c] = [c, b]
    return b
}

var quick_select = function(arr, l, r, k) {
    if(l >= r) return;
    let x = l, y = r, base = getmid(arr[l], arr[(l + r) >> 1], arr[r])
    do {
        while(arr[x] < base) x++;
        while(arr[y] > base) y--;
        if(x <= y) {
            [arr[x], arr[y]] = [arr[y], arr[x]]
            x++, y--;
        }
    } while(x <= y)

    if(y - l == k-1) return; // 左区间数量等于k, 直接返回
    if(y - l >= k) {// 左区间数量大于k, 继续查找缩小范围
        quick_select(arr, l, y, k)
    } else { // 左区间数小于k, 扩大范围
        quick_select(arr, x, r, k - x + l)
    }

    return;
}

var smallestK = function(arr, k) {
    let ans = [];
    if(k === 0) return ans
    quick_select(arr, 0, arr.length-1, k)
    while(k) ans.push(arr[--k]);
    return ans;
};

let arr = [1,3,5,7,2,4,6,8]
let k = 4
smallestK(arr, k)
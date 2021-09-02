/**
 * leetcode: 1122. 数组的相对排序
 * 
 * 给你两个数组，arr1 和 arr2，
 *  arr2 中的元素各不相同
 *  arr2 中的每个元素都出现在 arr1 中
 * 
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
 * 未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 * 
 * 提示：
 *  1 <= arr1.length, arr2.length <= 1000
 *  0 <= arr1[i], arr2[i] <= 1000
 *  arr2 中的元素 arr2[i] 各不相同
 *  arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let cnt = new Array(1005).fill(0);
    
    for(let x of arr1) {
        cnt[x] += 1;
    }

    let res = []
    for(let x of arr2) {
        let n = cnt[x]
        while(n) {
            res.push(x)
            n--
        }
        cnt[x] = 0
    }

    for(let i = 0; i < cnt.length; i++) {
        if(cnt[i] === 0) continue;
        for(let j = 0; j < cnt[i]; j++) res.push(i)
    }

    return res
}

[2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31]
[2,42,38,0,43,21]
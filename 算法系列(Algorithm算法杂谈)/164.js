/**
 * leetcode: 164. 最大间距 (基数排序)
 * 
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 说明:
 *  你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 *  不可用计数排序，数据量太大
 *  请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 *  线性排序： O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let len = nums.length;
    if(len < 2) return 0;

    let exp = 1;
    const buf = new Array(len).fill(0);
    const maxVal = Math.max(...nums);

    while(maxVal >= exp) {
        // 存储0-9出现的次数
        const cnt = new Array(10).fill(0);
        // 统计
        for(let i = 0; i < len; i++) {
            let digit = Math.floor(nums[i] / exp) % 10;
            cnt[digit] += 1;
        }

        // 获取前缀和
        for(let i = 1; i < 10; i++) {
            cnt[i] += cnt[i - 1];
        }

        // 倒序放置
        for(let i = len - 1; i >= 0; i--) {
            let digit = Math.floor(nums[i] / exp) % 10;
            buf[--cnt[digit]] = nums[i];
        }
        
        // nums 更新为 buf
        nums.splice(0, len, ...buf);
        exp *= 10;
    }
    
    let ret = 0;
    for(let i = 1; i < len; i++) {
        ret = Math.max(ret, nums[i] - nums[i - 1]);
    }
    return ret;
};

let arr = [1,100]
maximumGap(arr)
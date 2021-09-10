/**
 * leetcode: 491. 递增子序列(不下降子序列)
 * 
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 
 * 至少有两个元素 。你可以按 任意顺序 返回答案。
 * 
 * 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 * 
 * 提示：
 *  1 <= nums.length <= 15
 *  -100 <= nums[i] <= 100
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const ret = [];
    const len = nums.length;
    const set = new Set();

    const dfs = (start, path) => {
        if(path.length >= 2) {
            const str = path.toString();
            if(!set.has(str)) {
                ret.push(path.slice());
                set.add(str)
            }
        }

        for(let i = start; i < len; i++) {
            const prev = path[path.length - 1];
            const cur = nums[i];
            if(path.length == 0 || prev <= cur) {
                path.push(cur);
                dfs(i + 1, path);
                path.pop()
            }
        }
    }

    dfs(0, [])
    return ret
};

let nums = [4, 6, 7, 7]
findSubsequences(nums)
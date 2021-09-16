/**
 * leetcode: 1. 两数之和
 * 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出
 * 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 
 * 你可以按任意顺序返回答案。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法一： 二分算法
var binary_serach = function(nums, ind, head, val) {
    let tail = ind.length - 1, mid;
    while(head <= tail) {
        mid = (head + tail) >> 1;
        if(nums[ind[mid]] == val) return mid;
        if(nums[ind[mid]] < val) head = mid + 1;
        else tail = mid - 1;
    }

    return -1
}
var twoSum = function(nums, target) {
    // 对下表排序
    let ind = new Array(nums.length);
    for(let i = 0; i < ind.length-1; i++) ind[i] = i;
    ind.sort((a, b) => nums[a] - nums[b]);

    let ret = [];
    // 遍历下标数组
    for(let i = 0; i < ind.length - 1; i++) {
        let val = nums[ind[i]];

        let j = binary_serach(nums, ind, i + 1, target - val)
        if(j == -1) continue;
        let a = ind[i], b = ind[j];
        if(a > b) [a, b] = [b, a]
        ret = [a, b]
    }
    return ret;
}

// 方法二： 暴力循环
var twoSum = function(nums, target) {
    let arr = []
    nums.forEach((val, i)=> {
        let others = nums.slice(i+1)
        
        others.forEach((item, j)=> {
            if(val+item===target) {
                arr = [i,j+i+1]
                return 
            }
        })
    })
    return arr
};

// 双指针
var twoSum = function(nums, target) {
    let left = 0, right = nums.length-1;
    let temps = nums.splice();
    temps.sort((a, b) => a-b)
    while(left < right) {
        if(temps[left] + temps[right] > target) right--
        else if(temps[left] + temps[right] < target) left ++
        else break
    }
    let ans = []
    // 查找nums, 对应的索引值
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == temps[left] && ans[0] == undefined){
            ans[0] = i
        }else if(nums[i] == temps[right]){
            ans[1] = i
        }

        if(ans[0] > -1 && ans[1] > -1) break;
    }

    return ans
}
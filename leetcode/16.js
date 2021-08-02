/**
 * leetcode: 16. 最接近三数之和
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
 * 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result
    for(let i=0; i<nums.length-2;i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let total = nums[i] + nums[j] + nums[k]
                if(total === target) {
                    result = total;  
                    break;
                }
                if(result===undefined || Math.abs(total-target) <= Math.abs(target-result)) {
                    result = total
                }
            }
        }
    }
    return result
};

let nums = [1,2,-1,3, 4]
threeSumClosest(nums, 3)
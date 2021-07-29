/**
 * leetcode: 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length==0) return 0
    let ans = 0;
    // 获取最大值对应索引值
    let ind= 0; 
    for(let i=0; i<height.length; i++) {
        (height[i] > height[ind]) && (ind = i)
    }
    
    let leftMax = 0;
    for(let i=0; i<ind+1; i++) {
        leftMax = Math.max(leftMax, height[i])
        ans += (leftMax - height[i])
    }
    let rightMax = 0
    for(let i=height.length-1; i>=ind; i--) {
        rightMax = Math.max(rightMax, height[i])
        ans += (rightMax -height[i])
    }

    return ans;
};

let height = []
console.log(trap(height))
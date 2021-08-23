/**
 * leetcode: 11. 盛最多水的容器
 * 
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    // 双指针方法
    while (left < right) {
        let areaWidth = right - left;
        let nowArea = areaWidth * Math.min(height[left], height[right])
        area = nowArea > area ? nowArea : area;
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return area;
};
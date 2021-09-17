/**
 * leetcode: 475. 供暖器
 * 
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 * 
 * 在加热器的加热半径范围内的每个房屋都可以获得供暖。
 * 
 * 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，
 * 请你找出并返回可以覆盖所有房屋的最小加热半径。
 * 
 * 说明：所有供暖器都遵循你的半径标准，加热的半径也一样。
 * 
 * 例子：
 *  输入: houses = [1,2,3,4], heaters = [1,4]
 *  输出: 1
 *  解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var binary_search_01 = function(nums, x) {
    let head = 0, tail = nums.length - 1, mid;
    while(head < tail) {
        mid = (head + tail) >> 1;
        if(nums[mid] >= x) tail = mid;
        else head = mid + 1;
    }

    return head;
}
var findRadius = function(houses, heaters) {
    // 对加热器进行排序
    heaters.sort((a, b) => a - b);
    
    let ans = 0;
    for(let x of houses) {
        // 第一个大于等于当前房子的位置供暖期的索引值
        let j = binary_search_01(heaters, x);
        // 距 x 的距离
        let a = Math.abs(heaters[j] - x);
        // 距离 前一个供暖期的距离
        let b = (j ? x - heaters[j - 1] : a + 1)
        // 当前最小半径
        ans = Math.max(ans, Math.min(a, b))
    }
    return ans;
};
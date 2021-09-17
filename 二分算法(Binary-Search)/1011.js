/**
 * leetcode: 1011. 在 D 天内送达包裹的能力
 * 
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
 * 
 * 传送带上的第 i 个包裹的重量为 weights[i]。
 * 每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 * 
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 */
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var searchDay = function(nums, mid) {
    // cnt: 总天数， cur: 一天运送包裹重量和
    let cnt = 1, cur = 0;
    for(let x of nums) {
        if(cur + x > mid) {
            cnt += 1;
            cur = 0
        } 
        cur += x
    }
    return cnt;
}
var shipWithinDays = function(weights, days) {
    // 首先统计货物总重量，并找出单个货物最大重量
    // 这两个事船的载货数量左右峰值
    let total = 0, weight = 0, mid;
    for(let x of weights) {
        total += x;
        weight = Math.max(x, weight)
    }

    while(weight < total) {
        mid = (weight + total) >> 1;
        if(searchDay(weights, mid) <= days) total = mid
        else weight = mid + 1
    }

    return total;
};
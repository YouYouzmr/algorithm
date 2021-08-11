/**
 * leetcode: 128. 最长连续序列
 * 
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 示例： 
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法一、使用Set去重。并计算每条最长序列
 */
var longestConsecutive = function(nums) {
    // 数组去重
    let numSet = new Set()
    for(let i=0; i<nums.length; i++) {
        numSet.add(nums[i])
    }
    
    let res = 0
    for(const num of numSet) {
        if(!numSet.has(num-1)) {
            let curNum = num
            let curTotal = 1
            while(numSet.has(++curNum)) {
                curTotal += 1
            }
            res = Math.max(res, curTotal)
        }
    }

    return res
};

/**
 * 方法二: 并查集
 */
 var longestConsecutive = function(nums) {
    let union = new UnionSet(nums.length)
    // 记录当前位置之前出现的数，以及对应的下标
    let ind = new Map()
    for(let i=0; i<nums.length; i++) {
        let x = nums[i]
        // 如果当前数字重复，则跳过
        if(ind.has(x)) continue
        // 联通 x 和 x-1 对应索引
        if(ind.has(x-1)) {
            union.merge(i, ind.get(x-1))
        }
        // 联通 x 和 x-1 对应索引
        if(ind.has(x+1)) {
            union.merge(i, ind.get(x+1))
        }
        ind.set(nums[i], i)
    }

    let ans = 0
    for(let i=0; i<nums.length; i++) {
        if(union.get(i)==i) ans = Math.max(ans, union.cnt[i])
    }

    return ans
}

class UnionSet {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
        this.cnt = Array(n+1).fill(1)
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        if(this.get(a)== this.get(b)) return
        this.cnt[this.get(b)] += this.cnt[this.get(a)]
        this.boss[this.get(a)] = this.get(b)
        return
    }
}

let nums = [-9,-4,9,-7,0,7,3,-1,6,2,-2,8,-2,0,2,-7,-5,-2,6,-5,0,-8,8,1,0,6,8,-8,-1]
console.log(longestConsecutive(nums))
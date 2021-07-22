/**
 * leetcode: 703. 数据流中的第 K 大元素
 * 
 * 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。
 * 请实现 KthLargest 类：
 *   1. KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
 *   2. int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums
    this.heap = new Heap(2)
    for(let i=0; i<this.nums.length; i++) {
        this.heap.push(this.nums[i])
        if(this.heap.size()>this.k) this.heap.pop()
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val)
    this.heap.size()>this.k && this.heap.pop()
    return this.heap.top()
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
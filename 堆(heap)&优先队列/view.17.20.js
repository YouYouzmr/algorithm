/**
 * leetcode: 面试题 17.20. 连续中值
 * 
 * 随机产生数字并传递给一个方法。
 * 你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。
 * 
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.heap = new Heap(1)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
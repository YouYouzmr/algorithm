/**
 * leetcode: 295. 数据流的中位数
 * 
 * 中位数是有序列表中间的数。如果列表长度是偶数，
 * 中位数则是中间两个数的平均值。
 */

/**
 * 思路：
 *  维护两个堆，左边大顶堆，右边小顶堆
 *  如果为元素数量为奇数，则取大顶堆top
 *  偶数取大小顶堆top 平均值
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    // 对顶堆
    this.largeHeap = new Heap(1) // 前半段
    this.smallHeap = new Heap(2) // 后半段
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.largeHeap.size()==0 || num <= this.largeHeap.top()) {
        this.largeHeap.push(num)
    } else {
        this.smallHeap.push(num)
    }
    if(this.smallHeap.size() > this.largeHeap.size()) {
        this.largeHeap.push(this.smallHeap.pop())
    }
    if(this.largeHeap.size()===this.smallHeap.size() + 2) {
        this.smallHeap.push(this.largeHeap.pop())
    }

    return
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let n = this.largeHeap.size() + this.smallHeap.size()
    if(n%2==1) {
        return this.largeHeap.top()
    }

    return (this.largeHeap.top()+this.smallHeap.top())/2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
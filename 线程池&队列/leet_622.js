/**
 * 622. 设计循环队列
 */
/**
 * @param {number} k 存储区大小
 */
var MyCircularQueue = function(k) {
    this.arr = Array(k+1)
    this.head = 0
    this.tail = 0
    this.cnt = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false
    this.arr[this.tail] = value
    this.tail = (this.tail+1) % this.size()
    this.cnt += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    this.head = (this.head+1) % this.size()
    this.cnt -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1;
    return this.arr[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1;
    // 解决tail==0问题
    return this.arr[(this.tail-1+this.size())%this.size()]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.cnt == 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size() == this.cnt
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.size = function() {
    return this.arr.length-1
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
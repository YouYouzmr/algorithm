/**
 * 面试题 03.04. 化栈为队
 * 实现一个MyQueue类，该类用两个栈来实现一个队列。
 * https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = Array(0)
    this.stack2 = Array(0)
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.transfer()
    this.stack1.push(x)
    return;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    if(this.stack2.length==0) return -1;
    return this.stack2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack1.length) {
        this.stack2.push(this.stack1.pop())
    }
    if(this.stack2.length==0) return -1
    let result = this.stack2.pop()
    this.stack2.push(result)
    return result
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length===0 && this.stack2.length==0
};

MyQueue.prototype.transfer = function() {
    if(this.stack1.length) return
    while(this.stack2.length) {
        this.stack1.push(this.stack2.pop())
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
/**
 * 1670. 设计前中后队列
 * 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。
 * 
 * 请你完成 FrontMiddleBack 类：
 *  FrontMiddleBack() 初始化队列。
 *  void pushFront(int val) 将 val 添加到队列的 最前面 。
 *  void pushMiddle(int val) 将 val 添加到队列的 正中间 。
 *  void pushBack(int val) 将 val 添加到队里的 最后面 。
 *  int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 *  int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。 
 *  int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 * 
 *  https://leetcode-cn.com/problems/design-front-middle-back-queue/
 */
/**
 * 节点：
 */
class Node {
    constructor(val, next=null, pre=null) {
        this.next = next
        this.pre = pre
        this.val = val
    }
    // 头部插入
    insert_pre(p) {
        p.pre = this.pre
        p.next = this
        if(this.pre) this.pre.next = p
        this.pre = p
        return
    }
    // 尾部插入
    insert_next(p) {
        p.pre = this;
        p.next = this.next;
        if(this.next) this.next.pre = p
        this.next = p
        return
    }
    // 删除前一个节点
    delete_pre() {
        if(this.pre===null) return;
        let p = this.pre
        this.pre = p.pre
        if(p.pre) p.pre.next = this
        p = null
        return
    }
    // 删除下一个节点
    delete_next() {
        if(this.next===null) return
        let p = this.next
        this.next = p.next
        if(p.next) p.next.pre = this
        p = null
        return
    }
}

// 队列
class Queue {
    constructor() {
        this.head = new Node(0)
        this.tail = new Node(0)
        this.cnt = 0;

        // 重置首尾指针指向
        this.head.next = this.tail
        this.head.pre = null
        this.tail.pre = this.head
        this.tail.next = null
    }
    // 尾部进入
    push_back(val) {
        this.tail.insert_pre(new Node(val))
        this.cnt += 1;
        return 
    }
    // 头部进入
    push_front(val) {
        this.head.insert_next(new Node(val))
        this.cnt += 1;
        return
    }
    // 弹出尾节点
    pop_back() {
        if(this.isEmpty()) return -1;
        let ret = this.tail.pre.val
        this.tail.delete_pre()  
        this.cnt -= 1;
        return ret
    }
    // 弹出头节点
    pop_front() {
        if(this.isEmpty()) return -1;
        let ret = this.head.next.val
        this.head.delete_next();
        this.cnt -= 1;
        return ret
    }
    // 获取头节点
    front() {
        return this.head.next.val
    }
    // 获取尾节点
    back() {
        return this.tail.pre.val
    }
    // 判空
    isEmpty() {
        return this.cnt===0;
    }
    // 获取队列长度
    size() {
        return this.cnt
    }
}
// 头部中间插入队列类
// 创建s\l两列表,一个长一个短
// 保证l.size()>s.size()
class FrontMiddleBackQueue {
    constructor() {
        this.leftQueue = new Queue()
        this.rightQueue = new Queue()
    }
    // 头部插入
    pushFront(val) {
        this.leftQueue.push_front(val)
        this.update()
        return
    }
    // 中间插入
    pushMiddle(val) {
        if(this.leftQueue.size()>this.rightQueue.size()) {
            this.rightQueue.push_front(this.leftQueue.back())
            this.leftQueue.pop_back()
        }
        this.leftQueue.push_back(val)
        return
    }
    // 尾部插入
    pushBack() {
        this.rightQueue.push_back(val)
        this.update()
        return
    }
    // 弹出头节点
    popFront() {
        if(this.isEmpty()) return -1;
        let ret = this.leftQueue.pop_front()
        this.update()
        return ret
    }
    // 弹出中间节点
    popMiddle() {
        if(this.isEmpty()) return -1;
        let ret = this.leftQueue.pop_back()
        this.update()
        return ret
    }
    // 弹出尾部节点
    popBack() {
        if(this.isEmpty) return -1;
        let ret
        if(this.rightQueue.isEmpty()){
            ret = this.leftQueue.pop_back()
        } else {
            ret = this.rightQueue.pop_back()
        }
        this.update()
        return ret
    }
    // 判断空
    isEmpty() {
        return this.leftQueue.size()==0
    }
    // 更新左右两队列
    update() {
        if(this.leftQueue.size() < this.rightQueue.size()) {
            this.leftQueue.push_back(this.rightQueue.front())
            this.rightQueue.pop_front()
        }

        if(this.leftQueue.size() == this.rightQueue.size()+2) {
            this.rightQueue.push_front(this.leftQueue.back())
            this.leftQueue.pop_back()
        }
        return
    }
}
/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
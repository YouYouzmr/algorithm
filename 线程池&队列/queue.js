/**
 * 设计队列
 */

class Node {
    constructor(val = 1, pre = null, next = null) {
        this.val = val;
        this.pre = pre;
        this.next = next;
    }

    insert_pre(p){
        p.pre = this.pre
        p.next = this
        if(this.pre) this.pre.next = p;
        this.pre = p;
        return ;
    }

    insert_next(p) {
        p.pre = this;
        p.next = this.next;
        if(this.next) this.next.pre = p;
        this.next = p;
        return ;
    }

    delete_pre() {
        if(this.pre == null) return;
        let p = this.pre;
        this.pre = p.pre;
        if(p.pre) p.pre.next = this
        p = null; // 手动清楚缓存
        return ;
    }

    delete_next() {
        if(this.next == null) return;
        let p = this.next;
        this.next = p.next;
        if(p.next) p.next.pre = this;
        p = null;
        return ;
    }
}

class Queue {
    constructor(head=new Node(), tail=new Node()) {
        this.head = head
        this.pre = null
        this.tail = tail
        this.tail.next = null
        this.tail.pre = head
        this.cnt = 0
    }

    push_back(val) {
        this.tail.insert_pre(new Node(val))
        this.cnt += 1;
        return ;
    }

    push_front(val) {
        this.head.insert_next(new Node(val))
        this.cnt += 1;
        return ;
    }

    pop_back() {
        if(this.isEmpty()) return -1;
        let ret = this.tail.pre.val;
        this.dail.delete_pre()
        this.cnt -= 1;
        return ret;
    }

    pop_front() {
        if(this.isEmpty()) return -1;
        let ret = this.head.next.val
        this.head.delete_next();
        this.cnt -= 1;
        return ret
    }

    front() {
        return this.head.next.val
    }

    back() {
        return this.tail.pre.val
    }

    isEmpty() {
        return this.head.next == this.tail
    }

    size() {
        return this.cnt;
    }
}

class FrontMiddleBackQueeue{
    constructor(q1, q2) {
        this.q1 = q1
        this.q2 = q2;
    }

    pushFront(val) {
        this.q1.push_front(val);
        this.update();
        return;
    }

    pushMiddle(val) {
        if(this.q1.size() > this.q2.size()) {
            this.q2.push_front(this.q1.back())
            this.q1.pop_back();
        }
        this.q1.push_back(val)
        return;
    }

    pushBack(val) {
        this.q2.push_back(val)
        this.update();
        return ;
    }

    popFront() {
        if(this.isEmpty()) return -1;
        let ret = this.q1.pop_front();
        this.update();
        return ret;
    }

    popMiddle() {
        if(this.isEmpty) return -1;
        let ret = this.q1.pop_back();
        this.update();
        return ret;
    }

    popBack() {
        if(this.isEmpty) return -1;
        let ret = this.q2.pop_back();
        this.update();
        return ret;
    }

    isEmpty() {
        return this.q1.size() === 0;
    }

    update() {
        if(this.q1.size < this.q2.size()) {
            this.q1.push_back(this.q2.front())
            this.q2.pop_front()
        }

        if(this.q1.size() == this.q2.size() + 2) {
            this.q2.push_frong(this.q1.back())
            this.q1.pop_back()
        }

        return ;
    }
}

let node = new Node(1)
node.insert_next(new Node(2))

console.log(node)
let queue = new Queue()
console.log(queue)
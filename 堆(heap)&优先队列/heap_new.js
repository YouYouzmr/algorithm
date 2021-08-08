/**
 * 
 * @param push: 插入数据
 * @param pop: 弹出数据
 * @param shift_up_: 底部插入元素
 * @param shift_down_: 顶部弹出数据，底部数据补充top元素
 * @param size: 获取当前堆的大小
 * @param output: 输出当前堆
 * @param compare: 
 */

class Heap {
    constructor(compare) {
        this.data = []
        this.cnt = 0
        this.compare = compare.bind(this)
    }

    push(val) {
        this.data[this.cnt++] = val
        this.shift_up(this.cnt-1);
        return
    }

    pop() {
        if(this.size()==0) return;
        // 顶部弹出，最后一位补位
        this.swap(0, this.cnt-1);
        this.cnt -= 1;
        this.shift_down(0);
        return
    }

    shift_up(ind) {
        while(ind && this.compare(this.data[Math.floor((ind-1)/2)], this.data[ind])) {
            this.swap(Math.floor((ind-1)/2), ind)
            ind = Math.floor((ind-1)/2)
        }
    }

    shift_down(ind) {
        while(ind*2+1<this.cnt) {
            // 找到子节点最大值的索引
            let temp = ind;
            if(this.compare(this.data[temp], this.data[ind*2+1])) temp = ind*2+1;
            if(ind*2+2<this.cnt && this.compare(this.data[temp], this.data[ind*2+2])) temp = ind*2 + 2;
            // ind==temp表示当前父节点比子节点数据都大
            if(ind == temp) break; 
            this.swap(temp, ind);
            ind = temp
        }
    }

    swap(pind, ind) {
       [this.data[pind], this.data[ind]] = [this.data[ind], this.data[pind]]
       return
    }

    size() {
        return this.cnt
    }

    output() {
        let arr = [];
        for(let i=0; i<this.cnt; i++) {
            arr.push(this.data[i])
        }
        return arr.sort(this.compare)
    }

    top() {
        return this.data[0]
    }
}

window.Heap = Heap
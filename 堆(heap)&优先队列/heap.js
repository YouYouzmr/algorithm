/**
 * 大顶堆&小顶堆
 * @param type: type:1-大顶堆；2-小顶堆
 * @param push: 插入数据
 * @param pop: 弹出数据
 * @param shift_up_: 底部插入元素
 * @param shift_down_: 顶部弹出数据，底部数据补充top元素
 * @param size: 获取当前堆的大小
 * @param output: 输出当前堆
 */
class Heap {
    constructor(type) {
        this.data = []
        this.type = type
        this.cnt = 0
    }

    push(val) {
        this.data[this.cnt++] = val
        this.type==1 && this.shift_up_large(this.cnt-1);
        this.type==2 && this.shift_up_less(this.cnt-1);
        return
    }

    pop() {
        if(this.size()==0) return;
        // 顶部弹出，最后一位补位
        this.swap(0, this.cnt-1);
        this.cnt -= 1;
        this.type==1 && this.shift_down_large(0);
        this.type==2 && this.shift_down_less(0);
        return
    }

    // 大顶堆
    shift_up_large(ind) {
        while(ind && this.data[Math.floor((ind-1)/2)] < this.data[ind]) {
            this.swap(Math.floor((ind-1)/2), ind)
            ind = Math.floor((ind-1)/2)
        }
    }
    // 小顶堆
    shift_up_less(ind) {
        while(ind && this.data[Math.floor((ind-1)/2) > this.data[ind]]) {
            this.swap(Math.floor((ind-1)/2), ind)
            ind = Math.floor((ind-1)/2)
        }
    }

    shift_down_large(ind) {
        while(ind*2+1<this.cnt) {
            // 找到子节点最大值的索引
            let temp = ind;
            if(this.data[ind*2+1] > this.data[temp]) temp = ind*2+1;
            if(ind*2+2<this.cnt && this.data[ind*2+2] > this.data[temp]) temp = ind*2 + 2;
            // ind==temp表示当前父节点比子节点数据都大
            if(ind == temp) break; 
            this.swap(temp, ind);
            ind = temp
        }
    }

    shift_down_less(ind) {
        while(ind*2+1<this.cnt) {
            let temp = ind
            if(this.data[ind*2+1] < this.data[temp]) temp = ind*2+1;
            if(ind*2+2<this.cnt && this.data[ind*2+2] < this.data[temp]) temp = ind*2 + 2;
            if(ind == temp) break;
            this.swap(ind, temp);
            ind = temp;
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

        return arr
    }
}

window.Heap = Heap
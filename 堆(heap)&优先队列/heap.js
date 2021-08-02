/**
<<<<<<< HEAD
 * 初版堆设置
=======
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
 * 大顶堆&小顶堆
 * @param type: type:1-大顶堆；2-小顶堆
 * @param push: 插入数据
 * @param pop: 弹出数据
 * @param shift_up_: 底部插入元素
 * @param shift_down_: 顶部弹出数据，底部数据补充top元素
 * @param size: 获取当前堆的大小
 * @param output: 输出当前堆
 */
<<<<<<< HEAD

 if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }
=======
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
class Heap {
    constructor(type) {
        this.data = []
        this.type = type
        this.cnt = 0
    }

    push(val) {
        this.data[this.cnt++] = val
<<<<<<< HEAD
        this.shift_up(this.cnt-1);
=======
        this.type==1 && this.shift_up_large(this.cnt-1);
        this.type==2 && this.shift_up_less(this.cnt-1);
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
        return
    }

    pop() {
        if(this.size()==0) return;
        // 顶部弹出，最后一位补位
        this.swap(0, this.cnt-1);
        this.cnt -= 1;
<<<<<<< HEAD
        this.shift_down(0);
        return
    }

    shift_up(ind) {
        while(ind && this.compare(Math.floor((ind-1)/2), ind)) {
=======
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
        while(ind && this.data[Math.floor((ind-1)/2)] > this.data[ind]) {
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
            this.swap(Math.floor((ind-1)/2), ind)
            ind = Math.floor((ind-1)/2)
        }
    }

<<<<<<< HEAD
    shift_down(ind) {
        while(ind*2+1<this.cnt) {
            // 找到子节点最大值的索引
            let temp = ind;
            if(this.compare(temp, ind*2+1)) temp = ind*2+1;
            if(ind*2+2<this.cnt && this.compare(temp, ind*2+2)) temp = ind*2 + 2;
=======
    shift_down_large(ind) {
        while(ind*2+1<this.cnt) {
            // 找到子节点最大值的索引
            let temp = ind;
            if(this.data[ind*2+1] > this.data[temp]) temp = ind*2+1;
            if(ind*2+2<this.cnt && this.data[ind*2+2] > this.data[temp]) temp = ind*2 + 2;
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
            // ind==temp表示当前父节点比子节点数据都大
            if(ind == temp) break; 
            this.swap(temp, ind);
            ind = temp
        }
    }

<<<<<<< HEAD
=======
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

>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
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

    top() {
        return this.data[0]
    }
<<<<<<< HEAD

    currentTotal(i) {
        if(typeof this.data[i]==='number') {
            return this.data[i]
        }
        if(Array.isArray(this.data[i])){
            return this.data[i].reduce((a,b)=> a+b)
        }
        if(typeof this.data[i]==='string') {
            return this.data[i]-1
        }
        if(typeof this.data[i]==='object') {
            return Object.values(this.data[i]).reduce((a,b)=> a+b)
            for(let key in this.data[i]) {
                return this.data[i][key]
            }
        }
    }

    compare(i, j) {
        return this.type == 1? this.currentTotal(i) < this.currentTotal(j)
                             : this.currentTotal(i) > this.currentTotal(j)
    }
=======
>>>>>>> d0ab48af29a81deade02e2e35208d69f3a63cc7b
}

window.Heap = Heap
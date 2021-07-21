/**
 * leetcode: 剑指 Offer 40. 最小的k个数
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，
 * 则最小的4个数字是1、2、3、4。
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    let res = new Heap(1);
    for(let i=0; i<arr.length; i++){
        res.push(arr[i]);
        if(res.size()>k) res.pop()
    }
    return res.output();
};

class Heap {
    // type:1-大顶堆；2-小顶堆
    constructor(type) {
        this.data = []
        this.cnt = 0;
        this.type = type;
    }

    push(val) {
        this.data[this.cnt++] = val;
        this.shift_up(this.cnt-1)
        return
    }

    shift_up(ind) {
        if(this.type==1) {
            while(ind && this.data[Math.ceil((ind-1)/2)]<this.data[ind]) {
                [this.data[Math.ceil((ind-1)/2)], this.data[ind]] = [this.data[ind], this.data[Math.ceil((ind-1)/2)]]
                ind = Math.ceil((ind-1)/2)
            }
        } 
        if(this.type==2) {
            while(ind && this.data[Math.ceil((ind-1)/2)]>this.data[ind]) {
                [this.data[Math.ceil((ind-1)/2)], this.data[ind]] = [this.data[ind], this.data[Math.ceil((ind-1)/2)]]
                ind = Math.ceil((ind-1)/2)
            }
        }
        return;
    }

    pop(){
        if(this.size()==0) return;
        [this.data[0], this.data[this.cnt-1]] = [this.data[this.cnt-1], this.data[0]];
        // this.data[0] = this.data[this.cnt-1]
        this.cnt -= 1;
        this.shift_down(0)
    }

    shift_down(ind) {
        if(this.type==1) {
            while(ind*2+1<this.cnt) {
                let temp = ind;
                if(this.data[temp] < this.data[ind*2+1]) temp = ind*2+1;
                if(ind*2+2<this.cnt && this.data[temp] < this.data[ind*2+2]) temp = ind*2+2;
                if(temp==ind) break;
                [this.data[temp], this.data[ind]] = [this.data[ind], this.data[temp]];
                ind = temp;
            }
        }
        if(this.type==2) {
            while(ind*2+1<this.cnt) {
                let temp = ind;
                if(this.data[temp] > this.data[ind*2+1]) temp = ind * 2 + 1;
                if(ind*2+2<this.cnt && this.data[temp] > this.data[ind*2+2]) temp = ind*2+2;
                if(temp==ind) break;
                [this.data[temp], this.data[ind]] = [this.data[ind], this.data[temp]];
                ind = temp;
            }
        }
    }

    size() {
        return this.cnt;
    }

    output() {
        let arr = [];
        for(let i=0; i<this.cnt; i++) {
            arr.push(this.data[i])
        }
        return arr
    }
}
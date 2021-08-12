/**
 * leetcode: 1202.交换字符串中的元素
 * 
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，
 * 其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
 * 
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。
 * 
 * 提示：
 * 1. 1 <= s.length <= 10^5
 * 2. 0 <= pairs.length <= 10^5
 * 3. 0 <= pairs[i][0], pairs[i][1] < s.length
 * 4. s 中只含有小写英文字母
 * 
 */

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
/**
 * 如果连通，则集合中的字符可以随意交换
 * 分组进行排序
 */
var smallestStringWithSwaps = function(s, pairs) {
    let n = s.length;
    let union = new UnionSet(n)

    // 联通索引
    for(let i=0; i<pairs.length; i++) {
        let [a, b] = pairs[i]
        union.merge(a, b)
    }

    // 创建一个小顶堆
    let heap = []
    for(let i=0; i<n; i++) {
        let smallHeap = new Heap(CMP)
        heap.push(smallHeap)
    }
    for(let i=0; i<n; i++) {
        heap[union.get(i)].push(s[i])
    }

    // 循环遍历
    let ret = ""
    for(let i=0; i<n; i++) {
        ret += heap[union.get(i)].pop()
    }
    return ret
};

function CMP(a, b) {
    return a.charCodeAt() > b.charCodeAt()
}


class UnionSet {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        this.boss[this.get(a)] = this.get(b)
        return
    }
}

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
        let ret = this.data[0]
        this.swap(0, this.cnt-1);
        this.cnt -= 1;
        this.shift_down(0);
        return ret
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

let s = "dcab", pairs = [[0,3],[1,2]];
console.log(smallestStringWithSwaps(s, pairs))
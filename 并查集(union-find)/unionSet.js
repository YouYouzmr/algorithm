// 并查集模板
class UnionSet {
    constructor (n) {
        this.boss = Array(n+1).map((val, index)=> index)
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        this.boss[this.get(a)] = this.get(b)
        return
    }
}

// 记录每个集合的总数
class UnionSetCnt {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
        this.cnt = Array(n+1).fill(1)
    }

    get(x) {
        return this.boss[x] = (this.boss[x]===x? x: this.get(this.boss[x]))
    }

    merge(a, b) {
        if(this.get(a)== this.get(b)) return
        this.cnt[this.get(b)] += this.cnt[this.get(a)]
        this.boss[this.get(a)] = this.get(b)
        return
    }
}
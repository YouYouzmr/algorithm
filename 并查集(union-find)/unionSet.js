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
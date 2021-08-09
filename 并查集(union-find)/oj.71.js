/**
 * oj：71 朋友圈
 * 题目描述: 
 *  所谓一个朋友圈子，不一定其中的人都互相直接认识。
 *  例如：小张的朋友是小李，小李的朋友是小王，那么他们三个人属于一个朋友圈。
 * 
 *  现在给出一些人的朋友关系，人按照从 1 到 n 编号在这中间会进行询问某两个人是否属于一个朋友圈，请你编写程序，实现这个过程。
 * 
 * 输入：
 *  第一行输入两个整数 n,m(1≤n≤10000，3≤m≤100000)，分别代表人数和操作数。
 *  接下来 m 行，每行三个整 a,b,c（a∈[1,2], 1≤b,c≤n）
 *   1、当 a=1 时，代表新增一条已知信息，b,c 是朋友
 *   2、当 a=2 时，代表根据以上信息，询问 b,c 是否是朋友
 * 
 * 输出：
 *  对于每个 a=2 的操作，输出『Yes』或『No』代表询问的两个人是否是朋友关系。
 * 
 * 来源：Online Judge
 * 链接：http://oj.haizeix.com/
 */
class FriendMoment {
    constructor (n) {
        this.boss = Array(n+1)
        for(let i=0; i<=n; i++) {
            this.boss[i] = i
        }
        console.log(this.boss)
        this.size = Array(n+1).fill(1)
    }

    setRelate(a, b, c) {
        if(a==1) {
            this.merge(b, c)
        } else {
            return this.find(b)==this.find(c)? 'Yes' : "No"
        }
    }

    find(x) {
        if(this.boss[x]===x) return x;
        return this.find(this.boss[x])
    }

    merge(a, b) {
        let fa = this.find(a), fb = this.find(b);
        if(fa == fb) return;
        if(this.size[fa] < this.size[fb]) {
            this.boss[fa] = fb;
            this.size[fb] += this.size[fa]
        } else {
            this.boss[fb] = fa;
            this.size[fa] += this.size[fb]
        }
        return
    }
}

let n = 6
let friends = new FriendMoment(6)

friends.setRelate(1, 1, 2)
friends.setRelate(2, 1, 3)
friends.setRelate(1, 2, 4)
friends.setRelate(1, 4, 3)
friends.setRelate(2, 1, 3)
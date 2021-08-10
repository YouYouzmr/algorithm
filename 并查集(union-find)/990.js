/**
 * leetcode: 990. 等式方程的可满足性
 * 
 * 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，
 * 并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
 * 
 * 
 * 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 
 * 
 * 提示：
 *  1、1 <= equations.length <= 500
 *  2、equations[i].length == 4
 *  3、equations[i][0] 和 equations[i][3] 是小写字母
 *  4、equations[i][1] 要么是 '='，要么是 '!'
 *  5、equations[i][2] 是 '='
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/satisfiability-of-equality-equations
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let union = new UnionSet(26)
    for(let i=0; i<equations.length; i++) {
        if(equations[i][1] === '!') continue;
        // 维护相等元素到一个集合中
        let a = equations[i][0].charCodeAt() - 'a'.charCodeAt();
        let b = equations[i][3].charCodeAt() - 'a'.charCodeAt();
        union.merge(a, b)
    }

    for(let i=0; i<equations.length; i++) {
        if(equations[i][1] === '=') continue;
        let a = equations[i][0].charCodeAt() - 'a'.charCodeAt();
        let b = equations[i][3].charCodeAt() - 'a'.charCodeAt();
        if(union.get(a) === union.get(b)) return false
    }

    return true
};


let result = ["c==c","f!=a","f==b","b==c"]
console.log(equationsPossible(result))
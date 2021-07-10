/**
 * 227. 基本计算器 II
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 *  3+ 2*2
 * (3+(2*2))
 * (3 (2 2))
 * ( +( * ))
*/
var calculate = function(s) {
    let num = []
    let ops = []
    s += '@';  // 特殊处理循环结束后计算
    for(let i=0, n = 0; i<s.length; i++) {
        if(s[i]==' ') continue;
        if(level(s[i])==0) { // 判断是数字
            n = n * 10 + (s[i]-0)
            continue
        } 
        num.push(n)
        n = 0
        console.log(num, ops, s[i])
        while(ops.length && level(s[i])<=level(ops[ops.length-1])) {
            let a = num.pop(); // 运算符后的数字
            let b = num.pop(); // 运算符前的数字
            num.push(calc(b,ops[ops.length-1], a))
            ops.pop()
        }
        ops.push(s[i])
    }
    return num.pop()
};

function level(c) {
    switch(c) {
        case '@': return -1;
        case '+':
        case "-": return 1;
        case '*':
        case '/': return 2;
    }
    return 0;
}
function calc(a, o, b) {
    switch(o) {
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return Math.floor(a/b);
    }
    return 0
}

let str = " 3+5 / 2 "
console.log(calculate(str))
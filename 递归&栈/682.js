/**
 * leetcode: 682. 棒球比赛
 * https://leetcode-cn.com/problems/baseball-game/
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = Array(0)
    for(let i=0; i<ops.length; i++) {
        if(ops[i]=='+') { //  前两次得分总和
            let a = stack.pop(), b = stack.pop()
            stack.push(b)
            stack.push(a)
            stack.push(a+b)
        } else if(ops[i]=='D'){ // 前一次的得分总和2背
            let a = stack.pop()
            stack.push(a)
            stack.push(2*a)
        } else if(ops[i]=='C') { // 无效分数
            stack.pop()
        } else {
            stack.push(ops[i]-0)
        }
    }

    return stack.reduce((a,b)=> a+b)
};
/**
 * leetcode: 946. 验证栈序列
 * 
 * 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/validate-stack-sequences
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 
 * popped 第一个元素
 *   当前栈顶元素 ｜ 未来有可能入栈的元素
 */
var validateStackSequences = function(pushed, popped) {
    let stack = Array(0)
    for(let i=0, j=0; i<popped.length; i++) {
        while(j<popped.length && (stack.length==0 || stack[stack.length-1]!=popped[i])) {
            stack.push(pushed[j])
            j++
        }

        if(stack[stack.length-1] != popped[i]) return false
        stack.pop()
    }

    return true
};
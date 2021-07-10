/**
 * leetcode: 比较含退格的字符串
 * https://leetcode-cn.com/problems/backspace-string-compare/
 * 
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，
 * 判断二者是否相等，并返回结果。 # 代表退格字符。
 *
 * 注意：如果对空文本输入退格字符，文本继续为空。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let stack1 = initString(s)
    let stack2 = initString(t)
    
    if(stack1.length!==stack2.length) return false
    
    while(stack1.length) {
        if(stack1[stack1.length-1] != stack2[stack2.length-1]) {
            return false
        } else {
            stack1.pop()
            stack2.pop()
        }
    }

    return true
};

var initString = function(s) {
    let arr = Array(0)
    for(let i=0; i<s.length; i++) {
        if(s[i]=='#') {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    return arr
}
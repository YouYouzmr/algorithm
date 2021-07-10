/**
 * 1021. 删除最外层的括号
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ret = ''
    // pre: 第一个外括号索引
    // cnt: 记录栈顶位置，0表示是完整的一个包含关系
    for(let i=0, pre=0, cnt=0; i<s.length; i++) {
        if(s[i]=='(') cnt += 1;
        else cnt -= 1;
        if(cnt != 0) continue
        // 截取符合位置的数据
        ret += s.slice(pre+1, i)
        pre = i+1
    }
    return ret;
};

/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    let res = "";
    // 记录左括号数量
    let opened = 0;
    for(let val of S){
        // opened>0 有一个左括号
        // 新找到的左括号，不是最外层的括号，就拼接起来，左括号数量进行+1
        if(val === "(" && opened++ > 0) res += val;
        
        // opened>1 有两个及以上的左括号
        // 新找到的右括号，不是最外层的括号，就拼接起来，左括号数量-1
        if(val === ")" && opened-- > 1) res += val
    }
    return res
};
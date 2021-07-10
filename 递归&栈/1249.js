/**
 * leetcode: 1249. 移除无效的括号
 */
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let t = ''
    // 第一遍处理左括号
    for(let i=0, cnt=0; i<s.length; i++) {
        if(s[i]=='(' || s[i]!=')') {
            s[i]=='(' && cnt ++
            t += s[i]
        } else {
            if(cnt==0) continue;
            cnt--
            t += s[i]
        }
    }
    s = []
    // 第二遍处理右括号
    for(let i=t.length-1, cnt=0; i>=0; i--) {
        if(t[i]!='(' || t[i]==')') {
            t[i]==')' && cnt ++
            s.unshift(t[i])
        } else {
            if(cnt==0) continue;
            cnt--
            s.unshift(t[i])
        }
    }

    return s.join('')
};

var minRemoveToMakeValid = function(s) {
    // 记录左右括号多余为索引位置
    let arr = []
    let result = []
    for(let i=0; i<s.length; i++) {
        if(s[i]==='(') {
            arr.push(i)
        }else if(arr[i]===')') {
            // 右括号没有匹配到需要删除
            if(arr.length==0) result.push(i)
            arr.pop()
        }
    }
    const res = [...s],
    filter = arr.concat(result)
    for(let i=0; i<filter.length; i++) {
        res[filter[i]] = ''
    }

    return res.join('')
}
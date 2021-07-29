/**
 * leetcode: 10. 正则表达式匹配
 * 
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *     '.' 匹配任意单个字符
 *     '*' 匹配零个或多个前面的那一个元素
 * 
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/**
 * 思路：
 *   每次从字符串p中
 */

var isMatch = function(s, p) {
    if(p==='' && s) return false
    if(isAllStar(p) || s===p) return true

    let sLen = s.length
    let pLen = p.length

    let arr = Array.from(Array(sLen+1), ()=> Array(pLen+1).fill(false))
    arr[0][0] = true
    for(let i=0; i<p.length; i++) {
        if(!arr[0][i-1]) break;
        if(p[i-1]==='*') arr[0][i] = true
    }

    for(let i=1; i<=sLen; i++) {
        for(let j=1; i<=pLen; j++) {
            if(p[j-1]==='.' || p[j-1]===s[i]) {
                arr[i][j] = true
            } else if(p[j-1]==="*") {
                arr[i][j] = arr[i-1][j] || arr[i][j-1]
            }
        }
    }

    return arr[sLen][pLen]
};


function isAllStar(p) {
    for(let i=0; i<p.length; i++) {
        if(p[i]!='*') {
            return false
        }
    }
    return true
}
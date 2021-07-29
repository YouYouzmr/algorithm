/**
 * leetcode: 44. 通配符匹配
 * 
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *     '?' 可以匹配任何单个字符。
 *     '*' 可以匹配任意字符串（包括空字符串）
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *
 */

 
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p==='' && s) return false
    if(isAllStar(p) || s===p) return true

    let dp = Array.from(Array(s.length+1), ()=> Array(p.length+1).fill(false))
    dp[0][0] = true
    for(let i=1; i<p.length; i++) {
        if(!dp[0][i-1]) break;
        if(p[i-1]==="*") dp[0][i] = true
    }

    for(let i=1; i<=s.length; i++) {
        for(let j=1; j<=p.length; j++) {
            if(s[i-1]===p[j-1] || p[j-1]==="?") {
                dp[i][j] = dp[i-1][j-1]
            } else if(p[j-1] === '*'){
                dp[i][j] = dp[i-1][j] || dp[i][j-1]
            }
        }
    }

    return dp[s.length][p.length]
};

function isAllStar(p) {
    for(let i=0; i<p.length; i++) {
        if(p[i]!='*') {
            return false
        }
    }
    return true
}

let s = "abcabczzzde"
let p = "*abc???de*"
console.log(isMatch(s, p))
/**
 * leetcode: 10. 正则表达式匹配
 * 
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *     '.' 匹配任意单个字符
 *     '*' 匹配零个或多个前面的那一个元素
 * 
 * 所谓匹配，是要涵盖 整个 字符串s的，而不是部分字符串。
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

var isMatch = function (s, p) {
    let sLen = s.length
    let pLen = p.length

    let arr = Array.from(Array(sLen+1), () => Array(pLen+1).fill(false))
    arr[0][0] = true

    for(let i=0; i<sLen+1; i++) {
        for(let j=1; j<pLen+1; j++) {
            if(p[j-1]==='*') {
                arr[i][j] = arr[i][j-2]
                if(i>0 && p[j-2]==='.' || s[i-1]===p[j-2]) {
                    arr[i][j] = arr[i][j] || arr[i-1][j]
                }
            } else {
                if(i>0 && p[j-1]==='.' || s[i-1]===p[j-1]) {
                    arr[i][j] = arr[i-1][j-1]
                }
            }
        }
    }

    let el = document.getElementById('box')
    for(let i=0; i<arr.length; i++) {
        el.innerHTML += arr[i].map(val=> `<td class="${val? 'red': ''}">${val}</td>`).join('')
        
    }
    return arr[sLen][pLen]
};



let s = "aasdfasdfasdfasdfas"
let p = "aasdf.*asdf.*asdf.*asdf.*s"
console.log(isMatch(s, p))
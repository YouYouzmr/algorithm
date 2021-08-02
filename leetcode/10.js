/**
 * leetcode: 10. 正则表达式匹配
 * 
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *     '.' 匹配任意单个字符
 *     '*' 匹配零个或多个前面的那一个元素
 * 
 * 所谓匹配，是要涵盖 整个 字符串s的，而不是部分字符串。

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/regular-expression-matching
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/**
 * 一、思路：
 *     每次从p中取出一个字符或者【字符+星号】，在s中进行匹配；
 *     对于p 中一个字符，s中匹配一个字符
 *     对于p 中【字符+星号】，可以在s中匹配任意自然数个字符，不具有唯一性
 * 
 * ---------------------------------------------------------------------
 * 二、分析：
 * 使用f[i][j]表示s的前i个字符与p中前j个字符是否能够匹配
 *     1、如果p中第j个字符，必须在s中匹配相同的字符
 *        f[i][j] = f[i-1][j-1], s[i]=p[j]
 *                  false ,      s[i]!=p[j]
 * 
 *     2、如果p中第j个字符是*号，可以对p中第【j-1】个字符匹配任意自然数次
 *        匹配零次： f[i][j] = f[i][j-2] 
 *        匹配1、2、3，...次：
 *                  f[i][j] = f[i-1][j-2],   s[i]=p[j-1]
 *                  f[i][j] = f[i-2][j-2],   s[i-1]=p[j-2]
 *                  f[i][j] = f[i-3][j-2],   s[i-2]=p[j-3]
 *                  ....
 * 
 * ----------------------------------------------------------------------
 * 三、方法转移：
 *     1、匹配s末尾的一个字符，将改字符扔掉，该组合可以继续径杏匹配
 *     2、不匹配字符，将该字符扔掉，不在进行匹配
 * 
 * 由上分析：
 *     f[i][j] = f[i-1][j] or f[i][j-2],  s[i] = p[j-1]
 *               f[i][j-2]             ,  s[i]!= p[j-1]
 * 
 *     在任务情况下， 只要p[j]=".", 则p[j]一定可以匹配s中任意一个字符
 * 
 * ---------------------------------------------------------------------
 * 四、结果：
 *                                    _ f[i-1][j-1],   // s[i]==p[j]
 *                                   |
 *                 _ if(p[j]!="*") = |_ false          // else
 *                |
 *      f[i][j] = |          _ f[i-1][j] or f[i][j-2]  // s[i]==p[j-1]
 *                |_ else = |
 *                          |_ f[i][j-2]               // else
 * 
 * --------------------------------------------------------------------
 * 五、注意：
 *     动态规划边界条件为 f[0][0] = true, 即两个空字符串是匹配的
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
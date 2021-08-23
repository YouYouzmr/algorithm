/**
 * leetcode: 394. 字符串解码
 * 
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 示例 1：
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let ret = ''
    let i = 0;
    while(s[i]) {
        if(s[i] < '0' || s[i] > '9') {
            ret += s[i]
            i++;
        } else {
            let num = 0
            // 数字
            while(s[i] >= "0" && s[i] <= '9') [
                num = num * 10 + (s[i++] - 0)
            ]
            i++;
            let l = i, r = i, cnt = 1;
            while(cnt) {
                r += 1;
                if(s[r] == '[') cnt++;
                else if(s[r] == ']') cnt --;
            }

            let tmp = decodeString(s.substr(l, r-l))
            while(num--) ret += tmp;
            i = r + 1;
        } 
    }
    return ret
};

let str = "3[a2[c]]"
decodeString(str)
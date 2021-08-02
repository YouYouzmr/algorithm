/**
 * leetcode: 17. 电话号码的字母组合
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let json = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let result = []
    for(let i=0; i<digits.length; i++) {
        let val = json[digits[i]]
        if(!val) continue;

        if(result.length == 0) result = val
        else {
            result = result.map(v=> {
                return val.map(item=> v+item)
            }).flat()
        }
    }

    return result
};

let digits = ''
console.log(letterCombinations(digits))
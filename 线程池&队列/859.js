/**
 * 859. 亲密字符串
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

 * 交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。
 * 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/buddy-strings
 *  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
    // a b 长度不相等，一定不是
    if(a.length != b.length) return false
    // 如果a、b相等有重复项则是，否则不是
    if(a === b) return has_repeate(a)

    let i = 0, j=0;
    // 查找第一个不相等的位置
    while(a[i]==b[i]) i++
    // 查找第二个不相等的位置
    j = i+1
    while(j<a.length && a[j]==b[j]) j++
    // 查找到最后一项，没找到返回false
    if(j==a.length) return false
    // 查到不等位置，对应值不相等
    if(a[i]!=b[j] || a[j]!=b[i]) return false

    // 找到前边两个不等位置可以互换位置，继续遍历
    j += 1
    while(j<a.length) {
        // 如果剩余项不等则返回false
        if(a[j]!=b[j]) return false
        j += 1
    }
    return true
};
// 判断是否有重复项
var hasRepeate = function(a) {
    let json = {}
    for(let i=0; i<a.length; i++) {
        if(json[a.charAt(i)]) {
            return true
        } else {
            json[a.charAt(i)] = 1
        }
    }

    return false
}
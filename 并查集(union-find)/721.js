/**
 * leetcode: 721. 账户合并
 * 
 * 给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，
 * 其中第一个元素 accounts[i][0] 是 名称 (name)，
 * 其余元素是 emails 表示该账户的邮箱地址。
 * 
 * 现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。
 * 请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。
 * 一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。
 * 
 * 合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，
 * 其余元素是 按字符 ASCII 顺序排列 的邮箱地址。账户本身可以以 任意顺序 返回。
 * 
 * 1 <= accounts.length <= 1000
 * 2 <= accounts[i].length <= 10
 * 1 <= accounts[i][j] <= 30
 * accounts[i][0] 由英文字母组成
 * accounts[i][j] (for j > 0) 是有效的邮箱地址
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    // 邮箱+坐标
    let emailIndexMap = new Map()
    // 邮箱+名称
    let emailNameMap = new Map()
    // 初始化联通分量
    let emailCount = 0
    // 遍历账户存储邮箱index, 以及账户名称
    for(const account of accounts) {
        const name = account[0]
        const size = account.length
        for(let i=1; i<size; i++) {
            const email = account[i]
            if(!emailIndexMap.has(email)) {
                emailIndexMap.set(email, emailCount++)
                emailNameMap.set(email, name)
            }
        }
    }

    const union = new UnionSet(emailCount)
    // 同一人的账户进行合并
    for(const account of accounts) {
        const firstEmail = account[1]
        const firstIndex = emailIndexMap.get(firstEmail)
        const size = account.length
        for(let i=2; i<size; i++) {
            const nextEmail = account[i]
            const nextIndex = emailIndexMap.get(nextEmail)
            union.merge(firstIndex, nextIndex)
        }
    }

    // 合并相同集合对应的邮箱
    let indexEmailMap = new Map()
    for(const email of emailIndexMap.keys()) {
        const index = union.get(emailIndexMap.get(email))
        const emails = indexEmailMap.get(index)? indexEmailMap.get(index): []
        emails.push(email)
        indexEmailMap.set(index, account)
    }

    const result = []
    for(const emails of indexEmailMap.values()) {
        emails.sort()
        const name = emailNameMap.get(emails[0])
        const account = []
        account.push(name)
        account.push(...emails)
        result.push(account)
    }

    return result
};
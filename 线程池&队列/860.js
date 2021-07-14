/**
 * 860. 柠檬水找零
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。
 * 你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 
 * 注意，一开始你手头没有任何零钱。
 * 
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 * 
 * https://leetcode-cn.com/problems/lemonade-change/
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) { let cnt5 =0, cnt10 =0;
    for(let i=0; i<bills.length; i++) {
        switch(bills[i]) {
            case 5:
                cnt5 += 1
                break;
            case 10:
                if(cnt5 === 0) return false
                cnt5 -= 1
                cnt10 +=1
                break
            case 20:
                if(cnt10 && cnt5) {
                    cnt10 -= 1
                    cnt5 -= 1
                } else if(cnt5>2) {
                    cnt5 -= 3
                } else {
                    return false
                }
                break
        }
    }

    return true
};
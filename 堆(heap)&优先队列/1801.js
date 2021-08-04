/**
 * leetcode: 1801. 积压订单中的订单总数
 * 
 * 给你一个二维整数数组 orders ，其中每个 orders[i] = [pricei, amounti, orderTypei] 
 * 表示有 amounti 笔类型为 orderTypei 、价格为 pricei 的订单。
 * 
 * 订单类型 orderTypei 可以分为两种：
 *   0 - 一批采购订单 buy
 *   1 - 一批销售订单 sell
 */

/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    let buy  = new Heap(CMP1)
    let sell = new Heap(CMP2)

    for(let i=0; i<orders.length; i++) {
        let val = orders[i]
        if(val[2]==0) { // buy
            while(val[1] != 0 && sell.size() && sell.top()[0] <= val[0]) {
                let cnt = Math.min(val[1], sell.top()[1])
                val[1] -= cnt
                sell.top()[1] -= cnt
                if(sell.top()[1]==0) sell.pop()
            }

            val[1] > 0 && buy.push(val)
        } else { // sell
            while(val[1] !=0 && buy.size() && buy.top()[0] >= val[0]) {
                let cnt = Math.min(val[1], buy.top()[1])
                val[1] -= cnt
                buy.top()[1] -= cnt
                if(buy.top()[1]==0) buy.pop()
            }

            val[1] > 0 && sell.push(val)
        }
    }
    let res = 0
    let mod = 1000000007
    for(let i=0; i<buy.size(); i++) {
        res = (res + buy.data[i][1]) % mod
    }
    for(let i=0; i<sell.size(); i++) {
        res = (res + sell.data[i][1]) % mod
    }
    return res
};

function CMP1(a, b) {
    return a[0] < b[0]
}

function CMP2(a, b) {
    return a[0] > b[0]
}

let orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]
console.log(getNumberOfBacklogOrders(orders))
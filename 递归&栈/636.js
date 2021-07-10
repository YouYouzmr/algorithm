/**
 * 636. 函数的独占时间
 */

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let stack = Array(n).fill(0)
    let ids = []
    for(let i=0, pre=0; i<logs.length; i++) {
        let val = logs[i].split(':')
        let id = Number(val[0])
        let status = val[1]
        let time = Number(val[2])
        // 简化
        if(!ids.length) {
            stack[ids[ids.length-1]] += time-pre + (status=='end')
        }
        pre = time + (status=='end')
        if(status=='start') ids.push(id)
        else ids.pop()

        // if(status=='start') {
            // if(!ids.length) {
            //     stack[ids[ids.length-1]] += time-pre
            // }
        //     pre = time
        //     ids.push(id)
        // } else {
            //  stack[id] += time-pre + 1
        //     // 给当前任务赋值
        //     pre = time + 1
        //     ids.pop()
        // }
    }
    return stack
};

let n = 1
let logs = ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"]
exclusiveTime(n, logs)
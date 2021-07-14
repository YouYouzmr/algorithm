/**
 * leetcode: 621. 任务调度器
 *  https://leetcode-cn.com/problems/task-scheduler/
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let contJSON = {}
    // _.countBy(tasks)
    for(let i=0; i<tasks.length; i++) {
        let val = tasks[i]
        if(contJSON[val]) {
            contJSON[val] += 1
        } else {
            contJSON[val] = 1
        }
    }
    // 获取执行次数最多的任务
    const maxTask = Math.max(...Object.values(contJSON))
    // 获取出现等于最多次，一共有几个任务的数量
    let max = 0
    Object.values(contJSON).forEach(v=> {
        if(v===maxTask) {
            max++
        }
    })
    // 计算面积法求出最短时间
    return Math.max((maxTask-1) * (n+1) + max, tasks.length)
};
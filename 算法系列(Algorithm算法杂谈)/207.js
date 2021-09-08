/**
 * leetcode: 207. 课程表 (拓扑排序)
 * 
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites
 * 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则
 * 必须 先学习课程  bi 。
 * 
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 * 
 * 提示：
 *  1 <= numCourses <= 105
 *  0 <= prerequisites.length <= 5000
 *  prerequisites[i].length == 2
 *  0 <= ai, bi < numCourses
 *  prerequisites[i] 中的所有课程对 互不相同
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * 出现闭环：不可以
 */
var canFinish = function(numCourses, prerequisites) {
    // 统计每个节点的入度
    let indeg = new Array(numCourses).fill(0);
    // 每一个点指向其他节点的集合
    let g = new Array();
    // 入度为0的节点，入队
    let queue = [];

    for(let x of prerequisites) {
        // x[1] -> x[0]
        indeg[x[0]] += 1;
        if(!g[x[1]]) g[x[1]] = []
        g[x[1]].push(x[0]);
    }

    for(let i = 0; i < numCourses; i++) {
        if(indeg[i] === 0) queue.push(i)
    }
    
    let cnt = 0;
    while(queue.length) {
        let ind = queue[0];
        queue.shift()
        cnt += 1;
        if(g[ind]) {
            for(let to of g[ind]) {
                indeg[to] -= 1;
                if(indeg[to] === 0) queue.push(to)
            }
        }
    }
    
    return cnt === numCourses
};

let k = 5;
let prerequisites = [[1, 0], [1, 2], [3, 1], [4, 1]]
canFinish(k, prerequisites)
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
var canFinish = function(numCourses, prerequisites) {
    let courseMap = new Map();
    for(let i = 0; i < prerequisites.length; i++) {
        let [a, b] = prerequisites[i]
        if(courseMap.has(b) && courseMap.get(b).includes(a)) {

        }
    }
};
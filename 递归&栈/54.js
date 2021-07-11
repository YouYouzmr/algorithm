/**
 * leetcode: 54. 螺旋矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // m行n列矩阵
    let m = matrix.length;
    let n = matrix[0].length;
    let res = []
    let total = m*n
    // l记录圈数, i横坐标，j纵坐标
    for(let i=0, j=0, l=1; res.length<total; l++) {
        i=l-1, j=l-1
        res.push(matrix[i][j])
        // 遍历上边
        while(res.length<total && j+1<=n-l) {
            j++
            res.push(matrix[i][j])
        }
        // 遍历右边
        while(res.length<total && i+1<=m-l) {
            i++
            res.push(matrix[i][j])
        }
        // 遍历底边
        while(res.length<total && j-1>=l-1) {
            j--
            res.push(matrix[i][j])
        }
        // 遍历左边
        while(res.length<total && i-1>l-1) {
            i--
            res.push(matrix[i][j])
        }
    }
    return res
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
spiralOrder(matrix)
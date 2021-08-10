/**
 * leetcode: 200. 岛屿数量
 * 
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length
    let m = grid[0].length
    // 二维坐标转成一维编号
    let union = new UnionSet(n*m)
    var ind = function(i, j) {
        return i * m + j + 1
    }
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(grid[i][j]==='0') continue;
            if(i>0 && grid[i-1][j] === '1') union.merge(ind(i, j), ind(i-1, j))
            if(j>0 && grid[i][j-1] === '1') union.merge(ind(i, j), ind(i, j-1))
        }
    }
    
    let ans = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            // 统计岛屿的数量过滤水的集合
            if(grid[i][j]==='1' && union.get(ind(i, j))== ind(i, j)) ans+= 1
        }
    }

    return ans
};